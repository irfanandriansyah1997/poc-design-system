import type { PropsWithChildren } from 'react';
import { Children, cloneElement, forwardRef, useMemo } from 'react';

import { cx } from '@/utils/css';
import { isCompoundComponentValid } from '@/utils/dom';

import { styFlex } from './style';
import type { FlexFnType, FlexItemFnType, FlexProps } from './types';

// TODO: need to fix later
// @ts-expect-error irfan@fithub.id need to fix later error typecheck
const Flex: FlexFnType = forwardRef<HTMLElement, PropsWithChildren<FlexProps>>(
  (props, ref) => {
    const {
      alignItems,
      children,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      gap,
      justifyContent,
      ...res
    } = props;

    const style = useMemo(() => {
      return {
        alignItems,
        flexBasis,
        flexDirection,
        flexGrow,
        flexShrink,
        flexWrap,
        gap,
        justifyContent
      };
    }, [
      alignItems,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      gap,
      justifyContent
    ]);

    const injectedProps = useMemo(() => {
      if (flexDirection === 'column' || flexDirection === 'column-reverse') {
        return { fullWidth: true };
      }

      return {};
    }, [flexDirection]);

    return (
      <section ref={ref} css={styFlex} {...res} style={style}>
        {Children.map(children, (child) => {
          // INFO: only render if component have attribute "COMPONENT_NAME" with "flex-item" as a value
          if (isCompoundComponentValid(child, 'flex-item')) {
            const isColumnLayout =
              flexDirection === 'column' || flexDirection === 'column-reverse';

            if (isColumnLayout && typeof child.props?.fullWidth === 'boolean') {
              const childProps = { ...injectedProps };
              childProps.fullWidth = child.props?.fullWidth;

              return cloneElement(child, { ...childProps });
            }

            return cloneElement(child, injectedProps);
          }

          return null;
        })}
      </section>
    );
  }
);

const FlexItem: FlexItemFnType = (props) => {
  const { children, className, fullWidth, ...res } = props;

  return (
    <section
      {...res}
      className={cx('flex__item', className)}
      data-full-width={fullWidth}
    >
      {children}
    </section>
  );
};

FlexItem.COMPONENT_NAME = 'flex-item';

Flex.Item = FlexItem;

export default Flex;
