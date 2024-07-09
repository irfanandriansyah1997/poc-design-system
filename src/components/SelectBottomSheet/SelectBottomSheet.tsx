import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useTheme } from '@emotion/react';

import type { FormGroupItemKind } from '@/components/FormGroup/types';
import Icon from '@/components/Icon';
import Input from '@/components/shared/Input';
import Typography from '@/components/Typography';
import useDebounce from '@/hooks/useDebounce';
import useMount from '@/hooks/useMount';

import SelectSuggestion from './SelectSuggestion';
import { stySelectBottomSheet } from './style';
import type { SelectBottomSheetFnType, SelectBottomSheetProps } from './types';

interface PrivateSelectBottomSheetProps extends SelectBottomSheetProps {
  formGroupKind?: FormGroupItemKind;
}

const _SelectBottomSheet: SelectBottomSheetFnType = (
  props: PrivateSelectBottomSheetProps
) => {
  const {
    bottomSheetProps = {},
    disabled = false,
    enableSearch,
    error = false,
    formGroupKind,
    helper,
    label,
    multiple = false,
    onChange,
    optional,
    options,
    placeholder = 'Select',
    required,
    searchProps = {},
    sizes = 'lg',
    value: valueProps
  } = props;
  const {
    color,
    components: { 'select-text-modifier': textModifier }
  } = useTheme();
  const containerRef = useRef<HTMLElement>(null);
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

  useEffect(() => {
    if (containerRef.current && !disabled) {
      const handleOnFocus = () => {
        if (containerRef.current) {
          containerRef.current.setAttribute('data-focus', 'true');
        }
      };

      const handleOnBlur = () => {
        if (containerRef.current) {
          containerRef.current.removeAttribute('data-focus');
        }
      };

      const handleOnMouseOver = () => {
        if (containerRef.current) {
          containerRef.current.setAttribute('data-hover', 'true');
        }
      };

      const handleOnMouseOut = () => {
        if (containerRef.current) {
          containerRef.current.removeAttribute('data-hover');
        }
      };

      // INFO: Handle Focus State
      containerRef.current.addEventListener('focus', handleOnFocus);
      containerRef.current.addEventListener('blur', handleOnBlur);

      // INFO: Handle Hover State
      containerRef.current.addEventListener('mouseover', handleOnMouseOver);
      containerRef.current.addEventListener('mouseout', handleOnMouseOut);

      return () => {
        if (containerRef.current) {
          // INFO: Handle Focus State
          containerRef.current.removeEventListener('focus', handleOnFocus);
          containerRef.current.removeEventListener('blur', handleOnBlur);

          // INFO: Handle Hover State
          containerRef.current.removeEventListener(
            'mouseover',
            handleOnMouseOver
          );
          // INFO: disable eslint since containerRef is not mutating
          // eslint-disable-next-line react-hooks/exhaustive-deps
          containerRef.current.removeEventListener(
            'mouseout',
            handleOnMouseOut
          );
        }
      };
    }

    if (containerRef.current && disabled) {
      containerRef.current.removeAttribute('data-hover');
      containerRef.current.removeAttribute('data-focus');
    }
  }, [disabled]);

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
          componentRef={containerRef}
          data-size={sizes}
          data-error={error && !disabled}
          data-disabled={disabled}
          data-form-group-kind={formGroupKind}
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
          title={label || placeholder}
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

const SelectBottomSheet = memo(_SelectBottomSheet);

SelectBottomSheet.displayName = 'SelectBottomSheet';

// @ts-expect-error irfan@fithub.id
SelectBottomSheet.COMPONENT_NAME = 'select-bottom-sheet';

export default SelectBottomSheet;
