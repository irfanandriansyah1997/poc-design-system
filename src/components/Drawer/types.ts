import type { PropsWithChildren } from 'react';

import type { BaseModalProps } from '@/types/modal';
import type { GenericCompoundComponentType } from '@/types/react';

/////////////////////////////////////////////////////////////////////////////
// Header Section
/////////////////////////////////////////////////////////////////////////////

export interface DrawerHeaderProps {
  hideCloseButton?: boolean;
}

export type DrawerHeaderFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<DrawerHeaderProps>) => JSX.Element,
  'drawer-header'
>;

/////////////////////////////////////////////////////////////////////////////
// Content Section
/////////////////////////////////////////////////////////////////////////////

export type DrawerContentFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<unknown>) => JSX.Element,
  'drawer-content'
>;

/////////////////////////////////////////////////////////////////////////////
// Drawer Container Section
/////////////////////////////////////////////////////////////////////////////

export interface DrawerProps extends BaseModalProps {
  width?: string;
}

export type DrawerFnType = ((
  props: PropsWithChildren<DrawerProps>
) => JSX.Element) & {
  Content: DrawerContentFnType;
  Header: DrawerHeaderFnType;
};
