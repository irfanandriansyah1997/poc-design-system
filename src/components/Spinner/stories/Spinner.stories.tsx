import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '@/components/Spinner';

import { BLUE500, FITLIGHT500 } from '@/constants/theme';

const meta = {
  args: {
    center: true,
    shadow: true,
    size: 30,
    spinnerColor: BLUE500,
    spinnerWidth: 5,
    withContainer: true
  },
  component: Spinner,
  decorators: [
    (Story) => {
      return (
        <section css={{ height: 200 }}>
          <Story />
        </section>
      );
    }
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Atomic/Spinner'
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Spinner component'
      }
    }
  }
};

export const CustomColor: Story = {
  args: {
    center: false,
    shadow: false,
    size: 20,
    spinnerColor: FITLIGHT500,
    spinnerWidth: 3
  },
  name: 'With Custom Color',
  parameters: {
    docs: {
      description: {
        story:
          'You can customize spinner color with defined spinner color attribute'
      }
    }
  }
};
