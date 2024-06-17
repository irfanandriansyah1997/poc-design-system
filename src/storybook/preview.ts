import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

import { FITHUB_DEFAULT_THEME } from '@/constants/theme';

import GlobalStyles from '@/styles/global.style';

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles,
      Provider: ThemeProvider,
      themes: {
        dark: FITHUB_DEFAULT_THEME,
        light: FITHUB_DEFAULT_THEME
      }
    })
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  tags: ['autodocs']
};

export default preview;
