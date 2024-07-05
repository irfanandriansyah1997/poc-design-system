import MainBottomSheet from './BottomSheet';
import BottomSheetContent from './BottomSheetContent';
import BottomSheetFooter from './BottomSheetFooter';
import type { BottomSheetFnType } from './types';

// @ts-expect-error irfan@fithub.id need to fix later error typecheck
const BottomSheet: BottomSheetFnType = MainBottomSheet;

BottomSheet.Content = BottomSheetContent;

BottomSheet.Footer = BottomSheetFooter;

export default BottomSheet;
