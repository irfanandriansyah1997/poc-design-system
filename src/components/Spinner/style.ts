import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { WHITE } from '@/constants/theme';

import { keyframeRotation } from '@/styles/animation.style';

export const stySpinner = (props: Theme) => {
  const { elevation } = props;

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;

    &[data-wrap-container='true'] {
      &[data-with-shadow='true'] {
        box-shadow: ${elevation.lg};
        background-color: ${WHITE};
      }
    }

    &[data-position-center='true'] {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .spinner {
      border: 5px solid #fff;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: ${keyframeRotation} 1s linear infinite;
    }
  `;
};
