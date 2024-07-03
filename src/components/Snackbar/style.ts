import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import {
  keyframeFadeInUp,
  keyframeFadeOutScale
} from '@/styles/animation.style';

export const stySnackbar = (props: Theme) => {
  const {
    color: { GRAY900, WHITE },
    elevation,
    radius
  } = props;

  return css`
    position: fixed;
    top: 40px;
    z-index: 100;
    left: 0;
    width: 100%;

    &[data-animate='show'] {
      animation-name: ${keyframeFadeInUp};
      animation-duration: 0.2s;
    }

    &[data-animate='hide'] {
      animation-name: ${keyframeFadeOutScale};
      animation-duration: 0.15s;
    }

    .snackbar {
      &__container {
        box-shadow: ${elevation.md};
        border-radius: ${radius.sm};
        padding: 8px 16px 8px 12px;
        min-height: 40px;
        width: fit-content;
        margin: auto;

        &[data-theme='light'] {
          background: ${WHITE};
        }

        &[data-theme='dark'] {
          background: ${GRAY900};
        }
      }

      &__text {
        max-width: 250px;
      }

      &__button,
      &__close {
        cursor: pointer;
        background: transparent;
        border: 0;
      }

      &__button {
        padding: 0 4px;
      }

      &__close {
        width: 32px;
        height: 32px;
      }
    }
  `;
};
