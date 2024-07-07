import { useRef } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Snackbar from '@/components/Snackbar';
import type { SnackbarImperativeRefType } from '@/components/Snackbar/types';

const meta = {
  component: Snackbar,
  decorators: [
    (Story) => {
      return (
        <div style={{ width: 500 }}>
          <Story />
        </div>
      );
    }
  ],
  parameters: {
    layout: 'centered'
  },
  title: 'Feedback/Snackbar'
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof Snackbar>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Snackbar component'
      }
    }
  },
  render: () => {
    const ref = useRef<SnackbarImperativeRefType>(null);

    return (
      <>
        <Flex gap={20} flexWrap="wrap">
          <Flex.Item>
            <Button
              modifier="primary"
              variant="fill"
              size="sm"
              onClick={() =>
                ref.current?.open({
                  autoClose: 300000,
                  message: 'Sample Message'
                })
              }
            >
              Default
            </Button>
          </Flex.Item>

          <Flex.Item>
            <Button
              modifier="primary-prominent"
              variant="fill"
              size="sm"
              onClick={() =>
                ref.current?.open({
                  autoClose: 300000,
                  icon: 'add-library',
                  iconColor: 'GREEN500',
                  message: 'Sample Message'
                })
              }
            >
              With Icon
            </Button>
          </Flex.Item>

          <Flex.Item>
            <Button
              modifier="danger"
              variant="dashed"
              size="sm"
              onClick={() =>
                ref.current?.open({
                  autoClose: 300000,
                  ctaLabel: 'CTA',
                  iconColor: 'BLUE500',
                  message: 'Sample Message',
                  onCtaClick: () => alert('Invoked from CTA')
                })
              }
            >
              With CTA
            </Button>
          </Flex.Item>

          <Flex.Item>
            <Button
              modifier="primary"
              variant="text"
              size="sm"
              onClick={() =>
                ref.current?.open({
                  autoClose: 300000,
                  message:
                    'Snackbar with two lines copy lorem Ipsum is simply dummy text.'
                })
              }
            >
              Multiple Line Text
            </Button>
          </Flex.Item>
        </Flex>
        <Snackbar.Imperative ref={ref} />
      </>
    );
  }
};
