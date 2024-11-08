import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";
import { Clone, OrbitControls, Text, useGLTF } from "@react-three/drei";
import { FaArrowsRotate } from "react-icons/fa6";
import { BiExpand } from "react-icons/bi";
import ControlButton from "./ControlButton";

export default function ThreeFiberScene() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isReset, setIsReset] = useState(true);
  const modelPositions = useRef([
    new Vector3(0, 0.5, 0),
    new Vector3(0, 0, 0),
    new Vector3(0, 0, 2),
    new Vector3(0, 0, -2),
    new Vector3(0, 2, 0),
  ]);
  const resetPositions = useRef([
    new Vector3(0, 0, 0),
    new Vector3(0, 0, 0),
    new Vector3(0, 0, 0),
    new Vector3(0, 0, 0),
    new Vector3(0, 0, 0),
  ]);

  const handleButtonClick = () => {
    setIsAnimating((prev) => !prev);
  };

  const handleResetClick = () => {
    setIsReset((prev) => !prev);
  };

  return (
    <>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, 10, -10]} decay={0} intensity={Math.PI} />
        <Scene
          isAnimating={isAnimating}
          isReset={isReset}
          modelPositions={modelPositions.current}
          resetPositions={resetPositions.current}
        />
        <OrbitControls />
      </Canvas>
      <div className="absolute right-16 top-4 flex gap-2 text-white">
        <ControlButton
          className="flex items-center justify-center "
          handleClick={handleButtonClick}
        >
          <FaArrowsRotate />
        </ControlButton>
        <ControlButton
          className="flex items-center justify-center "
          handleClick={handleResetClick}
        >
          <BiExpand />
        </ControlButton>
      </div>
    </>
  );
}

function Scene({
  isAnimating,
  isReset,
  modelPositions,
  resetPositions,
}: {
  isAnimating: boolean;
  isReset: boolean;
  modelPositions: Vector3[];
  resetPositions: Vector3[];
}) {
  const modelGroupRef = useRef<Group>(null);
  const [modelRotation, setModelRotation] = useState(0);

  useFrame((state, delta) => {
    if (modelGroupRef.current) {
      // Rotate the entire model group
      setModelRotation(
        (prevRotation) => prevRotation + (delta / 2) * (isAnimating ? 1 : 0),
      );
      modelGroupRef.current.rotation.y = modelRotation;

      modelGroupRef.current.position.lerp(
        isReset ? new Vector3(0, 0, 0) : new Vector3(0, 0, 1),
        0.03,
      );

      // Update the position of each model within the group
      modelPositions.forEach((pos, index) => {
        modelGroupRef.current?.children[index].position.lerp(
          isReset ? resetPositions[index] : pos,
          0.03,
        );
      });
    }
  });

  return (
    <>
      <group ref={modelGroupRef} position={[0, -0.5, 0]}>
        {modelPositions.map((pos, index) => (
          <>
            <Model
              key={index}
              position={pos}
              model={`/models/mold-${index + 1}.glb`}
            />
            {/* <Text
              maxWidth={1}
              anchorX="left"
              anchorY="top"
              position={[index, 0, 0]}
              rotation={[0, 0, 0]}
              fontSize={1}
              color="black"
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </Text> */}
          </>
        ))}
      </group>
    </>
  );
}

function Model({
  model,
  position = new Vector3(),
}: {
  model: string;
  position?: Vector3;
}) {
  const { scene } = useGLTF(model);
  const ref = useRef<Group>(null);

  return (
    <>
      <Clone
        ref={ref}
        object={scene}
        position={position}
        rotation={[0, 0, 0]}
        scale={new Vector3(10, 10, 10)}
        castShadow
      />
    </>
  );
}
