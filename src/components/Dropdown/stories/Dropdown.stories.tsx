import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import Typography from '@/components/Typography';

const meta = {
  component: Dropdown,
  decorators: [
    (Story) => {
      return (
        <div style={{ height: 300, maxWidth: 300 }}>
          <Story />
        </div>
      );
    }
  ],
  tags: ['autodocs'],
  title: 'Data Display/Dropdown'
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Dropdown component'
      }
    }
  },
  render: () => {
    return (
      <Dropdown
        toggle={
          <>
            <Button modifier="primary" variant="fill" size="sm">
              Toggle
            </Button>
          </>
        }
      >
        <div style={{ padding: 16 }}>
          <Typography modifier="text_body_base">Sample Content</Typography>
        </div>
      </Dropdown>
    );
  }
};
