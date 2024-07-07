import type { Theme } from '@emotion/react';
import { css, keyframes } from '@emotion/react';

const keyframeShimmer = keyframes`
  from {
    translate: -100%;
  }
    
  to {
    translate: 100%;
  }
`;

export const styShimmer = (props: Theme) => {
  const { color } = props;

  return css`
    user-select: none;
    position: relative;
    overflow: hidden;
    mask-image: radial-gradient(${color.WHITE}, ${color.BLACK});
    background: ${color.GRAY50};
    color: ${color.GRAY100};

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      animation: 1.5s ease-out 0s infinite normal none running
        ${keyframeShimmer};
      background-image: linear-gradient(
        to right,
        transparent,
        currentcolor,
        transparent
      );
    }
  `;
};
