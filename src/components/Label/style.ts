import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const styLabel = (props: Theme) => {
  const { radius } = props;

  return css`
    border-radius: ${radius.md}px;
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-size='default'] {
      padding: 0 16px;
    }

    &[data-size='small'] {
      padding: 0 12px;
    }

    &[data-size='default'] {
      height: 32px;
    }

    &[data-size='small'] {
      height: 24px;
    }

    &[data-preffix='true'] {
      &[data-suffix='true'] {
        &[data-size='default'] {
          padding: 0 12px;
        }

        &[data-size='small'] {
          padding: 0 8px;
        }
      }

      &[data-suffix='false'] {
        &[data-size='default'] {
          padding: 0 16px 0 12px;
        }

        &[data-size='small'] {
          padding: 0 12px 0 8px;
        }
      }
    }

    &[data-suffix='true'] {
      &[data-preffix='false'] {
        &[data-size='default'] {
          padding: 0 12px 0 16px;
        }

        &[data-size='small'] {
          padding: 0 8px 0 12px;
        }
      }
    }
  `;
};
