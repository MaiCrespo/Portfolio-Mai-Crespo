import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const TextBlurEffect = ({ text = "MAI CRESPO", className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2() },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_textTexture: { value: null },
      u_blurRadius: { value: 0.25 },
    };

    // Create High-Res Text Texture
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 2048;
    canvas.height = 512;
    ctx.fillStyle = "white";
    ctx.font = "bold 200px Hellishy, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const textTexture = new THREE.CanvasTexture(canvas);
    textTexture.minFilter = THREE.LinearFilter;
    textTexture.magFilter = THREE.LinearFilter;
    uniforms.u_textTexture.value = textTexture;

    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      vertexShader: `
        varying vec2 v_uv;
        void main() {
          v_uv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec2 u_mouse;
        uniform vec2 u_resolution;
        uniform sampler2D u_textTexture;
        uniform float u_blurRadius;
        varying vec2 v_uv;

        // Simple blur function
        vec4 blur(sampler2D tex, vec2 uv, float radius) {
          vec4 color = vec4(0.0);
          float total = 0.0;
          
          for(float x = -4.0; x <= 4.0; x += 1.0) {
            for(float y = -4.0; y <= 4.0; y += 1.0) {
              vec2 offset = vec2(x, y) * radius * 0.003;
              color += texture2D(tex, uv + offset);
              total += 1.0;
            }
          }
          
          return color / total;
        }

        void main() {
          vec2 uv = v_uv;
          
          // Calculate distance from mouse
          vec2 mouseUV = vec2(u_mouse.x, 1.0 - u_mouse.y);
          float dist = distance(uv, mouseUV);
          
          // Create sharp area around mouse
          float sharpRadius = 0.15;
          float blurAmount = smoothstep(sharpRadius, sharpRadius + 0.2, dist);
          
          // Sample sharp and blurred versions
          vec4 sharpText = texture2D(u_textTexture, uv);
          vec4 blurredText = blur(u_textTexture, uv, u_blurRadius * blurAmount);
          
          // Mix based on distance from mouse
          vec4 finalColor = mix(sharpText, blurredText, blurAmount);
          
          gl_FragColor = finalColor;
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      uniforms.u_resolution.value.set(clientWidth, clientHeight);
    };

    const mouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      uniforms.u_mouse.value.set(
        (e.clientX - rect.left) / rect.width,
        (e.clientY - rect.top) / rect.height
      );
    };

    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", mouseMove);
    resize();

    const animate = (time) => {
      uniforms.u_time.value = time * 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", mouseMove);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100%", minHeight: "300px" }}
    />
  );
};

export default TextBlurEffect;
