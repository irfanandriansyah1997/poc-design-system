import type { Ref } from 'react';

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
  componentRef?: Ref<BaseModalRefType>;
  onClose?: BaseModalOnCloseFnType;
  overlayProps?: Omit<OverlayProps, 'show'>;
}

export interface BaseModalRefType {
  close: () => void;
}
