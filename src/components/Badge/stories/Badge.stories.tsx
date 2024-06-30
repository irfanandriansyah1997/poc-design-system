import type { Meta, StoryObj } from '@storybook/react';

import Badge from '@/components/Badge';
import Flex from '@/components/Flex';

const meta = {
  component: Badge,
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
  title: 'Data Display/Badge'
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {},
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Badge component'
      }
    }
  }
};

export const WithText: Story = {
  args: { text: '10' },
  name: 'Badge With Text',
  parameters: {
    docs: {
      description: {
        story: 'This example implement badge using custom text'
      }
    },
    isNew: true
  }
};

export const WithCustomColor: Story = {
  args: { badgeColor: '#EBF5FF', text: '9', textColor: '#3597FD' },
  name: 'Badge With Custom Color',
  parameters: {
    docs: {
      description: {
        story: 'This example implement badge using custom badge and text color'
      }
    }
  }
};
