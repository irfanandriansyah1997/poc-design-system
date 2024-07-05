import type { MouseEventHandler } from 'react';
import { useCallback } from 'react';

import { Global } from '@emotion/react';

import Portal from '@/components/shared/Portal';

import { noop } from '@/utils/noop';

import { styOverlay } from './style';
import type { OverlayProps } from './types';

const OVERFLOW_HIDDEN_STYLE = { body: { overflow: 'hidden' } };

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
    <>
      <Global styles={OVERFLOW_HIDDEN_STYLE} />

      <Portal>
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
      </Portal>
    </>
  );
};

export default Overlay;
