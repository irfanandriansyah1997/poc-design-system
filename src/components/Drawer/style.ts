import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import {
  keyframeSlideLeft,
  keyframeSlideRight
} from '@/styles/animation.style';

export const styDrawer = (props: Theme) => {
  const { color, elevation } = props;

  return css`
    z-index: 40;
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: ${color.WHITE};
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    animation-name: ${keyframeSlideRight};
    animation-duration: 0.25s;
    box-shadow: ${elevation.xl};

    &[data-show='true'] {
      animation-name: ${keyframeSlideLeft};
      animation-duration: 0.25s;
    }

    .drawer {
      &__header {
        position: sticky;
        flex-shrink: 0;
        min-height: 56px;
        top: 0;
        padding: 12px 16px;
        background: ${color.WHITE};
        box-shadow: ${elevation.sm};
        z-index: 100;
      }

      &__content {
        flex-shrink: 1;
        flex-grow: 1;
        overflow: auto;
      }
    }
  `;
};
