import type {
  Elevation,
  FithubTheme,
  FontFamily,
  Radius,
  Spacing,
  Transition
} from '@emotion/react';

import { hexToRgba } from '@/utils/css';
import type { GetField } from '@/types/utils';

/////////////////////////////////////////////////////////////////////////////
// Font Family
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_FONT_FAMILY: FontFamily = {
  primary: 'Inter, Roboto, "San Francisco", Arial'
};

/////////////////////////////////////////////////////////////////////////////
// Typography
/////////////////////////////////////////////////////////////////////////////

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

// Fit Light Color
export const FITLIGHT50 = '#FFFAE5';
export const FITLIGHT100 = '#FFF6CC';
export const FITLIGHT200 = '#FFED99';
export const FITLIGHT300 = '#FFE366';
export const FITLIGHT400 = '#FFDA33';
export const FITLIGHT500 = '#FFD100';
export const FITLIGHT600 = '#CCA700';
export const FITLIGHT700 = '#997D00';
export const FITLIGHT800 = '#665400';
export const FITLIGHT900 = '#4D3F00';

// Fit Light Color
export const FITSKY50 = '#E8FAFB';
export const FITSKY100 = '#D2F4F6';
export const FITSKY200 = '#A5EAED';
export const FITSKY300 = '#78DFE5';
export const FITSKY400 = '#4BD5DC';
export const FITSKY500 = '#1ECAD3';
export const FITSKY550 = '#1BB6BE';
export const FITSKY600 = '#18A2A9';
export const FITSKY700 = '#12797F';
export const FITSKY800 = '#0C5154';
export const FITSKY900 = '#093D3F';

// Blue Color
export const BLUE50 = '#EBF5FF';
export const BLUE100 = '#D7EAFF';
export const BLUE200 = '#AED5FE';
export const BLUE300 = '#86C1FE';
export const BLUE400 = '#5DACFD';
export const BLUE500 = '#3597FD';
export const BLUE600 = '#2A79CA';
export const BLUE700 = '#205B98';
export const BLUE800 = '#153C65';
export const BLUE900 = '#102D4C';

// Green Color
export const GREEN50 = '#E8F7ED';
export const GREEN100 = '#D1F0DC';
export const GREEN200 = '#A3E1B9';
export const GREEN300 = '#76D196';
export const GREEN400 = '#48C273';
export const GREEN500 = '#1AB350';
export const GREEN600 = '#158F40';
export const GREEN700 = '#106B30';
export const GREEN800 = '#0A4820';
export const GREEN900 = '#083618';

// Red Color
export const RED50 = '#FFEEEB';
export const RED100 = '#FFDDD7';
export const RED200 = '#FFBBAF';
export const RED300 = '#FF9A88';
export const RED400 = '#FF7860';
export const RED500 = '#FF5638';
export const RED600 = '#CC452D';
export const RED700 = '#993422';
export const RED800 = '#662216';
export const RED900 = '#4D1A11';

// Orange Color
export const ORANGE50 = '#FFF6E5';
export const ORANGE100 = '#FFEDCC';
export const ORANGE200 = '#FFDB99';
export const ORANGE300 = '#FFC966';
export const ORANGE400 = '#FFB733';
export const ORANGE500 = '#FFA500';
export const ORANGE600 = '#CC8400';
export const ORANGE700 = '#996300';
export const ORANGE800 = '#664200';
export const ORANGE900 = '#4D3200';

// Orange Color
export const GRAY25 = '#F6F7F7';
export const GRAY50 = '#EEEEEE';
export const GRAY100 = '#DDDDDE';
export const GRAY200 = '#BBBBBD';
export const GRAY300 = '#989A9C';
export const GRAY400 = '#76787B';
export const GRAY500 = '#54565A';
export const GRAY600 = '#434548';
export const GRAY700 = '#323436';
export const GRAY800 = '#222224';
export const GRAY900 = '#101820';

const DEFAULT_COLOR: GetField<FithubTheme, 'color'> = {
  BLACK,
  BLUE100,
  BLUE200,
  BLUE300,
  BLUE400,
  BLUE50,
  BLUE500,
  BLUE600,
  BLUE700,
  BLUE800,
  BLUE900,
  FITLIGHT100,
  FITLIGHT200,
  FITLIGHT300,
  FITLIGHT400,
  FITLIGHT50,
  FITLIGHT500,
  FITLIGHT600,
  FITLIGHT700,
  FITLIGHT800,
  FITLIGHT900,
  FITSKY100,
  FITSKY200,
  FITSKY300,
  FITSKY400,
  FITSKY50,
  FITSKY500,
  FITSKY550,
  FITSKY600,
  FITSKY700,
  FITSKY800,
  FITSKY900,
  GRAY100,
  GRAY200,
  GRAY25,
  GRAY300,
  GRAY400,
  GRAY50,
  GRAY500,
  GRAY600,
  GRAY700,
  GRAY800,
  GRAY900,
  GREEN100,
  GREEN200,
  GREEN300,
  GREEN400,
  GREEN50,
  GREEN500,
  GREEN600,
  GREEN700,
  GREEN800,
  GREEN900,
  ORANGE100,
  ORANGE200,
  ORANGE300,
  ORANGE400,
  ORANGE50,
  ORANGE500,
  ORANGE600,
  ORANGE700,
  ORANGE800,
  ORANGE900,
  RED100,
  RED200,
  RED300,
  RED400,
  RED50,
  RED500,
  RED600,
  RED700,
  RED800,
  RED900,
  WHITE
};

