import type { MouseEventHandler } from 'react';
import { useCallback, useMemo, useState } from 'react';

interface UseModalArgs {
  onClose?: (isVisible: boolean) => void;
  onOverlayClick?: MouseEventHandler<HTMLElement>;
}

export const useModal = (args: UseModalArgs) => {
  const { onClose, onOverlayClick } = args;
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleOverlayClick: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      if (onOverlayClick) onOverlayClick(e);
      handleClose();
    },
    [handleClose, onOverlayClick]
  );

  const handleAnimationEnd = useCallback(() => {
    if (!isVisible && onClose) {
      onClose(false);
    }
  }, [onClose, isVisible]);

  return useMemo(
    () => ({
      actions: {
        onAnimationEnd: handleAnimationEnd,
        onClickOverlay: handleOverlayClick,
        onClose: handleClose
      },
      state: { show: isVisible }
    }),
    [handleAnimationEnd, handleClose, handleOverlayClick, isVisible]
  );
};
