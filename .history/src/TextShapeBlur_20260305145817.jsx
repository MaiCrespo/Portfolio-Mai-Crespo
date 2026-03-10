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
uniform sampler2D u_textTexture;
uniform float u_circleSize;
uniform float u_circleEdge;

#define PI 3.1415926535897932384626433832795

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

float sdCircle(in vec2 st, in vec2 center) {
    return length(st - center) * 2.0;
}

float fill(float x, float size, float edge) {
    return 1.0 - smoothstep(size - edge, size + edge, x);
}

// Blur function
vec4 blur(sampler2D tex, vec2 uv, float amount) {
    vec4 color = vec4(0.0);
    float total = 0.0;
    float radius = amount * 0.01;
    
    for(float x = -4.0; x <= 4.0; x += 1.0) {
        for(float y = -4.0; y <= 4.0; y += 1.0) {
            vec2 offset = vec2(x, y) * radius;
            color += texture2D(tex, uv + offset);
            total += 1.0;
        }
    }
    
    return color / total;
}

void main() {
    vec2 st = coord(gl_FragCoord.xy) + 0.5;
    vec2 posMouse = coord(u_mouse * u_pixelRatio) * vec2(1., -1.) + 0.5;
    
    // Calculate distance from mouse
    float dist = sdCircle(st, posMouse);
    float circleMask = fill(dist, u_circleSize, u_circleEdge);
    
    // Sample text texture
    vec2 uv = v_texcoord;
    vec4 sharpText = texture2D(u_textTexture, uv);
    vec4 blurredText = blur(u_textTexture, uv, 1.0 - circleMask);
    
    // Mix based on circle mask
    vec4 finalText = mix(blurredText, sharpText, circleMask);
    
    gl_FragColor = finalText;
}
`;

const TextShapeBlur = ({
  text = "MAI\nCRESPO",
  className = "",
  circleSize = 0.25,
  circleEdge = 1.0,
}) => {
  const mountRef = useRef();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animationFrameId;
    let time = 0,
      lastTime = 0;

    const vMouse = new THREE.Vector2();
    const vMouseDamp = new THREE.Vector2();
    const vResolution = new THREE.Vector2();
    let w = 1,
      h = 1;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera();
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Create text texture
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 2048;
    canvas.height = 1024;

    ctx.fillStyle = "white";
    ctx.font = "bold 280px Hellishy, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const lines = text.split("\n");
    const lineHeight = 350;
    const startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;

    lines.forEach((line, i) => {
      ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
    });

    const textTexture = new THREE.CanvasTexture(canvas);
    textTexture.minFilter = THREE.LinearFilter;
    textTexture.magFilter = THREE.LinearFilter;

    const geo = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_mouse: { value: vMouseDamp },
        u_resolution: { value: vResolution },
        u_pixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        u_textTexture: { value: textTexture },
        u_circleSize: { value: circleSize },
        u_circleEdge: { value: circleEdge },
      },
      transparent: true,
    });

    const quad = new THREE.Mesh(geo, material);
    scene.add(quad);

    const onPointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      vMouse.set(e.clientX - rect.left, e.clientY - rect.top);
    };

    document.addEventListener("mousemove", onPointerMove);
    document.addEventListener("pointermove", onPointerMove);

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

    const ro = new ResizeObserver(() => resize());
    ro.observe(mount);

    const update = () => {
      time = performance.now() * 0.001;
      const dt = time - lastTime;
      lastTime = time;

      ["x", "y"].forEach((k) => {
        vMouseDamp[k] = THREE.MathUtils.damp(vMouseDamp[k], vMouse[k], 8, dt);
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(update);
    };
    update();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      ro.disconnect();
      document.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("pointermove", onPointerMove);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [text, circleSize, circleEdge]);

  return (
    <div
      className={className}
      ref={mountRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default TextShapeBlur;
