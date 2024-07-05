import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Typography from '@/components/Typography';

import { noop } from '@/utils/noop';
import { GRAY500 } from '@/constants/theme';

const meta = {
  component: BottomSheet,
  parameters: {
    layout: 'centered'
  },
  title: 'Feedback/BottomSheet'
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Bottom Sheet component'
      }
    }
  },
  render: () => {
    const [show, toggleShow] = useState(false);

    return (
      <>
        <Button
          modifier="primary"
          variant="fill"
          size="sm"
          onClick={() => toggleShow(true)}
        >
          Open Bottom Sheet
        </Button>

        {show && (
          <BottomSheet title="Title" onClose={toggleShow} height="75%">
            <BottomSheet.Content>
              <Typography modifier="text_body_base">
                Bottom Sheet Content
              </Typography>
            </BottomSheet.Content>

            <BottomSheet.Footer>
              <Flex gap={8}>
                <Flex.Item fullWidth>
                  <Button
                    modifier="primary"
                    variant="fill"
                    onClick={() => toggleShow(true)}
                    block
                  >
                    Button 1
                  </Button>
                </Flex.Item>

                <Flex.Item fullWidth>
                  <Button
                    modifier="primary"
                    variant="outline"
                    onClick={() => toggleShow(true)}
                    block
                  >
                    Button 2
                  </Button>
                </Flex.Item>
              </Flex>
            </BottomSheet.Footer>
          </BottomSheet>
        )}
      </>
    );
  }
};

export const BottomSheetWithCustomActionButton: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Bottom sheet with adding custom button'
      }
    }
  },
  render: () => {
    const [show, toggleShow] = useState(false);

    return (
      <>
        <Button
          modifier="primary"
          variant="fill"
          size="sm"
          onClick={() => toggleShow(true)}
        >
          Open Bottom Sheet
        </Button>

        {show && (
          <BottomSheet
            title="Title"
            onClose={toggleShow}
            height="halfscreen"
            actionButtons={[
              {
                color: GRAY500,
                icon: 'delete',
                name: 'delete',
                onClick: noop
              },
              {
                color: GRAY500,
                icon: 'edit',
                name: 'edit',
                onClick: noop
              }
            ]}
          >
            <BottomSheet.Content>
              <Typography modifier="text_body_base">
                Bottom Sheet Content
              </Typography>
            </BottomSheet.Content>

            <BottomSheet.Footer>
              <Flex gap={8}>
                <Flex.Item fullWidth>
                  <Button
                    modifier="primary"
                    variant="fill"
                    onClick={() => toggleShow(true)}
                    block
                  >
                    Button 1
                  </Button>
                </Flex.Item>

                <Flex.Item fullWidth>
                  <Button
                    modifier="primary"
                    variant="outline"
                    onClick={() => toggleShow(true)}
                    block
                  >
                    Button 2
                  </Button>
                </Flex.Item>
              </Flex>
            </BottomSheet.Footer>
          </BottomSheet>
        )}
      </>
    );
  }
};

export const NestedBottomSheet: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Simulate render nested bottom sheet'
      }
    }
  },
  render: () => {
    const [showModal1, toggleShowModal1] = useState(false);
    const [showModal2, toggleShowModal2] = useState(false);

    return (
      <>
        <Button
          modifier="primary"
          variant="fill"
          size="sm"
          onClick={() => toggleShowModal1(true)}
        >
          Open Bottom Sheet 1
        </Button>

        {showModal1 && (
          <BottomSheet
            title="Title"
            onClose={toggleShowModal1}
            actionButtons={[
              {
                color: GRAY500,
                icon: 'delete',
                name: 'delete',
                onClick: noop
              },
              {
                color: GRAY500,
                icon: 'edit',
                name: 'edit',
                onClick: noop
              }
            ]}
          >
            <BottomSheet.Content>
              <Typography modifier="text_body_base">
                Bottom Sheet Content 1
              </Typography>

              {showModal2 && (
                <BottomSheet
                  title="Title"
                  onClose={toggleShowModal2}
                  height="auto"
                  actionButtons={[
                    {
                      color: GRAY500,
                      icon: 'delete',
                      name: 'delete',
                      onClick: noop
                    },
                    {
                      color: GRAY500,
                      icon: 'edit',
                      name: 'edit',
                      onClick: noop
                    }
                  ]}
                >
                  <BottomSheet.Content>
                    <Typography modifier="text_body_base">
                      Bottom Sheet Content 2
                    </Typography>
                  </BottomSheet.Content>
                </BottomSheet>
              )}
            </BottomSheet.Content>

            <BottomSheet.Footer>
              <Flex gap={8}>
                <Flex.Item fullWidth>
                  <Button
                    modifier="primary"
                    variant="fill"
                    onClick={() => toggleShowModal2(true)}
                    block
                  >
                    Open Bottom Sheet 2
                  </Button>
                </Flex.Item>
              </Flex>
            </BottomSheet.Footer>
          </BottomSheet>
        )}
      </>
    );
  }
};
