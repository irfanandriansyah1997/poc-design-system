import type { HTMLAttributes, PropsWithChildren } from 'react';

import type {
  GenericCompoundComponentType,
  GenericHTMLProps
} from '@/types/react';

type BaseHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

/////////////////////////////////////////////////////////////////////////////
// Label Section
/////////////////////////////////////////////////////////////////////////////

export interface InputLabelProps {
  label?: string;
  optional?: boolean;
  required?: boolean;
}

export type InputLabelFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<InputLabelProps>) => JSX.Element,
  'input-label'
>;

/////////////////////////////////////////////////////////////////////////////
// Content Section
/////////////////////////////////////////////////////////////////////////////

export type InputContentFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<BaseHTMLProps>) => JSX.Element,
  'input-content'
>;

/////////////////////////////////////////////////////////////////////////////
// Helper Section
/////////////////////////////////////////////////////////////////////////////

export interface InputHelperProps {
  disabled: boolean;
  error: boolean;
  helper: string;
}

export type InputHelperFnType = GenericCompoundComponentType<
  (props: InputHelperProps) => JSX.Element,
  'input-helper'
>;

/////////////////////////////////////////////////////////////////////////////
// Input Counter Section
/////////////////////////////////////////////////////////////////////////////

export interface InputCounterProps {
  className?: string;
  currentCounter: number;
  maxLength?: number;
}

export type InputCounterFnType = (props: InputCounterProps) => JSX.Element;

/////////////////////////////////////////////////////////////////////////////
// Input Container Section
/////////////////////////////////////////////////////////////////////////////

export interface InputProps extends BaseHTMLProps {}

export type InputFnType = ((
  props: PropsWithChildren<InputProps>
) => JSX.Element) & {
  Content: InputContentFnType;
  Counter: InputCounterFnType;
  Helper: InputHelperFnType;
  Label: InputLabelFnType;
};
