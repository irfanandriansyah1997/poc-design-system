import type { PropsWithChildren } from 'react';

import type { Theme } from '@emotion/react';

import DesignSystemProvider from '@/context/DesignSystem';

import Toaster from '@/components/Toaster';

import { FITHUB_DEFAULT_DASHBOARD_THEME } from '@/constants/theme';

interface StorybookPreviewProviderProps {
  theme?: Theme;
}

const StorybookProvider = (
  props: PropsWithChildren<StorybookPreviewProviderProps>
) => {
  const { children, theme = FITHUB_DEFAULT_DASHBOARD_THEME } = props;

  return (
    <DesignSystemProvider theme={theme}>
      <Toaster.Provider>{children}</Toaster.Provider>
    </DesignSystemProvider>
  );
};

export default StorybookProvider;
