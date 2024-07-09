import type { Meta, StoryObj } from '@storybook/react';

import Password from '@/components/Password';

const meta = {
  component: Password,
  decorators: [
    (Story) => {
      return (
        <div css={{ minHeight: 50, width: 500 }}>
          <Story />
        </div>
      );
    }
  ],
  parameters: {
    layout: 'centered'
  },
  title: 'Form/Password'
} satisfies Meta<typeof Password>;

export default meta;

type Story = StoryObj<typeof Password>;

export const Basic: Story = {
  args: {
    error: false,
    helper: 'Password tidak boleh kosong?',
    label: 'Password',
    placeholder: 'Masukan password anda...',
    required: true
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Password component'
      }
    }
  }
};
