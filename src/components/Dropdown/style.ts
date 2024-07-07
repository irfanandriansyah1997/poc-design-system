import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { keyframeFadeIn, keyframeFadeOut } from '@/styles/animation.style';

export const styDropdown = (props: Theme) => {
  const { color, elevation, radius } = props;
  return css`
    position: relative;
    display: inline-block;

    .dropdown {
      &__toggle {
        cursor: pointer;
        display: inline-block;
      }
    }

    .dropdown__menu {
      position: absolute;
      display: inline-block;
      left: 0;
      top: calc(100% + 8px);
      min-width: 100%;
      width: max-content;
      background-color: ${color.WHITE};
      border-radius: ${radius.sm};
      box-shadow: ${elevation.lg};
      z-index: 100;
      animation-name: ${keyframeFadeOut};
      animation-duration: 0.25s;

      &[data-show='true'] {
        animation-name: ${keyframeFadeIn};
        animation-duration: 0.25s;
      }
    }
  `;
};
