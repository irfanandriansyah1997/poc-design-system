import { css } from '@emotion/react';

export const styContainer = css`
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;
