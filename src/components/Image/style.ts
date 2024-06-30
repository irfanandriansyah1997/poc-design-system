import type { Radius, Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const styImage = (props: Theme) => {
  const { color, radius } = props;

  return css`
    position: relative;
    display: block;
    background: ${color.GRAY50};
    overflow: hidden;

    &[data-transparent='true'] {
      background: transparent;
    }

    // Border Radius

    ${Object.keys(radius).map((key) => {
      return css`
        &[data-radius='${key}'] {
          border-radius: ${radius[key as keyof Radius]};
        }
      `;
    })}
  `;
};
