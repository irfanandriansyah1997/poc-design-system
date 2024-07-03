import type { PropsWithChildren, UIEventHandler } from 'react';
import {
  Children,
  cloneElement,
  memo,
  useCallback,
  useEffect,
  useRef
} from 'react';

import { isCompoundComponentValid } from '@/utils/dom';

import { styTab } from './style';
import type { TabProps } from './types';
import { autoScroll, calcIndicator, calcOverflowMask } from './utils';

const Tabs = (props: PropsWithChildren<TabProps>) => {
  const { activeKey, children, onTabClick, variant, withBorder, ...res } =
    props;
  let activeIndex = 0;
  const tabBarRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLElement>(null);

  const handleTabItemClick = useCallback(
    (key: string | number) => {
      onTabClick?.(key);
    },
    [onTabClick]
  );

  const TabItem = Children.map(children, (child, index) => {
    if (isCompoundComponentValid(child, 'tab-item')) {
      const currentKey = child.props?.keyName || index;
      const active = currentKey === activeKey;
      if (active) activeIndex = index;

      return cloneElement(child, {
        active,
        onClick: handleTabItemClick,
        variant
      } as Record<string, unknown>);
    }

    return null;
  });

  useEffect(() => {
    if (tabBarRef.current) {
      let observed = false;
      let debounce: ReturnType<typeof setTimeout>;

      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const tabBarNode = entry.target;
          const indicatorNode = indicatorRef.current;

          if (indicatorNode) {
            calcOverflowMask(tabBarNode, indicatorNode);

            if (observed) {
              clearTimeout(debounce);
              debounce = setTimeout(() => {
                calcIndicator(tabBarNode, indicatorNode, activeIndex);
              }, 200);
            } else {
              calcIndicator(tabBarNode, indicatorNode, activeIndex);
              observed = true;
            }
          }
        });
      });

      autoScroll(tabBarRef.current, activeIndex);
      resizeObserver.observe(tabBarRef.current);

      return () => {
        clearTimeout(debounce);
        resizeObserver.disconnect();
      };
    }
  }, [activeIndex]);

  const handleTabScroll: UIEventHandler<HTMLElement> = useCallback((e) => {
    calcOverflowMask(e.currentTarget);
  }, []);

  return (
    <section css={styTab}>
      <section
        {...res}
        className="tab__container"
        data-with-border={withBorder}
        data-variant={variant}
        ref={tabBarRef}
        onScroll={handleTabScroll}
      >
        {TabItem}
        <section className="tab__indicator" ref={indicatorRef} />
      </section>
    </section>
  );
};

export default memo(Tabs);
