import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * TechBackground
 *
 * A full-screen, Tailwind-styled background component that renders a "network globe":
 * - points (nodes) distributed on a sphere
 * - line segments connecting nearby nodes to create a network/web look
 * - subtle atmosphere glow and slow rotation
 *
 * Usage:
 * - Place <TechBackground /> near the top of your app layout so it sits behind content.
 * - Default: non-interactive (pointer-events-none). To enable pointer events for interactivity,
 *   pass allowPointerEvents={true}.
 *
 * Performance tips:
 * - Reduce nodeCount (default 300) for mobile / low-end devices.
 * - Increase connectionDistance to create more lines; reduce for fewer.
 */

function generateNetworkData(nodeCount = 600, radius = 1, connectionDistance = 0.35) {
  // Generate points uniformly on a sphere
  const positions = new Float32Array(nodeCount * 3);
  const points = []; // keep as Vector3 for distance checks

  for (let i = 0; i < nodeCount; i++) {
    // Sample using spherical coordinates with uniform distribution
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

  // Create line segments by connecting pairs that are within connectionDistance
  const maxPairs = 20000; // safety cap
  const linePositions = [];
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const d = points[i].distanceTo(points[j]);
      if (d <= connectionDistance) {
        // push both endpoints
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

  // Memoize network geometry so it isn't regenerated on every render
  const { pointsBuffer, linesBuffer } = useMemo(
    () => generateNetworkData(nodeCount, radius, connectionDistance),
    [nodeCount, radius, connectionDistance]
  );

  // Create BufferGeometries
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
      // slow rotation + slight tilt oscillation
      group.current.rotation.y = t * 0.06;
      group.current.rotation.x = Math.sin(t * 0.12) * 0.02;
      // small breathing scale to give life
      const s = 1 + Math.sin(t * 0.5) * 0.005;
      group.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={group} position={[0, -0.6, 0]}>
      {/* subtle atmosphere / glow - slightly larger transparent sphere */}
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

      {/* Lines connecting nodes */}
      <lineSegments geometry={linesGeo}>
        <lineBasicMaterial
          attach="material"
          color={lineColor}
          linewidth={1}
          transparent
          opacity={0.6}
        />
      </lineSegments>

      {/* Nodes (points) */}
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

      {/* optional faint inner mesh to add silhouette depth */}
      <mesh>
        <sphereGeometry args={[radius * 0.995, 64, 64]} />
        <meshStandardMaterial color={"#001826"} roughness={1} metalness={0} opacity={0.08} transparent />
      </mesh>
    </group>
  );
}

export default function TechBackground({
  nodeCount = 300,
  connectionDistance = 0.28,
  allowPointerEvents = false,
}) {
  // Tailwind classes used for layout and gradient background
  const pointerClass = allowPointerEvents ? "pointer-events-auto" : "pointer-events-none";

  return (
    <div
      className={`fixed inset-0 ${pointerClass} z-0 bg-gradient-to-br from-blue-200 via-blue-600 to-black`}
      aria-hidden="true"
    >
      <Canvas className="w-screen h-screen block" camera={{ position: [0, 0, 3.2], fov: 35 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} />

        {/* You can include <Stars /> from @react-three/drei if installed, optional */}
        <NetworkGlobe nodeCount={nodeCount} connectionDistance={connectionDistance} />

        {/* Keep OrbitControls disabled for background; enable only if allowPointerEvents */}
      </Canvas>
    </div>
  );
}