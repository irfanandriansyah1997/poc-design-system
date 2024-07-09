import type { HTMLAttributes } from 'react';

import type { Theme } from '@emotion/react';
import type { Property } from 'csstype';

import type { GetField } from '@/types/utils';

/**
 * Defines the different types of HTML elements that can be used for typography.
 */
export type TypographyElementType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'p';

/**
 * Defines the types of typography modifiers available in the theme.
 */
export type TypographyModifierType = keyof GetField<Theme, 'typography'>;

interface BaseTypographyProps {
  className: string;
  color: string;
  display: 'block' | 'inline' | 'flex' | 'inline-flex';
  ellipsis: boolean;
  fontFamily: keyof GetField<Theme, 'fontFamily'>;
  fontWeight: keyof GetField<Theme, 'fontWeight'>;
  italic: boolean;
  margin: number | string;
  modifier: TypographyModifierType;
  tag: TypographyElementType;
  textAlign: Property.TextAlign;
  textDecoration: Property.TextDecoration;
}

/**
 * HTML attributes for typography components, excluding the base typography properties.
 */
type HTMLTypographyProps<T> = Omit<
  HTMLAttributes<T>,
  keyof BaseTypographyProps
>;

/////////////////////////////////////////////////////////////////////////////
// Typography Props
/////////////////////////////////////////////////////////////////////////////

/**
 * Props for the Typography component.
 */
export type TypographyProps<T extends Element> = HTMLTypographyProps<T> &
  Partial<BaseTypographyProps>;
