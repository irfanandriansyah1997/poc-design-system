import { type HTMLAttributes, memo } from 'react';

import type { Elevation } from '@emotion/react';

import { styCard } from './style';

type HTMLCardProps = Omit<HTMLAttributes<HTMLElement>, 'style'>;

interface CardProps extends HTMLCardProps {
  /** The margin around the card */
  margin?: string | number;
  /** The padding inside the card */
  padding?: string | number;
  /** Whether the card should have rounded corners */
  rounded?: boolean;
  /** The shadow level for the card */
  shadow?: keyof Elevation;
  /** The shadow level when interacting with the card */
  shadowOnInteract?: keyof Elevation;
  /** Whether the card should have a background */
  withBackground?: boolean;
}

const _Card = (props: CardProps) => {
  const {
    'aria-label': ariaLabel = 'card',
    margin,
    padding = 16,
    role = 'presentation',
    rounded = true,
    shadow = 'element',
    shadowOnInteract = 'md',
    withBackground = true,
    ...res
  } = props;

  return (
    <section
      css={[styCard, { margin, padding }]}
      role={role}
      aria-label={ariaLabel}
      data-rounded={rounded}
      data-shadow={shadow}
      data-shadow-on-interact={shadowOnInteract}
      data-with-background={withBackground}
      {...res}
    />
  );
};

const Card = memo(_Card);

Card.displayName = 'Card';

export default Card;
