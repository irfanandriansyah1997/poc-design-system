import type { HTMLAttributes, PropsWithChildren } from 'react';
import { Children, cloneElement, isValidElement } from 'react';

import type { GenericHTMLProps } from '@/types/react';

import { styHorizontalSliderStyle } from './style';

type HorizontalSliderAlignType = 'stretch' | 'top' | 'middle' | 'bottom';

type BaseHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

interface HorizontalSliderProps extends BaseHTMLProps {
  align?: HorizontalSliderAlignType;
  gap?: string | number;
  padding?: string | number;
}

const MAPPING_ALIGN: Record<HorizontalSliderAlignType, string> = {
  bottom: 'flex-end',
  middle: 'center',
  stretch: 'stretch',
  top: 'flex-start'
};

const HorizontalSlider = (props: PropsWithChildren<HorizontalSliderProps>) => {
  const { align = 'stretch', children, gap, padding, ...res } = props;

  return (
    <section
      css={[
        styHorizontalSliderStyle,
        { alignItems: MAPPING_ALIGN[align], gap: gap, padding }
      ]}
      {...res}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return <div>{cloneElement(child)}</div>;
        }

        return null;
      })}
    </section>
  );
};

export default HorizontalSlider;
