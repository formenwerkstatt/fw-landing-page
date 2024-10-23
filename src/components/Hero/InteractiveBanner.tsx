"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame, MeshProps, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { cn } from "@/utils/cn";
import { useI18n } from "@/locales/client";

const SCENES = [
  { no: 0, title: "scene 0" },
  { no: 1, title: "scene 1" },
  { no: 2, title: "scene 2" },
];

export default function InteractiveBanner() {
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(true);
  const [isHelpVisible, setIsHelpVisible] = useState<boolean>(false);
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
        {isOverlayVisible ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-12 bg-black/70">
            <h1
              className={cn(
                `${isOverlayVisible ? "text-white" : "text-primary"}`,
                "text-4xl font-bold",
              )}
            >
              {t("slogan")}
            </h1>
            <button
              onClick={() => setIsOverlayVisible(false)}
              className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-black transition-transform hover:scale-105"
            >
              {t("cta")}
            </button>
          </div>
        ) : (
          <ThreeFiber />
        )}

        {isHelpVisible && (
          <div
            className={cn(
              "w-[200px] text-balance bg-white text-center text-black",
              "rounded-lg p-4",
              "absolute bottom-[10%] right-4  shadow-lg",
            )}
          >
            <p>{t("help")}</p>
          </div>
        )}
        {/* CONTROLS */}
        <ControlButton
          className="absolute right-4 top-4 size-10 rounded-full text-xl"
          text="X"
          handleClick={() => setIsOverlayVisible(true)}
        />
        <ControlButton
          className="absolute bottom-4 right-4 size-10 rounded-full text-xl"
          text="?"
          handleClick={() => setIsHelpVisible(!isHelpVisible)}
        />
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

      {/* <Box position={[0, 0, 0]} /> */}
      <Caliper />

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

function Caliper() {
  const ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      // ref.current.rotation.x += delta / 20; //Rotation around X Axis - Vertical Rotation
      ref.current.rotation.y += delta; //Rotation around Y Axis - Horizontal Rotation
    }
  });

  const geometry = useLoader(STLLoader, "./models/caliper.stl");

  return (
    <mesh
      ref={ref}
      geometry={geometry}
      position={[0, 2.3, 0]}
      scale={[0.2, 0.2, 0.2]}
      rotation={[0, 0, 30]}
    >
      <meshStandardMaterial color="gray" wireframe={false} />
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
