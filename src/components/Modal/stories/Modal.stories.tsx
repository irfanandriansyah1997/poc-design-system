import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Modal from '@/components/Modal';
import Typography from '@/components/Typography/Typography';

const meta = {
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  title: 'Layout/Modal'
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
            {(close) => (
              <>
                <Modal.Content>
                  <Typography modifier="text_body_sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in
                    <br />
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Typography>
                </Modal.Content>

                <Modal.Footer>
                  <Flex gap={8} justifyContent="flex-end">
                    <Flex.Item>
                      <Button
                        modifier="primary"
                        variant="fill"
                        size="sm"
                        onClick={close}
                      >
                        Ok
                      </Button>
                    </Flex.Item>

                    <Flex.Item>
                      <Button
                        modifier="primary"
                        variant="outline"
                        size="sm"
                        onClick={close}
                      >
                        Close
                      </Button>
                    </Flex.Item>
                  </Flex>
                </Modal.Footer>
              </>
            )}
          </Modal>
        )}
      </>
    );
  }
};
