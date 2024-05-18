import { TColor } from "constants/theme";
import styled from "styled-components";

interface IIconProps {
  size?: number;
  color?: TColor;
  onClick?: () => void;
}

export const IconStyled = styled.img<IIconProps>`
  height: ${({ size }) => size || 24}px;
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.white};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};

  object-fit: contain;
`;
