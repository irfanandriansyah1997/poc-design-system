import type { PropsWithChildren } from 'react';

import type { BaseModalProps } from '@/types/modal';
import type { GenericCompoundComponentType } from '@/types/react';

/////////////////////////////////////////////////////////////////////////////
// Content Section
/////////////////////////////////////////////////////////////////////////////

export type ModalContentFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<unknown>) => JSX.Element,
  'modal-content'
>;

/////////////////////////////////////////////////////////////////////////////
// Footer Section
/////////////////////////////////////////////////////////////////////////////

export type ModalFooterFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<unknown>) => JSX.Element,
  'modal-footer'
>;

/////////////////////////////////////////////////////////////////////////////
// Modal Container Section
/////////////////////////////////////////////////////////////////////////////

export interface ModalProps extends BaseModalProps {
  hideCloseButton?: boolean;
  maxWidth?: string | number;
  title: string;
}

export type ModalFnType = ((
  props: PropsWithChildren<ModalProps>
) => JSX.Element) & {
  Content: ModalContentFnType;
  Footer: ModalFooterFnType;
};
