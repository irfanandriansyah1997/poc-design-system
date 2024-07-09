import type { CSSProperties, PropsWithChildren } from 'react';
import { Children, cloneElement, useMemo } from 'react';

import { isCompoundComponentValid } from '@/utils/dom';

import GridItem from './GridItem';
import { styGrid } from './style';
import type { GridFnType, GridProps } from './types';

// TODO: need to fix later
// @ts-expect-error irfan@fithub.id need to fix later error typecheck
const Grid: GridFnType = (props: PropsWithChildren<GridProps>) => {
  const {
    'aria-label': ariaLabel = 'grid container',
    children,
    gap = 16,
    role = 'region',
    ...res
  } = props;

  const injectedProps = useMemo(() => {
    if (typeof gap === 'number') {
      return {
        gapHorizontal: gap / 2,
        gapVertical: gap / 2
      };
    }

    if (typeof gap === 'object' && Array.isArray(gap) && gap.length === 2) {
      const [gapVertical, gapHorizontal] = gap;

      return {
        gapHorizontal: gapHorizontal / 2,
        gapVertical: gapVertical / 2
      };
    }

    return {
      gapHorizontal: 0,
      gapVertical: 0
    };
  }, [gap]);

  const style = useMemo<CSSProperties>(() => {
    const { gapHorizontal, gapVertical } = injectedProps;

    return {
      margin: `-${gapVertical}px -${gapHorizontal}px ${gapVertical}px`
    };
  }, [injectedProps]);

  return (
    <section css={styGrid} role={role} aria-label={ariaLabel} {...res}>
      <section className="grid-row" style={style}>
        {Children.map(children, (child) => {
          // INFO: only render if component have attribute "COMPONENT_NAME" with "grid-item" as a value
          if (isCompoundComponentValid(child, 'grid-item')) {
            return cloneElement(child, injectedProps);
          }

          return null;
        })}
      </section>
    </section>
  );
};

Grid.Item = GridItem;

Grid.displayName = 'Grid';

export default Grid;