/////////////////////////////////////////////////////////////////////////////
// Elevation Constant
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_ELEVATION: Elevation = {
  element: `0px 1px 2px 1px ${hexToRgba(GRAY900, 0.04)}`,
  lg: `0px 10px 32px 0px ${hexToRgba(GRAY900, 0.1)}, 0px 1px 3px 0px ${hexToRgba(GRAY900, 0.08)}`,
  md: `0px 2px 6px 0px ${hexToRgba(GRAY900, 0.06)}`,
  sm: `0px 0px 6px 0px ${hexToRgba(GRAY900, 0.06)}`,
  xl: `0px 10px 20px 0px ${hexToRgba(GRAY900, 0.16)}, 0px 1px 2px 0px ${hexToRgba(GRAY900, 0.04)}`
};

/////////////////////////////////////////////////////////////////////////////
// Border Radius
/////////////////////////////////////////////////////////////////////////////

export const RADIUS: Radius = {
  lg: 12,
  md: 8,
  sm: 4
};

/////////////////////////////////////////////////////////////////////////////
// Transition Constant
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_TRANSITION: Transition = {
  duration: '300ms',
  timingFunction: 'cubic-bezier(0.63, 0.01, 0.29, 1)'
};

export const FITHUB_DEFAULT_DASHBOARD_THEME: FithubTheme = {
  color: DEFAULT_COLOR,
  components: {},
  elevation: DEFAULT_ELEVATION,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontWeight: { regular: 400, strong: 650 },
  radius: RADIUS,
  spacing: DEFAULT_SPACING,
  transition: DEFAULT_TRANSITION,
  typography: {
    text_body_base: {
      fontSize: '14px',
      letterSpacing: '0.1px',
      lineHeight: '20px'
    },
    text_body_sm: {
      fontSize: '12px',
      letterSpacing: '0',
      lineHeight: '18px'
    },
    text_body_xs: {
      fontSize: '10px',
      letterSpacing: '0.1px',
      lineHeight: '14px'
    },
    text_heading_lg: {
      fontSize: '28px',
      letterSpacing: '-0.6px',
      lineHeight: '40px'
    },
    text_heading_md: {
      fontSize: '22px',
      letterSpacing: '-0.4px',
      lineHeight: '32px'
    },
    text_heading_sm: {
      fontSize: '18px',
      letterSpacing: '-0.3px',
      lineHeight: '24px'
    },
    text_heading_xl: {
      fontSize: '34px',
      letterSpacing: '-0.7px',
      lineHeight: '48px'
    },
    text_heading_xxl: {
      fontSize: '42px',
      letterSpacing: '-0.9px',
      lineHeight: '60px'
    }
  }
};

export const FITHUB_DEFAULT_LANDING_PAGE_THEME: FithubTheme = {
  color: DEFAULT_COLOR,
  components: {},
  elevation: DEFAULT_ELEVATION,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontWeight: { regular: 400, strong: 650 },
  radius: RADIUS,
  spacing: DEFAULT_SPACING,
  transition: DEFAULT_TRANSITION,
  typography: {
    text_body_base: {
      fontSize: '18px',
      letterSpacing: '-0.3px',
      lineHeight: '26px'
    },
    text_body_sm: {
      fontSize: '14px',
      letterSpacing: '-0.1',
      lineHeight: '20px'
    },
    text_body_xs: {
      fontSize: '12px',
      letterSpacing: '0',
      lineHeight: '18px'
    },
    text_heading_lg: {
      fontSize: '36px',
      letterSpacing: '-0.8px',
      lineHeight: '50px'
    },
    text_heading_md: {
      fontSize: '28px',
      letterSpacing: '-0.6px',
      lineHeight: '40px'
    },
    text_heading_sm: {
      fontSize: '22px',
      letterSpacing: '-0.4px',
      lineHeight: '32px'
    },
    text_heading_xl: {
      fontSize: '44px',
      letterSpacing: '-1px',
      lineHeight: '62px'
    },
    text_heading_xxl: {
      fontSize: '54px',
      letterSpacing: '-1.2px',
      lineHeight: '76px'
    }
  }
};
