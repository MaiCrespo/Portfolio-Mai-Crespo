import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ShapeBlur = ({
  text = "MAI CRESPO",
  variation={0}
    pixelRatioProp={window.devicePixelRatio || 1}
    shapeSize={1}
    roundness={0.5}
    borderSize={0.05}
    circleSize={0.25}
    circleEdge={1}
  className = "",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(pixelRatioProp);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2() },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_variation: { value: variation },
      u_shapeSize: { value: shapeSize },
      u_roundness: { value: roundness },
      u_borderSize: { value: borderSize },
      u_circleSize: { value: circleSize },
      u_circleEdge: { value: circleEdge },
      u_textTexture: { value: null },
    };

    // Create High-Res Text Texture
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 2048;
    canvas.height = 1024;
    ctx.fillStyle = "white";
    // Matches your 'Hellishy' font
    ctx.font = "bold 220px Hellishy, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const textTexture = new THREE.CanvasTexture(canvas);
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
        uniform float u_time;
        uniform sampler2D u_textTexture;
        uniform float u_circleSize;
        varying vec2 v_uv;

        // Noise function for "atomic" disintegration
        float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        void main() {
          vec2 uv = v_uv;
          float dist = distance(uv, u_mouse);
          
          // Influence of the "disintegrating" lens
          float strength = smoothstep(u_circleSize, 0.0, dist);
          
          // Atomic displacement calculation
          float n = hash(uv + u_time * 0.1);
          vec2 displacement = vec2(
            sin(uv.y * 150.0 + u_time * 8.0 + n * 10.0),
            cos(uv.x * 150.0 + u_time * 8.0 + n * 10.0)
          ) * 0.02 * strength;

          vec4 texColor = texture2D(u_textTexture, uv + displacement);
          
          // Blend sharpness vs blur based on mouse distance
          float alpha = texColor.a;
          if(strength > 0.0) {
            alpha *= (1.0 - strength * 0.4);
          }

          gl_FragColor = vec4(texColor.rgb, alpha);
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
        1.0 - (e.clientY - rect.top) / rect.height
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
      renderer.dispose();
    };
  }, [text, circleSize]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "450px" }}
    />
  );
};

export default ShapeBlur;
