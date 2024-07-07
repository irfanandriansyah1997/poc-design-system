import type { Meta, StoryObj } from '@storybook/react';

import SelectBottomSheet from '@/components/SelectBottomSheet';

import { noop } from '@/utils/noop';
import type { SelectOptionType } from '@/types/input';

const MOCK_OPTION: SelectOptionType[] = [
  { label: 'Jakarta', value: 'd35b7345-9d6a-4a62-bba7-1bd9528e5f01' },
  { label: 'Surabaya', value: '2c2e82f8-2a8e-4c0f-9e1b-503198c5fa7c' },
  { label: 'Bandung', value: 'a6f15f5f-0b61-44c0-9f4d-5e10a7c1631e' },
  { label: 'Medan', value: 'd4313aa8-04b1-4550-b383-9ee0e6ec2585' },
  { label: 'Semarang', value: '9a8e7a20-9d67-4f23-a7a7-3500a32ccf0a' },
  { label: 'Palembang', value: 'ddc4d8a6-4b90-437d-b067-6b258f1f5e11' },
  { label: 'Makassar', value: 'b90d18f1-5fe2-45c7-b7a7-72a8b122db69' },
  { label: 'Batam', value: 'e273b7d3-b2f7-47f1-92a4-3e1a3f43a32d' },
  { label: 'Pekanbaru', value: 'ea0329ff-3e25-4314-b36b-b6a21a618a05' },
  { label: 'Denpasar', value: '0b89d5c3-b3a8-42f1-8fa8-b82d5f774f42' },
  {
    label: 'Bandar Lampung',
    value: '8f85e6ef-1e43-4f17-bf8f-b63b451e3b07'
  },
  { label: 'Padang', value: 'aae7d7c8-57e6-4c07-860d-7a0135f73aa6' },
  { label: 'Yogyakarta', value: 'eab6e78f-606f-48a2-a083-6b37f42b5a11' },
  { label: 'Malang', value: 'd5265e3a-1f6a-4530-bc4e-2be2b0bb9e5f' },
  { label: 'Balikpapan', value: '06c238cc-2f0c-45bc-8edf-4b4ec4e7b3e5' },
  { label: 'Banjarmasin', value: 'f61b2f63-42e0-4397-b1c6-0d7e05a9d8b0' },
  { label: 'Samarinda', value: '75459f85-6a1b-47b7-8aae-b2d2b61e54d4' },
  { label: 'Pontianak', value: '9c36225f-09f0-4c4b-95bf-05e9b2f61c25' },
  { label: 'Manado', value: '267c7c9b-3ecf-4b24-b309-7e45f372f3bc' },
  { label: 'Mataram', value: '4a60b8f0-46c4-4167-bde4-2d5f5fa42a29' },
  { label: 'Kupang', value: 'b1c4001e-3f62-4f66-8e98-40638b8e1ac5' },
  { label: 'Jayapura', value: '3a3b932f-9b1b-4ba1-90d4-2c960d50302f' },
  { label: 'Ambon', value: '3e2e57e4-69d2-41e1-b7ed-5792d94bda98' },
  { label: 'Palu', value: '9e2c5054-9d0b-4a6f-b1b3-735f8a1d0e8f' },
  { label: 'Ternate', value: '6c1172e3-1c5b-41d6-891d-eb761b88b135' },
  { label: 'Gorontalo', value: '6d1d4e6e-8b25-4b76-80a3-62f5eb85765f' },
  { label: 'Banda Aceh', value: '6e159f9e-b7a8-4952-8411-47d1647d3a1f' },
  { label: 'Sorong', value: 'd3ecb1d5-d942-42e1-b4f5-b6151bb6fb3c' },
  { label: 'Pangkal Pinang', value: 'b5b1ef8e-ae5a-40d6-91a2-8b9b700ca7f2' }
];

const meta = {
  component: SelectBottomSheet,
  decorators: [
    (Story) => {
      return (
        <div css={{ maxWidth: '100%', minHeight: 50, width: 300 }}>
          <Story />
        </div>
      );
    }
  ],
  parameters: {
    layout: 'centered'
  },
  title: 'Form/Select - Bottom Sheet'
} satisfies Meta<typeof SelectBottomSheet>;

export default meta;

type Story = StoryObj<typeof SelectBottomSheet>;

export const Basic: Story = {
  args: {
    enableSearch: false,
    error: false,
    helper: 'Pilih lokasi terdekatmu',
    label: 'Pilih Lokasi',
    multiple: false,
    onChange: noop,
    optional: true,
    options: MOCK_OPTION,
    placeholder: 'Cari lokasi',
    searchProps: {
      emptyResultText:
        'Lokasi yang dicari tidak ditemukan. Silakan cari lokasi lainnya.'
    }
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates how to use the select component for mobile site'
      }
    }
  }
};

export const EnableSearchMode: Story = {
  args: {
    enableSearch: true,
    error: false,
    helper: 'Pilih lokasi terdekatmu',
    label: 'Pilih Lokasi',
    multiple: false,
    onChange: noop,
    optional: true,
    options: MOCK_OPTION,
    placeholder: 'Cari lokasi',
    searchProps: {
      emptyResultText:
        'Lokasi yang dicari tidak ditemukan. Silakan cari lokasi lainnya.'
    }
  }
};

export const ErrorState: Story = {
  args: {
    enableSearch: true,
    error: true,
    helper: 'Pilih lokasi terdekatmu',
    label: 'Pilih Lokasi',
    multiple: false,
    onChange: noop,
    optional: true,
    options: MOCK_OPTION,
    placeholder: 'Cari lokasi',
    searchProps: {
      emptyResultText:
        'Lokasi yang dicari tidak ditemukan. Silakan cari lokasi lainnya.'
    }
  }
};

export const MultipleSelection: Story = {
  args: {
    enableSearch: true,
    helper: 'Pilih lokasi terdekatmu',
    label: 'Pilih Lokasi',
    multiple: true,
    onChange: noop,
    optional: true,
    options: MOCK_OPTION,
    placeholder: 'Cari lokasi',
    searchProps: {
      emptyResultText:
        'Lokasi yang dicari tidak ditemukan. Silakan cari lokasi lainnya.'
    }
  }
};

export const SmallSize: Story = {
  args: {
    enableSearch: true,
    helper: 'Pilih lokasi terdekatmu',
    label: 'Pilih Lokasi',
    onChange: noop,
    optional: true,
    options: MOCK_OPTION,
    placeholder: 'Cari lokasi',
    searchProps: {
      emptyResultText:
        'Lokasi yang dicari tidak ditemukan. Silakan cari lokasi lainnya.'
    },
    sizes: 'sm'
  }
};
