import { css } from '@emotion/react';

export const cssWrapper = (_outerGutter: string) => {
  return css`
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    margin-left: ${_outerGutter};
    margin-right: ${_outerGutter};
  `;
};

export const cssSlider = (_gutter: string) => {
  return css`
    margin-left: calc(${_gutter} / -2);
    margin-right: calc(${_gutter} / -2);
  `;
};

export const cssSlideGroup = (activeLen: number) => {
  return css`
    display: flex;
    flex-wrap: nowrap;
    transition: transform 0.2s ease-out;
    margin-right: calc((${activeLen} - 1) / ${activeLen} * 100%);

    &[data-touchmove] {
      transition: none;

      * {
        pointer-events: none;
      }
    }
  `;
};

export const cssSlideItem = (_gutter: string) => css`
  width: 100%;
  flex-shrink: 0;
  padding-left: calc(${_gutter} / 2);
  padding-right: calc(${_gutter} / 2);
`;
