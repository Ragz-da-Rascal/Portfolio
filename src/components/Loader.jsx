import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        className="
          text-[24px]
          text-primary
          font-weight-[800px]
          mt-[40px]
        ">{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader;