import { useEffect, useRef, useState } from 'react';
    //  <div className="h-screen">
    //  <GlassCrackEffect/>
    //   </div>
const GlassCrackEffect = () => {
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [imageSrc] = useState(
    'https://ksenia-k.com/img/codepen/for-glass-crack-demo-1.jpg'
  );

  const vertShader = `
    precision mediump float;
    attribute vec2 a_position;
    varying vec2 vUv;

    void main() {
      vUv = 0.5 * (a_position + 1.0);
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fragShader = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D u_image_texture;
    uniform float u_edge_thickness;
    uniform float u_ratio;
    uniform vec2 u_pointer_position;
    uniform float u_img_ratio;
    uniform float u_click_randomizer;
    uniform float u_rotation;
    uniform float u_effect;
    uniform float u_effect_active;

    #define TWO_PI 6.28318530718
    #define PI 3.14159265358979323846


    float random(float x) {
        return fract(sin(x * 12.9898) * 43758.5453);
    }

    float random2(vec2 p) {
        return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }

    float noise(vec2 p) {
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u*u*(3.0-2.0*u);

        float res = mix(
        mix(random2(ip), random2(ip+vec2(1.0, 0.0)), u.x),
        mix(random2(ip+vec2(0.0, 1.0)), random2(ip+vec2(1.0, 1.0)), u.x), u.y);
        return res*res;
    }

    float get_sector_shape(float d, float a, float angle, float edges) {
        float angle1 = PI;
        float angle2 = angle1 + angle;

        float edge1 = smoothstep(angle1 - edges / d, angle1 + edges / d, a);
        float edge2 = smoothstep(angle2 - edges / d, angle2 + edges / d, a);

        return edge1 * (1. - edge2);
    }


    float get_img_frame_alpha(vec2 uv, float img_frame_width) {
        float img_frame_alpha = smoothstep(0., img_frame_width, uv.x) * smoothstep(1., 1. - img_frame_width, uv.x);
        img_frame_alpha *= smoothstep(0., img_frame_width, uv.y) * smoothstep(1., 1. - img_frame_width, uv.y);
        return img_frame_alpha;
    }


    float get_simple_cracks(float a, float d, float n) {
        a *= (1. + sin(2. * a + PI + 2. * u_click_randomizer));
        float simple_cracks_number = 10.;
        float simple_cracks_angle_step = TWO_PI / simple_cracks_number;
        float simple_crack_angle = mod(a + n + u_click_randomizer, simple_cracks_angle_step);
        float cracks_shape = 4. * abs(simple_crack_angle - .5 * simple_cracks_angle_step);
        cracks_shape = mix(cracks_shape, 1., smoothstep(.9, 1., d));
        cracks_shape *= pow(d + .4 * u_click_randomizer * max(0., cos(2. * a + u_click_randomizer) * sin(1. * a)), 12.);
        cracks_shape = (1. + n) * (1. + sin(4. * a)) * step(.9, cracks_shape);
        return cracks_shape;
    }

    vec2 get_img_uv() {
        vec2 img_uv = vUv;
        img_uv -= .5;
        if (u_ratio > u_img_ratio) {
            img_uv.x = img_uv.x * u_ratio / u_img_ratio;
        } else {
            img_uv.y = img_uv.y * u_img_ratio / u_ratio;
        }
        float scale_factor = 1.4;
        img_uv *= scale_factor;
        img_uv += .5;
        img_uv.y = 1. - img_uv.y;

        return img_uv;
    }

    vec2 get_disturbed_uv(vec2 uv, float section_constant, float edge, vec2 direction, float border) {
        float img_distortion = u_effect * (section_constant - .5);
        vec2 discurbed_uv = uv;
        discurbed_uv += 2. * img_distortion;
        discurbed_uv.x -= mix(.03 * edge * direction.x, -.1 * edge, border);
        discurbed_uv.y -= mix(.03 * edge * direction.y, -.1 * edge, border);
        vec2 center = vec2(0.5, 0.5);
        discurbed_uv = discurbed_uv - center;
        float cosA = cos(4. * img_distortion);
        float sinA = sin(4. * img_distortion);
        float perspective = 1. + img_distortion * discurbed_uv.y;
        discurbed_uv = vec2(
        perspective * (cosA * discurbed_uv.x - sinA * discurbed_uv.y),
        perspective * (sinA * discurbed_uv.x + cosA * discurbed_uv.y)
        );
        discurbed_uv += center;
        return discurbed_uv;
    }


    void main() {
        vec2 uv = vUv;
        uv.y = 1. - uv.y;
        uv.x *= u_ratio;

        vec2 pointer = u_pointer_position;
        vec2 pointer_direction = normalize(u_pointer_position - vec2(vUv.x, 1. - vUv.y));
        pointer.x *= u_ratio;
        pointer = pointer - uv;
        float pointer_angle = atan(pointer.y, pointer.x);
        float pointer_distance = length(pointer);
        float pointer_distance_normalized = (1. - clamp(pointer_distance, 0., 1.));

        vec3 color = vec3(0.);

        vec2 img_uv = get_img_uv();

        float sector_constant = 0.;
        float sector_start_angle = 0.;
        float is_sector_edge = 0.;
        float is_grid_edge = 0.;
        float is_central_edge = 0.;

        float angle_noise = .3 * noise(3. * img_uv);

        for (int i = 0; i < 12; i++) {
            float sector_seed = float(i) + u_click_randomizer + 2.;

            float angle_normalised = mod((pointer_angle - sector_start_angle) / TWO_PI, 1.);
            angle_normalised += .1 * angle_noise;

            float angle = angle_normalised * TWO_PI;
            float sector_size = (.01 + 2. * random2(vec2(float(i) + u_click_randomizer, u_pointer_position.x)));
            sector_size = min(sector_size, TWO_PI - sector_start_angle);

            float thickness = u_edge_thickness * (.2 + random(3. * sector_seed));
            thickness += angle_noise * .03 * pow(pointer_distance_normalized, 80.);

            float shape = get_sector_shape(pointer_distance, angle, sector_size, thickness);
            is_sector_edge = max(is_sector_edge, smoothstep(.6, 1., shape));
            sector_constant = mix(sector_constant, random(sector_seed), smoothstep(.2, .8, shape));

            vec2 grid_uv = 2. * (.8 + .5 * pointer_distance_normalized) * img_uv;
            float grid_noise = noise(grid_uv + sector_seed);
            float grid_thickness = (.4 + .4 * random(10. * sector_seed)) * u_edge_thickness;
            float grid_shape = shape * smoothstep(.27, .27 + grid_thickness, grid_noise);
            is_grid_edge += (smoothstep(.1, .5, grid_shape) * smoothstep(.9, .6, grid_shape));

            sector_constant = mix(sector_constant, random(sector_seed + 100.), smoothstep(.2, .8, grid_shape));

            vec2 central_grid_uv = img_uv * (3. + 3. * pow(pointer_distance_normalized, 10.));
            float central_grid_noise = noise(central_grid_uv + sector_seed);
            float central_grid_thickness = (1. + .5 * random(-2. + sector_seed)) * u_edge_thickness;
            float central_grid_shape = step(.7, shape) * smoothstep(.27, .27 + central_grid_thickness, central_grid_noise);
            is_central_edge += (smoothstep(.0, .5, central_grid_shape) * smoothstep(1., .5, central_grid_shape));
            is_central_edge *= (step(.8, pointer_distance_normalized));

            sector_constant = mix(sector_constant, random(sector_seed + 100.), smoothstep(.2, .8, central_grid_shape));


            sector_start_angle += sector_size;
        }

        float img_edge_alpha = get_img_frame_alpha(img_uv, .004);

        is_sector_edge = 1. - is_sector_edge;

        float cracks_edge = max(is_grid_edge, is_sector_edge);
        cracks_edge = max(cracks_edge, is_central_edge);

        float central_cracks = get_simple_cracks(pointer_angle, pointer_distance_normalized, angle_noise);
        cracks_edge += central_cracks;

        if (u_effect_active > 0.) {
            img_uv = get_disturbed_uv(img_uv, sector_constant, cracks_edge, pointer_direction, get_img_frame_alpha(img_uv, .2));
        }

        vec4 img = texture2D(u_image_texture, img_uv);
        color = img.rgb;
        color += .12 * u_effect_active * (sector_constant - .5);

        img_edge_alpha = get_img_frame_alpha(img_uv, .004);
        float opacity = img_edge_alpha;
        opacity -= .3 * u_effect_active * pow(is_grid_edge, 4.);
        opacity -= .3 * u_effect_active * is_central_edge;
        opacity -= .03 * u_effect_active * pow(central_cracks, 4.);

        gl_FragColor = vec4(color, opacity);
    }
  `;

  const params = {
    clickRandomizer: 0.332,
    distance: 0.015,
    effectOn: true,
    edgeThickness: 0.006,
    loadMyImage: () => fileInputRef.current.click(),
  };

  const pointer = useRef({ x: 0.5, y: 0.5 });
  const glRef = useRef(null);
  const uniformsRef = useRef(null);
  const imageRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  const initShader = () => {
    const gl = canvasRef.current.getContext('webgl');
    if (!gl) return null;

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertShader);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragShader);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const uniforms = {};
    const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
      const uniformName = gl.getActiveUniform(program, i).name;
      uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
    }

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    uniformsRef.current = uniforms;
    return gl;
  };

  const updateUniforms = () => {
    if (!glRef.current || !uniformsRef.current) return;
    
    const gl = glRef.current;
    gl.uniform1f(uniformsRef.current.u_click_randomizer, params.clickRandomizer);
    gl.uniform1f(uniformsRef.current.u_effect, params.distance);
    gl.uniform1f(uniformsRef.current.u_effect_active, params.effectOn ? 1 : 0);
    gl.uniform1f(uniformsRef.current.u_edge_thickness, params.edgeThickness);
    gl.uniform2f(uniformsRef.current.u_pointer_position, pointer.current.x, pointer.current.y);
  };

  const loadImage = (src) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      imageRef.current = img;
      const gl = glRef.current;
      
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      
      gl.uniform1i(uniformsRef.current.u_image_texture, 0);
      gl.uniform1f(uniformsRef.current.u_img_ratio, img.width / img.height);
      
      resizeCanvas();
    };
  };

  const resizeCanvas = () => {
    if (!glRef.current || !imageRef.current) return;
    
    const imgRatio = imageRef.current.width / imageRef.current.height;
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    canvasRef.current.width = window.innerWidth * devicePixelRatio;
    canvasRef.current.height = window.innerHeight * devicePixelRatio;
    
    glRef.current.viewport(0, 0, canvasRef.current.width, canvasRef.current.height);
    glRef.current.uniform1f(
      uniformsRef.current.u_ratio, 
      canvasRef.current.width / canvasRef.current.height
    );
  };

  useEffect(() => {
    setIsClient(true);
    
    if (!isClient) return;
    
    glRef.current = initShader();
    if (!glRef.current) return;
    
    loadImage(imageSrc);
    updateUniforms();
    
    const handleClick = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      pointer.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      };
      params.clickRandomizer = Math.random();
      updateUniforms();
    };
    
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        params.effectOn = !params.effectOn;
        updateUniforms();
      }
    };
    
    const handleResize = () => {
      resizeCanvas();
      updateUniforms();
    };
    
    window.addEventListener('resize', handleResize);
    canvasRef.current.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    
    const render = () => {
      if (glRef.current) {
        glRef.current.drawArrays(glRef.current.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
      }
    };
    render();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvasRef.current?.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => loadImage(event.target.result);
            reader.readAsDataURL(file);
          }
        }}
      />
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full cursor-pointer"
      />
      <div className="fixed top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono select-none pointer-events-none bg-cornsilk text-red-500 px-2 py-1 rounded text-sm">
        Click to break, Space to toggle effect
      </div>
    </div>
  );
};

export default GlassCrackEffect;