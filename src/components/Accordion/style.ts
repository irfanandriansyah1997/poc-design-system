import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const styAccordion = (props: Theme) => {
  const { color, transition } = props;

  return css`
    position: relative;
    display: block;
    border-bottom: 1px solid ${color.GRAY100};
    transition: all ${transition.duration} ${transition.timingFunction};

    &:hover {
      background-color: ${color.GRAY25};
    }

    &[data-disabled='true'] {
      background-color: ${color.GRAY50};

      .accordion {
        &__heading,
        &__content {
          color: ${color.GRAY200} !important;

          > * {
            color: ${color.GRAY200} !important;
          }
        }
      }
    }

    .accordion {
      &__heading {
        display: grid;
        grid-template-columns: auto 24px;
        grid-column-gap: 8px;
        align-items: center;
        cursor: pointer;
      }

      &__content {
        max-height: 0;
        position: relative;
        display: block;
        overflow: hidden;
        width: 100%;
      }

      &__icon {
        transition: all ${transition.duration} ${transition.timingFunction};

        &[data-open='true'] {
          transform: rotate(180deg);
        }
      }
    }
  `;
};
