import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const stySelectBottomSheet = (props: Theme) => {
  const { color, radius, transition } = props;

  return css`
    .select {
      &__container {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        height: 100%;
        padding: 0 12px;
        border: 1px solid ${color.GRAY100};
        border-radius: ${radius.md};
        background-color: ${color.WHITE};
        transition: all ${transition.duration} ${transition.timingFunction};

        &[data-form-group-kind='default'] {
          border-radius: 0;
        }

        &[data-form-group-kind='first-item'] {
          border-radius: ${radius.md} 0 0 ${radius.md};
        }

        &[data-form-group-kind='last-item'] {
          border-radius: 0 ${radius.md} ${radius.md} 0;
        }

        &[data-size='sm'] {
          height: 32px;
        }

        &[data-size='lg'] {
          height: 44px;
        }

        &[data-focus='true'],
        &[data-hover='true'],
        &[data-error='true'] {
          z-index: 10;
        }

        &:hover {
          border-color: ${color.FITSKY500};
        }

        &:active {
          border-color: ${color.FITSKY600};
        }

        &[data-error='true'] {
          border-color: ${color.RED500};

          &:hover {
            border-color: ${color.RED400};
          }

          &:active {
            border-color: ${color.RED500};
          }
        }
      }
    }
  `;
};

export const stySelectSuggestion = (props: Theme) => {
  const { color, transition } = props;

  return css`
    .select {
      &__search-bar {
        margin: -16px -16px 16px;
        position: sticky;
        top: 0;
        z-index: 1;
        width: calc(100% + 32px);
        padding: 16px 16px 0;
        background-color: ${color.WHITE};
      }
    }

    ul {
      li {
        padding: 12px 0;
        margin: 0 0 8px;
        border-bottom: 1px solid ${color.GRAY50};

        &:last-child {
          margin: 0;
          border-bottom: 0;
        }

        p {
          transition: all ${transition.duration} ${transition.timingFunction};
        }

        [data-selected='true'],
        strong {
          font-weight: 650;
          color: ${color.GRAY900};
        }
      }
    }
  `;
};
