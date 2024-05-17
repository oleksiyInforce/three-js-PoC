import React from "react";

import { NavigationItemStyled as Styled } from "./NavigationItem.styled";

interface IHeaderNavigationProps {
  children?: React.ReactNode;
  color?: string;
}

export const NavigationItem: React.FC<IHeaderNavigationProps> = ({
  children,
  color,
}) => {
  return <Styled.Wrapper $color={color}>{children}</Styled.Wrapper>;
};
