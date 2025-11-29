import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export default function TechBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Safety check: do nothing if ref doesn't exist yet
    if (!mountRef.current) return;

    let renderer, scene, camera, composer, particles, wireframe;

    // Scene
    scene = new THREE.Scene();

    

    // Camera
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 3);
    
    

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    

    // Append only if mountRef is valid
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    // Particle Globe
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.5;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.set([x, y, z], i * 3);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x4da3ff,
      size: 0.02,
      transparent: true
    });

    particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Wireframe
    particles.position.y = -1;

    const sphereGeo = new THREE.SphereGeometry(1.5, 32, 32);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x2b82ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });

    wireframe = new THREE.Mesh(sphereGeo, wireMat);
    scene.add(wireframe);

    // Bloom
    wireframe.position.y = -1;
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.8,
      0.4,
      0.05
    );
    composer.addPass(bloom);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001;
      wireframe.rotation.y += 0.0009;
      composer.render();
    };
    animate();

    // Resize
    const handleResize = () => {
      if (!renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      if (renderer) renderer.dispose();

      if (mountRef.current && renderer?.domElement) {
        if (mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
    };
  }, []); // Don't forget this!

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}
