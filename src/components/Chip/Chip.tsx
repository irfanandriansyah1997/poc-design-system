import type { HTMLAttributes } from 'react';
import { useMemo } from 'react';

import { useTheme } from '@emotion/react';

import Badge from '@/components/Badge';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { cx } from '@/utils/css';
import type { FithubIconType } from '@/types/icon';

import { styChip } from './style';

type HTMLSectionProps = Omit<HTMLAttributes<HTMLElement>, 'style'>;

interface ChipSuffixIconElementType {
  type: 'icon';
  value: FithubIconType;
}

interface ChipSuffixBadgeElementType {
  type: 'badge';
  value: string;
}

type ChipSuffixElementType =
  | ChipSuffixIconElementType
  | ChipSuffixBadgeElementType;

interface ChipProps extends HTMLSectionProps {
  checked?: boolean;
  disabled?: boolean;
  preffixIcon?: FithubIconType;
  suffixElement?: ChipSuffixElementType;
  text: string;
}

const Chip = (props: ChipProps) => {
  const {
    checked = false,
    disabled = false,
    preffixIcon,
    suffixElement,
    text,
    ...res
  } = props;
  const { color } = useTheme();

  const cssStyle = useMemo(() => {
    const isPreffixAvailable = Boolean(preffixIcon);
    let isSuffixAvailable = false;

    if (suffixElement) {
      if (suffixElement.type === 'badge' && disabled) {
        isSuffixAvailable = false;
      } else {
        isSuffixAvailable = true;
      }
    }

    if (isPreffixAvailable && isSuffixAvailable) {
      return { margin: '0 8px 0' };
    }

    if (isPreffixAvailable) {
      return { margin: '0 0 0 8px' };
    }

    if (isSuffixAvailable) {
      return { margin: '0 8px 0 0' };
    }

    return {
      margin: '0'
    };
  }, [disabled, preffixIcon, suffixElement]);

  return (
    <section
      css={styChip}
      {...res}
      data-checked={checked}
      data-disabled={disabled}
      data-preffix={Boolean(preffixIcon)}
      data-suffix={Boolean(suffixElement)}
    >
      {preffixIcon && (
        <Icon className="chip__preffix-element" icon={preffixIcon} size={16} />
      )}

      <Typography
        css={cssStyle}
        className="chip__text"
        modifier="text_body_base"
        fontWeight="strong"
      >
        {text}
      </Typography>

      {suffixElement && (
        <>
          {suffixElement.type === 'icon' && (
            <Icon
              className={cx(
                'chip__suffix-element',
                'chip__suffix-element-icon'
              )}
              icon={suffixElement.value}
              size={16}
            />
          )}

          {suffixElement.type === 'badge' && !disabled && (
            <Badge
              className="chip__suffix-element"
              text={suffixElement.value}
              textColor={color.WHITE}
              badgeColor={color.FITSKY550}
            />
          )}
        </>
      )}
    </section>
  );
};

export default Chip;
