import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import type {
  ButtonModifierType,
  ButtonSizeType,
  ButtonVariantType
} from '@/components/Button/types';
import Flex from '@/components/Flex';

const meta = {
  component: Button,
  decorators: [
    (Story) => {
      return (
        <section css={{ maxWidth: '100%', minHeight: 100, minWidth: 800 }}>
          <Story />
        </section>
      );
    }
  ],
  parameters: {
    layout: 'centered'
  },
  title: 'General/Button'
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'Button Text'
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Button component'
      }
    }
  }
};

interface BoilerplateButtonProps {
  size: ButtonSizeType[];
  theme: ButtonModifierType[];
  variant: ButtonVariantType;
}

const BoilerplateButton = (props: BoilerplateButtonProps) => {
  const { size, theme, variant } = props;
  const [mode, setMode] = useState<'reset' | 'loading' | 'disabled'>('reset');
  const [withIcon, toggleIcon] = useState(true);

  return (
    <>
      <Flex css={{ margin: '0 0 100px' }}>
        <Flex.Item>
          <Button
            modifier="primary"
            variant="text"
            size="sm"
            onClick={() => setMode('disabled')}
          >
            Set Disabled
          </Button>
        </Flex.Item>

        <Flex.Item>
          <Button
            modifier="primary"
            variant="text"
            size="sm"
            onClick={() => setMode('loading')}
          >
            Set Loading
          </Button>
        </Flex.Item>

        <Flex.Item>
          <Button
            modifier="primary"
            variant="text"
            size="sm"
            onClick={() => setMode('reset')}
          >
            Reset
          </Button>
        </Flex.Item>

        <Flex.Item>
          <Button
            modifier="primary"
            variant="text"
            size="sm"
            onClick={() => toggleIcon((state) => !state)}
          >
            Toggle Icon
          </Button>
        </Flex.Item>
      </Flex>

      <Flex gap={10} flexDirection="column">
        {theme.map((item) => {
          return (
            <Flex.Item key={item}>
              <Flex gap={10} alignItems="center" justifyContent="center">
                {size.map((preset) => {
                  return (
                    <Flex.Item key={`${item}-${preset}`}>
                      <Button
                        variant={variant}
                        icon={withIcon ? 'add-library' : undefined}
                        modifier={item}
                        size={preset}
                        loading={mode === 'loading'}
                        disabled={mode === 'disabled'}
                      >
                        Text
                      </Button>
                    </Flex.Item>
                  );
                })}
              </Flex>
            </Flex.Item>
          );
        })}
      </Flex>
    </>
  );
};

export const FilledVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example button using variant fill'
      }
    }
  },
  render: () => {
    const theme: ButtonModifierType[] = [
      'primary',
      'primary-prominent',
      'danger'
    ];
    const size: ButtonSizeType[] = ['lg', 'md', 'sm'];

    return <BoilerplateButton size={size} theme={theme} variant="fill" />;
  }
};

export const OutlineVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example button using variant outline'
      }
    }
  },
  render: () => {
    const theme: ButtonModifierType[] = ['primary', 'danger'];
    const size: ButtonSizeType[] = ['lg', 'md', 'sm'];

    return <BoilerplateButton size={size} theme={theme} variant="outline" />;
  }
};

export const DashedVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example button using variant dashed'
      }
    }
  },
  render: () => {
    const theme: ButtonModifierType[] = ['primary', 'danger'];
    const size: ButtonSizeType[] = ['lg', 'md', 'sm'];

    return <BoilerplateButton size={size} theme={theme} variant="dashed" />;
  }
};

export const LinkVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example button using variant link'
      }
    }
  },
  render: () => {
    const theme: ButtonModifierType[] = ['primary', 'danger'];
    const size: ButtonSizeType[] = ['lg', 'md', 'sm'];

    return <BoilerplateButton size={size} theme={theme} variant="link" />;
  }
};

export const TextVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example button using variant link'
      }
    }
  },
  render: () => {
    const theme: ButtonModifierType[] = ['primary', 'danger'];
    const size: ButtonSizeType[] = ['lg', 'md', 'sm'];

    return <BoilerplateButton size={size} theme={theme} variant="text" />;
  }
};
