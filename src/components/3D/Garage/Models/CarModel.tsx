import * as THREE from "three";

import React, { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";

interface CarModelProps {
  src: string;
}

const CarModel: React.FC<CarModelProps> = ({ src }, ...props) => {
  const { scene, nodes, materials } = useGLTF(src);

  useMemo(() => {
    // Object.values(nodes).forEach((node) => {
    //   if (node.isMesh) {
    //     if (node.name.includes("carbon")) node.geometry.computeVertexNormals();
    //     if (node.name.includes("REAR_DIFFUSER")) {
    //       node.material = applyProps(materials["rear diffuser"].clone(), {
    //         color: "white",
    //         metalness: 0.75,
    //         roughness: 0,
    //       });
    //     }
    //   }
    // });
    // applyProps(materials["Lower exterior carbon package"], {
    //   metalness: 0.75,
    //   roughness: 0,
    //   color: "black",
    // });
    // applyProps(materials["rear diffuser"], {
    //   metalness: 0.75,
    //   roughness: 0,
    //   color: "black",
    // });
    // nodes["Revuelto_painting_-_livery"].material =
    //   new THREE.MeshPhysicalMaterial({
    //     roughness: 0.3,
    //     metalness: 0.05,
    //     color: "#0130ff",
    //     envMapIntensity: 0.75,
    //     clearcoatRoughness: 0,
    //     clearcoat: 1,
    //   });
    // nodes["000"].material = new THREE.MeshPhysicalMaterial({
    //   roughness: 0.3,
    //   metalness: 0.05,
    //   color: "#0130ff",
    //   envMapIntensity: 0.75,
    //   clearcoatRoughness: 0,
    //   clearcoat: 1,
    // });
    // console.log(nodes["000"].material);
  }, [nodes, materials]);

  return <primitive object={scene} {...props} />;
};

export default CarModel;
