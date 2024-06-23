import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

import StorybookProvider from '@/context/StorybookPreview';

import {
  FITHUB_DEFAULT_DASHBOARD_THEME,
  FITHUB_DEFAULT_LANDING_PAGE_THEME
} from '@/constants/theme';

import GlobalStyles from '@/styles/global.style';

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles,
      Provider: StorybookProvider,
      themes: {
        Dashboard: FITHUB_DEFAULT_DASHBOARD_THEME,
        'Landing Page': FITHUB_DEFAULT_LANDING_PAGE_THEME
      }
    })
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: { toc: true },
    sidebar: {
      showRoots: false // Set to true if you want to show root level
    }
  },
  tags: ['autodocs']
};

export default preview;
