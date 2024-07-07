import { memo } from 'react';

import { useTheme } from '@emotion/react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import type { FithubIconType } from '@/types/icon';

import type { TextfieldSizeType } from './types';

interface TextfieldAddOnProps {
  className?: string;
  color?: string;
  icon?: FithubIconType;
  position: 'suffix' | 'preffix';
  sizes: TextfieldSizeType;
  text?: string;
}

const TextfieldAddOn = (props: TextfieldAddOnProps) => {
  const { className, color, icon, position, text } = props;
  const {
    color: colorPreset,
    components: { 'textfield-text-modifier': textVariant }
  } = useTheme();

  if (text) {
    return (
      <section data-position={position} className={className}>
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
      <section data-position={position} className={className}>
        <Icon icon={icon} color={color || colorPreset.GRAY500} />
      </section>
    );
  }

  return null;
};

export default memo(TextfieldAddOn);
