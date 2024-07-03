import type { PropsWithChildren } from 'react';

import type { FithubTheme } from '@emotion/react';

import DesignSystemProvider from '@/context/DesignSystem';

import Snackbar from '@/components/Snackbar';

import { FITHUB_DEFAULT_DASHBOARD_THEME } from '@/constants/theme';

interface StorybookPreviewProviderProps {
  theme?: FithubTheme;
}

const StorybookProvider = (
  props: PropsWithChildren<StorybookPreviewProviderProps>
) => {
  const { children, theme = FITHUB_DEFAULT_DASHBOARD_THEME } = props;

  return (
    <DesignSystemProvider theme={theme}>
      <Snackbar.Provider>{children}</Snackbar.Provider>
    </DesignSystemProvider>
  );
};

export default StorybookProvider;
