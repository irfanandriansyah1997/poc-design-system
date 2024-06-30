import type { CSSProperties, ReactEventHandler } from 'react';

import type { Interpolation, Radius, Theme } from '@emotion/react';

import { styImage } from './style';

interface ImageProps {
  /**
   * Alternative text for the image.
   */
  alt: string;
  /**
   * Custom CSS
   */
  css?: Interpolation<Theme>;
  /**
   * Height of the image. Can be a string or a number.
   */
  height?: string | number;
  /**
   * Defines how the image should be resized to fit its container.
   */
  objectFit?: CSSProperties['objectFit'];
  /**
   * Specifies the alignment of the image within its container.
   */
  objectPosition?: CSSProperties['objectPosition'];
  /**
   * Event handler for the error event.
   */
  onError?: ReactEventHandler<HTMLImageElement>;
  /**
   * Event handler for the load event.
   */
  onLoad?: ReactEventHandler<HTMLImageElement>;
  /**
   * Defines the border-radius of the image. Uses predefined keys from the theme.
   */
  radius?: keyof Radius;
  /**
   * Source URL of the image.
   */
  src: string;
  /**
   * If true, the section containing the image will have the `data-transparent` attribute set.
   */
  transparent?: boolean;
  /**
   * Width of the image. Can be a string or a number.
   */
  width?: string | number;
}

const Image = (props: ImageProps) => {
  const {
    alt,
    height,
    objectFit = 'cover',
    objectPosition,
    onError,
    onLoad,
    radius = undefined,
    src,
    transparent = false,
    width,
    ...res
  } = props;

  return (
    <section
      css={styImage}
      {...res}
      data-transparent={transparent}
      data-radius={radius}
      style={{ height, width }}
    >
      <img
        src={src}
        alt={alt}
        style={{ height, objectFit, objectPosition, width }}
        onLoad={onLoad}
        onError={onError}
      />
    </section>
  );
};

export default Image;
