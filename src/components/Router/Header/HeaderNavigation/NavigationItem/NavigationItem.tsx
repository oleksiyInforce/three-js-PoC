import React from "react";

import { NavigationItemStyled as Styled } from "./NavigationItem.styled";

interface IHeaderNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  color?: string;
}

export const NavigationItem: React.FC<IHeaderNavigationProps> = ({
  children,
  color,
  ...props
}) => {
  return (
    <Styled.Wrapper $color={color} {...props}>
      {children}
    </Styled.Wrapper>
  );
};
