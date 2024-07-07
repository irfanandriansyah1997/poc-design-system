import type { InputHTMLAttributes } from 'react';

import type { FithubIconType } from '@/types/icon';
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
    | `${SuffixName}Color`]?: Key extends `${SuffixName}Text`
    ? string
    : Key extends `${SuffixName}Icon`
      ? FithubIconType
      : Key extends `${SuffixName}Color`
        ? string
        : never;
};

export type TextfieldProps = TextfieldHTMLProps &
  TextfieldAdditionalElementType<'preffix'> &
  TextfieldAdditionalElementType<'suffix'> &
  TextfieldAdditionalElementType<'addOnPreffix'> &
  TextfieldAdditionalElementType<'addOnSuffix'> & {
    disabled?: boolean;
    enableClear?: boolean;
    error?: boolean;
    helper?: string;
    label?: string;
    onChange?: (text: string) => void;
    optional?: boolean;
    required?: boolean;
    showCounter?: boolean;
    sizes: TextfieldSizeType;
    value?: string;
  };
