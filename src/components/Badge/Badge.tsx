import type { HTMLAttributes } from 'react';
import { useMemo } from 'react';

import { useTheme } from '@emotion/react';

import Typography from '@/components/Typography';

import type { GenericHTMLProps } from '@/types/react';

import { styBadge } from './style';

interface BadgeProps extends GenericHTMLProps<HTMLAttributes<HTMLElement>> {
  /**
   * The background color of the badge.
   */
  badgeColor?: string;

  /**
   * The margin around the badge.
   */
  margin?: string | number;

  /**
   * The text to be displayed inside the badge.
   */
  text?: string;

  /**
   * The color of the text inside the badge.
   */
  textColor?: string;
}

const Badge = (props: BadgeProps) => {
  const { badgeColor, margin, text, textColor, ...res } = props;
  const { color } = useTheme();

  const cssStyle = useMemo(() => {
    return {
      backgroundColor: badgeColor || color.BLUE500,
      margin
    };
  }, [badgeColor, color.BLUE500, margin]);

  if (text) {
    return (
      <Typography
        {...res}
        css={[cssStyle, styBadge]}
        data-render-with-text={true}
        modifier="text_body_xs"
        ellipsis
        color={textColor || color.WHITE}
      >
        {text}
      </Typography>
    );
  }

  return (
    <section
      {...res}
      css={[cssStyle, styBadge]}
      data-render-with-text={false}
    />
  );
};

export default Badge;
