import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const styRadio = (props: Theme) => {
  const { color, radius, transition } = props;

  return css`
    user-select: none;
    position: relative;
    display: inline-block;
    vertical-align: middle;

    [data-radio] {
      position: relative;
      display: block;
      border-radius: ${radius.circle};
      width: 16px;
      height: 16px;
      transition: all ${transition.duration} ${transition.timingFunction};

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        border-radius: ${radius.circle};
        background: ${color.WHITE};
        scale: 0;
        translate: -50% -50%;
        transition: all ${transition.duration} ${transition.timingFunction};
      }
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

      + [data-radio] {
        border: 1px solid ${color.GRAY100};
      }

      &:hover {
        + [data-radio] {
          border: 1px solid ${color.FITSKY500};
        }
      }

      &:active {
        + [data-radio] {
          border: 1px solid ${color.FITSKY600};
        }
      }

      &:checked {
        + [data-radio] {
          border: 1px solid ${color.FITSKY550};
          background-color: ${color.FITSKY550};

          &:before {
            scale: 1;
          }
        }

        &:hover {
          + [data-radio] {
            border: 1px solid ${color.FITSKY500};
            background-color: ${color.FITSKY500};
          }
        }

        &:active {
          + [data-radio] {
            border: 1px solid ${color.FITSKY600};
            background-color: ${color.FITSKY600};
          }
        }
      }

      &:disabled {
        + [data-radio] {
          border: 1px solid ${color.GRAY100};
          background-color: ${color.GRAY50};
        }

        &:hover,
        &:active {
          + [data-radio] {
            border: 1px solid ${color.GRAY100};
            background-color: ${color.GRAY50};

            &:before {
              scale: 0;
            }
          }
        }

        &:checked,
        &:checked:hover,
        &:checked:active {
          + [data-radio] {
            border: 1px solid ${color.GRAY100};
            background-color: ${color.GRAY50};

            &:before {
              scale: 1;
              background-color: ${color.GRAY200};
            }
          }
        }
      }
    }
  `;
};
