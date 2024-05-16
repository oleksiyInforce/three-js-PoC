import React from "react";

import { Styled } from "./Input.styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: Error;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, value, onChange, placeholder }, ref) => {
    return (
      <Styled.Wrapper error={error?.message}>
        <Styled.Input
          ref={ref}
          error={error?.message}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && <Styled.ErrorText>{error.message}</Styled.ErrorText>}
      </Styled.Wrapper>
    );
  }
);
