import React from "react";

import { AuthStyled as Styled } from "./Auth.styled";
import { Typography } from "components/ui/Typography/Typography";
import { AuthForm } from "./Form/AuthForm";

export const Auth: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Typography fontFamily="condensed" fontSize="subtitle">
        SIGN IN OR SIGN UP
      </Typography>
      <Typography fontSize="xl" fontWeight="black">
        FAST
        <Typography
          as={"span"}
          fontSize="xl"
          fontWeight="black"
          fontStyle="italic"
          gradient={{ from: "#FFC000", to: "#917300" }}
          style={{ marginLeft: 6 }}
          uppercase
        >
          FORWORLD
        </Typography>
      </Typography>
      <AuthForm />
    </Styled.Wrapper>
  );
};
