import '@emotion/react';

declare module '@emotion/react' {
  /////////////////////////////////////////////////////////////////////////////
  // Typography Generic
  /////////////////////////////////////////////////////////////////////////////
  export interface FontFamily {
    primary: string;
    secondary?: string;
  }

  export interface CustomTypography {
    fontSize: number | string;
    letterSpacing: string;
    lineHeight: string;
  }

  export interface FontWeight {
    regular: number;
    strong: number;
  }

  export interface TypographyModifier {
    bodyBase: CustomTypography;
    bodySM: CustomTypography;
    bodyXS: CustomTypography;
    headingLG: CustomTypography;
    headingMD: CustomTypography;
    headingSM: CustomTypography;
    headingXL: CustomTypography;
    headingXXL: CustomTypography;
  }

  /////////////////////////////////////////////////////////////////////////////
  // Color Generic
  /////////////////////////////////////////////////////////////////////////////

  type Increments =
    | 25
    | 50
    | 100
    | 200
    | 300
    | 400
    | 500
    | 550
    | 600
    | 700
    | 800
    | 900;

  type GenericColor<T extends string> = {
    [K in Increments as `${T}${K}`]?: string;
  };

  export type FitLightColor = GenericColor<'FITLIGHT'>;
  export type FitSkyColor = GenericColor<'FITSKY'>;
  export type BlueColor = GenericColor<'BLUE'>;
  export type GreenColor = GenericColor<'GREEN'>;
  export type RedColor = GenericColor<'RED'>;
  export type OrangeColor = GenericColor<'ORANGE'>;
  export type GrayColor = GenericColor<'GRAY'>;

  export interface CommonColor {
    BLACK?: string;
    WHITE?: string;
  }

  /////////////////////////////////////////////////////////////////////////////
  // Spacing Types
  /////////////////////////////////////////////////////////////////////////////

  export interface Spacing {
    lg: string | number;
    md: string | number;
    sm: string | number;
    xl: string | number;
    xs: string | number;
    xxl: string | number;
  }

  /////////////////////////////////////////////////////////////////////////////
  // Transition Types
  /////////////////////////////////////////////////////////////////////////////

  export interface Transition {
    duration: string;
    timingFunction: string;
  }

  /////////////////////////////////////////////////////////////////////////////
  // Elevation Types (Box Shadow)
  /////////////////////////////////////////////////////////////////////////////

  export interface Elevation {
    element: string;
    lg: string;
    md: string;
    sm: string;
    xl: string;
  }

  interface Color
    extends FitLightColor,
      FitSkyColor,
      BlueColor,
      GreenColor,
      RedColor,
      OrangeColor,
      GrayColor,
      CommonColor {}

  export interface Theme {
    color: Color;
    components: {
      // TODO: for theming custom components
    };
    elevation: Elevation;
    fontFamily: FontFamily;
    fontWeight: FontWeight;
    spacing: Spacing;
    transition: Transition;
    typography: TypographyModifier;
  }
}
