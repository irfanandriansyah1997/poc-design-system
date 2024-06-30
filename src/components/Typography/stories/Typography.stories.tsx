import type { Meta, StoryObj } from '@storybook/react';

import Flex from '@/components/Flex';
import Typography from '@/components/Typography';

import { GRAY700 } from '@/constants/theme';

import {
  BODY_TYPOGRAPHY_MODIFIER_KIND,
  COMMONT_TYPOGRAPHY_ARGS,
  HEADING_TYPOGRAPHY_MODIFIER_KIND
} from './constant';
import Template from './template.mdx';
import TypographySectionExample from './TypographyTemplate';

const SAMPLE_TEXT = 'Gym for Everyone';

const meta = {
  argTypes: COMMONT_TYPOGRAPHY_ARGS,
  args: {
    children: SAMPLE_TEXT,
    color: GRAY700,
    fontWeight: 'strong',
    modifier: 'text_heading_md',
    tag: 'p'
  },
  component: Typography,
  parameters: {
    docs: { page: Template },
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'General/Typography'
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates how to use the Typography component to create an H1 tag.'
      }
    }
  }
};

export const Variant: Story = {
  name: 'Variant Styling',
  parameters: {
    docs: {
      description: {
        story:
          'These are the variants font sizes and styles you can use with the Typography component.'
      }
    }
  },
  render: () => (
    <>
      <Flex flexDirection="column" gap={72}>
        <Flex.Item>
          <TypographySectionExample
            modifiers={HEADING_TYPOGRAPHY_MODIFIER_KIND}
            title="Heading"
          >
            {SAMPLE_TEXT}
          </TypographySectionExample>
        </Flex.Item>

        <Flex.Item>
          <TypographySectionExample
            modifiers={BODY_TYPOGRAPHY_MODIFIER_KIND}
            title="Body"
          >
            {SAMPLE_TEXT}
          </TypographySectionExample>
        </Flex.Item>
      </Flex>
    </>
  ),
  storyName: 'variant'
};
