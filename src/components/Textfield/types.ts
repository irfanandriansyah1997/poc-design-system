import type { InputHTMLAttributes } from 'react';

import type { FithubIconType } from '@/types/icon';
import type { BaseInputProps } from '@/types/input';
import type { GenericHTMLProps } from '@/types/react';

export type TextfieldSizeType = 'sm' | 'lg';

type TextfieldHTMLProps = Omit<
  GenericHTMLProps<InputHTMLAttributes<HTMLInputElement>>,
  'onChange' | 'value' | 'disabled'
>;

export type TextfieldAdditionalElementType<SuffixName extends string = ''> = {
  [Key in
    | `${SuffixName}Text`
    | `${SuffixName}Icon`
    | `${SuffixName}Color`
    | `${SuffixName}IconSize`]?: Key extends `${SuffixName}Text`
    ? string
    : Key extends `${SuffixName}Icon`
      ? FithubIconType
      : Key extends `${SuffixName}Color`
        ? string
        : Key extends `${SuffixName}IconSize`
          ? number
          : never;
};

export type TextfieldProps = TextfieldHTMLProps &
  BaseInputProps &
  TextfieldAdditionalElementType<'preffix'> &
  TextfieldAdditionalElementType<'suffix'> &
  TextfieldAdditionalElementType<'addOnPreffix'> &
  TextfieldAdditionalElementType<'addOnSuffix'> & {
    disabledDebounce?: boolean;
    enableClear?: boolean;
    onChange?: (text: string) => void;
    showCounter?: boolean;
    sizes: TextfieldSizeType;
    value?: string;
  };
