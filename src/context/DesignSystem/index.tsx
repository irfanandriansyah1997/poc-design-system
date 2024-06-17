import type { PropsWithChildren } from 'react';

import type { Theme } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';

import { FITHUB_DEFAULT_THEME } from '@/constants/theme';

import GlobalStyles from '@/styles/global.style';

interface DesignSystemProviderProps {
  theme?: Theme;
}

const DesignSystemProvider = (
  props: PropsWithChildren<DesignSystemProviderProps>
) => {
  const { children, theme = FITHUB_DEFAULT_THEME } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default DesignSystemProvider;
