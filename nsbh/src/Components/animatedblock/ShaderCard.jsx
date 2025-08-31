import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ShaderCard = () => {
  const shaderRef = useRef(null);

  useEffect(() => {
    // Инициализация Three.js
    let camera, scene, renderer, clock;
    let uniforms;

    const init = () => {
      clock = new THREE.Clock();
      camera = new THREE.Camera();
      camera.position.z = 1;

      scene = new THREE.Scene();
      const geometry = new THREE.PlaneGeometry(2, 2);

      uniforms = {
        u_time: { type: "f", value: 1.0 },
        u_resolution: { type: "v2", value: new THREE.Vector2(200, 200) }
      };

      const vertexShader = `
        varying vec2 vUv;
        void main() { 
          gl_Position = vec4(position, 1.0);
          vUv = uv;
        }
      `;

      const fragmentShader = `
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;
        varying vec2 vUv;
        
        const float PI = 3.1415926535897932384626433832795;
        const float TAU = PI * 2.;
        
        float wiggly(float cx, float cy, float amplitude, float frequency, float spread) {
          return sin(cx * amplitude * frequency * PI) * cos(cy * amplitude * frequency * PI) * spread;
        }
        
        void coswarp(inout vec3 trip, float warpsScale) {
          trip.xyz += warpsScale * .1 * cos(3. * trip.yzx + (u_time * .25));
          trip.xyz += warpsScale * .05 * cos(11. * trip.yzx + (u_time * .25));
          trip.xyz += warpsScale * .025 * cos(17. * trip.yzx + (u_time * .25));
        }
        
        void uvRipple(inout vec2 uv, float intensity) {
          vec2 p = uv -.5;
          float cLength = length(p);
          uv = uv +(p/cLength)*cos(cLength*15.0-u_time*.5)*intensity;
        }
        
        float smoothMod(float x, float y, float e) {
          float top = cos(PI * (x/y)) * sin(PI * (x/y));
          float bot = pow(sin(PI * (x/y)),2.);
          float at = atan(top/bot);
          return y * (1./2.) - (1./PI) * at;
        }
        
        vec2 modPolar(vec2 p, float repetitions) {
          float angle = 2.*3.14/repetitions;
          float a = atan(p.y, p.x) + angle/2.;
          float r = length(p);
          a = smoothMod(a,angle,033323231231561.9) - angle/2.;
          return vec2(cos(a), sin(a))*r;
        }
        
        float stroke(float x, float s, float w) {
          float d = step(s, x+ w * .5) - step(s, x - w * .5);
          return clamp(d, 0., 1.);
        }
        
        vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }
        
        float cnoise(vec2 P) {
          vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
          vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
          Pi = mod(Pi, 289.0);
          vec4 ix = Pi.xzxz;
          vec4 iy = Pi.yyww;
          vec4 fx = Pf.xzxz;
          vec4 fy = Pf.yyww;
          vec4 i = permute(permute(ix) + iy);
          vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0;
          vec4 gy = abs(gx) - 0.5;
          vec4 tx = floor(gx + 0.5);
          gx = gx - tx;
          vec2 g00 = vec2(gx.x,gy.x);
          vec2 g10 = vec2(gx.y,gy.y);
          vec2 g01 = vec2(gx.z,gy.z);
          vec2 g11 = vec2(gx.w,gy.w);
          vec4 norm = 1.79284291400159 - 0.85373472095314 *
            vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
          g00 *= norm.x;
          g01 *= norm.y;
          g10 *= norm.z;
          g11 *= norm.w;
          float n00 = dot(g00, vec2(fx.x, fy.x));
          float n10 = dot(g10, vec2(fx.y, fy.y));
          float n01 = dot(g01, vec2(fx.z, fy.z));
          float n11 = dot(g11, vec2(fx.w, fy.w));
          vec2 fade_xy = fade(Pf.xy);
          vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
          float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
          return 2.3 * n_xy;
        }
        
        vec2 rotate2D(vec2 _st, float _angle) {
          _st -= 0.5;
          _st = mat2(cos(_angle),-sin(_angle),
                    sin(_angle),cos(_angle)) * _st;
          _st += 0.5;
          return _st;
        }
        
        vec2 rotateTilePattern(vec2 _st) {
          float t = (u_time * .2) + length(_st -.5);
          _st *= 2.0;
          float index = 0.0;
          index += step(1., mod(_st.x,2.0));
          index += step(1., mod(_st.y,2.0))*2.0;
          _st = fract(_st);
          if(index == 1.0) {
            _st = rotate2D(_st,PI*0.5 + t);
          } else if(index == 2.0) {
            _st = rotate2D(_st,PI*-0.5 -t);
          } else if(index == 3.0) {
            _st = rotate2D(_st,PI -(t*.5));
          }
          return _st;
        }
        
        void main() {
          vec2 uv = (gl_FragCoord.xy - u_resolution * .5) / u_resolution.yy + 0.5;
          float vTime = u_time;
          float t = (u_time * .2) + length(uv-.5);
          vec2 uv2 = uv;
          vec2 uv3 = uv;
          uv = fract(uv * 3.);
          uv = rotateTilePattern(uv + cnoise(uv * sin(t)));
          uv = rotateTilePattern(uv + cnoise(uv * (3. *cos(t))));
          vec3 color = vec3(1.);
          color = mix(color, 1.-color, step(length(uv-.5), sin(t)));
          color = mix(color, 1.-color, step(length(uv-.5), cos(t *.98)));
          color = mix(color, 1.-color, step(cnoise(uv * color.r), .5));
          gl_FragColor = vec4(vec3(color.r, color.g, color.b), 1.0);
        }
      `;

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(200, 200);
      renderer.setPixelRatio(window.devicePixelRatio);

      if (shaderRef.current) {
        shaderRef.current.appendChild(renderer.domElement);
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (uniforms) {
        uniforms.u_time.value = clock.getElapsedTime();
      }
      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    init();
    animate();

    return () => {
      if (shaderRef.current && renderer?.domElement) {
        shaderRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-[200px] h-[200px] bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
      <div 
        ref={shaderRef} 
        className="absolute inset-0 w-full h-full"
      />
      <style jsx>{`
        canvas {
          width: 100% !important;
          height: 100% !important;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default ShaderCard;