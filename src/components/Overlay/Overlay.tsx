import type { MouseEventHandler } from 'react';
import { useCallback } from 'react';

import { noop } from '@/utils/noop';

import { styOverlay } from './style';
import type { OverlayProps } from './types';

const Overlay = (props: OverlayProps) => {
  const {
    disabled = false,
    onClick,
    show = false,
    transparent = false,
    ...res
  } = props;

  const handleOnClick: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      if (!disabled && onClick) onClick(e);
    },
    [disabled, onClick]
  );

  return (
    <section
      css={styOverlay}
      {...res}
      className="animate"
      role="button"
      tabIndex={0}
      data-show={show}
      data-transparent={transparent}
      onClick={handleOnClick}
      onKeyDown={noop}
    />
  );
};

export default Overlay;
