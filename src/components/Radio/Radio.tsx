import type { InputHTMLAttributes } from 'react';

import { useTheme } from '@emotion/react';

import Flex from '@/components/Flex';
import Typography from '@/components/Typography';

import type { GenericHTMLProps } from '@/types/react';

import { styRadio } from './style';

type RadioHTMLProps = Omit<
  GenericHTMLProps<InputHTMLAttributes<HTMLInputElement>>,
  'checked' | 'defaultChecked' | 'name'
>;

interface RadioProps extends RadioHTMLProps {
  /**
   * Indicates whether the radio is checked
   */
  checked?: boolean;
  /**
   * Indicates whether the radio is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * Indicates whether the radio is disabled.
   */
  disabled?: boolean;
  /**
   * The id of the radio
   */
  id?: string;
  /**
   * The label for the radio
   */
  label?: string;
  /**
   * The name of the radio
   */
  name?: string;
}

const Radio = (props: RadioProps) => {
  const {
    checked,
    defaultChecked,
    disabled,
    id,
    label,
    name,
    onChange,
    ...res
  } = props;
  const {
    color,
    components: { 'radio-label-modifier': textModifier }
  } = useTheme();

  return (
    <Flex gap={8}>
      <Flex.Item>
        <section css={styRadio}>
          <input
            {...res}
            type="radio"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            id={id}
            name={name}
            onChange={onChange}
          />

          <span data-radio />
        </section>
      </Flex.Item>

      {label && (
        <Flex.Item>
          <Typography
            modifier={textModifier}
            color={disabled ? color.GRAY200 : color.GRAY900}
          >
            {label}
          </Typography>
        </Flex.Item>
      )}
    </Flex>
  );
};

export default Radio;
