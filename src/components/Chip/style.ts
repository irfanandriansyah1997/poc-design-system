import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const styChip = (props: Theme) => {
  const { color, radius, transition } = props;

  return css`
    border-radius: ${radius.md};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    height: 32px;
    cursor: pointer;
    border: 1px solid ${color.GRAY100};
    transition: all ${transition.duration} ${transition.timingFunction};

    &[data-preffix='true'] {
      &[data-suffix='true'] {
        padding: 0 12px;
      }

      &[data-suffix='false'] {
        padding: 0 16px 0 12px;
      }
    }

    &[data-suffix='true'] {
      &[data-preffix='false'] {
        padding: 0 12px 0 16px;
      }
    }

    // Non Checked State

    .chip {
      &__preffix-element,
      &__text,
      &__suffix-element {
        transition: all ${transition.duration} ${transition.timingFunction};
      }

      &__preffix-element,
      &__text {
        color: ${color.GRAY500};
      }

      &__suffix-element {
        &-icon {
          color: ${color.GRAY300};
        }
      }
    }

    &:hover {
      border-color: ${color.FITSKY500};

      .chip {
        &__preffix-element,
        &__text,
        &__suffix-element-icon {
          color: ${color.FITSKY500};
        }
      }
    }

    &:active {
      border-color: ${color.FITSKY550};

      .chip {
        &__preffix-element,
        &__text,
        &__suffix-element-icon {
          color: ${color.FITSKY600};
        }
      }
    }

    // Checked State

    &[data-checked='true'] {
      border-color: ${color.FITSKY550};
      background-color: ${color.FITSKY50};

      .chip {
        &__preffix-element,
        &__text,
        &__suffix-element-icon {
          color: ${color.FITSKY550};
        }
      }

      &:hover {
        border-color: ${color.FITSKY500};

        .chip {
          &__preffix-element,
          &__text,
          &__suffix-element-icon {
            color: ${color.FITSKY500};
          }
        }
      }

      &:active {
        border-color: ${color.FITSKY550};

        .chip {
          &__preffix-element,
          &__text,
          &__suffix-element-icon {
            color: ${color.FITSKY600};
          }
        }
      }
    }

    // Disable State

    &[data-disabled='true'] {
      &[data-checked='true'],
      &[data-checked='false'] {
        background-color: ${color.GRAY50};
        border-color: ${color.GRAY100};

        .chip {
          &__preffix-element,
          &__text,
          &__suffix-element-icon {
            color: ${color.GRAY200};
          }
        }

        &:hover,
        &:active {
          background-color: ${color.GRAY50};
          border-color: ${color.GRAY100};

          .chip {
            &__preffix-element,
            &__text,
            &__suffix-element-icon {
              color: ${color.GRAY200};
            }
          }
        }
      }
    }
  `;
};
