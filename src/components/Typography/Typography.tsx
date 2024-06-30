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
    ellipsis,
    fontFamily = 'primary',
    fontWeight = 'regular',
    italic = false,
    margin,
    modifier = 'text_body_base',
    tag = 'p',
    textAlign = 'left',
    textDecoration = 'none',
    ...res
  } = props;

  const style = useMemo(() => {
    return {
      color: color,
      margin,
      overflow: ellipsis ? 'hidden' : 'initial',
      textAlign,
      textDecoration,
      textOverflow: ellipsis ? 'ellipsis' : 'initial',
      whiteSpace: ellipsis ? 'nowrap' : 'initial'
    };
  }, [color, ellipsis, margin, textAlign, textDecoration]);

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
