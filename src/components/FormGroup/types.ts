import type { PropsWithChildren } from 'react';

import type { BaseInputProps } from '@/types/input';
import type { GenericCompoundComponentType } from '@/types/react';

export type FormGroupItemKind =
  | 'default'
  | 'single'
  | 'first-item'
  | 'last-item';

/////////////////////////////////////////////////////////////////////////////
// Form Group Item Section
/////////////////////////////////////////////////////////////////////////////

export interface FormGroupItemProps {
  layout?: 'block' | 'auto';
}

export type FormGroupItemFnType = GenericCompoundComponentType<
  {
    (props: PropsWithChildren<FormGroupItemProps>): JSX.Element;
  },
  'form-group-item'
>;

/////////////////////////////////////////////////////////////////////////////
// Form Group Section
/////////////////////////////////////////////////////////////////////////////

export type FormGroupFnType = ((
  props: PropsWithChildren<BaseInputProps>
) => JSX.Element) & {
  Item: FormGroupItemFnType;
};
