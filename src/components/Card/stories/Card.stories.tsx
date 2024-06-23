import type { Meta, StoryObj } from '@storybook/react';

import Card from '@/components/Card';
import Typography from '@/components/Typography';

import Template from './template.mdx';

const meta = {
  argTypes: {
    children: {
      table: { disable: true }
    },
    margin: {
      control: 'text'
    },
    padding: {
      control: 'text',
      table: {
        defaultValue: { summary: '16' }
      }
    },
    rounded: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    shadow: {
      control: 'select',
      options: ['element', 'lg', 'md', 'sm', 'xl'],
      table: {
        defaultValue: { summary: 'element' }
      }
    },
    shadowOnInteract: {
      control: 'select',
      options: ['element', 'lg', 'md', 'sm', 'xl'],
      table: {
        defaultValue: { summary: 'md' }
      }
    },
    withBackground: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' }
      }
    }
  },
  component: Card,
  decorators: [
    (Story) => {
      return <Story />;
    }
  ],
  parameters: {
    docs: { page: Template },
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Atomic/Card'
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <Typography modifier="headingMD" fontWeight="strong" margin="0 0 10px">
          Title
        </Typography>
        <Typography modifier="bodyBase">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          nesciunt distinctio dignissimos
        </Typography>
      </>
    )
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Card component'
      }
    }
  }
};
