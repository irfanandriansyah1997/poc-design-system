import type { PropsWithChildren } from 'react';
import { useMemo } from 'react';

import { jsx } from '@emotion/react';

import { styTypography } from './style';
import type { TypographyProps } from './types';

const Typography = <T extends Element>(
  props: PropsWithChildren<TypographyProps<T>>
) => {
  const {
    children,
    color,
    display = 'block',
    ellipsis,
    fontFamily = 'primary',
    fontWeight = 'regular',
    italic = false,
    margin,
    modifier = 'text_body_base',
    style: styleProps = {},
    tag = 'p',
    textAlign = 'left',
    textDecoration = 'none',
    ...res
  } = props;

  const style = useMemo(() => {
    return {
      ...styleProps,
      color: color,
      display,
      margin,
      overflow: ellipsis ? 'hidden' : 'initial',
      textAlign,
      textDecoration,
      textOverflow: ellipsis ? 'ellipsis' : 'initial',
      whiteSpace: ellipsis ? 'nowrap' : 'initial'
    };
  }, [color, display, ellipsis, margin, styleProps, textAlign, textDecoration]);

  return jsx(
    tag,
    {
      ...res,
      css: styTypography,
      'data-font-family': fontFamily,
      'data-font-weight': fontWeight,
      'data-italic': Boolean(italic),
      'data-modifier': modifier,
      style
    },
    children
  );
};

export default Typography;
