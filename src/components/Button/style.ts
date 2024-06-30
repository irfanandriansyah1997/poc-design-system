import type { Color, Elevation, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { getBoxShadowEmotion, getColorEmotion } from '@/utils/css';

import type { ButtonModifierType, ButtonVariantType } from './types';

interface ButtonStylingType {
  backgroundColor?: keyof Color;
  borderColor?: keyof Color;
  iconColor: keyof Color;
  textColor: keyof Color;
}

interface ButtonStylingModifierType {
  active: ButtonStylingType;
  defaultState: ButtonStylingType;
  disabled: ButtonStylingType;
  hover: ButtonStylingType;
  key: ButtonModifierType;
  loading: ButtonStylingType;
}

interface ButtonStylingVariantType {
  activeBoxShadow?: keyof Elevation;
  defaultStateBoxShadow?: keyof Elevation;
  disabledBoxShadow?: keyof Elevation;
  hoverBoxShadow?: keyof Elevation;
  key: ButtonVariantType;
  loadingBoxShadow?: keyof Elevation;
  modifier: ButtonStylingModifierType[];
}

const BUTTON_STYLING: ButtonStylingVariantType[] = [
  // INFO: Fill Variant
  {
    defaultStateBoxShadow: 'element',
    hoverBoxShadow: 'element',
    key: 'fill',
    modifier: [
      {
        active: {
          backgroundColor: 'FITSKY600',
          borderColor: 'FITSKY600',
          iconColor: 'WHITE',
          textColor: 'WHITE'
        },
        defaultState: {
          backgroundColor: 'FITSKY500',
          borderColor: 'FITSKY500',
          iconColor: 'WHITE',
          textColor: 'WHITE'
        },
        disabled: {
          backgroundColor: 'GRAY50',
          borderColor: 'GRAY100',
          iconColor: 'GRAY200',
          textColor: 'GRAY200'
        },
        hover: {
          backgroundColor: 'FITSKY400',
          borderColor: 'FITSKY400',
          iconColor: 'WHITE',
          textColor: 'WHITE'
        },
        key: 'primary',
        loading: {
          backgroundColor: 'FITSKY300',
          borderColor: 'FITSKY300',
          iconColor: 'WHITE',
          textColor: 'WHITE'
        }
      },
      {
        active: {
          backgroundColor: 'FITLIGHT600',
          borderColor: 'FITLIGHT600',
          iconColor: 'GRAY900',
          textColor: 'GRAY900'
        },
        defaultState: {
          backgroundColor: 'FITLIGHT500',
          borderColor: 'FITLIGHT500',
          iconColor: 'GRAY900',
          textColor: 'GRAY900'
        },
        disabled: {
          backgroundColor: 'GRAY50',
          borderColor: 'GRAY100',
          iconColor: 'GRAY200',
          textColor: 'GRAY200'
        },
        hover: {
          backgroundColor: 'FITLIGHT400',
          borderColor: 'FITLIGHT400',
          iconColor: 'GRAY900',
          textColor: 'GRAY900'
        },
        key: 'primary-prominent',
        loading: {
          backgroundColor: 'FITLIGHT300',
          borderColor: 'FITLIGHT300',
          iconColor: 'GRAY900',
          textColor: 'GRAY900'
        }
      },
      {
        active: {
          backgroundColor: 'RED600',
          borderColor: 'RED600',
          iconColor: 'WHITE',
          textColor: 'WHITE'
        },
        defaultState: {
          backgroundColor: 'RED500',
          borderColor: 'RED500',
          iconColor: 'WHITE',
          textColor: 'WHITE'
        },
        disabled: {
          backgroundColor: 'GRAY50',
          borderColor: 'GRAY100',
          iconColor: 'GRAY200',
          textColor: 'GRAY200'
        },
        hover: {
          backgroundColor: 'RED400',
          borderColor: 'RED400',
          iconColor: 'WHITE',
          textColor: 'WHITE'
        },
        key: 'danger',
        loading: {
          backgroundColor: 'RED300',
          borderColor: 'RED300',
          iconColor: 'WHITE',
          textColor: 'WHITE'
        }
      }
    ]
  },

  // INFO: Outline Variant
  {
    defaultStateBoxShadow: 'element',
    hoverBoxShadow: 'element',
    key: 'outline',
    modifier: [
      {
        active: {
          backgroundColor: 'WHITE',
          borderColor: 'FITSKY600',
          iconColor: 'FITSKY600',
          textColor: 'FITSKY600'
        },
        defaultState: {
          backgroundColor: 'WHITE',
          borderColor: 'GRAY100',
          iconColor: 'GRAY500',
          textColor: 'GRAY500'
        },
        disabled: {
          backgroundColor: 'GRAY50',
          borderColor: 'GRAY100',
          iconColor: 'GRAY200',
          textColor: 'GRAY200'
        },
        hover: {
          backgroundColor: 'WHITE',
          borderColor: 'FITSKY400',
          iconColor: 'FITSKY500',
          textColor: 'FITSKY500'
        },
        key: 'primary',
        loading: {
          backgroundColor: 'WHITE',
          borderColor: 'FITSKY300',
          iconColor: 'FITSKY500',
          textColor: 'FITSKY500'
        }
      },
      {
        active: {
          backgroundColor: 'WHITE',
          borderColor: 'RED600',
          iconColor: 'RED600',
          textColor: 'RED600'
        },
        defaultState: {
          backgroundColor: 'WHITE',
          borderColor: 'RED500',
          iconColor: 'RED500',
          textColor: 'RED500'
        },
        disabled: {
          backgroundColor: 'GRAY50',
          borderColor: 'GRAY100',
          iconColor: 'GRAY200',
          textColor: 'GRAY200'
        },
        hover: {
          backgroundColor: 'WHITE',
          borderColor: 'RED400',
          iconColor: 'RED400',
          textColor: 'RED400'
        },
        key: 'danger',
        loading: {
          backgroundColor: 'WHITE',
          borderColor: 'RED300',
          iconColor: 'RED500',
          textColor: 'RED500'
        }
      }
    ]
  },

  // INFO: Dashed Variant
  {
    defaultStateBoxShadow: 'element',
    hoverBoxShadow: 'element',
    key: 'dashed',
    modifier: [
      {
        active: {
          backgroundColor: 'WHITE',
          borderColor: 'FITSKY600',
          iconColor: 'FITSKY600',
          textColor: 'FITSKY600'
        },
        defaultState: {
          backgroundColor: 'WHITE',
          borderColor: 'GRAY100',
          iconColor: 'GRAY500',
          textColor: 'GRAY500'
        },
        disabled: {
          backgroundColor: 'GRAY50',
          borderColor: 'GRAY100',
          iconColor: 'GRAY200',
          textColor: 'GRAY200'
        },
        hover: {
          backgroundColor: 'WHITE',
          borderColor: 'FITSKY400',
          iconColor: 'FITSKY500',
          textColor: 'FITSKY500'
        },
        key: 'primary',
        loading: {
          backgroundColor: 'WHITE',
          borderColor: 'FITSKY300',
          iconColor: 'FITSKY500',
          textColor: 'FITSKY500'
        }
      },
      {
        active: {
          backgroundColor: 'WHITE',
          borderColor: 'RED600',
          iconColor: 'RED600',
          textColor: 'RED600'
        },
        defaultState: {
          backgroundColor: 'WHITE',
          borderColor: 'RED500',
          iconColor: 'RED500',
          textColor: 'RED500'
        },
        disabled: {
          backgroundColor: 'GRAY50',
          borderColor: 'GRAY100',
          iconColor: 'GRAY200',
          textColor: 'GRAY200'
        },
        hover: {
          backgroundColor: 'WHITE',
          borderColor: 'RED400',
          iconColor: 'RED400',
          textColor: 'RED400'
        },
        key: 'danger',
        loading: {
          backgroundColor: 'WHITE',
          borderColor: 'RED300',
          iconColor: 'RED500',
          textColor: 'RED500'
        }
      }
    ]
  },

  // INFO: Link Variant
  {
    key: 'link',
    modifier: [
      {
        active: {
          iconColor: 'FITSKY600',
          textColor: 'FITSKY600'
        },
        defaultState: {
          iconColor: 'FITSKY500',
          textColor: 'FITSKY500'
        },
        disabled: {
          iconColor: 'GRAY200',
          textColor: 'GRAY200'
        },
        hover: {
          iconColor: 'FITSKY400',
          textColor: 'FITSKY400'
        },
        key: 'primary',
        loading: {
          iconColor: 'FITSKY500',
          textColor: 'FITSKY500'
        }
      },
      {
        active: {
          iconColor: 'RED600',
          textColor: 'RED600'
        },
        defaultState: {
          iconColor: 'RED500',
          textColor: 'RED500'
        },
        disabled: {
          iconColor: 'GRAY200',
          textColor: 'GRAY200'
        },
        hover: {
          iconColor: 'RED400',
          textColor: 'RED400'
        },
        key: 'danger',
        loading: {
          iconColor: 'RED500',
          textColor: 'RED500'
        }
      }
    ]
  },

  // INFO: Text Variant
  {
    key: 'text',
    modifier: [
      {
        active: {
          backgroundColor: 'GRAY50',
          borderColor: 'GRAY50',
          iconColor: 'GRAY500',
          textColor: 'GRAY500'
        },
        defaultState: {
          iconColor: 'GRAY500',
          textColor: 'GRAY500'
        },
        disabled: {
          iconColor: 'GRAY200',
          textColor: 'GRAY200'
        },
        hover: {
          backgroundColor: 'GRAY25',
          borderColor: 'GRAY25',
          iconColor: 'GRAY500',
          textColor: 'GRAY500'
        },
        key: 'primary',
        loading: {
          iconColor: 'GRAY500',
          textColor: 'GRAY500'
        }
      },
      {
        active: {
          backgroundColor: 'RED100',
          borderColor: 'RED100',
          iconColor: 'RED500',
          textColor: 'RED500'
        },
        defaultState: {
          iconColor: 'RED500',
          textColor: 'RED500'
        },
        disabled: {
          iconColor: 'GRAY200',
          textColor: 'GRAY200'
        },
        hover: {
          backgroundColor: 'RED50',
          borderColor: 'RED50',
          iconColor: 'RED500',
          textColor: 'RED500'
        },
        key: 'danger',
        loading: {
          iconColor: 'RED500',
          textColor: 'RED500'
        }
      }
    ]
  }
];

export const styButton = (props: Theme) => {
  const {
    color,
    elevation,
    radius,
    transition: { duration, timingFunction }
  } = props;

  return css`
    position: relative;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;

    transition: all ${duration} ${timingFunction};

    .button-spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .button-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      opacity: 1;
      transition: all ${duration} ${timingFunction};

      .button-text,
      .button-icon {
        transition: all ${duration} ${timingFunction};
      }
    }

    &[data-block='true'] {
      width: 100%;
    }

    &[data-loading='true'] {
      .button-container {
        opacity: 0;
      }
    }

    // Button Size

    &[data-size='sm'] {
      padding: 0 16px;
      height: 32px;
      border-radius: ${radius.sm};

      &[data-only-icon='true'] {
        width: 32px;
      }
    }

    &[data-size='md'] {
      padding: 0 24px;
      height: 44px;
      border-radius: ${radius.md};

      &[data-only-icon='true'] {
        width: 44px;
      }
    }

    &[data-size='lg'] {
      padding: 0 36px;
      height: 60px;
      border-radius: ${radius.lg};

      &[data-only-icon='true'] {
        width: 60px;
      }
    }

    // Icon Styling
    &[data-icon] {
      &[data-icon-position='post'] {
        .button-container {
          flex-direction: row-reverse;
        }

        &[data-size='sm'] {
          padding-right: 12px;
        }

        &[data-size='md'] {
          padding-right: 16px;
        }

        &[data-size='lg'] {
          padding-right: 24px;
        }
      }

      &[data-icon-position='pre'] {
        &[data-size='sm'] {
          padding-left: 12px;
        }

        &[data-size='md'] {
          padding-left: 16px;
        }

        &[data-size='lg'] {
          padding-left: 24px;
        }
      }
    }

    &[data-only-icon='true'] {
      &[data-icon-position='post'],
      &[data-icon-position='pre'] {
        &[data-size='sm'],
        &[data-size='md'],
        &[data-size='lg'] {
          padding: 0;
        }
      }

      .button-container {
        justify-content: center;
      }
    }

    // Theming

    &[data-variant='dashed'] {
      border-style: dashed;
    }

    ${BUTTON_STYLING.map(
      ({
        defaultStateBoxShadow,
        disabledBoxShadow,
        hoverBoxShadow,
        key: variantName,
        loadingBoxShadow,
        modifier
      }) => {
        return css`
          &[data-variant='${variantName}'] {
            box-shadow: ${getBoxShadowEmotion(
              elevation,
              defaultStateBoxShadow
            )};

            &:hover {
              box-shadow: ${getBoxShadowEmotion(elevation, hoverBoxShadow)};
            }

            &:active {
            }

            &[data-loading='true'],
            &[data-loading='true']:hover,
            &[data-loading='true']:active {
              box-shadow: ${getBoxShadowEmotion(elevation, loadingBoxShadow)};
            }

            &[disabled],
            &[disabled]:hover,
            &[disabled]:active {
              box-shadow: ${getBoxShadowEmotion(elevation, disabledBoxShadow)};
            }

            ${modifier.map(
              ({
                active,
                defaultState,
                disabled,
                hover,
                key: modifierName,
                loading
              }) => {
                return css`
                  &[data-modifier='${modifierName}'] {
                    background: ${getColorEmotion(
                      color,
                      defaultState.backgroundColor
                    )};
                    border-color: ${getColorEmotion(
                      color,
                      defaultState.borderColor
                    )};

                    .button-text {
                      color: ${getColorEmotion(color, defaultState.textColor)};
                    }

                    .button-icon {
                      color: ${getColorEmotion(color, defaultState.iconColor)};
                    }

                    &:hover {
                      background: ${getColorEmotion(
                        color,
                        hover.backgroundColor
                      )};
                      border-color: ${getColorEmotion(
                        color,
                        hover.borderColor
                      )};

                      .button-text {
                        color: ${getColorEmotion(color, hover.textColor)};
                      }

                      .button-icon {
                        color: ${getColorEmotion(color, hover.iconColor)};
                      }
                    }

                    &:active {
                      background: ${getColorEmotion(
                        color,
                        active.backgroundColor
                      )};
                      border-color: ${getColorEmotion(
                        color,
                        active.borderColor
                      )};

                      .button-text {
                        color: ${getColorEmotion(color, active.textColor)};
                      }

                      .button-icon {
                        color: ${getColorEmotion(color, active.iconColor)};
                      }
                    }

                    &[data-loading='true'],
                    &[data-loading='true']:hover,
                    &[data-loading='true']:active {
                      background: ${getColorEmotion(
                        color,
                        loading.backgroundColor
                      )};
                      border-color: ${getColorEmotion(
                        color,
                        loading.borderColor
                      )};

                      .button-text {
                        color: ${getColorEmotion(color, loading.textColor)};
                      }

                      .button-icon {
                        color: ${getColorEmotion(color, loading.iconColor)};
                      }
                    }

                    &[disabled],
                    &[disabled]:hover,
                    &[disabled]:active {
                      background: ${getColorEmotion(
                        color,
                        disabled.backgroundColor
                      )};
                      border-color: ${getColorEmotion(
                        color,
                        disabled.borderColor
                      )};

                      .button-text {
                        color: ${getColorEmotion(color, disabled.textColor)};
                      }

                      .button-icon {
                        color: ${getColorEmotion(color, disabled.iconColor)};
                      }
                    }
                  }
                `;
              }
            )}
          }
        `;
      }
    )}
  `;
};
