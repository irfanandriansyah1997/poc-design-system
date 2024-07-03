import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Tabs from '@/components/Tabs';

const meta = {
  component: Tabs,
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
  title: 'Navigation/Tab'
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Tabs component'
      }
    }
  },
  render: () => {
    const [activeKey, setActiveKey] = useState<string | number>('1');

    return (
      <>
        <Tabs activeKey={activeKey} onTabClick={setActiveKey}>
          <Tabs.Item keyName="1">1 item</Tabs.Item>
          <Tabs.Item keyName="2">2 item</Tabs.Item>
          <Tabs.Item keyName="3">3 item</Tabs.Item>
        </Tabs>
      </>
    );
  }
};

export const WithBorder: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Tabs component'
      }
    }
  },
  render: () => {
    const [activeKey, setActiveKey] = useState<string | number>('1');

    return (
      <>
        <Tabs activeKey={activeKey} onTabClick={setActiveKey} withBorder>
          <Tabs.Item keyName="1">1 item</Tabs.Item>
          <Tabs.Item keyName="2">2 item</Tabs.Item>
          <Tabs.Item keyName="3">3 item</Tabs.Item>
        </Tabs>
      </>
    );
  }
};

export const VariantCenter: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example implement tab using variant center'
      }
    }
  },
  render: () => {
    const [activeKey, setActiveKey] = useState<string | number>('1');

    return (
      <>
        <Tabs
          activeKey={activeKey}
          onTabClick={setActiveKey}
          variant="center"
          withBorder
        >
          <Tabs.Item keyName="1">1 item</Tabs.Item>
          <Tabs.Item keyName="2">2 item</Tabs.Item>
          <Tabs.Item keyName="3">3 item</Tabs.Item>
        </Tabs>
      </>
    );
  }
};

export const VariantEqual: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example implement tab using variant equal'
      }
    }
  },
  render: () => {
    const [activeKey, setActiveKey] = useState<string | number>('1');

    return (
      <>
        <Tabs
          activeKey={activeKey}
          onTabClick={setActiveKey}
          variant="equal"
          withBorder
        >
          <Tabs.Item keyName="1">1 item</Tabs.Item>
          <Tabs.Item keyName="2">2 item</Tabs.Item>
          <Tabs.Item keyName="3">3 item</Tabs.Item>
        </Tabs>
      </>
    );
  }
};

export const ScrollBehavior: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'If you have number of tabs that exceeds the container width, the TabBar will be scrollable. This behavior affects to all variant types.'
      }
    }
  },
  render: () => {
    const [activeKey, setActiveKey] = useState<string | number>('1');

    return (
      <>
        <Tabs activeKey={activeKey} onTabClick={setActiveKey} withBorder>
          <Tabs.Item keyName="1">1 item</Tabs.Item>
          <Tabs.Item keyName="2">2 item</Tabs.Item>
          <Tabs.Item keyName="3">3 item</Tabs.Item>
          <Tabs.Item keyName="4">4 item</Tabs.Item>
          <Tabs.Item keyName="5">5 item</Tabs.Item>
          <Tabs.Item keyName="6">6 item</Tabs.Item>
          <Tabs.Item keyName="7">7 item</Tabs.Item>
          <Tabs.Item keyName="8">8 item</Tabs.Item>
          <Tabs.Item keyName="9">9 item</Tabs.Item>
          <Tabs.Item keyName="10">10 item</Tabs.Item>
        </Tabs>
      </>
    );
  }
};
