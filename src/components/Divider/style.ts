import { css } from '@emotion/react';

export const styDivider = css`
  display: block;
  border: 0;

  &[data-border-style='solid'] {
    border-style: solid;
  }

  &[data-border-style='dashed'] {
    border-style: dashed;
  }

  &[data-orientation='vertical'] {
    width: 1px;
    height: 100%;
  }

  &[data-orientation='horizontal'] {
    width: 100%;
    height: 1px;
  }
`;
