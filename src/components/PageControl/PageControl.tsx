import type { HTMLAttributes } from 'react';

import { useTheme } from '@emotion/react';

import type { GenericHTMLProps } from '@/types/react';

import { styPageControl } from './style';
import { calcScale, calcTranslate } from './utils';

type BaseHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

interface PageControlProps extends BaseHTMLProps {
  activeColor?: string;
  activeIndex?: number;
  defaultColor?: string;
  length: number;
}

const PageControl = (props: PageControlProps) => {
  const { activeColor, activeIndex = 0, defaultColor, length = 0 } = props;
  const { color: colorPallete } = useTheme();

  return (
    <section css={styPageControl}>
      <section
        data-scrollable="true"
        style={{ translate: calcTranslate(activeIndex, length) }}
      >
        {[...Array(length).keys()].map((index) => {
          return (
            <span
              key={index}
              className="page-control__button"
              data-active={activeIndex === index}
              data-scale={calcScale(index, activeIndex, length)}
              style={{
                backgroundColor:
                  activeIndex === index
                    ? activeColor || colorPallete.GREEN500
                    : defaultColor || colorPallete.GRAY200
              }}
            />
          );
        })}
      </section>
    </section>
  );
};

export default PageControl;
