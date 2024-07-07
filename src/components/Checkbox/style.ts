import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const styCheckbox = (props: Theme) => {
  const { color, radius, transition } = props;

  return css`
    user-select: none;
    position: relative;
    display: inline-block;
    vertical-align: middle;

    [data-checkbox] {
      display: block;
      border-radius: ${radius.xs};
      width: 16px;
      height: 16px;
      transition: all ${transition.duration} ${transition.timingFunction};
    }

    [data-check] {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: ${radius.xs};
      scale: 0;
      border: 1px solid transparent;
      transition: all ${transition.duration} ${transition.timingFunction};
    }

    [data-indeterminate] {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      translate: -50% -50%;
      scale: 1;
      transition: all ${transition.duration} ${transition.timingFunction};
    }

    input {
      cursor: pointer;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      opacity: 0;

      + [data-checkbox] {
        border: 1px solid ${color.GRAY100};
      }

      &:hover {
        + [data-checkbox] {
          border: 1px solid ${color.FITSKY500};
        }
      }

      &:active {
        + [data-checkbox] {
          border: 1px solid ${color.FITSKY600};
        }
      }

      &:checked {
        + [data-checkbox] {
          border: 1px solid ${color.FITSKY550};

          [data-check],
          [data-indeterminate] {
            background-color: ${color.FITSKY550};
            color: ${color.WHITE};
            scale: 1;
          }

          [data-check] {
            border: 1px solid ${color.FITSKY550};
          }
        }

        &:hover {
          + [data-checkbox] {
            border: 1px solid ${color.FITSKY500};

            [data-check],
            [data-indeterminate] {
              background-color: ${color.FITSKY500};
            }

            [data-check] {
              border: 1px solid ${color.FITSKY500};
            }
          }
        }

        &:active {
          + [data-checkbox] {
            border: 1px solid ${color.FITSKY600};

            [data-check],
            [data-indeterminate] {
              background-color: ${color.FITSKY600};
            }

            [data-check] {
              border: 1px solid ${color.FITSKY600};
            }
          }
        }
      }

      &:disabled {
        + [data-checkbox] {
          border: 1px solid ${color.GRAY100};
          background-color: ${color.GRAY50};
        }

        &:checked,
        &:hover,
        &:active,
        &:checked:hover,
        &:checked:active {
          + [data-checkbox] {
            border: 1px solid ${color.GRAY100};
            background-color: ${color.GRAY50};

            [data-check] {
              border: 1px solid ${color.GRAY100};
              background-color: ${color.GRAY50};
              color: ${color.GRAY200};
            }

            [data-indeterminate] {
              background-color: ${color.GRAY200};
            }
          }
        }
      }
    }
  `;
};
