import { createGlobalStyle } from "styled-components";
import { reset } from "constants/reset";
import { normalize } from "constants/normalize";

const FONT_SIZE = {
  xs: "14px",
  sm: "16px",
  md: "32px",
  lg: "40px",
  xl: "48px",
  xxl: "64px",

  title: "56px",
  subtitle: "36px",

  button: "18px",
  input: "24px",
};

const FONT_WEIGHT = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
};

const COLOR = {
  primary: "#000000",
  white: "#ffffff",
  muted: "#BCBCBC",
  red: "#FF0000",

  "accent-100": "#FFC000",
  "accent-200": "#e5ad00",
  "accent-300": "#cc9a00",
  "accent-400": "#b28600",
  "accent-500": "#997300",
  "accent-600": "#806000",
  "accent-700": "#664d00",
  "accent-800": "#4c3a00",
  "accent-900": "#191300",
};

const BORDER_RADIUS = {
  small: "4px",
  medium: "15px",
  large: "20px",
  circle: "50%",
};

const FONT_FAMILY = {
  default: "Lambotype, sans-serif",
  condensed: "Lambotype Cnd, sans-serif",
  roboto: "Roboto, sans-serif",
  actor: "Actor, sans-serif",
};

export const theme = {
  fontSize: FONT_SIZE,
  fontWeight: FONT_WEIGHT,
  fontFamily: FONT_FAMILY,
  borderRadius: BORDER_RADIUS,
  color: COLOR,
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
  body {
    background: ${COLOR.primary};
    font-family: ${FONT_FAMILY.default};
    width: 100%;
    position: relative;
  }
`;
