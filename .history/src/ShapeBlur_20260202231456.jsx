import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D tDiff;
  uniform vec2 resolution;
  uniform float blurStrength;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec4 sum = vec4(0.0);
    float totalWeight = 0.0;
    
    // Simple Gaussian-like blur
    for(float x = -4.0; x <= 4.0; x++) {
      for(float y = -4.0; y <= 4.0; y++) {
        vec2 offset = vec2(x, y) * (blurStrength / resolution);
        float weight = exp(-(x*x + y*y) / 8.0);
        sum += texture2D(tDiff, uv + offset) * weight;
        totalWeight += weight;
      }
    }
    gl_FragColor = sum / totalWeight;
  }
`;

const Scene = ({ text, font, blurStrength, variation, hasDrag }) => {
  const meshRef = useRef();
  const textureRef = useRef();

  const canvasTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    // Set your custom font here
    ctx.font = `bold 350px "Hellishy", serif`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, [text]);

  const uniforms = useMemo(
    () => ({
      tDiff: { value: canvasTexture },
      resolution: { value: new THREE.Vector2(2048, 512) },
      blurStrength: { value: blurStrength },
      // Custom colors matching your theme
      color1: { value: new THREE.Color("#ffe3a4") },
      color2: { value: new THREE.Color("#ff3700") },
    }),
    [canvasTexture, blurStrength]
  );

  useFrame((state) => {
    if (meshRef.current) {
      // Animation logic for the shapes
      const t = state.clock.getElapsedTime();
      meshRef.current.material.uniforms.blurStrength.value =
        blurStrength + Math.sin(t * variation) * 5.0;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 2.5]} />
      <shaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const ShapeBlur = ({
  text = "MAI",
  blurStrength = 15,
  variation = 1,
  className = "",
}) => {
  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 5] }} transparent>
        <Scene text={text} blurStrength={blurStrength} variation={variation} />
      </Canvas>
    </div>
  );
};

export default ShapeBlur;
