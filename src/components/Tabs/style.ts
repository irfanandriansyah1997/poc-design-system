import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const styTab = (props: Theme) => {
  const { color, transition } = props;

  return css`
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    overflow: auto;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    &[data-fadestart] {
      mask-image: linear-gradient(90deg, transparent, black 64px);
    }

    &[data-fadeend] {
      mask-image: linear-gradient(-90deg, transparent, black 64px);
    }

    &[data-fadestart][data-fadeend] {
      mask-image: linear-gradient(
        90deg,
        transparent,
        black 64px,
        black calc(100% - 64px),
        transparent 100%
      );
    }

    &[data-variant='center'] {
      &:before,
      &:after {
        content: '';
        margin: auto;
      }
    }

    .tab {
      &__indicator {
        position: absolute;
        bottom: 0;
        height: 4px;
        border-radius: 2px 2px 0px 0px;
        background-color: ${color.FITSKY550};
        transition: all ${transition.duration} ${transition.timingFunction};
      }
    }
  `;
};

export const styTabItem = (props: Theme) => {
  const { color, transition } = props;

  return css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background-color: transparent;
    padding: 8px 20px;

    &[data-variant='equal'] {
      flex-grow: 1;
      flex-basis: 0%;
    }

    .tab-item {
      &__text {
        color: ${color.GRAY900};
        transition: all ${transition.duration} ${transition.timingFunction};
      }
    }

    &[data-active='true'],
    &:hover {
      .tab-item {
        &__text {
          color: ${color.FITSKY550};
        }
      }
    }
  `;
};
