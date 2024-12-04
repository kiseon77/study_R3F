import "./App.css";
import { Canvas } from "@react-three/fiber";
import ThreeElement from "./ThreeElement";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
function App() {
  const color = useControls({ value: "white" });
  const grid = useControls({
    segment: { value: 10, min: 2, max: 100, step: 1 },
  });
  return (
    <>
      <Canvas
        // orthographic //2D 카메라
        camera={{
          // zoom: 250,
          near: 1,
          far: 20,
          fov: 100, //3D만 적용
          position: [3, 3, 0],
        }}
      >
        <color attach="background" args={[color.value]} />
        <OrbitControls
        // minAzimuthAngle={-Math.PI / 4} //회전 제한
        // maxAzimuthAngle={Math.PI / 4}
        // minPolarAngle={-Math.PI / 6}
        // maxPolarAngle={Math.PI - Math.PI / 6}
        />
        <axesHelper args={[5]} />
        <gridHelper args={[10, grid.segment]} />
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
