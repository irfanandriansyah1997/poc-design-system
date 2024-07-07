import type { Meta, StoryObj } from '@storybook/react';

import Flex from '@/components/Flex';
import Radio from '@/components/Radio';

const meta = {
  component: Radio,
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
  title: 'Form/Radio'
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Radio component'
      }
    }
  },
  render: () => {
    return (
      <Flex gap={16}>
        <Flex.Item>
          <Radio label="Male" name="gender" value="male" />
        </Flex.Item>
        <Flex.Item>
          <Radio label="Female" name="gender" value="female" />
        </Flex.Item>
        <Flex.Item>
          <Radio
            label="Others"
            disabled
            name="gender"
            value="other"
            defaultChecked
          />
        </Flex.Item>
      </Flex>
    );
  }
};
