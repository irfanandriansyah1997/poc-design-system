import { memo } from 'react';

import { useTheme } from '@emotion/react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { noop } from '@/utils/noop';
import type { FithubIconType } from '@/types/icon';
import type { InputSizeType } from '@/types/input';

interface TextfieldAddOnProps {
  className?: string;
  color?: string;
  icon?: FithubIconType;
  iconSize: number;
  onClick?: () => void;
  position: 'suffix' | 'preffix';
  sizes: InputSizeType;
  text?: string;
}

const TextfieldAddOn = (props: TextfieldAddOnProps) => {
  const { className, color, icon, iconSize, onClick, position, text } = props;
  const {
    color: colorPreset,
    components: { 'textfield-text-modifier': textVariant }
  } = useTheme();

  if (text) {
    return (
      <section
        role="button"
        tabIndex={0}
        onKeyDown={noop}
        onClick={onClick}
        data-position={position}
        className={className}
      >
        <Typography
          modifier={textVariant}
          ellipsis
          color={color || colorPreset.GRAY900}
        >
          {text}
        </Typography>
      </section>
    );
  }

  if (icon) {
    return (
      <section
        role="button"
        tabIndex={0}
        onKeyDown={noop}
        onClick={onClick}
        data-position={position}
        className={className}
      >
        <Icon
          icon={icon}
          color={color || colorPreset.GRAY500}
          size={iconSize}
        />
      </section>
    );
  }

  return null;
};

export default memo(TextfieldAddOn);
