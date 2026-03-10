import { useRef, useEffect } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 v_texcoord;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    v_texcoord = uv;
}
`;

const fragmentShader = `
varying vec2 v_texcoord;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform sampler2D u_textMask;
uniform float u_circleSize;
uniform float u_circleEdge;

vec2 coord(in vec2 p) {
    p = p / u_resolution.xy;
    if (u_resolution.x > u_resolution.y) {
        p.x *= u_resolution.x / u_resolution.y;
        p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
    } else {
        p.y *= u_resolution.y / u_resolution.x;
        p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
    }
    p -= 0.5;
    p *= vec2(-1.0, 1.0);
    return p;
}

#define st0 coord(gl_FragCoord.xy)
#define mx coord(u_mouse * u_pixelRatio)

float sdCircle(in vec2 st, in vec2 center) {
    return length(st - center) * 2.0;
}
float fill(float x, float size, float edge) {
    return 1.0 - smoothstep(size - edge, size + edge, x);
}

vec4 blur(sampler2D tex, vec2 uv, float amount) {
    vec4 color = vec4(0.0);
    float total = 0.0;
    float radius = amount * 0.01;
    for(float x = -4.0; x <= 4.0; x += 1.0) {
        for(float y = -4.0; y <= 4.0; y += 1.0) {
            color += texture2D(tex, uv + vec2(x, y) * radius);
            total += 1.0;
        }
    }
    return color / total;
}

void main() {
    vec2 st = st0 + 0.5;
    vec2 posMouse = mx * vec2(1., -1.) + 0.5;
    vec2 uv = v_texcoord;
    
    float sdfCircle = fill(sdCircle(st, posMouse), u_circleSize, u_circleEdge);
    
    vec4 textColor = texture2D(u_textMask, uv);
    vec4 blurredText = blur(u_textMask, uv, sdfCircle * 2.0);
    
    vec4 finalColor = mix(textColor, blurredText, sdfCircle);
    
    gl_FragColor = finalColor;
}
`;

const ShapeBlur = ({ className = "", circleSize = 0.25, circleEdge = 1.0 }) => {
  const mountRef = useRef();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let animationFrameId,
      time = 0,
      lastTime = 0;
    const vMouse = new THREE.Vector2(),
      vMouseDamp = new THREE.Vector2(),
      vResolution = new THREE.Vector2();
    let w = 1,
      h = 1;
    const scene = new THREE.Scene(),
      camera = new THREE.OrthographicCamera();
    camera.position.z = 1;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");
    canvas.width = 2048;
    canvas.height = 1024;
    ctx.fillStyle = "white";
    ctx.font = "bold 240px Hellishy, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("MAI", canvas.width / 2, canvas.height / 2 - 220);
    ctx.font = "bold 320px Hellishy, serif";
    ctx.fillText("CRESPO", canvas.width / 2, canvas.height / 2 + 150);
    const textMask = new THREE.CanvasTexture(canvas);
    textMask.minFilter = THREE.LinearFilter;
    textMask.magFilter = THREE.LinearFilter;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_mouse: { value: vMouseDamp },
        u_resolution: { value: vResolution },
        u_pixelRatio: { value: 2 },
        u_textMask: { value: textMask },
        u_circleSize: { value: circleSize },
        u_circleEdge: { value: circleEdge },
      },
      transparent: true,
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
    scene.add(quad);

    const onPointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      vMouse.set(e.clientX - rect.left, e.clientY - rect.top);
    };
    document.addEventListener("mousemove", onPointerMove);
    const resize = () => {
      w = mount.clientWidth;
      h = mount.clientHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);
      renderer.setSize(w, h);
      renderer.setPixelRatio(dpr);
      camera.left = -w / 2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();
      quad.scale.set(w, h, 1);
      vResolution.set(w, h).multiplyScalar(dpr);
      material.uniforms.u_pixelRatio.value = dpr;
    };
    resize();
    window.addEventListener("resize", resize);
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    const update = () => {
      time = performance.now() * 0.001;
      const dt = time - lastTime;
      lastTime = time;
      vMouseDamp.x = THREE.MathUtils.damp(vMouseDamp.x, vMouse.x, 8, dt);
      vMouseDamp.y = THREE.MathUtils.damp(vMouseDamp.y, vMouse.y, 8, dt);
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(update);
    };
    update();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      ro.disconnect();
      document.removeEventListener("mousemove", onPointerMove);
      if (mount.contains(renderer.domElement))
        mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [circleSize, circleEdge]);

  return (
    <div
      className={className}
      ref={mountRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ShapeBlur;
