import { Html, useProgress } from "@react-three/drei";

export function LoaderComponent() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
