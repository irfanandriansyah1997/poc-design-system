import type { Meta, StoryObj } from '@storybook/react';

import Carousel from '@/components/Carousel';
import Image from '@/components/Image';

const meta = {
  component: Carousel,
  parameters: {
    layout: 'centered'
  },
  title: 'Data Display/Carousel'
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Carousel component'
      }
    }
  },
  render: () => {
    const ARRAY = [...Array(6).keys()].map((each) => each + 87);

    return (
      <div style={{ overflow: 'hidden', width: 500 }}>
        <Carousel step={1} visibleCells={1.5} gutter="10px">
          {ARRAY.map((each) => (
            <Image
              key={each}
              radius="lg"
              alt={'slide-' + each}
              height={200}
              objectFit="cover"
              objectPosition="center"
              src={`https://picsum.photos/seed/${each}/1280/768.webp`}
            />
          ))}
        </Carousel>
      </div>
    );
  }
};
