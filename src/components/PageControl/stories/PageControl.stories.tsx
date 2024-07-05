import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button/Button';
import Flex from '@/components/Flex';
import PageControl from '@/components/PageControl';

import { GRAY100, RED500 } from '@/constants/theme';

const meta = {
  component: PageControl,
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
  title: 'Navigation/Page Control'
} satisfies Meta<typeof PageControl>;

export default meta;

type Story = StoryObj<typeof PageControl>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the page control component'
      }
    }
  },
  render: () => {
    const [position, setPosition] = useState(0);

    return (
      <>
        <Flex
          gap={16}
          alignItems="center"
          justifyContent="center"
          flexDirection="column-reverse"
        >
          <Flex.Item>
            <Flex gap={8} alignItems="center" justifyContent="center">
              <Flex.Item>
                <Button
                  icon="chevron-left"
                  modifier="primary"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setPosition(position > 0 ? position - 1 : 0);
                  }}
                />
              </Flex.Item>
              <Flex.Item>
                <Button
                  icon="chevron-right"
                  modifier="primary"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setPosition(position < 9 ? position + 1 : 9);
                  }}
                />
              </Flex.Item>
            </Flex>
          </Flex.Item>

          <Flex.Item>
            <PageControl length={10} activeIndex={position} />
          </Flex.Item>
        </Flex>
      </>
    );
  }
};

export const CustomColor: Story = {
  args: {
    activeColor: RED500,
    activeIndex: 0,
    defaultColor: GRAY100,
    length: 10
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize color page control'
      }
    }
  }
};
