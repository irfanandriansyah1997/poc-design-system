import type { Meta, StoryObj } from '@storybook/react';

import Textfield from '@/components/Textfield';

import { GREEN500 } from '@/constants/theme';

const meta = {
  component: Textfield,
  decorators: [
    (Story) => {
      return (
        <div css={{ minHeight: 50, width: 500 }}>
          <Story />
        </div>
      );
    }
  ],
  parameters: {
    layout: 'centered'
  },
  title: 'Form/Textfield'
} satisfies Meta<typeof Textfield>;

export default meta;

type Story = StoryObj<typeof Textfield>;

export const Basic: Story = {
  args: {
    error: false,
    helper: 'Pilih title kamu. Nama tidak boleh kosong?',
    label: 'Nama',
    maxLength: 100,
    optional: true,
    placeholder: 'Sample Placeholder',
    preffixText: 'Tuan',
    required: true,
    showCounter: true,
    suffixColor: GREEN500,
    suffixIcon: 'check'
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the textfield component'
      }
    }
  }
};

export const WithAddons: Story = {
  args: {
    addOnPreffixIcon: 'account',
    addOnSuffixText: 'Sample Suffix',
    placeholder: 'Sample Placeholder'
  }
};

export const EnableClearButton: Story = {
  args: {
    addOnPreffixIcon: 'account',
    enableClear: true,
    placeholder: 'Sample Placeholder'
  }
};

export const EnableCounter: Story = {
  args: {
    addOnPreffixIcon: 'account',
    placeholder: 'Sample Placeholder',
    showCounter: true
  }
};

export const EnableCounterAndMaxLength: Story = {
  args: {
    maxLength: 5,
    placeholder: 'Sample Placeholder',
    preffixIcon: 'account',
    showCounter: true
  }
};

export const ErrorState: Story = {
  args: {
    addOnPreffixText: 'Tuan',
    error: true,
    maxLength: 5,
    placeholder: 'Sample Placeholder',
    preffixIcon: 'account',
    showCounter: true
  }
};

export const SmallSize: Story = {
  args: {
    placeholder: 'Sample Placeholder',
    preffixIcon: 'account',
    sizes: 'sm'
  }
};

export const LargeSize: Story = {
  args: {
    placeholder: 'Sample Placeholder',
    preffixIcon: 'account',
    sizes: 'lg'
  }
};
