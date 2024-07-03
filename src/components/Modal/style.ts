import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import {
  keyframeFadeInScale,
  keyframeFadeOutScale
} from '@/styles/animation.style';

export const styModal = (props: Theme) => {
  const { color } = props;

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
        pointer-events: auto;
        border-radius: 16px;
        width: 100%;
        max-height: 100%;
        background-color: ${color.WHITE};
        animation-name: ${keyframeFadeOutScale};
        animation-duration: 0.15s;
        overflow: hidden;

        &[data-show='true'] {
          animation-name: ${keyframeFadeInScale};
          animation-duration: 0.2s;
        }
      }

      &__header {
        height: 56px;
        padding: 6px 16px;
        border-bottom: 1px solid ${color.GRAY50};

        button {
          cursor: pointer;
          border: 0;
          background: transparent;
          width: 44px;
          height: 44px;
        }
      }
    }
  `;
};

export const styModalFooter = (props: Theme) => {
  const { color } = props;

  return css`
    border-top: 1px solid ${color.GRAY50};
    padding: 12px 16px;
  `;
};

export const styModalContent = css`
  padding: 16px;
`;
