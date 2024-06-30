import type { Meta, StoryObj } from '@storybook/react';

import Badge from '@/components/Badge';
import Flex from '@/components/Flex';
import Label from '@/components/Label';

import { BLUE50, BLUE500, WHITE } from '@/constants/theme';

const meta = {
  component: Label,
  decorators: [
    (Story) => {
      return (
        <Flex css={{ minHeight: 50, minWidth: 50 }}>
          <Flex.Item fullWidth>
            <Story />
          </Flex.Item>
        </Flex>
      );
    }
  ],
  parameters: {
    layout: 'centered'
  },
  title: 'Data Display/Label'
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

export const Basic: Story = {
  args: {
    labelColor: BLUE50,
    text: 'Hello World',
    textColor: BLUE500
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Label component'
      }
    }
  }
};

export const WithPreffixIcon: Story = {
  args: {
    labelColor: BLUE50,
    preffixIcon: 'task-edit',
    text: 'Hello World',
    textColor: BLUE500
  },
  parameters: {}
};

export const WithPreffixCustomElement: Story = {
  args: {
    labelColor: BLUE50,
    preffixElement: (
      <Badge badgeColor={BLUE500} text="10" textColor={WHITE}></Badge>
    ),
    text: 'Hello World',
    textColor: BLUE500
  },
  parameters: {}
};

export const WithSuffixIcon: Story = {
  args: {
    labelColor: BLUE50,
    suffixIcon: 'task-edit',
    text: 'Hello World',
    textColor: BLUE500
  },
  parameters: {}
};

export const WithSuffixCustomElement: Story = {
  args: {
    labelColor: BLUE50,
    suffixElement: (
      <Badge badgeColor={BLUE500} text="10" textColor={WHITE}></Badge>
    ),
    text: 'Hello World',
    textColor: BLUE500
  },
  parameters: {}
};
