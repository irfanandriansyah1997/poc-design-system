import type { PropsWithChildren } from 'react';

import { useTheme } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import Card from '@/components/Card';
import Container from '@/components/Container';
import Typography from '@/components/Typography';

const SampleCard = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  const { color } = useTheme();

  return (
    <Card padding="12px" shadow="md" shadowOnInteract="xl">
      <Typography
        modifier="text_body_base"
        color={color.GRAY500}
        fontWeight="strong"
        textAlign="center"
      >
        {children}
      </Typography>
    </Card>
  );
};

const meta = {
  component: Container,
  decorators: [
    (Story) => {
      return <Story />;
    }
  ],
  tags: ['autodocs'],
  title: 'Layout/Container'
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

export const Basic: Story = {
  args: {
    children: <SampleCard>Container</SampleCard>
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Container component'
      }
    }
  }
};
