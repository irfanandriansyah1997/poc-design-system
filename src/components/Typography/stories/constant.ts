import type { ComponentProps } from 'react';

import type { ArgTypes } from '@storybook/react';

import type { TypographyProps } from '@/components/Typography/types';

import type TypographySectionExample from './TypographyTemplate';

export const COMMONT_TYPOGRAPHY_ARGS: Partial<
  ArgTypes<TypographyProps<HTMLElement>>
> = {
  children: {
    control: 'text'
  },
  className: {
    control: 'text',
    description: 'The class name for the typography component.'
  },
  color: {
    control: 'color',
    description: 'The color of the text.'
  },
  ellipsis: {
    control: 'boolean',
    description: 'Whether to apply ellipsis to the text.'
  },
  fontFamily: {
    control: 'select',
    description: 'The font family will be used for the text.',

    options: ['primary', 'secondary'],
    table: {
      defaultValue: { summary: 'primary' }
    }
  },
  fontWeight: {
    control: 'select',
    description: 'Whether to apply font weight bold / normal',

    options: ['regular', 'strong'],
    table: {
      defaultValue: { summary: 'regular' }
    }
  },
  italic: {
    control: 'boolean',
    description: 'Toggle for whether to implement italic or not?'
  },
  margin: {
    control: 'text',
    description: 'The margin around the typography component.'
  },
  modifier: {
    control: 'select',
    description:
      'The typography modifier to apply it will be reflect with the font size and styling the text section',

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

    options: ['center', 'left', 'right'],
    table: {
      defaultValue: { summary: 'left' }
    }
  },
  textDecoration: {
    control: 'select',

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
    modifier: 'text_heading_xxl',
    notes: 'Landing page only. Oversized titles, use only once per page.'
  },
  {
    modifier: 'text_heading_xl',
    notes: 'Landing page only. Oversized titles, use only once per page.'
  },
  {
    modifier: 'text_heading_lg',
    notes: 'Landing page only. Oversized titles, use only once per page.'
  },
  {
    modifier: 'text_heading_md',
    notes: 'Page title in top navigation'
  },
  {
    modifier: 'text_heading_sm',
    notes:
      'Section title, heading up a group of list items, success page title, feedback title, package month'
  }
];

export const BODY_TYPOGRAPHY_MODIFIER_KIND: ComponentProps<
  typeof TypographySectionExample
>['modifiers'] = [
  { modifier: 'text_body_base' },
  { modifier: 'text_body_sm' },
  { modifier: 'text_body_xs' }
];
