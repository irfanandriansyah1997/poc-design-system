import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '@/components/Checkbox';
import Flex from '@/components/Flex';

const meta = {
  component: Checkbox,
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
  title: 'Form/Checkbox'
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: { label: 'Hello World' },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Checkbox component'
      }
    }
  }
};

export const Indeterminate: Story = {
  args: { defaultChecked: true, indeterminate: true },
  parameters: {
    docs: {
      description: {
        story: 'Sample implementation with indeterminate props is true'
      }
    }
  }
};
