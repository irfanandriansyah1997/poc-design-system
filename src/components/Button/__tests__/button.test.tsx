import { render, screen } from '@testing-library/react';

import Button from '@/components/Button';

describe('Testing Button Component', () => {
  it('Should be render correctly', () => {
    render(<Button label="Sample Button" />);

    expect(screen.getByRole('button')).toHaveTextContent('Sample Button');
  });
});
