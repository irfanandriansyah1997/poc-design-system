import type { MouseEventHandler } from 'react';
import { memo, useCallback } from 'react';

import { useTheme } from '@emotion/react';

import Flex from '@/components/Flex';
import Icon from '@/components/Icon';

import type { BaseModalActionButtonType } from '@/types/modal';

import { styModalActionButton } from './style';

interface ModalActionButtonProps {
  actionButtons: BaseModalActionButtonType[];
  hideCloseButton: boolean;
  onClose: () => void;
}

const ModalActionButton = (props: ModalActionButtonProps) => {
  const { actionButtons, hideCloseButton, onClose } = props;
  const { color } = useTheme();

  const handleOnClickClose: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();

      if (onClose) onClose();
    },
    [onClose]
  );

  return (
    <Flex css={styModalActionButton}>
      {actionButtons.map((item) => {
        return (
          <Flex.Item key={item.name}>
            <button
              type="button"
              className="modal-action-button__item"
              onClick={() => item.onClick(onClose)}
            >
              <Icon icon={item.icon} size={20} color={item.color} />
            </button>
          </Flex.Item>
        );
      })}

      {!hideCloseButton && (
        <Flex.Item>
          <button
            type="button"
            className="modal-action-button__item"
            onClick={handleOnClickClose}
          >
            <Icon icon="close" size={20} color={color.GRAY500} />
          </button>
        </Flex.Item>
      )}
    </Flex>
  );
};

export default memo(ModalActionButton);
