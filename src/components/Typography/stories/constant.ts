import type { ComponentProps } from 'react';

import type { ArgTypes } from '@storybook/react';

import type { TypographyProps } from '@/components/Typography/types';

import type TypographySectionExample from './TypographyTemplate';

export const COMMONT_TYPOGRAPHY_ARGS: Partial<
  ArgTypes<TypographyProps<HTMLElement>>
> = {
  children: {
    control: 'text',
    name: 'Text Content'
  },
  className: {
    control: 'text',
    description: 'The class name for the typography component.',
    name: 'Class Name'
  },
  color: {
    control: 'color',
    description: 'The color of the text.',
    name: 'Color Text'
  },
  ellipsis: {
    control: 'boolean',
    description: 'Whether to apply ellipsis to the text.',
    name: 'Ellipsis'
  },
  fontFamily: {
    control: 'select',
    description: 'The font family will be used for the text.',
    name: 'Font Family',
    options: ['primary', 'secondary'],
    table: {
      defaultValue: { summary: 'primary' }
    }
  },
  fontWeight: {
    control: 'select',
    description: 'Whether to apply font weight bold / normal',
    name: 'Font Weight',
    options: ['regular', 'strong'],
    table: {
      defaultValue: { summary: 'regular' }
    }
  },
  italic: {
    control: 'boolean',
    description: 'Toggle for whether to implement italic or not?',
    name: 'Italic'
  },
  margin: {
    control: 'text',
    description: 'The margin around the typography component.',
    name: 'Margin'
  },
  modifier: {
    control: 'select',
    description:
      'The typography modifier to apply it will be reflect with the font size and styling the text section',
    name: 'Modifier Styling',
    options: [
      'bodyBase',
      'bodySM',
      'bodyXS',
      'headingLG',
      'headingMD',
      'headingSM',
      'headingXL',
      'headingXXL'
    ],
    table: {
      defaultValue: { summary: 'bodyBase' }
    }
  },
  textAlign: {
    control: 'select',
    name: 'Text Align',
    options: ['center', 'left', 'right'],
    table: {
      defaultValue: { summary: 'left' }
    }
  },
  textDecoration: {
    control: 'select',
    name: 'Text Decoration',
    options: [
      'auto',
      'blink',
      'dashed',
      'dotted',
      'double',
      'from-font',
      'grammar-error',
      'line-through',
      'none',
      'overline',
      'solid',
      'spelling-error',
      'underline',
      'wavy'
    ],
    table: {
      defaultValue: { summary: 'none' }
    }
  }
};

export const HEADING_TYPOGRAPHY_MODIFIER_KIND: ComponentProps<
  typeof TypographySectionExample
>['modifiers'] = [
  {
    modifier: 'headingXXL',
    notes: 'Landing page only. Oversized titles, use only once per page.'
  },
  {
    modifier: 'headingXL',
    notes: 'Landing page only. Oversized titles, use only once per page.'
  },
  {
    modifier: 'headingLG',
    notes: 'Landing page only. Oversized titles, use only once per page.'
  },
  {
    modifier: 'headingMD',
    notes: 'Page title in top navigation'
  },
  {
    modifier: 'headingSM',
    notes:
      'Section title, heading up a group of list items, success page title, feedback title, package month'
  }
];

export const BODY_TYPOGRAPHY_MODIFIER_KIND: ComponentProps<
  typeof TypographySectionExample
>['modifiers'] = [
  { modifier: 'bodyBase' },
  { modifier: 'bodySM' },
  { modifier: 'bodyXS' }
];
