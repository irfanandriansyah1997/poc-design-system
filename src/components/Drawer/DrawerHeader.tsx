import type { PropsWithChildren } from 'react';

import Flex from '@/components/Flex';
import ModalActionButton from '@/components/shared/ModalActionButton';

import { noop } from '@/utils/noop';
import type { BaseModalActionButtonType } from '@/types/modal';

import type { DrawerHeaderFnType, DrawerHeaderProps } from './types';

interface PrivateDrawerHeaderProps extends DrawerHeaderProps {
  actionButtons?: BaseModalActionButtonType[];
  onClose?: () => void;
}

const DrawerHeader: DrawerHeaderFnType = (
  props: PropsWithChildren<PrivateDrawerHeaderProps>
) => {
  const {
    actionButtons = [],
    children,
    hideCloseButton = false,
    onClose = noop
  } = props;

  return (
    <Flex
      className="drawer__header"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex.Item>{children}</Flex.Item>

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
  );
};

DrawerHeader.COMPONENT_NAME = 'drawer-header';

export default DrawerHeader;
