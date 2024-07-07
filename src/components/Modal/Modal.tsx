import {
  Children,
  cloneElement,
  type PropsWithChildren,
  useImperativeHandle
} from 'react';

import { useTheme } from '@emotion/react';

import Flex from '@/components/Flex';
import Overlay from '@/components/Overlay';
import ModalActionButton from '@/components/shared/ModalActionButton';
import Portal from '@/components/shared/Portal';
import Typography from '@/components/Typography';
import { useModal } from '@/hooks/useModal';

import { isCompoundComponentValid } from '@/utils/dom';

import { styModal } from './style';
import type { ModalProps } from './types';

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    actionButtons = [],
    children,
    componentRef,
    hideCloseButton = false,
    maxWidth = 600,
    overlayProps,
    title
  } = props;
  const {
    color,
    components: { 'modal-title-modifier': titleModifier }
  } = useTheme();
  const {
    actions: { onAnimationEnd, onClickOverlay, onClose },
    state: { show }
  } = useModal({
    onClose: props.onClose,
    onOverlayClick: overlayProps?.onClick
  });

  useImperativeHandle(componentRef, () => {
    return { close: onClose };
  });

  return (
    <>
      <Overlay {...overlayProps} show={show} onClick={onClickOverlay} />

      <Portal>
        <section css={styModal}>
          <section
            style={{ maxWidth }}
            className="modal__container animate"
            data-show={show}
            onAnimationEnd={onAnimationEnd}
          >
            <Flex
              className="modal__header"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex.Item>
                <Typography
                  tag="h3"
                  modifier={titleModifier}
                  fontWeight="strong"
                  color={color.GRAY900}
                >
                  {title}
                </Typography>
              </Flex.Item>

              {(!hideCloseButton || actionButtons.length > 0) && (
                <Flex.Item>
                  <ModalActionButton
                    actionButtons={actionButtons}
                    hideCloseButton={hideCloseButton}
                    onClose={onClose}
                  />
                </Flex.Item>
              )}
            </Flex>

            <section className="modal__content">
              {Children.map(children, (child) => {
                // INFO: only render if component have attribute "COMPONENT_NAME" with "modal-content" as a value
                if (isCompoundComponentValid(child, 'modal-content')) {
                  return cloneElement(child);
                }

                // INFO: only render if component have attribute "COMPONENT_NAME" with "modal-content" as a value
                if (isCompoundComponentValid(child, 'modal-footer')) {
                  return cloneElement(child);
                }

                return null;
              })}
            </section>
          </section>
        </section>
      </Portal>
    </>
  );
};

export default Modal;
