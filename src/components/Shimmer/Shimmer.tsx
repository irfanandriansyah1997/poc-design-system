import type { HTMLAttributes } from 'react';
import { useMemo } from 'react';

import { type Radius, useTheme } from '@emotion/react';

import type { GenericHTMLProps } from '@/types/react';
import type { LiteralUnion } from '@/types/utils';

import { styShimmer } from './style';

interface ShimmerProps extends GenericHTMLProps<HTMLAttributes<HTMLElement>> {
  display?: 'block' | 'inline';
  height: string | number;
  radius?: LiteralUnion<keyof Radius, string | number>;
  width: string | number;
}

const Shimmer = (props: ShimmerProps) => {
  const { display = 'block', height, radius, width, ...res } = props;
  const { radius: radiusPreset } = useTheme();

  const cssStyle = useMemo(() => {
    let radiusStyle = radius;

    switch (radius) {
      case 'circle':
      case 'lg':
      case 'md':
      case 'sm':
      case 'xl':
        radiusStyle = radiusPreset[radius as keyof Radius];
        break;
    }

    return {
      borderRadius: radiusStyle,
      display: display == 'inline' ? 'inline-block' : 'block',
      height,
      width
    };
  }, [display, height, radius, radiusPreset, width]);

  return <section css={styShimmer} {...res} style={cssStyle} />;
};

export default Shimmer;
