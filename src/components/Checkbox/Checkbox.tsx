import { type InputHTMLAttributes, memo } from 'react';

import { useTheme } from '@emotion/react';

import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import type { GenericHTMLProps } from '@/types/react';

import { styCheckbox } from './style';

type CheckboxHTMLProps = Omit<
  GenericHTMLProps<InputHTMLAttributes<HTMLInputElement>>,
  'checked' | 'defaultChecked' | 'indeterminate' | 'name'
>;

interface CheckboxProps extends CheckboxHTMLProps {
  /**
   * Indicates whether the checkbox is checked
   */
  checked?: boolean;
  /**
   * Indicates whether the checkbox is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * Indicates whether the checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * The id of the checkbox
   */
  id?: string;
  /**
   * Showing indeterminate state (use with checked prop).
   */
  indeterminate?: boolean;
  /**
   * The label for the checkbox
   */
  label?: string;
  /**
   * The name of the checkbox
   */
  name?: string;
}

const Checkbox = (props: CheckboxProps) => {
  const {
    checked,
    defaultChecked,
    disabled,
    id,
    indeterminate,
    label,
    name,
    onChange,
    ...res
  } = props;
  const {
    color,
    components: { 'checkbox-label-modifier': textModifier }
  } = useTheme();

  return (
    <Flex gap={8}>
      <Flex.Item>
        <section css={styCheckbox}>
          <input
            {...res}
            type="checkbox"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            id={id}
            name={name}
            onChange={onChange}
          />

          <span data-checkbox>
            {indeterminate ? (
              <span data-indeterminate />
            ) : (
              <Icon data-check icon="check" size={14} />
            )}
          </span>
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

export default memo(Checkbox);
