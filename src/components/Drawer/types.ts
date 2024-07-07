import type { PropsWithChildren } from 'react';

import type { BaseModalProps } from '@/types/modal';
import type { GenericCompoundComponentType } from '@/types/react';

/////////////////////////////////////////////////////////////////////////////
// Header Section
/////////////////////////////////////////////////////////////////////////////

export interface DrawerHeaderProps {
  /**
   * Whether to hide the close button in the header.
   */
  hideCloseButton?: boolean;
}

/**
 * Type definition for the header section of the Drawer component.
 */
export type DrawerHeaderFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<DrawerHeaderProps>) => JSX.Element,
  'drawer-header'
>;

/////////////////////////////////////////////////////////////////////////////
// Content Section
/////////////////////////////////////////////////////////////////////////////

/**
 * Type definition for the content section of the Drawer component.
 */
export type DrawerContentFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<unknown>) => JSX.Element,
  'drawer-content'
>;

/////////////////////////////////////////////////////////////////////////////
// Drawer Container Section
/////////////////////////////////////////////////////////////////////////////

/**
 * Interface representing the properties for the Drawer component.
 */
export interface DrawerProps extends BaseModalProps {
  /**
   * The width of the Drawer component.
   */
  width?: string;
}

export type DrawerFnType = ((
  props: PropsWithChildren<DrawerProps>
) => JSX.Element) & {
  Content: DrawerContentFnType;
  Header: DrawerHeaderFnType;
};
