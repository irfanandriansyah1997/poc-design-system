import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const styCardPreview = (props: Theme) => {
  const {
    color: { GRAY25, WHITE },
    elevation: { md },
    transition: { duration, timingFunction }
  } = props;

  return css`
    cursor: pointer;

    &:hover {
      .card-preview {
        &__overview {
          background-color: ${GRAY25};
        }

        &__icon-btn {
          opacity: 1;
        }
      }
    }

    .card-preview {
      &__overview {
        position: relative;
        padding: 32px;
        width: 100%;
        transition: all ${duration} ${timingFunction};
      }

      &__icon-btn {
        position: absolute;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${WHITE};
        box-shadow: ${md};
        border-radius: 50%;
        opacity: 0;
        transition: all ${duration} ${timingFunction};
      }

      &__description {
        width: 100%;
        padding: 8px 16px;
      }
    }
  `;
};
