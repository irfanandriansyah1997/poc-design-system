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
    weight: 700 | 600 | 500 | 400;
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
    | 600
    | 700
    | 800
    | 900;

  type GenericColor<T extends string> = {
    [K in Increments as `${T}${K}`]?: string;
  };

  export type MainColor = GenericColor<'MAIN'>;
  export type SecondaryColor = GenericColor<'SECONDARY'>;
  export type BlueColor = GenericColor<'BLUE'>;
  export type GrayColor = GenericColor<'GRAY'>;
  export type SuccessColor = GenericColor<'SUCCESS'>;
  export type InfoColor = GenericColor<'INFO'>;
  export type WarningColor = GenericColor<'WARNING'>;
  export type DangerColor = GenericColor<'DANGER'>;

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

  export interface Theme {
    color: MainColor &
      SecondaryColor &
      BlueColor &
      GrayColor &
      SuccessColor &
      InfoColor &
      WarningColor &
      DangerColor &
      CommonColor;
    components: {
      // TODO: for theming custom components
    };
    fontFamily: FontFamily;
    spacing: Spacing;
    transition: Transition;
    typography: {
      body1: CustomTypography;
      body2: CustomTypography;
      body3: CustomTypography;
      caption: CustomTypography;
      display1: CustomTypography;
      display2: CustomTypography;
      display3: CustomTypography;
      heading1: CustomTypography;
      heading2: CustomTypography;
      heading3: CustomTypography;
      heading4: CustomTypography;
      heading5: CustomTypography;
      heading6: CustomTypography;
      ui1: CustomTypography;
      ui2: CustomTypography;
      ui3: CustomTypography;
    };
  }
}

// You are also able to use a 3rd party theme this way:
import type { LibTheme } from 'some-lib';

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}
