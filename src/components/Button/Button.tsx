import { useMemo } from 'react';

import type { TypographyModifier } from '@emotion/react';
import { useTheme } from '@emotion/react';

import Icon from '@/components/Icon';
import Spinner from '@/components/Spinner';
import Typography from '@/components/Typography';

import type { Maybe } from '@/types/utils';

import { styButton } from './style';
import type { ButtonProps, ButtonSizeType } from './types';

const SPINNER_SIZE_PRESET: Record<ButtonSizeType, number> = {
  lg: 20,
  md: 18,
  sm: 14
};

const ICON_SIZE_PRESET: Record<ButtonSizeType, number> = {
  lg: 24,
  md: 20,
  sm: 16
};

const Button = (props: ButtonProps) => {
  const {
    'aria-label': ariaLabel = 'fithub button',
    block = false,
    children,
    disabled = false,
    icon,
    iconPosition = 'pre',
    loading = false,
    margin,
    modifier = 'primary',
    size = 'md',
    variant = 'fill',
    ...res
  } = props;
  const {
    color,
    components: {
      'button-lg-modifier': lg = 'text_heading_sm',
      'button-md-modifier': md = 'text_body_base',
      'button-sm-modifier': sm = 'text_body_base'
    }
  } = useTheme();

  const { iconSize, spinnerColor, spinnerSize, textModifier } = useMemo(() => {
    let spinnerColor: Maybe<string>;

    switch (variant) {
      case 'fill':
        if (modifier === 'primary-prominent') spinnerColor = color.GRAY900;
        else spinnerColor = color.WHITE;

        break;

      case 'outline':
      case 'dashed':
        if (modifier === 'primary') spinnerColor = color.FITSKY400;
        if (modifier === 'danger') spinnerColor = color.RED300;
        break;

      case 'link':
        if (modifier === 'primary') spinnerColor = color.FITSKY600;
        if (modifier === 'danger') spinnerColor = color.RED500;
        break;

      case 'text':
        if (modifier === 'primary') spinnerColor = color.GRAY500;
        if (modifier === 'danger') spinnerColor = color.RED500;
        break;
    }

    const TEXT_MODIFIER_PRESET: Record<
      ButtonSizeType,
      keyof TypographyModifier
    > = {
      lg,
      md,
      sm
    };

    return {
      iconSize: ICON_SIZE_PRESET[size],
      spinnerColor,
      spinnerSize: SPINNER_SIZE_PRESET[size],
      textModifier: TEXT_MODIFIER_PRESET[size]
    };
  }, [
    color.FITSKY400,
    color.FITSKY600,
    color.GRAY500,
    color.GRAY900,
    color.RED300,
    color.RED500,
    color.WHITE,
    lg,
    md,
    modifier,
    size,
    sm,
    variant
  ]);

  if (!spinnerColor) return null;

  return (
    <button
      {...res}
      aria-label={ariaLabel}
      css={styButton}
      style={{ margin }}
      type="button"
      disabled={disabled}
      data-icon={icon}
      data-only-icon={Boolean(icon && !children)}
      data-loading={Boolean(loading && disabled !== true)}
      data-icon-position={icon && iconPosition ? iconPosition : undefined}
      data-modifier={modifier}
      data-size={size}
      data-block={block}
      data-variant={variant}
    >
      {Boolean(loading && disabled !== true) && (
        <Spinner
          className="button-spinner"
          spinnerColor={spinnerColor}
          size={spinnerSize}
          spinnerWidth={2}
        />
      )}

      <section className="button-container">
        {icon && <Icon className="button-icon" icon={icon} size={iconSize} />}

        {children && (
          <Typography
            className="button-text"
            tag="span"
            fontWeight="strong"
            textAlign="center"
            modifier={textModifier}
          >
            {children}
          </Typography>
        )}
      </section>
    </button>
  );
};

export default Button;
