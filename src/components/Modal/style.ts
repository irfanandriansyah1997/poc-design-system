import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import {
  keyframeFadeInScale,
  keyframeFadeOutScale
} from '@/styles/animation.style';

export const styModal = (props: Theme) => {
  const { color, elevation } = props;

  return css`
    z-index: 40;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    .modal {
      &__container {
        display: flex;
        flex-direction: column;
        min-width: 200px;
        pointer-events: auto;
        border-radius: 16px;
        width: fit-content;
        max-height: 90%;
        background-color: ${color.WHITE};
        animation-name: ${keyframeFadeOutScale};
        animation-duration: 0.15s;
        box-shadow: ${elevation.xl};
        overflow: hidden;

        &[data-show='true'] {
          animation-name: ${keyframeFadeInScale};
          animation-duration: 0.2s;
        }
      }

      &__header {
        position: sticky;
        flex-shrink: 0;
        min-height: 56px;
        padding: 6px 16px;
        border-bottom: 1px solid ${color.GRAY50};
        background: ${color.WHITE};
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

export const styModalFooter = (props: Theme) => {
  const { color } = props;

  return css`
    position: sticky;
    bottom: 0;
    border-top: 1px solid ${color.GRAY50};
    padding: 12px 16px;
  `;
};

export const styModalContent = css`
  padding: 16px;
`;
