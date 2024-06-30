import type { Meta, StoryObj } from '@storybook/react';

import Image from '@/components/Image';

const meta = {
  argTypes: {
    objectPosition: {
      control: 'radio',
      options: ['bottom', 'center', 'left', 'right', 'top']
    },
    onError: {
      table: { disable: true }
    },
    onLoad: {
      table: { disable: true }
    },
    radius: {
      control: 'radio',
      options: ['circle', 'lg', 'md', 'sm', 'xl']
    }
  },
  component: Image,
  decorators: [
    (Story) => {
      return <Story />;
    }
  ],
  parameters: {
    layout: 'centered'
  },
  title: 'Data Display/Image'
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof Image>;

export const Basic: Story = {
  args: {
    alt: 'Sample Image',
    height: 200,
    src: 'https://fastly.picsum.photos/id/322/900/900.webp?hmac=ahdfC-e19-McZ1YHq6cshv0v5QLdCOoZquFye2ttNis',
    width: 300
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Image component'
      }
    }
  }
};
