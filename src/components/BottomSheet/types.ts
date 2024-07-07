import type { PropsWithChildren } from 'react';

import type { BaseModalProps } from '@/types/modal';
import type { GenericCompoundComponentType } from '@/types/react';
import type { LiteralUnion } from '@/types/utils';

/////////////////////////////////////////////////////////////////////////////
// Content Section
/////////////////////////////////////////////////////////////////////////////

/**
 * Type definition for the content section of the BottomSheet component.
 */
export type BottomSheetContentFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<unknown>) => JSX.Element,
  'bottom-sheet-content'
>;

/////////////////////////////////////////////////////////////////////////////
// Footer Section
/////////////////////////////////////////////////////////////////////////////

/**
 * Type definition for the footer section of the BottomSheet component.
 */
export type BottomSheetFooterFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<unknown>) => JSX.Element,
  'bottom-sheet-footer'
>;

/////////////////////////////////////////////////////////////////////////////
// Bottom Sheet Container Section
/////////////////////////////////////////////////////////////////////////////

export interface BottomSheetProps extends BaseModalProps {
  /**
   * The height of the BottomSheet component. Can be 'fullscreen', 'halfscreen', 'auto', or a custom value.
   */
  height?: LiteralUnion<'fullscreen' | 'halfscreen' | 'auto', string | number>;

  /**
   * Whether to hide the close button.
   */
  hideCloseButton?: boolean;

  /**
   * The title of the BottomSheet component.
   */
  title: string;
}

/**
 * Type definition for the BottomSheet component, which includes the main component and its compound components.
 *
 * @typedef {(props: PropsWithChildren<BottomSheetProps>) => JSX.Element} BottomSheetFnType
 * @property {BottomSheetContentFnType} Content - The content section of the BottomSheet.
 * @property {BottomSheetFooterFnType} Footer - The footer section of the BottomSheet.
 */
export type BottomSheetFnType = ((
  props: PropsWithChildren<BottomSheetProps>
) => JSX.Element) & {
  Content: BottomSheetContentFnType;
  Footer: BottomSheetFooterFnType;
};
