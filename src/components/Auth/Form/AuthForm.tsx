import React from "react";

import { AuthFormStyled as Styled } from "./AuthForm.styled";
import { Input } from "components/ui/Input/Input";
import { Button } from "components/ui/Button/Button";
import { Icon } from "components/ui/Icon/Icon";
import { Spliter } from "components/ui/Spliter/Spliter";
import { Typography } from "components/ui/Typography/Typography";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../AuthProvider";

export const AuthForm: React.FC = () => {
  const { setToken } = useAuth();

  const login = useGoogleLogin({
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (response) => {
      console.log(response);
      setToken(response.access_token);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.InputWrapper>
        <Input placeholder="Email" />
      </Styled.InputWrapper>

      <Button>continue</Button>
      <Spliter color="muted" gap={48}>
        <Typography fontSize="button" color="muted">
          OR
        </Typography>
      </Spliter>
      <Styled.ButtonsWrapper>
        <Styled.Button variant="outline" onClick={() => login()}>
          <Icon name="googleAuth" size={40} />
        </Styled.Button>
        <Styled.Button variant="outline">
          <Icon name="mwAuth" size={40} />
        </Styled.Button>
        <Styled.Button variant="outline">
          <Icon name="wcAuth" size={40} />
        </Styled.Button>
        <Styled.Button variant="outline">
          <Icon name="epicAuth" size={40} />
        </Styled.Button>
      </Styled.ButtonsWrapper>
    </Styled.Form>
  );
};
