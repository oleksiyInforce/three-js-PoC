import styled, { css } from "styled-components";

import {
  TColor,
  TFontFamily,
  TFontSize,
  TFontWeight,
  TGradient,
} from "constants/theme";

type TextAlign = "left" | "center" | "right";

type FontStyle = "normal" | "italic";

interface ITypographyProps {
  color?: TColor;
  fontSize?: TFontSize;
  fontWeight?: TFontWeight;
  textAlign?: TextAlign;
  fontFamily?: TFontFamily;
  gradient?: TGradient;
  fontStyle?: FontStyle;
  uppercase?: boolean;
}

export const Typography = styled.p<ITypographyProps>`
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.white};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fontSize[fontSize] : theme.fontSize.md};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? theme.fontWeight[fontWeight] : theme.fontWeight.regular};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-family: ${({ theme, fontFamily }) =>
    fontFamily ? theme.fontFamily[fontFamily] : theme.fontFamily.default};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};

  line-height: 1.4;

  ${({ gradient }) =>
    gradient &&
    css`
      background: linear-gradient(90deg, ${gradient.from}, ${gradient.to});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;
