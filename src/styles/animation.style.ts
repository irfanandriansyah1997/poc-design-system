import { keyframes } from '@emotion/react';

export const keyframeRotation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const keyframeFadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const keyframeFadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const keyframeFadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const keyframeFadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
    }
    
    to {
      opacity: 1;
      transform: scale(1);
  }
`;

export const keyframeFadeOutScale = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(0.8);
  }
`;
