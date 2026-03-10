import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const fragmentShader = /* glsl */ `
varying vec2 v_texcoord;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform float u_shapeSize;
uniform float u_roundness;
uniform float u_borderSize;
uniform float u_circleSize;
uniform float u_circleEdge;

#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif

#ifndef VAR
#define VAR 0
#endif

#ifndef FNC_COORD
#define FNC_COORD
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
#endif

#define st0 coord(gl_FragCoord.xy)
#define mx coord(u_mouse * u_pixelRatio)

float sdRoundRect(vec2 p, vec2 b, float r) {
    vec2 d = abs(p - 0.5) * 4.2 - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
}
float sdCircle(in vec2 st, in vec2 center) {
    return length(st - center) * 2.0;
}
float sdPoly(in vec2 p, in float w, in int sides) {
    float a = atan(p.x, p.y) + PI;
    float r = TWO_PI / float(sides);
    float d = cos(floor(0.5 + a / r) * r - a) * length(max(abs(p) * 1.0, 0.0));
    return d * 2.0 - w;
}

float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold - afwidth, threshold + afwidth, value);
}
float fill(in float x) { return 1.0 - aastep(0.0, x); }
float fill(float x, float size, float edge) {
    return 1.0 - smoothstep(size - edge, size + edge, x);
}
float stroke(in float d, in float t) { return (1.0 - aastep(t, abs(d))); }
float stroke(float x, float size, float w, float edge) {
    float d = smoothstep(size - edge, size + edge, x + w * 0.5) - smoothstep(size - edge, size + edge, x - w * 0.5);
    return clamp(d, 0.0, 1.0);
}

float strokeAA(float x, float size, float w, float edge) {
    float afwidth = length(vec2(dFdx(x), dFdy(x))) * 0.70710678;
    float d = smoothstep(size - edge - afwidth, size + edge + afwidth, x + w * 0.5)
            - smoothstep(size - edge - afwidth, size + edge + afwidth, x - w * 0.5);
    return clamp(d, 0.0, 1.0);
}

void main() {
    vec2 st = st0 + 0.5;
    vec2 posMouse = mx * vec2(1., -1.) + 0.5;

    float size = u_shapeSize;
    float roundness = u_roundness;
    float borderSize = u_borderSize;
    float circleSize = u_circleSize;
    float circleEdge = u_circleEdge;

    float sdfCircle = fill(
        sdCircle(st, posMouse),
        circleSize,
        circleEdge
    );

    float sdf;
    if (VAR == 0) {
        sdf = sdRoundRect(st, vec2(size), roundness);
        sdf = strokeAA(sdf, 0.0, borderSize, sdfCircle) * 4.0;
    } else if (VAR == 1) {
        sdf = sdCircle(st, vec2(0.5));
        sdf = fill(sdf, 0.6, sdfCircle) * 1.2;
    } else if (VAR == 2) {
        sdf = sdCircle(st, vec2(0.5));
        sdf = strokeAA(sdf, 0.58, 0.02, sdfCircle) * 4.0;
    } else if (VAR == 3) {
        sdf = sdPoly(st - vec2(0.5, 0.45), 0.3, 3);
        sdf = fill(sdf, 0.05, sdfCircle) * 1.4;
    }

    vec3 color = vec3(1.0);
    float alpha = sdf;
    gl_FragColor = vec4(color.rgb, alpha);
}
`;

const ShapeBlur = ({
  text = "MAI CRESPO",
  variation = 0,
  pixelRatioProp = window.devicePixelRatio || 1,
  shapeSize = 1,
  roundness = 0.5,
  borderSize = 0.05,
  circleSize = 0.25,
  circleEdge = 1,
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
