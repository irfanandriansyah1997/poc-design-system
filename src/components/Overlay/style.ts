import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { hexToRgba } from '@/utils/css';

import { keyframeFadeIn, keyframeFadeOut } from '@/styles/animation.style';

export const styOverlay = (props: Theme) => {
  const { color } = props;

  return css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 40;
    background-color: ${hexToRgba(`${color.GRAY500}`, 0.5)};
    animation-name: ${keyframeFadeOut};
    animation-duration: 0.15s;

    &[data-show='true'] {
      animation-name: ${keyframeFadeIn};
      animation-duration: 0.2s;
    }

    &[data-transparent='true'] {
      opacity: 0;
      animation: none;
    }
  `;
};
