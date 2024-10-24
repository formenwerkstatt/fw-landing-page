import { useRef, useState } from "react";
import { Canvas, useFrame, MeshProps, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

export default function ThreeFiber() {
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

function Caliper() {
  const { scene } = useGLTF("./models/caliper.glb");

  const ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      // ref.current.rotation.x += delta / 20; //Rotation around X Axis - Vertical Rotation
      ref.current.rotation.y += delta; //Rotation around Y Axis - Horizontal Rotation
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[0.2, 0.2, 0.2]}
      position={[0, 2, 0]}
      rotation={[0.57, 0, 30]}
    />
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
