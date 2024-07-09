import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import Flex from '@/components/Flex';
import FormGroup from '@/components/FormGroup';
import Grid from '@/components/Grid';
import Password from '@/components/Password';
import SelectBottomSheet from '@/components/SelectBottomSheet';
import Textfield from '@/components/Textfield';
import Typography from '@/components/Typography';

import { noop } from '@/utils/noop';
import { GRAY500 } from '@/constants/theme';
import type { Maybe } from '@/types/utils';

const meta = {
  component: FormGroup,
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
  title: 'Form/Form Group'
} satisfies Meta<typeof FormGroup>;

export default meta;

type Story = StoryObj<typeof FormGroup>;

export const Basic: Story = {
  name: 'Basic Usage',

  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the FormGroup component'
      }
    }
  },
  render: () => {
    const [errorElement, toggleErrorElement] =
      useState<Maybe<'textfield' | 'select'>>(undefined);

    return (
      <Grid gap={16}>
        <Grid.Item col={12}>
          <Typography color={GRAY500} margin="0 0 16px">
            Toggle Error:
          </Typography>

          <Flex justifyContent="flex-start" gap={16}>
            <Flex.Item>
              <Button
                modifier="primary"
                variant="fill"
                onClick={() => toggleErrorElement('textfield')}
              >
                Error Textfield
              </Button>
            </Flex.Item>

            <Flex.Item>
              <Button
                modifier="primary-prominent"
                variant="fill"
                onClick={() => toggleErrorElement('select')}
              >
                Error Dropdown
              </Button>
            </Flex.Item>

            <Flex.Item>
              <Button
                modifier="primary"
                variant="outline"
                onClick={() => toggleErrorElement(undefined)}
              >
                Clear Error
              </Button>
            </Flex.Item>
          </Flex>
        </Grid.Item>

        <Grid.Item col={12}>
          <FormGroup
            label="Nama"
            required
            sizes="lg"
            helper="Pilih title kamu. Nama tidak boleh kosong?"
            error={typeof errorElement !== 'undefined'}
          >
            <FormGroup.Item>
              <SelectBottomSheet
                error={errorElement === 'select'}
                placeholder="Pilih"
                multiple={false}
                onChange={noop}
                optional={true}
                options={[
                  { label: 'Tuan', value: 'male' },
                  { label: 'Nyonya', value: 'female' }
                ]}
              />
            </FormGroup.Item>

            <FormGroup.Item layout="block">
              <Textfield
                error={errorElement === 'textfield'}
                maxLength={100}
                placeholder="Isi nama sesuai KTP"
              />
            </FormGroup.Item>

            <FormGroup.Item layout="block">
              <Password placeholder="Isi password anda" />
            </FormGroup.Item>
          </FormGroup>
        </Grid.Item>
      </Grid>
    );
  }
};
