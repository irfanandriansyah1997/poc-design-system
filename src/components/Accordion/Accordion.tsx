import type { MouseEventHandler, PropsWithChildren } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';

import Divider from '@/components/Divider';
import Icon from '@/components/Icon';
import useMount from '@/hooks/useMount';
import useRequestAnimation from '@/hooks/useRequestAnimation';
import useResizeObserver from '@/hooks/useResizeObserver';

import { numberToPx, pxToNumber } from '@/utils/css';
import { noop } from '@/utils/noop';

import { styAccordion } from './style';
import type { AccordionProps } from './types';
import { ACCORDION_DESKTOP_STYLING } from '.';

const Accordion = (props: PropsWithChildren<AccordionProps>) => {
  const {
    children,
    className,
    defaultExpanded = false,
    disabled = false,
    expanded,
    onClick,
    showExpandIcon = true,
    styling: {
      gapContent,
      iconSize,
      paddingHorizontal,
      paddingVertical
    } = ACCORDION_DESKTOP_STYLING,
    title
  } = props;
  const { color } = useTheme();
  const [state, toggleState] = useState(Boolean(defaultExpanded));
  const [maxHeight, setMaxHeight] = useState(0);
  const [animationDone, toggleAnimation] = useState(true);
  const accordionContentRef = useResizeObserver<HTMLElement>((args) => {
    setMaxHeight(args.target.scrollHeight);
  });

  const { executeAnimation } = useRequestAnimation({
    animateFn: (percentage) => {
      if (accordionContentRef.current) {
        const currentMaxHeight = pxToNumber(
          accordionContentRef.current.style.maxHeight
        );

        let target = 0;
        if (state) {
          target = currentMaxHeight;
        } else {
          const targetMaxHeight =
            maxHeight || accordionContentRef.current.scrollHeight;
          target = targetMaxHeight - currentMaxHeight;
        }

        const currentValue = target * percentage;

        accordionContentRef.current.style.maxHeight = state
          ? numberToPx(currentMaxHeight - currentValue)
          : numberToPx(currentValue + currentMaxHeight);
      }
    },
    duration: 300,
    onFinish: () => toggleAnimation(true)
  });

  const handleOnClickAccordionTitle: MouseEventHandler<HTMLElement> =
    useCallback(
      (e) => {
        e.preventDefault();

        if (disabled !== true) {
          toggleState(!state);
          toggleAnimation(false);
          executeAnimation();

          if (onClick) onClick(!state);
        }
      },
      [disabled, executeAnimation, onClick, state]
    );

  useEffect(() => {
    if (maxHeight && state && accordionContentRef.current && animationDone) {
      accordionContentRef.current.style.maxHeight = numberToPx(maxHeight);
    }
    // INFO: disable eslint & exclude accordionContentRef since that variable is immutable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationDone, maxHeight, state]);

  /**
   * INFO: sync expanded props with state value; Be sure to verify before executing the sync operation
   * only when the value is different.
   */
  useEffect(() => {
    if (typeof expanded === 'boolean' && expanded !== state) {
      toggleState(expanded);
      toggleAnimation(false);
      executeAnimation();
    }
  }, [executeAnimation, expanded, state]);

  /**
   * INFO: set initial height when defaultExpanded & expanded props is defined
   */
  useMount(() => {
    let currentState = false;
    if (expanded) currentState = expanded;
    if (defaultExpanded) currentState = defaultExpanded;

    if (accordionContentRef.current) {
      accordionContentRef.current.style.maxHeight = currentState
        ? numberToPx(accordionContentRef.current.scrollHeight)
        : numberToPx(0);
    }
  });

  return (
    <section
      role="presentation"
      data-disabled={disabled}
      aria-label="accordion"
      css={styAccordion}
      className={className}
      style={{
        paddingBottom: paddingVertical,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingTop: paddingVertical
      }}
    >
      <section
        className="accordion__heading"
        role="button"
        tabIndex={0}
        onKeyDown={noop}
        onClick={handleOnClickAccordionTitle}
        style={{
          gridTemplateColumns: `auto ${iconSize}`
        }}
      >
        {title}
        {showExpandIcon && (
          <Icon
            className="accordion__icon"
            data-open={state}
            icon="chevron-down"
            color={color.GRAY300}
            size={iconSize}
          />
        )}
      </section>
      <section
        aria-label="accordion content"
        className="accordion__content"
        ref={accordionContentRef}
      >
        <Divider
          orientation="horizontal"
          width={gapContent}
          color="transparent"
        />
        {children}
      </section>
    </section>
  );
};

export default Accordion;
