import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { hexToRgba } from '@/utils/css';

export const styTextfield = (props: Theme) => {
  const {
    color,
    components: { 'textfield-text-modifier': textVariant = 'text_body_base' },
    radius,
    transition,
    typography
  } = props;

  return css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    outline: 0;

    .textfield {
      &__addon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        padding: 0 12px;
        height: 100%;
        background-color: ${color.GRAY50};
        border: 1px solid ${color.GRAY100};

        &[data-position='preffix'] {
          border-right: 1px solid ${color.GRAY100};
        }

        &[data-position='suffix'] {
          border-left: 1px solid ${color.GRAY100};
        }
      }

      &__item {
        margin-right: -1px;

        &:first-child {
          border-radius: ${radius.md} 0 0 ${radius.md};

          &:last-child {
            border-radius: ${radius.md};
          }
        }

        &:last-child {
          margin: 0;
          border-radius: 0 ${radius.md} ${radius.md} 0;
        }
      }

      &__container {
        display: flex;
        align-items: center;
        width: 100%;

        &[data-size='sm'] {
          height: 32px;
        }

        &[data-size='lg'] {
          height: 44px;
        }
      }

      &__input {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        height: 100%;
        padding: 0 12px;
        border: 1px solid ${color.GRAY100};
        z-index: 1;
        transition: all ${transition.duration} ${transition.timingFunction};

        &[data-hover='true'] {
          border-color: ${color.FITSKY500};
        }

        &[data-focus='true'],
        &[data-focus='true'][data-hover='true'] {
          border-color: ${color.FITSKY600};
          box-shadow: 0px 0px 0px 2px ${hexToRgba(`${color.FITSKY500}`, 0.1)};
        }

        &[data-error='true'] {
          border-color: ${color.RED500};

          &[data-hover='true'] {
            border-color: ${color.RED400};
          }

          &[data-focus='true'],
          &[data-focus='true'][data-hover='true'] {
            border-color: ${color.RED500};
            box-shadow: 0px 0px 0px 2px ${hexToRgba(`${color.RED500}`, 0.1)};
          }
        }

        &[data-focus='true'],
        &[data-focus='true'][data-hover='true'] {
          border-color: ${color.FITSKY600};
          box-shadow: 0px 0px 0px 2px ${hexToRgba(`${color.FITSKY500}`, 0.1)};
        }

        &[data-disabled='true'] {
          background-color: ${color.GRAY50};
          border: 1px solid ${color.GRAY100};
        }

        input {
          width: 100%;
          flex-shrink: 1;
          flex-grow: 1;
          border: 0;
          outline: 0;
          font-size: ${typography[textVariant].fontSize};
          letter-spacing: ${typography[textVariant].letterSpacing};
          line-height: ${typography[textVariant].lineHeight};
          color: ${color.GRAY900};
        }
      }

      &__preffix,
      &__suffix,
      &__clear-btn,
      &__counter {
        width: fit-content;
        flex-shrink: 0;
      }

      &__clear-btn {
        cursor: pointer;
        color: ${color.GRAY300};
        transition: color ${transition.duration} ${transition.timingFunction};

        &:hover {
          color: ${color.GRAY500};
        }
      }
    }
  `;
};
