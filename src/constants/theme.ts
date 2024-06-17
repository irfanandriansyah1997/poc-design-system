import type {
  CustomTypography,
  FontFamily,
  Spacing,
  Theme,
  Transition
} from '@emotion/react';

/////////////////////////////////////////////////////////////////////////////
// Font Family
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_FONT_FAMILY: FontFamily = {
  primary: 'Inter, Roboto, "San Francisco", Arial'
};

/////////////////////////////////////////////////////////////////////////////
// Typography
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_DISPLAY1_TYPOGRAPHY: CustomTypography = {
  fontSize: '72px',
  letterSpacing: '-0.022em',
  lineHeight: '94.5px',
  weight: 700
};

export const DEFAULT_DISPLAY2_TYPOGRAPHY: CustomTypography = {
  fontSize: '60px',
  letterSpacing: '-0.022em',
  lineHeight: '72.5px',
  weight: 700
};

export const DEFAULT_DISPLAY3_TYPOGRAPHY: CustomTypography = {
  fontSize: '48px',
  letterSpacing: '-0.022em',
  lineHeight: '58px',
  weight: 700
};

export const DEFAULT_HEADING1_TYPOGRAPHY: CustomTypography = {
  fontSize: '40px',
  letterSpacing: '-0.022em',
  lineHeight: '48.5px',
  weight: 600
};

export const DEFAULT_HEADING2_TYPOGRAPHY: CustomTypography = {
  fontSize: '32px',
  letterSpacing: '-0.022em',
  lineHeight: '38.5px',
  weight: 600
};

export const DEFAULT_HEADING3_TYPOGRAPHY: CustomTypography = {
  fontSize: '24px',
  letterSpacing: '-0.019em',
  lineHeight: '29.5px',
  weight: 600
};

export const DEFAULT_HEADING4_TYPOGRAPHY: CustomTypography = {
  fontSize: '20px',
  letterSpacing: '-0.017em',
  lineHeight: '24.5px',
  weight: 600
};

export const DEFAULT_HEADING5_TYPOGRAPHY: CustomTypography = {
  fontSize: '16px',
  letterSpacing: '-0.011em',
  lineHeight: '19.5px',
  weight: 600
};

export const DEFAULT_HEADING6_TYPOGRAPHY: CustomTypography = {
  fontSize: '14px',
  letterSpacing: '-0.006em',
  lineHeight: '17px',
  weight: 600
};

export const DEFAULT_BODY1_TYPOGRAPHY: CustomTypography = {
  fontSize: '16px',
  letterSpacing: '-0.011em',
  lineHeight: '19.5px',
  weight: 400
};

export const DEFAULT_BODY2_TYPOGRAPHY: CustomTypography = {
  fontSize: '14px',
  letterSpacing: '-0.006em',
  lineHeight: '17px',
  weight: 400
};

export const DEFAULT_BODY3_TYPOGRAPHY: CustomTypography = {
  fontSize: '12px',
  letterSpacing: '0.01em',
  lineHeight: '14.5px',
  weight: 400
};

export const DEFAULT_UI1_TYPOGRAPHY: CustomTypography = {
  fontSize: '24px',
  letterSpacing: '-0.019em',
  lineHeight: '29.5px',
  weight: 500
};

export const DEFAULT_UI2_TYPOGRAPHY: CustomTypography = {
  fontSize: '12px',
  letterSpacing: '0.01em',
  lineHeight: '14.5px',
  weight: 500
};

export const DEFAULT_UI3_TYPOGRAPHY: CustomTypography = {
  fontSize: '10px',
  letterSpacing: '0.01em',
  lineHeight: '12px',
  weight: 500
};

export const DEFAULT_CAPTION_TYPOGRAPHY: CustomTypography = {
  fontSize: '10px',
  letterSpacing: '0.01em',
  lineHeight: '12px',
  weight: 400
};

/////////////////////////////////////////////////////////////////////////////
// Spacing Constant
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_SPACING: Spacing = {
  lg: '16px',
  md: '12px',
  sm: '8px',
  xl: '24px',
  xs: '4px',
  xxl: '32px'
};

/////////////////////////////////////////////////////////////////////////////
// Color Constant
/////////////////////////////////////////////////////////////////////////////

// Common Color
export const WHITE = '#FFFFFF';
export const BLACK = '#000000';

// Gray Color
export const GRAY100 = '#F3F5F6';
export const GRAY200 = '#E8EAEE';
export const GRAY300 = '#C5C8CD';
export const GRAY400 = '#94979C';
export const GRAY500 = '#54565A';
export const GRAY600 = '#3D424D';
export const GRAY700 = '#2A3040';
export const GRAY800 = '#1A2034';
export const GRAY900 = '#101820';

// Blue Color
export const BLUE100 = '#C6EFF7';
export const BLUE200 = '#90DBF0';
export const BLUE300 = '#54B0D2';
export const BLUE400 = '#297CA6';
export const BLUE500 = '#00416B';
export const BLUE600 = '#00325C';
export const BLUE700 = '#00254D';
export const BLUE800 = '#001A3E';
export const BLUE900 = '#001233';

// Secondary Color
export const SECONDARY100 = '#FFF2C4';
export const SECONDARY200 = '#FFE689';
export const SECONDARY300 = '#FFDB47';
export const SECONDARY400 = '#FFE03F';
export const SECONDARY500 = '#FFD100';
export const SECONDARY600 = '#DBAF00';
export const SECONDARY700 = '#B78F00';
export const SECONDARY800 = '#937000';
export const SECONDARY900 = '#7A5B00';

