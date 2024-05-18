/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  CameraControls,
  Center,
  ContactShadows,
  Effects,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  Lightformer,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useEffect, useState } from "react";
import { LoaderComponent } from "../Loader/Loader";

import { GarageSceneStyled } from "./GarageScene.styled";
import { GarageFooter } from "./Footer/Footer";
import { Info } from "./Overlay/Info/Info";
import { IMAGES_MAP } from "constants/images";
import { Wallet } from "./Overlay/Wallet/Wallet";
import { GarageEnvironment } from "./Environment/Environment";

const importModels = async () => {
  const context = import.meta.glob("./Models/*.tsx"); // Adjust file extension based on your file types
  const keys = Object.keys(context);
  const modelComponents = await Promise.all(
    keys.map(async (key) => {
      const module = await context[key]();
      return module.default;
    })
  );
  return modelComponents;
};

const GarageScene = () => {
  const [models, setModels] = useState([]);
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  useEffect(() => {
    // Load all model components from the 'Models' folder
    importModels()
      .then((modelComponents) => {
        setModels(modelComponents);
      })
      .catch((error) => {
        console.error("Error loading models:", error);
      });
  }, []);

  const switchModel = (direction) => {
    if (models.length > 1) {
      let newIndex;
      if (direction === "forward") {
        newIndex = (currentModelIndex + 1) % models.length;
      } else if (direction === "backward") {
        newIndex = (currentModelIndex - 1 + models.length) % models.length;
      }
      setCurrentModelIndex(newIndex);
    }
  };
  const modelCenter = new THREE.Vector3();

  const renderCurrentModel = () => {
    if (models.length > 0) {
      const ModelComponent = models[currentModelIndex];
      return <ModelComponent position={modelCenter} />;
    }
    return null;
  };

  return (
    <GarageSceneStyled.Container>
      <GarageFooter
        models={models}
        switchCar={switchModel}
        selectedIndex={currentModelIndex}
      />
      <Wallet src={IMAGES_MAP["wallet"]} />
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
            />
          </PerspectiveCamera>
          <GarageEnvironment />
          <Effects importanceSampling={true} />
          <ContactShadows
            smooth={false}
            scale={200}
            position={[0, -4.5, 0]}
            blur={0.7}
            opacity={2}
          />
          <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_lagoon_night_1k.hdr" />
        </Canvas>
      </Suspense>
    </GarageSceneStyled.Container>
  );
};

export default GarageScene;
