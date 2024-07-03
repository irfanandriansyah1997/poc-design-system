import type { PropsWithChildren } from 'react';

import type { FithubTheme } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';

import { FITHUB_DEFAULT_DASHBOARD_THEME } from '@/constants/theme';

import GlobalStyles from '@/styles/global.style';

interface DesignSystemProviderProps {
  theme?: FithubTheme;
}

const DesignSystemProvider = (
  props: PropsWithChildren<DesignSystemProviderProps>
) => {
  const { children, theme = FITHUB_DEFAULT_DASHBOARD_THEME } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default DesignSystemProvider;
