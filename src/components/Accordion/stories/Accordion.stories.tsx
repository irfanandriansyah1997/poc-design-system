import type { Meta, StoryObj } from '@storybook/react';

import Accordion, {
  ACCORDION_DESKTOP_STYLING,
  ACCORDION_MOBILE_STYLING
} from '@/components/Accordion';
import Typography from '@/components/Typography';

const meta = {
  argTypes: {
    children: {
      table: { disable: true }
    },
    title: {
      table: { disable: true }
    }
  },
  component: Accordion,
  decorators: [
    (Story) => {
      return (
        <div style={{ maxWidth: 500 }}>
          <Story />
        </div>
      );
    }
  ],
  parameters: {
    layout: 'centered'
  },
  title: 'Data Display/Accordion'
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  args: {
    children: (
      <Typography modifier="text_body_base" color="#54565A">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
    ),
    styling: ACCORDION_DESKTOP_STYLING,
    title: 'Header'
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Accordion component'
      }
    }
  }
};

export const DesktopLayout: Story = {
  args: {
    children: (
      <Typography modifier="text_body_base" color="#54565A">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
    ),
    styling: ACCORDION_DESKTOP_STYLING,
    title: (
      <Typography
        modifier="text_heading_sm"
        fontWeight="strong"
        color="#101820"
      >
        Header
      </Typography>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Sample usage accordion for desktop layout'
      }
    }
  }
};

export const MobileLayout: Story = {
  args: {
    children: (
      <Typography modifier="text_body_base" color="#54565A">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
    ),
    styling: ACCORDION_MOBILE_STYLING,
    title: (
      <Typography modifier="text_body_base" fontWeight="strong" color="#101820">
        Header
      </Typography>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Sample usage accordion for mobile layout'
      }
    }
  }
};

export const DisableAccordion: Story = {
  args: {
    children: (
      <Typography modifier="text_body_base" color="#54565A">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
    ),
    disabled: true,
    styling: ACCORDION_MOBILE_STYLING,
    title: (
      <Typography modifier="text_body_base" fontWeight="strong" color="#101820">
        Header
      </Typography>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Sample usage accordion with disable props is true'
      }
    }
  }
};
