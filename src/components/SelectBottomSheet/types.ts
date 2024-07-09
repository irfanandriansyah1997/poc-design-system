import type { BottomSheetProps as BaseBottomSheetProps } from '@/components/BottomSheet/types';

import type { SelectProps } from '@/types/input';
import type { GetField } from '@/types/utils';

interface BottomSheetProps {
  height?: GetField<BaseBottomSheetProps, 'height'>;
}

export interface SelectBottomSheetProps extends SelectProps {
  bottomSheetProps?: BottomSheetProps;
}

export type SelectBottomSheetFnType = (
  props: SelectBottomSheetProps
) => JSX.Element;
