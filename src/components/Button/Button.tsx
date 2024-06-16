import { styButton } from './style';

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;

  /**
   * Button contents
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;

  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
const Button = (props: ButtonProps) => {
  const { backgroundColor, label, primary, size = 'medium', ...res } = props;
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  return (
    <button
      type="button"
      css={styButton}
      className={[`storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...res}
    >
      {label}
    </button>
  );
};

export default Button;
