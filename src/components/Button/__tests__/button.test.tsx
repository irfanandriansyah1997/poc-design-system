import { render, screen } from '@testing-library/react';

import DesignSystemProvider from '@/context/DesignSystem';

import Button from '@/components/Button';

describe('Testing Button Component', () => {
  it('Should be render correctly', () => {
    render(
      <DesignSystemProvider>
        <Button label="Sample Button" />
      </DesignSystemProvider>
    );

    expect(screen.getByRole('button')).toHaveTextContent('Sample Button');
  });
});
