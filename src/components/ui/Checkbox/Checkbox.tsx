import React from "react";

import { Styled } from "./Checkbox.styled";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: Error;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, checked, onChange, error, name, value }, ref) => {
    return (
      <Styled.Wrapper>
        <Styled.Input
          type="checkbox"
          error={error?.message}
          name={name}
          checked={checked}
          onChange={onChange}
          value={value}
          ref={ref}
        />
        <Styled.Label>{children}</Styled.Label>
      </Styled.Wrapper>
    );
  }
);
