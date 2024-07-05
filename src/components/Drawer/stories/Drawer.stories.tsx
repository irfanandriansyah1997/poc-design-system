import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import Drawer from '@/components/Drawer';
import Flex from '@/components/Flex';
import Image from '@/components/Image';
import Typography from '@/components/Typography';

import { noop } from '@/utils/noop';
import { GRAY500, GRAY900 } from '@/constants/theme';

const meta = {
  component: Drawer,
  parameters: {
    layout: 'centered'
  },
  title: 'Feedback/Drawer'
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Drawer component'
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
          Open Drawer
        </Button>

        {show && (
          <Drawer width="400px" onClose={toggleShow}>
            <Drawer.Header>
              <Flex alignItems="center" gap={16}>
                <Flex.Item>
                  <Image
                    src="https://asset.fithub.id/images/icon-fithub.svg"
                    radius="md"
                    alt="Fithub"
                    width={32}
                    height={32}
                  />
                </Flex.Item>

                <Flex.Item>
                  <Typography
                    modifier="text_heading_sm"
                    fontWeight="strong"
                    color={GRAY900}
                  >
                    Fithub
                  </Typography>
                </Flex.Item>
              </Flex>
            </Drawer.Header>

            <Drawer.Content>
              <div style={{ padding: 16 }}>Sample Content</div>
            </Drawer.Content>
          </Drawer>
        )}
      </>
    );
  }
};

export const DrawerWithCustomActionButton: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Custom modal with adding custom button'
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
          Open Drawer
        </Button>

        {show && (
          <Drawer
            width="400px"
            onClose={toggleShow}
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
            <Drawer.Header>
              <Flex alignItems="center" gap={16}>
                <Flex.Item>
                  <Image
                    src="https://asset.fithub.id/images/icon-fithub.svg"
                    radius="md"
                    alt="Fithub"
                    width={32}
                    height={32}
                  />
                </Flex.Item>

                <Flex.Item>
                  <Typography
                    modifier="text_heading_sm"
                    fontWeight="strong"
                    color={GRAY900}
                  >
                    Fithub
                  </Typography>
                </Flex.Item>
              </Flex>
            </Drawer.Header>

            <Drawer.Content>
              <div style={{ padding: 16 }}>Sample Content</div>
            </Drawer.Content>
          </Drawer>
        )}
      </>
    );
  }
};

export const NestedDrawer: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Simulate render nested drawer'
      }
    }
  },
  render: () => {
    const [showDrawer1, toggleShowDrawer1] = useState(false);
    const [showDrawer2, toggleShowDrawer2] = useState(false);

    return (
      <>
        <Button
          modifier="primary"
          variant="fill"
          size="sm"
          onClick={() => toggleShowDrawer1(true)}
        >
          Open Drawer 1
        </Button>

        {showDrawer1 && (
          <Drawer width="500px" onClose={toggleShowDrawer1}>
            <Drawer.Header>
              <Flex alignItems="center" gap={16}>
                <Flex.Item>
                  <Image
                    src="https://asset.fithub.id/images/icon-fithub.svg"
                    radius="md"
                    alt="Fithub"
                    width={32}
                    height={32}
                  />
                </Flex.Item>

                <Flex.Item>
                  <Typography
                    modifier="text_heading_sm"
                    fontWeight="strong"
                    color={GRAY900}
                  >
                    Drawer 1
                  </Typography>
                </Flex.Item>
              </Flex>
            </Drawer.Header>

            <Drawer.Content>
              <div style={{ padding: 16 }}>
                Sample Content
                <br />
                <br />
                <Button
                  modifier="primary"
                  variant="fill"
                  size="sm"
                  onClick={() => toggleShowDrawer2(true)}
                >
                  Open Drawer 2
                </Button>
              </div>

              {showDrawer2 && (
                <Drawer width="400px" onClose={toggleShowDrawer2}>
                  <Drawer.Header>
                    <Flex alignItems="center" gap={16}>
                      <Flex.Item>
                        <Image
                          src="https://asset.fithub.id/images/icon-fithub.svg"
                          radius="md"
                          alt="Fithub"
                          width={32}
                          height={32}
                        />
                      </Flex.Item>

                      <Flex.Item>
                        <Typography
                          modifier="text_heading_sm"
                          fontWeight="strong"
                          color={GRAY900}
                        >
                          Drawer 2
                        </Typography>
                      </Flex.Item>
                    </Flex>
                  </Drawer.Header>

                  <Drawer.Content>
                    <div style={{ padding: 16 }}>Sample Content</div>
                  </Drawer.Content>
                </Drawer>
              )}
            </Drawer.Content>
          </Drawer>
        )}
      </>
    );
  }
};
