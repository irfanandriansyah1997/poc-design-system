import type { OverlayProps } from '@/components/Overlay/types';

import type { FithubIconType } from './icon';

export type BaseModalOnCloseFnType = (show: boolean) => void;

export interface BaseModalActionButtonType {
  color: string;
  icon: FithubIconType;
  name: string;
  onClick: (close: () => void) => void;
}

export interface BaseModalProps {
  actionButtons?: BaseModalActionButtonType[];
  onClose?: BaseModalOnCloseFnType;
  overlayProps?: Omit<OverlayProps, 'show'>;
}
