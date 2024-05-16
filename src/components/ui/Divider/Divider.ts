import { TColor } from "constants/theme";
import styled, { css } from "styled-components";

interface IDividerProps {
  color?: TColor;
  gap?: number;
  skew?: boolean;
  size?: number;
}

export const Divider = styled.div<IDividerProps>`
  background-color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.white};
  height: ${({ size }) => size + "px" || "100%"};
  width: 1px;
  margin-left: ${({ gap }) => gap || 12}px;
  margin-right: ${({ gap }) => gap || 12}px;

  ${({ skew }) =>
    skew &&
    css`
      transform: skewX(45deg);
      background: linear-gradient(
        ${({ theme }) => theme.color["accent-800"]},
        ${({ theme }) => theme.color["accent-400"]},
        ${({ theme }) => theme.color["accent-100"]},
        ${({ theme }) => theme.color["accent-400"]},
        ${({ theme }) => theme.color["accent-800"]}
      );
      width: 2px;

      @media screen and (max-width: 768px) {
        transform: skewY(0);
        transform: rotate(90deg);
      }
    `}
`;
