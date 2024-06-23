import type { HTMLAttributes } from 'react';

import { cx } from '@/utils/css';
import type { FithubIconType } from '@/types/icon';
import type { GenericHTMLProps } from '@/types/react';

import { styIcon } from './style';

type SpanHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLSpanElement>>;

interface IconProps extends SpanHTMLProps {
  /** The color of the icon */
  color?: string;
  /** The type of the icon */
  icon: FithubIconType;
  /** The margin around the icon */
  margin?: number | string;
  /** The size of the icon */
  size?: number;
}

const Icon = (props: IconProps) => {
  const {
    'aria-label': ariaLabel = 'fithub icon',
    className,
    color,
    icon,
    margin,
    role = 'img',
    size: fontSize = 16,
    ...res
  } = props;

  return (
    <span
      {...res}
      style={{ color, fontSize, margin }}
      role={role}
      aria-label={ariaLabel}
      css={styIcon}
      data-icon={icon}
      className={cx('fithub-icon', className)}
    />
  );
};

export default Icon;
