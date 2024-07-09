import type { InputHTMLAttributes } from 'react';

import type { FithubIconType } from '@/types/icon';
import type { BaseInputProps } from '@/types/input';
import type { GenericHTMLProps } from '@/types/react';

type TextfieldHTMLProps = Omit<
  GenericHTMLProps<InputHTMLAttributes<HTMLInputElement>>,
  'onChange' | 'value' | 'disabled'
>;

export type TextfieldAdditionalElementType<
  SuffixName extends string = '',
  SuffixFnName extends string = ''
> = {
  [Key in
    | `${SuffixName}Text`
    | `${SuffixName}Icon`
    | `${SuffixName}Color`
    | `${SuffixName}IconSize`
    | `onClick${SuffixFnName}`]?: Key extends `${SuffixName}Text`
    ? string
    : Key extends `${SuffixName}Icon`
      ? FithubIconType
      : Key extends `${SuffixName}Color`
        ? string
        : Key extends `${SuffixName}IconSize`
          ? number
          : Key extends `onClick${SuffixFnName}`
            ? () => void
            : never;
};

export type TextfieldProps = TextfieldHTMLProps &
  BaseInputProps &
  TextfieldAdditionalElementType<'preffix', 'Preffix'> &
  TextfieldAdditionalElementType<'suffix', 'Suffix'> &
  TextfieldAdditionalElementType<'addOnPreffix', 'AddOnPreffix'> &
  TextfieldAdditionalElementType<'addOnSuffix', 'AddOnSuffix'> & {
    disabledDebounce?: boolean;
    enableClear?: boolean;
    onChange?: (text: string) => void;
    showCounter?: boolean;
    value?: string;
  };
