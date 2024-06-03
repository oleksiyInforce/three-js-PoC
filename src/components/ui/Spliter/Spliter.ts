import { TColor } from "constants/theme";
import styled from "styled-components";

interface IDividerProps {
  color?: TColor;
  gap?: number;
}

export const Spliter = styled.div<IDividerProps>`
  background-color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.white};
  width: 100%;
  height: 2px;
  margin: ${({ gap }) => gap || 12}px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  * {
    background-color: ${({ theme }) => theme.color.foreground};
    padding: 0 16px;
  }
`;
