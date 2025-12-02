//import React, { useRef, useMemo, useEffect, useState } from "react";
//import { Canvas, useFrame } from "@react-three/fiber";
//import * as THREE from "three";

/**
 * TechBackground - Network globe background component
 * - Responsive nodeCount (reduces on small screens)
 * - pointer-events-none by default, aria-hidden
 *
 * Props:
 *  - nodeCount (number) default 400 (desktop)
 *  - connectionDistance (number) default 0.33
 *  - allowPointerEvents (boolean) default false
 */

{/*function generateNetworkData(nodeCount = 300, radius = 1, connectionDistance = 0.28) {
  const positions = new Float32Array(nodeCount * 3);
  const points = [];

  for (let i = 0; i < nodeCount; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = Math.sin(phi) * Math.cos(theta);
    const y = Math.sin(phi) * Math.sin(theta);
    const z = Math.cos(phi);

    positions[i * 3] = x * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = z * radius;

    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }

  const maxPairs = 20000;
  const linePositions = [];
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const d = points[i].distanceTo(points[j]);
      if (d <= connectionDistance) {
        linePositions.push(points[i].x, points[i].y, points[i].z);
        linePositions.push(points[j].x, points[j].y, points[j].z);
        if (linePositions.length / 3 >= maxPairs * 2) break;
      }
    }
    if (linePositions.length / 3 >= maxPairs * 2) break;
  }

  return {
    pointsBuffer: positions,
    linesBuffer: new Float32Array(linePositions),
    nodeCount,
  };
}

function NetworkGlobe({
  nodeCount = 300,
  radius = 1,
  connectionDistance = 0.28,
  nodeColor = new THREE.Color("#aee8ff"),
  lineColor = new THREE.Color("#70d1ff"),
}) {
  const group = useRef();

  const { pointsBuffer, linesBuffer } = useMemo(
    () => generateNetworkData(nodeCount, radius, connectionDistance),
    [nodeCount, radius, connectionDistance]
  );

  const pointsGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pointsBuffer, 3));
    return g;
  }, [pointsBuffer]);

  const linesGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(linesBuffer, 3));
    return g;
  }, [linesBuffer]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.06;
      group.current.rotation.x = Math.sin(t * 0.12) * 0.02;
      const s = 1 + Math.sin(t * 0.5) * 0.005;
      group.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={group} position={[0, -0.6, 0]}>
      <mesh scale={[1.035, 1.035, 1.035]}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshBasicMaterial
          color={"#9bd1ff"}
          transparent
          opacity={0.03}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <lineSegments geometry={linesGeo}>
        <lineBasicMaterial attach="material" color={lineColor} linewidth={1} transparent opacity={0.6} />
      </lineSegments>

      <points geometry={pointsGeo}>
        <pointsMaterial
          attach="material"
          color={nodeColor}
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          transparent
          opacity={0.95}
        />
      </points>

      <mesh>
        <sphereGeometry args={[radius * 0.995, 64, 64]} />
        <meshStandardMaterial color={"#001826"} roughness={1} metalness={0} opacity={0.08} transparent />
      </mesh>
    </group>
  );
}

export default function TechBackground({
  nodeCount = 400,
  connectionDistance = 0.33,
  allowPointerEvents = false,
}) {
  const pointerClass = allowPointerEvents ? "pointer-events-auto" : "pointer-events-none";

  // Responsive node count - reduce for small screens automatically
  const [effectiveNodes, setEffectiveNodes] = useState(nodeCount);
  useEffect(() => {
    const update = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1024;
      if (w < 640) setEffectiveNodes(Math.max(120, Math.floor(nodeCount * 0.35)));
      else if (w < 1024) setEffectiveNodes(Math.max(180, Math.floor(nodeCount * 0.6)));
      else setEffectiveNodes(nodeCount);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [nodeCount]);

  return (
    <div
      className={`fixed inset-0 ${pointerClass} z-0 bg-gradient-to-br from-blue-200 via-blue-600 to-black`}
      aria-hidden="true"
    >
      <Canvas className="w-screen h-screen block" camera={{ position: [0, 0, 3.2], fov: 35 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} />

            {/* Network globe (responsive node count) 
        <NetworkGlobe nodeCount={effectiveNodes} connectionDistance={connectionDistance} />
      </Canvas>
    </div>
  );
} */}