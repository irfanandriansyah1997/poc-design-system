import type { CSSProperties } from 'react';
import { useMemo } from 'react';

import { GRAY400 } from '@/constants/theme';

import { stySpinner } from './style';

interface SpinnerProps {
  /**
   * Whether the spinner should be centered.
   */
  center?: boolean;

  /**
   * Whether the spinner should have a shadow.
   */
  shadow?: boolean;

  /**
   * The size of the spinner.
   */
  size: number;

  /**
   * The color of the spinner.
   */
  spinnerColor?: string;

  /**
   * The width of the spinner border.
   */
  spinnerWidth?: number;

  /**
   * Whether the spinner should be wrapped in a container.
   */
  withContainer?: boolean;
}

const Spinner = (props: SpinnerProps): JSX.Element => {
  const {
    center = false,
    shadow = false,
    size,
    spinnerColor = GRAY400,
    spinnerWidth = 5,
    withContainer = true
  } = props;

  const style = useMemo((): Record<string, CSSProperties> => {
    return {
      container: {
        height: withContainer ? size * 2 : 'initial',
        width: withContainer ? size * 2 : 'initial'
      },
      spinner: {
        borderLeftColor: spinnerColor,
        borderRightColor: spinnerColor,
        borderTopColor: spinnerColor,
        borderWidth: spinnerWidth,
        height: size,
        width: size
      }
    };
  }, [size, spinnerColor, spinnerWidth, withContainer]);

  return (
    <section
      aria-label="loading container"
      css={stySpinner}
      style={style.container}
      data-position-center={center}
      data-with-shadow={shadow}
      data-wrap-container={withContainer}
    >
      <div
        role="presentation"
        aria-label="loading"
        className="spinner"
        style={style.spinner}
      />
    </section>
  );
};

export default Spinner;
