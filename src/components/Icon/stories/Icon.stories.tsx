import type { Meta, StoryObj } from '@storybook/react';

import Grid from '@/components/Grid';
import Icon from '@/components/Icon';

import { FITSKY500, GRAY700 } from '@/constants/theme';

import { PREVIEW_ICON } from './constant';
import Template from './template.mdx';

import CardPreview from '@/storybook/components/CardPreview';

const meta = {
  args: {
    color: FITSKY500,
    icon: 'note-fill',
    size: 40
  },
  component: Icon,
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
  title: 'Atomic/Icon'
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Icon component'
      }
    }
  }
};

export const Variant: Story = {
  name: 'Variant Icon',
  parameters: {
    docs: {
      description: {
        story: 'These are the variants icons that you can used'
      }
    }
  },
  render: () => (
    <>
      <Grid gap={24}>
        {PREVIEW_ICON.map((item) => (
          <Grid.Item
            key={item.icon}
            col={2}
            xs={12}
            sm={6}
            md={4}
            lg={2}
            xl={2}
          >
            <CardPreview
              label={item.label}
              sourceCode={`<Icon icon={${item.icon}} color={GRAY700} />`}
            >
              <Icon icon={item.icon} color={GRAY700} size={24} />
            </CardPreview>
          </Grid.Item>
        ))}
      </Grid>
    </>
  ),
  storyName: 'variant'
};
