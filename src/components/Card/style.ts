import type { Elevation, Theme } from '@emotion/react';
import { css } from '@emotion/react';

const ELEVATION_PRESETS: Array<keyof Elevation> = [
  'element',
  'lg',
  'md',
  'sm',
  'xl'
];

export const styCard = (props: Theme) => {
  const {
    color: { WHITE },
    elevation,
    radius,
    transition: { duration, timingFunction }
  } = props;

  return css`
    position: relative;
    width: 100%;
    overflow: hidden;
    transition: all ${duration} ${timingFunction};

    &[data-rounded='true'] {
      border-radius: ${radius.md};
    }

    &[data-with-background='true'] {
      background-color: ${WHITE};
    }

    // Box Shadow Styling

    ${ELEVATION_PRESETS.map((key) => {
      return css`
        &[data-shadow=${key}] {
          box-shadow: ${elevation[key]};
        }

        &:hover,
        &:active {
          &[data-shadow-on-interact=${key}] {
            box-shadow: ${elevation[key]};
          }
        }
      `;
    })}
  `;
};
