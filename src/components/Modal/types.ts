import type { PropsWithChildren, ReactNode } from 'react';

import type { OverlayProps } from '@/components/Overlay/types';

export interface ModalProps {
  children?: JSX.Element | ((close: () => void) => JSX.Element);
  footerButton?: ReactNode[];
  hideCloseButton?: boolean;
  maxWidth?: string | number;
  onClose?: (show: boolean) => void;
  overlayProps?: Omit<OverlayProps, 'show'>;
  show?: boolean;
  title: string;
}

export type ModalFnType = ((props: ModalProps) => JSX.Element) & {
  Content: (props: PropsWithChildren<unknown>) => JSX.Element;
  Footer: (props: PropsWithChildren<unknown>) => JSX.Element;
};
