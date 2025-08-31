import React, { useEffect, useRef } from 'react';

const GlowingCard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    let cw = canvas.width, ch = canvas.height;
    const st = Date.now();

    const fragmentShaderSource = `
      precision highp float;
      const float pi = 3.14159265359;
      uniform float uTime;
      uniform vec2 uResolution;

      float rand(float seed) {
          return fract(sin(seed) * 10000.);
      }
      float noise(vec2 p) {
          return rand(p.x * 14. + p.y * sin(uTime / 1500000.) * .005);
      }
      float smoothNoise(vec2 p){
          vec2 inter = smoothstep(0., 1., fract(p));
          float s = mix(noise(vec2(floor(p.x), floor(p.y))), noise(vec2(ceil(p.x), floor(p.y))), inter.x);
          float n = mix(noise(vec2(floor(p.x), ceil(p.y))), noise(vec2(ceil(p.x), ceil(p.y))), inter.x);
          return mix(s, n, inter.y);
      }
      float fbm(in vec2 p) {
          float z = 2.;
          float rz = 0.;
          for (float i = 1.; i < 6.; i++) {
              rz += abs((smoothNoise(p) - .5) * 2.) / z;
              z *= 2.;
              p *= 2.;
          }
          return rz;
      }

      float circ(vec2 p){
          float r = length(p);
          r = log(sqrt(r));
          return abs(mod(4.*r, pi*2.) - pi) * 3. + .2;
      }

      void main() {
          vec2 p = gl_FragCoord.xy / uResolution.xy - 0.5;
          p.x *= uResolution.x / uResolution.y;
          float rz = fbm(p * 5.);
          rz *= circ(p / exp(mod(uTime / 500., pi)));
          gl_FragColor = vec4(vec3(.4, .3, .7) / rz, 1.);
      }
    `;

    const compileShader = (gl, source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
    const vertexShader = compileShader(gl, `attribute vec3 avp;void main(){gl_Position = vec4(avp, 1.0);}`, gl.VERTEX_SHADER); 
    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);    
    gl.linkProgram(program);
    gl.useProgram(program);

    const resolutionLocation = gl.getUniformLocation(program, 'uResolution');
    const timeLocation = gl.getUniformLocation(program, 'uTime');    
    const vertexPositionLocation = gl.getAttribLocation(program, 'avp');

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(vertexPositionLocation);
    gl.vertexAttribPointer(vertexPositionLocation, 2, gl.FLOAT, false, 0, 0);

    const render = () => {
      gl.uniform1f(timeLocation, Date.now() - st);
      gl.uniform2fv(resolutionLocation, [cw, ch]);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(render);
    };
  }, []);

  return (
    <div className="w-full p-4"> 
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg border border-purple-300/20">
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={300}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="text-center p-4">
            <h2 className="text-2xl font-bold text-purple-100 mb-2">Dancing Bears</h2>
            <p className="text-purple-200 italic">Painted Wings</p>
            <div className="my-4 text-purple-100">
              <p className="text-sm">And a song</p>
              <p className="text-xl font-bold">Once Upon a December</p>
              <p className="text-sm">Someone sings</p>
            </div>
            <p className="text-purple-200 text-sm">Things I almost remember</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingCard;