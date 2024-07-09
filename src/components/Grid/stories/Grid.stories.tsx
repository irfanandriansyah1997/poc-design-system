import type { PropsWithChildren } from 'react';

import { useTheme } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import Card from '@/components/Card';
import Grid from '@/components/Grid';
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
  component: Grid,
  decorators: [
    (Story) => {
      return <Story />;
    }
  ],
  tags: ['autodocs'],
  title: 'Layout/Grid'
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof Grid>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Grid component'
      }
    }
  },
  render: () => (
    <Grid gap={16}>
      <Grid.Item>
        <SampleCard>Col</SampleCard>
      </Grid.Item>
      <Grid.Item>
        <SampleCard>Col</SampleCard>
      </Grid.Item>
      <Grid.Item>
        <SampleCard>Col</SampleCard>
      </Grid.Item>
    </Grid>
  )
};

export const DefiningColumnSpan: Story = {
  render: () => (
    <Grid gap={16}>
      <Grid.Item col={12}>
        <SampleCard>Col 12</SampleCard>
      </Grid.Item>
      <Grid.Item col={6}>
        <SampleCard>Col 6</SampleCard>
      </Grid.Item>
      <Grid.Item col={6}>
        <SampleCard>Col 6</SampleCard>
      </Grid.Item>
      <Grid.Item col={4}>
        <SampleCard>Col 4</SampleCard>
      </Grid.Item>
      <Grid.Item col={4}>
        <SampleCard>Col 4</SampleCard>
      </Grid.Item>
      <Grid.Item col={4}>
        <SampleCard>Col 4</SampleCard>
      </Grid.Item>
    </Grid>
  )
};

export const AutoColumnWidth: Story = {
  render: () => (
    <Grid gap={16}>
      <Grid.Item col={'auto'}>
        <SampleCard>Col Auto</SampleCard>
      </Grid.Item>
      <Grid.Item col={'auto'}>
        <SampleCard>Col Auto</SampleCard>
      </Grid.Item>
      <Grid.Item>
        <SampleCard>Col </SampleCard>
      </Grid.Item>
    </Grid>
  )
};
