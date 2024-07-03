import type { MouseEvent, ReactNode } from 'react';

import type { Color } from '@emotion/react';

import type { FithubIconType } from '@/types/icon';

export type SnackbarSeverityType = 'dark' | 'light';

/////////////////////////////////////////////////////////////////////////////
// Base Snackbar Props Interface
/////////////////////////////////////////////////////////////////////////////

export interface BaseSnackbarProps {
  /**
   * Time in milliseconds after which the Snackbar will automatically close.
   */
  autoClose?: number;

  /**
   * Label for the call-to-action button.
   */
  ctaLabel?: string;

  /**
   * Icon to be displayed in the Snackbar.
   */
  icon?: FithubIconType;

  /**
   * Color of the icon.
   */
  iconColor?: keyof Color;

  /**
   * Message content of the Snackbar.
   */
  message?: ReactNode;

  /**
   * Callback function for the call-to-action button click event.
   */
  onCtaClick?: (e: MouseEvent<HTMLButtonElement>) => void;

  /**
   * Theme of the Snackbar, either 'dark' or 'light'.
   */
  theme?: SnackbarSeverityType;
}

/////////////////////////////////////////////////////////////////////////////
// Snackbar Reference Interface
/////////////////////////////////////////////////////////////////////////////

export interface SnackbarRefType {
  /**
   * Method to close the Snackbar.
   */
  close: () => void;
}

/////////////////////////////////////////////////////////////////////////////
// Snackbar Props Interface
/////////////////////////////////////////////////////////////////////////////

export interface SnackbarProps extends BaseSnackbarProps {
  /**
   * Callback function to handle the Snackbar close event.
   */
  onClose?: (toggle: false) => void;
}

/////////////////////////////////////////////////////////////////////////////
// Snackbar Imperative Reference Interface
/////////////////////////////////////////////////////////////////////////////

export interface SnackbarImperativeRefType extends SnackbarRefType {
  /**
   * Method to open the Snackbar with specified properties.
   */
  open: (args: BaseSnackbarProps) => void;
}
