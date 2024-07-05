import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { numberToPx } from '@/utils/css';

export const styPageControl = (props: Theme) => {
  const { transition } = props;
  const gap = numberToPx(8);
  const size = numberToPx(8);

  return css`
    overflow: hidden;
    width: calc(5 * ${gap} + 4 * ${size});

    [data-scrollable] {
      display: flex;
      flex-wrap: nowrap;
      transition: all ${transition.duration} ${transition.timingFunction};
      gap: ${gap};
      width: calc(${size} + ${gap});
    }

    .page-control {
      &__button {
        flex-shrink: 0;
        display: block;
        border-radius: 50%;
        width: ${size};
        height: ${size};
        transition: all ${transition.duration} ${transition.timingFunction};

        &[data-scale='sm'] {
          scale: ${4 / 6};
        }

        &[data-scale='xs'] {
          scale: ${2 / 6};
        }
      }
    }
  `;
};