// Main Color
export const MAIN100 = '#D4F1F3';
export const MAIN200 = '#A7E4E8';
export const MAIN300 = '#74D7DE';
export const MAIN400 = '#51E4DF';
export const MAIN500 = '#1ECAD3';
export const MAIN600 = '#15A0B5';
export const MAIN700 = '#0F7A97';
export const MAIN800 = '#09587A';
export const MAIN900 = '#054065';

// Success Color
export const SUCCESS100 = '#E6FCE9';
export const SUCCESS200 = '#CEF9D7';
export const SUCCESS300 = '#B0EDC3';
export const SUCCESS400 = '#95DCB2';
export const SUCCESS500 = '#71C59C';
export const SUCCESS600 = '#4EAB87';
export const SUCCESS700 = '#388D75';
export const SUCCESS800 = '#388D75';
export const SUCCESS900 = '#155E58';

// Info Color
export const INFO100 = '#D6E6FD';
export const INFO200 = '#ADCCFC';
export const INFO300 = '#83ACF6';
export const INFO400 = '#6290EE';
export const INFO500 = '#3267E3';
export const INFO600 = '#244FC3';
export const INFO700 = '#193AA3';
export const INFO800 = '#0F2783';
export const INFO900 = '#091B6C';

// Warning Color
export const WARNING100 = '#FEF0CC';
export const WARNING200 = '#FEDD9A';
export const WARNING300 = '#FDC567';
export const WARNING400 = '#FBAD41';
export const WARNING500 = '#F98704';
export const WARNING600 = '#D66902';
export const WARNING700 = '#B35002';
export const WARNING800 = '#903901';
export const WARNING900 = '#772A00';

// Danger Color
export const DANGER100 = '#FDEBDF';
export const DANGER200 = '#FCD2C0';
export const DANGER300 = '#F7B29E';
export const DANGER400 = '#F09484';
export const DANGER500 = '#E7655D';
export const DANGER600 = '#C64347';
export const DANGER700 = '#A62E3B';
export const DANGER800 = '#851D31';
export const DANGER900 = '#6E112B';

/////////////////////////////////////////////////////////////////////////////
// Transition Constant
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_TRANSITION: Transition = {
  duration: '300ms',
  timingFunction: 'cubic-bezier(0.63, 0.01, 0.29, 1)'
};

export const FITHUB_DEFAULT_THEME: Theme = {
  color: {
    BLACK,
    BLUE100,
    BLUE200,
    BLUE300,
    BLUE400,
    BLUE500,
    BLUE600,
    BLUE700,
    BLUE800,
    BLUE900,
    DANGER100,
    DANGER200,
    DANGER300,
    DANGER400,
    DANGER500,
    DANGER600,
    DANGER700,
    DANGER800,
    DANGER900,
    GRAY100,
    GRAY200,
    GRAY300,
    GRAY400,
    GRAY500,
    GRAY600,
    GRAY700,
    GRAY800,
    GRAY900,
    INFO100,
    INFO200,
    INFO300,
    INFO400,
    INFO500,
    INFO600,
    INFO700,
    INFO800,
    INFO900,
    MAIN100,
    MAIN200,
    MAIN300,
    MAIN400,
    MAIN500,
    MAIN600,
    MAIN700,
    MAIN800,
    MAIN900,
    SECONDARY100,
    SECONDARY200,
    SECONDARY300,
    SECONDARY400,
    SECONDARY500,
    SECONDARY600,
    SECONDARY700,
    SECONDARY800,
    SECONDARY900,
    SUCCESS100,
    SUCCESS200,
    SUCCESS300,
    SUCCESS400,
    SUCCESS500,
    SUCCESS600,
    SUCCESS700,
    SUCCESS800,
    SUCCESS900,
    WARNING100,
    WARNING200,
    WARNING300,
    WARNING400,
    WARNING500,
    WARNING600,
    WARNING700,
    WARNING800,
    WARNING900,
    WHITE
  },
  components: {},
  fontFamily: DEFAULT_FONT_FAMILY,
  spacing: DEFAULT_SPACING,
  transition: DEFAULT_TRANSITION,
  typography: {
    body1: DEFAULT_BODY1_TYPOGRAPHY,
    body2: DEFAULT_BODY2_TYPOGRAPHY,
    body3: DEFAULT_BODY3_TYPOGRAPHY,
    caption: DEFAULT_CAPTION_TYPOGRAPHY,
    display1: DEFAULT_DISPLAY1_TYPOGRAPHY,
    display2: DEFAULT_DISPLAY2_TYPOGRAPHY,
    display3: DEFAULT_DISPLAY3_TYPOGRAPHY,
    heading1: DEFAULT_HEADING1_TYPOGRAPHY,
    heading2: DEFAULT_HEADING2_TYPOGRAPHY,
    heading3: DEFAULT_HEADING3_TYPOGRAPHY,
    heading4: DEFAULT_HEADING4_TYPOGRAPHY,
    heading5: DEFAULT_HEADING5_TYPOGRAPHY,
    heading6: DEFAULT_HEADING6_TYPOGRAPHY,
    ui1: DEFAULT_UI1_TYPOGRAPHY,
    ui2: DEFAULT_UI2_TYPOGRAPHY,
    ui3: DEFAULT_UI3_TYPOGRAPHY
  }
};
