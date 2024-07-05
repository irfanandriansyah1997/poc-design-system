import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Modal from '@/components/Modal';
import Typography from '@/components/Typography/Typography';

import { noop } from '@/utils/noop';
import { GRAY500 } from '@/constants/theme';

const meta = {
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  title: 'Feedback/Modal'
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Modal component'
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
          Open Modal
        </Button>

        {show && (
          <Modal title="Modal Title" onClose={toggleShow}>
            <Modal.Content>
              <Typography modifier="text_body_sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
                <br />
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Modal.Content>

            <Modal.Footer>
              <Flex gap={8} justifyContent="flex-end">
                <Flex.Item>
                  <Button modifier="primary" variant="fill" size="sm">
                    Ok
                  </Button>
                </Flex.Item>

                <Flex.Item>
                  <Button modifier="primary" variant="outline" size="sm">
                    Close
                  </Button>
                </Flex.Item>
              </Flex>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
};

export const ModalWithCustomActionButton: Story = {
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
          Open Modal
        </Button>

        {show && (
          <Modal
            title="Modal Title"
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
            <Modal.Content>
              <Typography modifier="text_body_sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
                <br />
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Modal.Content>

            <Modal.Footer>
              <Flex gap={8} justifyContent="flex-end">
                <Flex.Item>
                  <Button modifier="primary" variant="fill" size="sm">
                    Ok
                  </Button>
                </Flex.Item>

                <Flex.Item>
                  <Button modifier="primary" variant="outline" size="sm">
                    Close
                  </Button>
                </Flex.Item>
              </Flex>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
};

export const NestedModal: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Simulate render nested modal'
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
          Open Modal 1
        </Button>

        {showModal1 && (
          <Modal title="Modal 1" onClose={toggleShowModal1}>
            <Modal.Content>
              <Typography modifier="text_body_sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
                <br />
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <br />
              <Button
                modifier="primary"
                variant="fill"
                size="sm"
                onClick={() => toggleShowModal2(true)}
              >
                Open Modal 2
              </Button>

              {showModal2 && (
                <Modal title="Modal 2" onClose={toggleShowModal2}>
                  <Modal.Content>
                    <Typography modifier="text_body_sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                      <br />
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.
                    </Typography>
                  </Modal.Content>
                </Modal>
              )}
            </Modal.Content>
          </Modal>
        )}
      </>
    );
  }
};
