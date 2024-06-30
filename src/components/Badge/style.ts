import { css } from '@emotion/react';

export const styBadge = css`
  display: inline-block;
  min-width: 8px;
  min-height: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;

  &[data-render-with-text='true'] {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
