/////////////////////////////////////////////////////////////////////////////
// Input Container Types
/////////////////////////////////////////////////////////////////////////////

export interface BaseInputProps {
  disabled?: boolean;
  error?: boolean;
  helper?: string;
  label?: string;
  optional?: boolean;
  required?: boolean;
}

/////////////////////////////////////////////////////////////////////////////
// Shared Types For Select Component
/////////////////////////////////////////////////////////////////////////////

export type SelectSizeType = 'sm' | 'lg';

export interface SelectOptionType {
  disabled?: boolean;
  label: string;
  value: string | number;
}

export interface SelectSuggestionOptionType extends SelectOptionType {
  selected?: boolean;
}

export interface SelectSearchProps {
  emptyResultText?: string;
}

export interface SelectProps extends BaseInputProps {
  enableSearch?: boolean;
  multiple?: boolean;
  onChange: (args?: (string | number) | Array<string | number>) => void;
  options: SelectOptionType[];
  placeholder?: string;
  searchProps?: SelectSearchProps;
  sizes: SelectSizeType;
  value?: (string | number) | Array<string | number>;
}

export interface SelectSuggestionProps extends SelectSearchProps {
  enableSearch?: boolean;
  multiple: boolean;
  onChange: (args?: (string | number) | Array<string | number>) => void;
  options: SelectOptionType[];
  placeholder?: string;
  title: string;
  value?: (string | number) | Array<string | number>;
}
