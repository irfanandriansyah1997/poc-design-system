import type { MouseEvent, ReactNode } from 'react';

import type { Color } from '@emotion/react';

import type { FithubIconType } from '@/types/icon';

export type ToasterSeverityType =
  | 'success'
  | 'info'
  | 'error'
  | 'dark'
  | 'light'
  | 'white';

export interface BaseToasterProps {
  autoClose?: number;
  ctaLabel?: string;
  icon?: FithubIconType;
  iconColor?: keyof Color;
  message?: ReactNode;
  onCtaClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  theme?: ToasterSeverityType;
}

export interface ToasterRefType {
  close: () => void;
}

export interface ToasterProps extends BaseToasterProps {
  onClose?: (toggle: false) => void;
}

export interface ToasterImperativeRefType extends ToasterRefType {
  open: (args: BaseToasterProps) => void;
}
