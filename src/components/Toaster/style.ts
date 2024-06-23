import type { Theme } from '@emotion/react';
import { css, keyframes } from '@emotion/react';

import { GRAY900, WHITE } from '@/constants/theme';

const transitionFadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const transitionFadeOutScale = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(0.8);
  }
`;

export const styToaster = (props: Theme) => {
  const {
    elevation: { lg }
  } = props;

  return css`
    position: fixed;
    top: 40px;
    box-shadow: ${lg};
    border-radius: 4px;
    padding: 10px 16px;
    min-height: 40px;
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;

    &[data-animate='show'] {
      animation-name: ${transitionFadeInUp};
      animation-duration: 0.2s;
    }

    &[data-animate='hide'] {
      animation-name: ${transitionFadeOutScale};
      animation-duration: 0.15s;
    }

    &[data-theme='light'] {
      background: ${WHITE};
    }

    &[data-theme='dark'] {
      background: ${GRAY900};
    }

    .toaster {
      &__button {
        cursor: pointer;
        background: transparent;
        border: 0;
      }
    }
  `;
};
