import type { CSSProperties } from 'react';
import { useMemo } from 'react';

import { useTheme } from '@emotion/react';

import { styDivider } from './style';

interface DividerProps {
  /**
   * The color of the divider.
   */
  color?: string;

  /**
   * The margin around the divider.
   */
  margin?: string | number;

  /**
   * The orientation of the divider, either 'vertical' or 'horizontal'.
   */
  orientation?: 'vertical' | 'horizontal';

  /**
   * The style of the divider, either 'solid' or 'dashed'.
   */
  style?: 'solid' | 'dashed';

  /**
   * The width of the divider.
   */
  width?: string | number;
}

const Divider = (props: DividerProps) => {
  const {
    color,
    margin = 0,
    orientation = 'horizontal',
    style = 'solid',
    width = 1
  } = props;
  const { color: colorPreset } = useTheme();

  const cssStyle = useMemo<CSSProperties>(() => {
    return {
      borderBottomWidth: orientation === 'horizontal' ? width : undefined,
      borderColor: color || colorPreset.GRAY100,
      borderLeftWidth: orientation === 'vertical' ? width : undefined,
      margin: margin
    };
  }, [color, colorPreset, margin, orientation, width]);

  return (
    <hr
      style={cssStyle}
      css={styDivider}
      data-orientation={orientation}
      data-border-style={style}
    />
  );
};

export default Divider;
