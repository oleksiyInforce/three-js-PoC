import { useTexture } from "@react-three/drei";
import React from "react";

import * as THREE from "three";

export const GarageEnvironment = () => {
  var myTexture = useTexture("environment.jpg");

  myTexture.colorSpace = "srgb";

  return (
    <mesh scale={200}>
      <sphereGeometry />
      <meshPhysicalMaterial
        map={myTexture}
        roughness={1}
        side={THREE.BackSide}
      />
    </mesh>
  );
};
