import React from "react";

import { AuthStyled as Styled } from "./Auth.styled";
import { Auth } from "components/Auth/Auth";

export const AuthPage: React.FC = () => {
  return (
    <Styled.Container>
      <Auth />
    </Styled.Container>
  );
};
