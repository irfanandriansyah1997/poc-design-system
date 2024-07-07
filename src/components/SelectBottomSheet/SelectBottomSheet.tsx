import { memo, useCallback, useMemo, useState } from 'react';

import { useTheme } from '@emotion/react';

import type { BottomSheetProps as BaseBottomSheetProps } from '@/components/BottomSheet/types';
import Input from '@/components/shared/Input';
import useDebounce from '@/hooks/useDebounce';
import useMount from '@/hooks/useMount';

import type { SelectProps } from '@/types/input';
import type { GetField } from '@/types/utils';

import Icon from '../Icon';
import Typography from '../Typography';
import SelectSuggestion from './SelectSuggestion';
import { stySelectBottomSheet } from './style';

interface BottomSheetProps {
  height?: GetField<BaseBottomSheetProps, 'height'>;
}

interface SelectBottomSheetProps extends SelectProps {
  bottomSheetProps?: BottomSheetProps;
}

const SelectBottomSheet = (props: SelectBottomSheetProps) => {
  const {
    bottomSheetProps = {},
    disabled = false,
    enableSearch,
    error = false,
    helper,
    label = 'Select',
    multiple = false,
    onChange,
    optional,
    options,
    placeholder,
    required,
    searchProps = {},
    sizes = 'lg',
    value: valueProps
  } = props;
  const {
    color,
    components: { 'select-text-modifier': textModifier }
  } = useTheme();
  const [open, toggleOpen] = useState(false);
  const [value, setValue] = useDebounce(valueProps, onChange);

  useMount(() => {
    if (!value) setValue(multiple ? [] : undefined);
  });

  const handleOnClickToggle = useCallback(() => {
    toggleOpen(true);
  }, []);

  const { text, textColor } = useMemo(() => {
    if (Array.isArray(value) && value.length > 0) {
      const text = options
        .reduce<string[]>((result, item) => {
          if (value.indexOf(item.value) >= 0) {
            result.push(item.label);
          }

          return result;
        }, [])
        .join(', ');

      return { text, textColor: color.GRAY900 };
    }

    const filteredItem = options.find((item) => item.value === value);
    if (filteredItem) {
      return { text: filteredItem.label, textColor: color.GRAY900 };
    }

    return { text: placeholder, textColor: color.GRAY200 };
  }, [color.GRAY200, color.GRAY900, options, placeholder, value]);

  return (
    <>
      <Input css={stySelectBottomSheet} onClick={handleOnClickToggle}>
        {/* INFO: Select Label Section */}

        {label && (
          <Input.Label label={label} optional={optional} required={required} />
        )}

        {/* INFO: Select Content Section */}

        <Input.Content
          className="select__container"
          data-size={sizes}
          data-error={error && !disabled}
          data-disabled={disabled}
        >
          <Typography modifier={textModifier} color={textColor} ellipsis>
            {text}
          </Typography>

          <Icon
            icon="chevron-down"
            color={color.GRAY300}
            size={sizes === 'lg' ? 20 : 16}
          />
        </Input.Content>

        {/* INFO: Select Helper Section */}

        {helper && (
          <Input.Helper disabled={disabled} error={error} helper={helper} />
        )}
      </Input>

      {open && (
        <SelectSuggestion
          height={bottomSheetProps.height}
          multiple={multiple}
          options={options}
          title={label}
          emptyResultText={searchProps.emptyResultText}
          enableSearch={enableSearch}
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          onClose={toggleOpen}
        />
      )}
    </>
  );
};

export default memo(SelectBottomSheet);
