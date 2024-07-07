import type { PropsWithChildren } from 'react';
import { Children, cloneElement, useMemo } from 'react';

import { useTheme } from '@emotion/react';

import Flex from '@/components/Flex';
import Overlay from '@/components/Overlay';
import ModalActionButton from '@/components/shared/ModalActionButton';
import Portal from '@/components/shared/Portal';
import Typography from '@/components/Typography';
import { useModal } from '@/hooks/useModal';

import { isCompoundComponentValid } from '@/utils/dom';
import type { Maybe } from '@/types/utils';

import { styBottomSheet } from './style';
import type { BottomSheetProps } from './types';

const BottomSheet = (props: PropsWithChildren<BottomSheetProps>) => {
  const {
    actionButtons = [],
    children,
    height = 'fullscreen',
    hideCloseButton = false,
    overlayProps,
    title
  } = props;
  const {
    actions: { onAnimationEnd, onClickOverlay, onClose },
    state: { show }
  } = useModal({
    onClose: props.onClose,
    onOverlayClick: overlayProps?.onClick
  });
  const { color, radius } = useTheme();

  const style = useMemo(() => {
    let heightStyle: string | number;
    let maxHeightStyle: Maybe<string | number>;
    let borderRadius: Maybe<string>;

    switch (height) {
      case 'fullscreen':
        heightStyle = '100%';
        borderRadius = '0px';
        break;

      case 'halfscreen':
        heightStyle = '50%';
        borderRadius = `${radius.xl} ${radius.xl} 0px 0px`;
        break;

      case 'auto':
        maxHeightStyle = '90%';
        heightStyle = 'initial';
        borderRadius = `${radius.xl} ${radius.xl} 0px 0px`;
        break;

      default:
        heightStyle = height;
        borderRadius = `${radius.xl} ${radius.xl} 0px 0px`;
        break;
    }

    return {
      borderRadius,
      height: heightStyle,
      maxHeight: maxHeightStyle
    };
  }, [height, radius.xl]);

  return (
    <>
      <Overlay {...overlayProps} show={show} onClick={onClickOverlay} />

      <Portal>
        <section css={styBottomSheet}>
          <section
            className="animate bottom-sheet__container"
            style={style}
            onAnimationEnd={onAnimationEnd}
            data-show={show}
          >
            <Flex
              className="bottom-sheet__header"
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

            <section className="bottom-sheet__content">
              {Children.map(children, (child) => {
                // INFO: only render if component have attribute "COMPONENT_NAME" with "bottom-sheet-content" as a value
                if (isCompoundComponentValid(child, 'bottom-sheet-content')) {
                  return cloneElement(child);
                }

                // INFO: only render if component have attribute "COMPONENT_NAME" with "bottom-sheet-footer" as a value
                if (isCompoundComponentValid(child, 'bottom-sheet-footer')) {
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

export default BottomSheet;
