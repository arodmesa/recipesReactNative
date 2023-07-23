type Shade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950
  | "focus"
  | "content"
  | "DEFAULT"
  | "borderFocus";

type Color = Record<Shade, string>;
type Colors = {
  primary: Color;
  secondary: Color;
  terciary: Color;
  neutral: Color;
  base: {
    100: string;
    200: string;
    300: string;
    content: string;
  };
  election: {
    DEFAULT: string;
    200: string;
    500: string;
    content: string;
    borderFocus: string;
  }[];
};

export type Theme = {
  colors: Colors;
  fontFamily: {
    sans: string;
  };
};

export const theme: Theme = require("./theme");
export const colorsTheme = theme.colors;
export const fontTheme = theme.fontFamily;
