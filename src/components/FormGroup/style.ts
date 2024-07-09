import { css } from '@emotion/react';

export const styFormGroup = () => {
  return css`
    max-width: 100%;

    .form-group {
      &__content {
        display: flex;
        align-items: center;
        width: 100%;
      }

      &__item {
        margin-right: -1px;
        flex: 0 0 auto;

        &[data-layout='block'] {
          flex: 1;
        }

        &:last-child {
          margin: 0;
        }
      }
    }
  `;
};
