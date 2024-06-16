import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, screen, userEvent, within } from '@storybook/test';

import Button from '@/components/Button';

const meta = {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: { onClick: fn() },
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Atomic/Button'
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    label: 'Button',
    primary: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Another description on the story, overriding the comments'
      }
    }
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));

    screen.debug(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  }
};

export const SecondaryButton: Story = {
  args: {
    label: 'Button'
  }
};

export const LargeButton: Story = {
  args: {
    label: 'Button',
    size: 'large'
  }
};

export const SmallButton: Story = {
  args: {
    label: 'Button',
    size: 'small'
  }
};
