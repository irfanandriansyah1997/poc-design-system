import type { PropsWithChildren } from 'react';
import { Children, cloneElement } from 'react';

import Overlay from '@/components/Overlay';
import Portal from '@/components/shared/Portal';
import { useModal } from '@/hooks/useModal';

import { isCompoundComponentValid } from '@/utils/dom';

import { styDrawer } from './style';
import type { DrawerProps } from './types';

const Drawer = (props: PropsWithChildren<DrawerProps>) => {
  const { actionButtons = [], children, overlayProps, width = '80%' } = props;
  const {
    actions: { onAnimationEnd, onClickOverlay, onClose },
    state: { show }
  } = useModal({
    onClose: props.onClose,
    onOverlayClick: overlayProps?.onClick
  });

  return (
    <>
      <Overlay {...overlayProps} show={show} onClick={onClickOverlay} />

      <Portal>
        <section
          css={styDrawer}
          style={{ width }}
          className="animate"
          onAnimationEnd={onAnimationEnd}
          data-show={show}
        >
          {Children.map(children, (child) => {
            // INFO: only render if component have attribute "COMPONENT_NAME" with "drawer-header" as a value
            if (isCompoundComponentValid(child, 'drawer-header')) {
              const injectedProps = { actionButtons, onClose };
              return cloneElement(child, injectedProps);
            }

            // INFO: only render if component have attribute "COMPONENT_NAME" with "drawer-content" as a value
            if (isCompoundComponentValid(child, 'drawer-content')) {
              return cloneElement(child);
            }

            return null;
          })}
        </section>
      </Portal>
    </>
  );
};

export default Drawer;
