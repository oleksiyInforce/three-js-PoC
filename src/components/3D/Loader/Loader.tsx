import { Html, useProgress } from "@react-three/drei";

import { LoaderStyled } from "./Loader.styles";

export function LoaderComponent() {
  const { progress } = useProgress();
  return (
    <Html center style={{ color: "white" }}>
      <LoaderStyled />
    </Html>
  );
}
