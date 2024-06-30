import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';

const meta = {
  component: Button,
  decorators: [
    (Story) => {
      return (
        <section css={{ minHeight: 100, minWidth: '300px' }}>
          <Story />
        </section>
      );
    }
  ],
  parameters: {
    layout: 'centered'
  },
  title: 'General/Button'
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'Button Text'
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Button component'
      }
    }
  }
};
