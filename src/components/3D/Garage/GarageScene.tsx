/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Center,
  ContactShadows,
  Effects,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
} from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useState } from "react";
import { LoaderComponent } from "../Loader/Loader";

import { GarageSceneStyled } from "./GarageScene.styled";
import { GarageFooter } from "./Footer/Footer";
import { Info } from "./Overlay/Info/Info";
import { IMAGES_MAP } from "constants/images";
import { Wallet } from "./Overlay/Wallet/Wallet";
import CarModel from "./Models/CarModel";

const models = [
  {
    src: "/3D/LAMBORGHINI_REVUELTO4.glb",
    name: "Revuelto",
  },
];

const GarageScene = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const switchModel = (direction) => {
    setCurrentModelIndex((cur) => (cur === 0 ? 1 : 0));
  };
  const modelCenter = new THREE.Vector3();

  const renderCurrentModel = () =>
    models.map((model, index) => (
      <CarModel
        key={index}
        src={model.src}
        position={[0, 0, 0]}
        visible={currentModelIndex === index}
      />
    ));

  return (
    <GarageSceneStyled.Container>
      <GarageFooter
        models={models}
        switchCar={switchModel}
        selectedIndex={currentModelIndex}
      />
      <Wallet src={IMAGES_MAP["wallet"]} />
      {/* <WalletComponent /> */}
      <Info src={IMAGES_MAP["revueltoInfo"]} />
      <Suspense fallback={<div>LOADING...</div>}>
        <Canvas
          className="absolute sticky"
          shadows
          camera={{ position: [200, 0, 20], fov: 35 }}
        >
          <ambientLight intensity={2} />
          <Suspense fallback={<LoaderComponent />}>
            <group position={[0, 0, 0]} scale={[10, 10, 10]}>
              <Center>{renderCurrentModel()}</Center>
              <AccumulativeShadows>
                <RandomizedLight position={[2, 5, 5]} />
              </AccumulativeShadows>
            </group>
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2.25}
            makeDefault
          />
          <PerspectiveCamera
            makeDefault
            position={[
              modelCenter.x - 30,
              modelCenter.y - 10,
              modelCenter.z - 30,
            ]}
            fov={60}
          >
            <spotLight
              position={[0, 40, 2]}
              angle={0.5}
              decay={1.2}
              distance={200}
              penumbra={1}
              intensity={300}
              color={"#fdb720"}
            />
          </PerspectiveCamera>
          {/* <GarageEnvironment /> */}
          <Effects importanceSampling={true} />
          <ContactShadows
            smooth={false}
            scale={200}
            position={[0, -4.5, 0]}
            blur={0.7}
            opacity={1.2}
          />
          <Environment
            files="/3D/scene.hdr"
            position={[0, 4, 0]}
            ground={{ height: 35, radius: 100, scale: 150 }}
          />
        </Canvas>
      </Suspense>
    </GarageSceneStyled.Container>
  );
};

export default GarageScene;
