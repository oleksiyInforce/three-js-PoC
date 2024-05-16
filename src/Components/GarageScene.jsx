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
} from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";

const importModels = async () => {
  const context = import.meta.glob("./Models/*.jsx"); // Adjust file extension based on your file types
  console.log(context);
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
        console.log(modelComponents);
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
      console.log(models);
      return <ModelComponent position={modelCenter} />;
    }
    return null;
  };

  return (
    <div
      id="canvas-container"
      className="w-full h-full canvas-container bg-white bg-opacity-70"
    >
      <div className="buttons-container">
        <button
          className="switch-model-button"
          onClick={() => switchModel("backward")}
        >
          Previous Model
        </button>
        <button
          className="switch-model-button"
          onClick={() => switchModel("forward")}
        >
          Next Model
        </button>
      </div>
      <Canvas
        className="absolute sticky"
        shadows
        camera={{ position: [200, 0, 20], fov: 35 }}
      >
        <group position={[0, 0, 0]} scale={[10, 10, 10]}>
          <Center>{renderCurrentModel()}</Center>
          <AccumulativeShadows>
            <RandomizedLight position={[2, 5, 5]} />
          </AccumulativeShadows>
        </group>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.25}
          makeDefault
        />
        <PerspectiveCamera
          makeDefault
          position={[modelCenter.x + 45, modelCenter.y, modelCenter.z + 10]}
          fov={80}
        />
        <Effects importanceSampling={true} />
        <Environment
          files="/buikslotermeerplein_2k.hdr"
          position={[0, 5, 0]}
          ground={{ height: 35, radius: 100, scale: 200 }}
        />
        <ContactShadows
          smooth={false}
          scale={150}
          position={[0, -5.05, 0]}
          blur={0.5}
          opacity={0.75}
        />
        <CameraControls
          makeDefault
          dollyToCursor
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default GarageScene;
