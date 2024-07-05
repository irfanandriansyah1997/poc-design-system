import type { PropsWithChildren } from 'react';

import type { BaseModalProps } from '@/types/modal';
import type { GenericCompoundComponentType } from '@/types/react';
import type { LiteralUnion } from '@/types/utils';

/////////////////////////////////////////////////////////////////////////////
// Content Section
/////////////////////////////////////////////////////////////////////////////

export type BottomSheetContentFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<unknown>) => JSX.Element,
  'bottom-sheet-content'
>;

/////////////////////////////////////////////////////////////////////////////
// Footer Section
/////////////////////////////////////////////////////////////////////////////

export type BottomSheetFooterFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<unknown>) => JSX.Element,
  'bottom-sheet-footer'
>;

/////////////////////////////////////////////////////////////////////////////
// Bottom Sheet Container Section
/////////////////////////////////////////////////////////////////////////////

export interface BottomSheetProps extends BaseModalProps {
  height?: LiteralUnion<'fullscreen' | 'halfscreen' | 'auto', string | number>;
  hideCloseButton?: boolean;
  title: string;
}

export type BottomSheetFnType = ((
  props: PropsWithChildren<BottomSheetProps>
) => JSX.Element) & {
  Content: BottomSheetContentFnType;
  Footer: BottomSheetFooterFnType;
};
