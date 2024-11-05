import { useRef, useState } from "react";
import { Canvas, useFrame, MeshProps } from "@react-three/fiber";
import { Group, Mesh } from "three";
import { Clone, OrbitControls, useGLTF } from "@react-three/drei";

const RADIUS = 8;
const arr = [0, 1, 2];

interface ModelProps {
  model: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export default function ThreeFiber() {
  useGLTF.preload("/models/caliper.glb");

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

      {arr.map((item, index) => {
        const angle = (Math.PI / (arr.length - 1)) * index;

        const posX = -RADIUS * Math.cos(angle);
        const posZ = -RADIUS * Math.sin(angle);

        return index % 2 !== 0 ? (
          <Model
            key={item}
            model="/models/caliper.glb"
            position={[posX, 1.5, posZ]}
          />
        ) : (
          <Box position={[posX, 0, posZ - 2]} key={item} />
        );
      })}

      <OrbitControls />
    </Canvas>
  );
}

function Model({
  model,
  position = [0, 2, 0],
  rotation = [0.57, 0, 30],
  scale = [0.2, 0.2, 0.2],
}: ModelProps) {
  const { scene } = useGLTF(model);
  const ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 2;
    }
  });

  return (
    <Clone
      ref={ref}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

function Box(props: MeshProps) {
  const ref = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    if (ref.current) {
      // ref.current.rotation.x += delta / 20; //Rotation around X Axis - Vertical Rotation
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
