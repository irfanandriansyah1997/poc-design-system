import type { PropsWithChildren } from 'react';

import type { Interpolation, Theme } from '@emotion/react';
import { useTheme } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import Card from '@/components/Card';
import HorizontalSlider from '@/components/HorizontalSlider';
import Typography from '@/components/Typography';

import { GRAY50 } from '@/constants/theme';

const SampleCard = (
  props: PropsWithChildren<{ css?: Interpolation<Theme> }>
) => {
  const { children, ...res } = props;
  const { color } = useTheme();

  return (
    <Card
      padding="12px"
      shadow="md"
      shadowOnInteract="lg"
      withBackground={false}
      css={{ background: GRAY50, height: 300, minHeight: '100%', width: 200 }}
      {...res}
    >
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
  component: HorizontalSlider,
  decorators: [
    (Story) => {
      return <Story />;
    }
  ],
  tags: ['autodocs'],
  title: 'Layout/HorizontalSlider'
} satisfies Meta<typeof HorizontalSlider>;

export default meta;

type Story = StoryObj<typeof HorizontalSlider>;

export const Basic: Story = {
  args: {
    children: [
      <SampleCard key={1} css={{ height: 30 }}>
        Col
      </SampleCard>,
      <SampleCard key={2} css={{ height: 60 }}>
        Col
      </SampleCard>,
      <SampleCard key={3} css={{ height: 90 }}>
        Col
      </SampleCard>,
      <SampleCard key={4} css={{ height: 120 }}>
        Col
      </SampleCard>,
      <SampleCard key={5} css={{ height: 150 }}>
        Col
      </SampleCard>,
      <SampleCard key={6}>Col</SampleCard>
    ],
    gap: 16,
    padding: 16
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates how to use the Horizontal Slider component'
      }
    }
  }
};
