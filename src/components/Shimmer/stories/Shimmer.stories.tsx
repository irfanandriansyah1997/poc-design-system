import type { Meta, StoryObj } from '@storybook/react';

import Flex from '@/components/Flex';
import Shimmer from '@/components/Shimmer';

const meta = {
  argTypes: {
    children: {
      table: { disable: true }
    },
    radius: {
      type: 'string'
    }
  },
  component: Shimmer,
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
  title: 'Feedback/Shimmer'
} satisfies Meta<typeof Shimmer>;

export default meta;

type Story = StoryObj<typeof Shimmer>;

export const Basic: Story = {
  args: {
    display: 'block',
    height: 100,
    radius: 'md',
    width: 100
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the shimmer component'
      }
    }
  }
};

export const TextShimmer: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'You can create shimmer with text behavior. It will be rendered inlineso you can safely use inside p tag and perfectly aligned with your text.'
      }
    }
  },

  render: () => {
    return (
      <p style={{ margin: 0 }}>
        Inline text: &ensp;
        <Shimmer display="inline" width={100} height={10} radius={5} />
        &ensp;
        <Shimmer display="inline" width={150} height={10} radius={5} />
        <Shimmer display="inline" width="100%" height={10} radius={5} />
        <Shimmer display="inline" width="80%" height={10} radius={5} />
      </p>
    );
  }
};
