'use client';

import { OrbitControls, Sky } from '@react-three/drei';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Water } from 'three-stdlib';

extend({ Water });

function OceanWater() {
  const waterRef = useRef();
  const { scene } = useThree();

  const waterNormals = useLoader(THREE.TextureLoader, './waternormals.jpg');

  useMemo(() => {
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  }, [waterNormals]);

  useFrame(({ clock }) => {
    if (waterRef.current) {
      const time = clock.getElapsedTime();
      if (waterRef.current) {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        (waterRef.current as unknown as any).material.uniforms.time.value = time;
      }
    }
  });

  return (
    <water
      ref={waterRef}
      args={[
        new THREE.PlaneGeometry(10000, 10000),
        {
          textureWidth: 512,
          textureHeight: 512,
          waterNormals: waterNormals,
          sunDirection: new THREE.Vector3(0.7, 0.3, 0.5),
          sunColor: 0xffffff,
          waterColor: 0x0077be,
          distortionScale: 3.7,
          fog: scene.fog !== undefined,
          side: THREE.DoubleSide,
        },
      ]}
      rotation={[-Math.PI / 2, 0, 0]}
    />
  );
}

export function OceanScene() {
  return (
    <Canvas
      camera={{
        position: [30, 20, 100],
        fov: 55,
        near: 1,
        far: 20000,
      }}
      style={{
        position: 'fixed',
        zIndex: -1,
        opacity: 0.5,
        top: 0,
        left: 0,
        width: '100dvw',
        height: '100dvh',
      }}
    >
      <color attach="background" args={['#87CEEB']} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[100, 100, 100]} intensity={1.5} color={0xffffff} />

      <Sky sunPosition={[100, 10, 100]} turbidity={10} rayleigh={2} mieCoefficient={0.005} mieDirectionalG={0.8} />

      <OceanWater />

      <OrbitControls maxPolarAngle={Math.PI * 0.495} target={[500, 10, 0]} minDistance={40.0} maxDistance={200.0} />
    </Canvas>
  );
}
