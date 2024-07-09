import type { InputHTMLAttributes } from 'react';

import type { TextfieldAdditionalElementType } from '@/components/Textfield/types';

import type { BaseInputProps } from '@/types/input';
import type { GenericHTMLProps } from '@/types/react';

type TextfieldHTMLProps = Omit<
  GenericHTMLProps<InputHTMLAttributes<HTMLInputElement>>,
  'onChange' | 'value' | 'disabled' | 'type'
>;

export type PasswordProps = TextfieldHTMLProps &
  BaseInputProps &
  TextfieldAdditionalElementType<'preffix', 'Preffix'> &
  TextfieldAdditionalElementType<'addOnPreffix', 'AddOnPreffix'> &
  TextfieldAdditionalElementType<'addOnSuffix', 'AddOnSuffix'> & {
    disabledDebounce?: boolean;
    enableClear?: boolean;
    onChange?: (text: string) => void;
    showCounter?: boolean;
    value?: string;
  };
