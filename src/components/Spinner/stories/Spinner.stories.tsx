import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '@/components/Spinner';

import { FITLIGHT500, FITSKY500, RED500 } from '@/constants/theme';

import Template from './template.mdx';

const meta = {
  component: Spinner,
  decorators: [
    (Story) => {
      return (
        <section css={{ minHeight: 100 }}>
          <Story />
        </section>
      );
    }
  ],
  parameters: {
    docs: { page: Template },
    layout: 'centered'
  },
  title: 'Feedback/Spinner'
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
    spinnerColor: FITLIGHT500
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

export const CustomSize: Story = {
  args: {
    size: 40,
    spinnerColor: FITSKY500,
    spinnerWidth: 5
  },
  name: 'With Custom Size',
  parameters: {
    docs: {
      description: {
        story:
          'By modifying the `size` and `spinnerWidth` props, you can modify the spinner and container sizes.'
      }
    }
  }
};

export const UsingContainerAndShadow: Story = {
  args: {
    center: true,
    shadow: true,
    size: 30,
    spinnerColor: RED500,
    spinnerWidth: 5,
    withContainer: true
  },
  name: 'Adding Container Spinner',
  parameters: {
    docs: {
      description: {
        story:
          'You can add a container for spinner element by set the `withContainer` props value to true. You can also add a shadow to a container element by set the props `shadow` props value true when adding a container.'
      }
    }
  }
};
