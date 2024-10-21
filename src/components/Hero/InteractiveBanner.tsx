"use client";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, ThreeEvent, MeshProps } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { cn } from "@/utils/cn";
import { useI18n } from "@/locales/client";
import Loading from "../Common/Loading";

const SCENES = [
  { no: 0, title: "scene 0" },
  { no: 1, title: "scene 1" },
  { no: 2, title: "scene 2" },
];

export default function InteractiveBanner() {
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(true);
  const [sceneNo, setSceneNo] = useState<number>(0);

  const currentScene = SCENES[sceneNo];

  const t = useI18n();
  return (
    <>
      <div
        className={cn(
          "relative h-[80dvh] w-full ",
          "bg-gradient-to-b from-slate-300 via-transparent to-slate-400",
        )}
      >
        <h1
          className={cn(
            `${isOverlayVisible ? "text-white" : "text-primary"}`,
            "text-2xl font-medium  sm:text-3xl",
            // "absolute top-0 z-20",
          )}
        >
          Formenwerkstatt <span className="font-medium">{t("slogan")}</span>
        </h1>
        <pre>{currentScene.title}</pre>
        {isOverlayVisible && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70">
            <button
              onClick={() => setIsOverlayVisible(false)}
              className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-black transition-transform hover:scale-105"
            >
              Click to Explore 3D Scene
            </button>
          </div>
        )}
        <ThreeFiber />

        {/* CONTROLS */}
        <ControlButton
          className="absolute right-4 top-4 size-10 rounded-full text-xl"
          text="X"
          handleClick={() => setIsOverlayVisible(true)}
        />
        <ControlButton
          className="absolute bottom-4 right-4 size-10 rounded-full text-xl"
          text="?"
          handleClick={() => setIsOverlayVisible(true)}
        />

        <div
          className={cn(
            "absolute bottom-4 left-[50%] translate-x-[-50%]",
            "flex gap-4",
          )}
        >
          {sceneNo > 0 && (
            <ControlButton
              className={cn("size-10 rounded-lg text-xl")}
              text="◄"
              handleClick={() =>
                setSceneNo((sceneNo - 1 + SCENES.length) % SCENES.length)
              }
            />
          )}
          <ControlButton
            className={cn("size-10 rounded-lg text-xl")}
            text="►"
            handleClick={() => setSceneNo((sceneNo + 1) % SCENES.length)}
          />
        </div>
      </div>
    </>
  );
}

function ThreeFiber() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, 10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
}

function Box(props: MeshProps) {
  const ref = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 20; //Rotation around X Axis - Vertical Rotation
      ref.current.rotation.y += delta; //Rotation around Y Axis - Horizontal Rotation
    }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "orange" : "steelblue"} />
    </mesh>
  );
}

function Dog() {
  const { scene } = useGLTF("./models/dog.glb");

  return <primitive object={scene} scale={[1, 1, 1]} position={[0, 0, 0]} />;
}

function ControlButton({
  className,
  text,
  handleClick,
}: {
  className: string;
  text: string;
  handleClick: () => void;
}) {
  return (
    <button
      className={cn(
        " bg-primary  text-white opacity-30",
        "dark:bg-white dark:text-black",
        "transition-opacity duration-300 hover:opacity-100",
        `${className}`,
      )}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
