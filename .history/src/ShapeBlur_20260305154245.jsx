import { useRef, useEffect } from "react";
import * as THREE from "three";

const vertexShader = /* glsl */ `
varying vec2 v_texcoord;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    v_texcoord = uv;
}
`;

const fragmentShader = /* glsl */ `
varying vec2 v_texcoord;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_blurStrength;

uniform sampler2D u_textTexture;

#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif

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

// Multi-sample blur function
vec4 blur(sampler2D tex, vec2 uv, float radius) {
    vec4 color = vec4(0.0);
    float total = 0.0;
    
    for(float x = -6.0; x <= 6.0; x += 1.0) {
        for(float y = -6.0; y <= 6.0; y += 1.0) {
            vec2 offset = vec2(x, y) * radius * 0.003;
            color += texture2D(tex, uv + offset);
            total += 1.0;
        }
    }
    
    return color / total;
}

void main() {
    vec2 st = st0 + 0.5;
    vec2 posMouse = mx * vec2(1., -1.) + 0.5;
    
    vec2 uv = v_texcoord;
    
    // Calculate distance from mouse to current pixel
    float dist = distance(st, posMouse);
    
    // INVERTED LOGIC: Clear by default, blur when mouse is close
    float blurRadius = 0.25;      // Size of blur zone around mouse
    float blurFalloff = 0.15;     // Softness of the edge
    
    // When dist is small (mouse close), blurAmount = 1 (blurred)
    // When dist is large (mouse far), blurAmount = 0 (sharp)
    float blurAmount = 1.0 - smoothstep(blurRadius, blurRadius + blurFalloff, dist);
    
    // Apply strength multiplier
    blurAmount *= u_blurStrength;
    
    // Sample sharp text
    vec4 sharpText = texture2D(u_textTexture, uv);
    
    // Sample blurred text (stronger blur)
    vec4 blurredText = blur(u_textTexture, uv, 3.0);
    
    // Mix: 0 = sharp, 1 = blurred
    vec4 finalColor = mix(sharpText, blurredText, blurAmount);
    
    gl_FragColor = finalColor;
}
`;

const ShapeBlur = ({
  className = "",
  text = "MAI CRESPO",
  variation = 0,
  pixelRatioProp = 2,
  shapeSize = 1.2,
  roundness = 0.4,
  borderSize = 0.05,
  circleSize = 0.3,
  circleEdge = 0.5,
  blurStrength = 1.0,
}) => {
  const mountRef = useRef();

  useEffect(() => {
    const mount = mountRef.current;
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

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Create high-res text texture
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 2048;
    canvas.height = 512;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw text
    ctx.fillStyle = "white";
    ctx.font = "bold 280px Hellishy, Georgia, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Draw "MAI" on top half
    ctx.fillText("MAI", canvas.width / 2, canvas.height * 0.35);

    // Draw "CRESPO" on bottom half
    ctx.fillText("CRESPO", canvas.width / 2, canvas.height * 0.75);

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
        u_pixelRatio: { value: pixelRatioProp },
        u_textTexture: { value: textTexture },
        u_blurStrength: { value: blurStrength },
      },
      transparent: true,
    });

    const quad = new THREE.Mesh(geo, material);
    scene.add(quad);

    const onPointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      vMouse.set(e.clientX - rect.left, rect.height - (e.clientY - rect.top));
    };

    document.addEventListener("mousemove", onPointerMove);
    document.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const container = mountRef.current;
      w = container.clientWidth;
      h = container.clientHeight;
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
    if (mountRef.current) ro.observe(mountRef.current);

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
      if (ro) ro.disconnect();
      document.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("pointermove", onPointerMove);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geo.dispose();
      material.dispose();
      textTexture.dispose();
    };
  }, [blurStrength, pixelRatioProp, text]);

  return (
    <div
      className={className}
      ref={mountRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ShapeBlur;
