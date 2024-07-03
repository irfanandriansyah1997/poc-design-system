import type { MouseEventHandler } from 'react';
import { useCallback, useState } from 'react';

import { Global, useTheme } from '@emotion/react';

import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Overlay from '@/components/Overlay';
import Typography from '@/components/Typography';

import { styModal } from './style';
import type { ModalProps } from './types';

const OVERFLOW_HIDDEN_STYLE = { body: { overlow: 'hidden' } };

const Modal = (props: ModalProps) => {
  const {
    children,
    hideCloseButton,
    maxWidth = 600,
    onClose,
    overlayProps,
    title
  } = props;
  const { color } = useTheme();
  const [show, toggleShow] = useState(true);

  const handleOnClose = useCallback(() => toggleShow(false), []);

  const handleAnimationEnd = useCallback(() => {
    if (!show && onClose) {
      onClose(false);
    }
  }, [onClose, show]);

  const handleOverlayClick: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      if (overlayProps && overlayProps.onClick) overlayProps.onClick(e);
      handleOnClose();
    },
    [handleOnClose, overlayProps]
  );

  return (
    <>
      <Global styles={OVERFLOW_HIDDEN_STYLE}></Global>

      <Overlay {...overlayProps} show={show} onClick={handleOverlayClick} />

      <section css={styModal}>
        <section
          style={{ maxWidth }}
          className="modal__container animate"
          data-show={show}
          onAnimationEnd={handleAnimationEnd}
        >
          <Flex
            className="modal__header"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex.Item>
              <Typography
                tag="h3"
                modifier="text_heading_sm"
                fontWeight="strong"
                color={color.GRAY900}
              >
                {title}
              </Typography>
            </Flex.Item>

            {!hideCloseButton && (
              <Flex.Item>
                <button onClick={handleOnClose}>
                  <Icon icon="close" size={20} color={color.GRAY500} />
                </button>
              </Flex.Item>
            )}
          </Flex>

          {typeof children === 'function' ? children(handleOnClose) : children}
        </section>
      </section>
    </>
  );
};

export default Modal;
