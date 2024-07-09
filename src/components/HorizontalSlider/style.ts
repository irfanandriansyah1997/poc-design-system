import { css } from '@emotion/react';

export const styHorizontalSliderStyle = () => {
  return css`
    display: flex;
    overflow: auto;
    scrollbar-width: none;

    > div {
      flex-shrink: 0;
    }
  `;
};
