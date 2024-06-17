import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-themes'
  ],
  framework: '@storybook/react-webpack5',
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      config.module.rules.push({
        exclude: /node_modules(?!\/@amplio)/,
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                [
                  '@emotion',
                  {
                    autoLabel: 'never',
                    cssPropOptimization: true,
                    labelFormat: '[local]',
                    sourceMap: true
                  }
                ]
              ],
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  { importSource: '@emotion/react', runtime: 'automatic' }
                ],
                '@babel/preset-typescript'
              ]
            }
          }
        ]
      });
    }

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../')
      };
    }

    config.resolve?.extensions?.push('.ts', '.tsx');

    return config;
  }
};
export default config;
