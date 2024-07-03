import {
  Children,
  isValidElement,
  memo,
  useCallback,
  useEffect,
  useRef
} from 'react';

import useControlled from '@/hooks/useControlled';

import { cssSlideGroup, cssSlideItem, cssSlider, cssWrapper } from './style';
import { initCarousel } from './utils';

interface ControlArgs {
  /**
   * Maximum value the Carousel can slide to.
   */
  max: number;
  /**
   * Minimum value the Carousel can slide to.
   */
  min: number;
  /**
   * To set Carousel value directly.
   */
  setValue: (value: number) => void;
  /**
   * Current Carousel step.
   */
  step: number;
  /**
   * To trigger step down.
   */
  stepDown: () => void;
  /**
   * To trigger step up.
   */
  stepUp: () => void;
  /**
   * Current Carlusel value.
   */
  value: number;
  /**
   * Current visible cells.
   */
  visibleCells: number;
}

type CarouselProps = {
  /**
   * Scroll automatically at a specified interval, given number in milliseconds.
   * Autoplay is false if not specified.
   */
  autoplay?: number;
  children: React.ReactNode;
  /**
   * Append nodes with navigation control capabilities.
   */
  control?: (props: ControlArgs) => JSX.Element | null;
  /**
   * The default value of carousel. For uncontrolled carousel.
   */
  defaultValue?: number;
  /**
   * Spacing between items.
   */
  gutter?: string;
  /**
   * Callback when Carousel value changed.
   */
  onChange?: (value: number) => void;
  /**
   * Spacing between Carousel and it's parent element to create peek effect.
   */
  outerGutter?: string;
  /**
   * The amount of items will be skipped on a single step.
   */
  step?: number;
  /**
   * Current active index.
   */
  value?: number;
  /**
   * The amount of items will displayed at one time.
   */
  visibleCells?: number;
};

const Carousel = (props: CarouselProps) => {
  const {
    autoplay = 0,
    children,
    control,
    defaultValue = 0,
    gutter = '0px',
    onChange,
    outerGutter = '0px',
    step = 1,
    value: propValue,
    visibleCells = 1
  } = props;
  const [value, _setValue] = useControlled({ defaultValue, propValue });

  let length = 0;
  const slides = Children.map(children, (child) => {
    if (isValidElement(child)) {
      length += 1;
      return <div css={cssSlideItem(gutter)}>{child}</div>;
    }
    return null;
  });

  // navigation target
  const min = 0;
  const max = Math.max(length - visibleCells, 0);

  const setValue = useCallback(
    (val: number) => {
      _setValue(val);
      if (onChange) onChange(val);
    },
    [_setValue, onChange]
  );

  const stepAuto = useCallback(() => {
    setValue(value === max ? min : Math.min(value + step, max));
  }, [setValue, min, max, step, value]);

  const stepDown = useCallback(() => {
    setValue(Math.max(value - step, min));
  }, [setValue, min, step, value]);

  const stepUp = useCallback(() => {
    setValue(Math.min(value + step, max));
  }, [setValue, max, step, value]);

  // ref forwarding
  const wrapper = useRef<HTMLDivElement>(null);

  // re-adjust value after screen resize (for last slide)
  useEffect(() => {
    if (value > max) setValue(max);
  }, [value, max, setValue]);

  const slideGroup = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapperDOM = wrapper.current;
    const slideGroupDOM = slideGroup.current;

    if (wrapperDOM && slideGroupDOM) {
      const carousel = initCarousel({
        autoplay,
        max,
        min,
        slideGroupDOM,
        stepAuto,
        stepDown,
        stepUp,
        value,
        wrapperDOM
      });
      return carousel.destroy;
    }
    return;
  }, [autoplay, max, min, value, stepAuto, stepDown, stepUp]);

  return (
    <>
      <div ref={wrapper} css={cssWrapper(outerGutter)}>
        <div css={cssSlider(gutter)}>
          <div
            ref={slideGroup}
            css={cssSlideGroup(visibleCells)}
            style={{
              transform: `translate3d(${-value * 100}%,0,0)`
            }}
          >
            {slides}
          </div>
        </div>
      </div>
      {control &&
        control({
          max,
          min,
          setValue,
          step,
          stepDown,
          stepUp,
          value,
          visibleCells
        })}
    </>
  );
};

export default memo(Carousel);