import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import {
  keyframeSlideBottom,
  keyframeSlideTop
} from '@/styles/animation.style';

export const styBottomSheet = (props: Theme) => {
  const { color, elevation } = props;

  return css`
    z-index: 40;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    align-items: flex-end;
    justify-content: center;
    pointer-events: none;

    .bottom-sheet {
      &__container {
        display: flex;
        flex-direction: column;
        background-color: ${color.WHITE};
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        pointer-events: auto;
        max-width: 600px;
        animation-name: ${keyframeSlideBottom};
        animation-duration: 0.25s;
        box-shadow: ${elevation.xl};
        overflow: hidden;

        &[data-show='true'] {
          animation-name: ${keyframeSlideTop};
          animation-duration: 0.25s;
        }
      }

      &__header {
        position: sticky;
        flex-shrink: 0;
        min-height: 52px;
        top: 0;
        padding: 4px 4px 4px 16px;
        background: ${color.WHITE};
        border-bottom: 1px solid ${color.GRAY50};
        z-index: 100;
      }

      &__content {
        display: flex;
        flex-direction: column;
        flex-shrink: 1;
        flex-grow: 1;
        overflow: auto;

        [data-content] {
          flex-shrink: 1;
          flex-grow: 1;
        }

        [data-fotter] {
          flex-shrink: 0;
        }
      }
    }
  `;
};

export const styBottomSheetFooter = (props: Theme) => {
  const { color } = props;

  return css`
    position: sticky;
    bottom: 0;
    border-top: 1px solid ${color.GRAY50};
    padding: 16px;
  `;
};

export const styBottomSheetContent = css`
  padding: 16px;
`;
