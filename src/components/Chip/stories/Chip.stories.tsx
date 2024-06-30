import type { Meta, StoryObj } from '@storybook/react';

import Chip from '@/components/Chip';
import Flex from '@/components/Flex';

const meta = {
  component: Chip,
  decorators: [
    (Story) => {
      return (
        <Flex css={{ minHeight: 50, minWidth: 50 }}>
          <Flex.Item fullWidth>
            <Story />
          </Flex.Item>
        </Flex>
      );
    }
  ],
  parameters: {
    layout: 'centered'
  },
  title: 'Molecules/Chip'
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  args: {
    checked: false,
    disabled: false,
    text: 'Text'
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Label component'
      }
    }
  }
};

export const WithPrefixIcon: Story = {
  args: {
    checked: false,
    disabled: false,
    preffixIcon: 'alarm-add',
    text: 'Text'
  },
  parameters: {
    docs: {
      description: {
        story: 'This example implement chip using defined preffix icon on props'
      }
    }
  }
};

export const WithSuffixIcon: Story = {
  args: {
    checked: false,
    disabled: false,
    suffixElement: { type: 'icon', value: 'alarm-add' },
    text: 'Text'
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example implement chip using defined suffix using icon on props'
      }
    }
  }
};

export const WithSuffixBadge: Story = {
  args: {
    checked: false,
    disabled: false,
    suffixElement: { type: 'badge', value: '7' },
    text: 'Text'
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example implement chip using defined suffix using badge on props'
      }
    }
  }
};

export const CheckedState: Story = {
  args: {
    checked: true,
    disabled: false,
    preffixIcon: 'alarm-on',
    suffixElement: { type: 'icon', value: 'account' },
    text: 'Text'
  },
  parameters: {
    docs: {
      description: {
        story: 'This example implement chip using state is checked'
      }
    }
  }
};

export const DisabledState: Story = {
  args: {
    checked: false,
    disabled: true,
    preffixIcon: 'alarm-on',
    text: 'Text'
  },
  parameters: {
    docs: {
      description: {
        story: 'This example implement chip using state is disabled'
      }
    }
  }
};
