import type { Meta, StoryObj } from '@storybook/react';

import Divider from '@/components/Divider';
import Flex from '@/components/Flex';

const meta = {
  component: Divider,
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
  title: 'Atomic/Divider'
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

export const Basic: Story = {
  args: {},
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Divider component'
      }
    }
  }
};
