import { useCallback, useRef } from 'react';

import { useTheme } from '@emotion/react';

import BottomSheet from '@/components/BottomSheet';
import type { BottomSheetProps } from '@/components/BottomSheet/types';
import Textfield from '@/components/Textfield';
import Typography from '@/components/Typography';
import useMount from '@/hooks/useMount';
import useSearchSuggestion from '@/hooks/useSearchSuggestion';

import type { SelectSuggestionProps } from '@/types/input';
import type { BaseModalRefType } from '@/types/modal';
import type { GetField } from '@/types/utils';

import SelectSuggestionItem from './SelectSuggestionItem';
import { stySelectSuggestion } from './style';

interface CustomSelectSuggestionProps extends SelectSuggestionProps {
  height?: GetField<BottomSheetProps, 'height'>;
  onClose: (show: boolean) => void;
}

const SelectSuggestion = (props: CustomSelectSuggestionProps) => {
  const {
    emptyResultText = "Sorry, couldn't find anything. Please give more details or try a different search.",
    enableSearch = false,
    height = '90%',
    multiple,
    onChange,
    onClose,
    options: optionsProps,
    placeholder,
    title,
    value
  } = props;
  const {
    color,
    components: { 'select-text-modifier': textModifier }
  } = useTheme();
  const {
    action: { setKeyword },
    state: { keyword, options }
  } = useSearchSuggestion({ enableSearch, options: optionsProps, value });
  const bottomSheetRef = useRef<BaseModalRefType>(null);
  const searchSheetRef = useRef<HTMLInputElement>(null);

  const handleOnChange = useCallback(
    (args: string | number) => {
      if (multiple) {
        if (Array.isArray(value)) {
          if (value.indexOf(args) >= 0) {
            onChange(value.filter((item) => item !== args));
            bottomSheetRef.current?.close();
            return;
          }

          onChange([...value, args]);
          bottomSheetRef.current?.close();
          return;
        }

        onChange([args]);
        bottomSheetRef.current?.close();
        return;
      }

      onChange(value !== args ? args : undefined);
      bottomSheetRef.current?.close();
    },
    [multiple, onChange, value]
  );

  useMount(() => {
    if (searchSheetRef.current && enableSearch) {
      searchSheetRef.current.focus();
    }
  });

  return (
    <BottomSheet
      componentRef={bottomSheetRef}
      title={title}
      onClose={onClose}
      height={height}
    >
      <BottomSheet.Content>
        <section css={stySelectSuggestion}>
          {/* INFO: Render search bar */}
          {enableSearch && (
            <section className="select__search-bar">
              <Textfield
                ref={searchSheetRef}
                value={keyword}
                onChange={setKeyword}
                sizes="lg"
                placeholder={placeholder}
                preffixIcon="search"
                preffixIconSize={20}
                preffixColor={color.GRAY300}
                disabledDebounce
              />
            </section>
          )}

          {/* INFO: Render empty text if options not found */}
          {Boolean(enableSearch && !options.length && keyword) && (
            <Typography
              textAlign="center"
              modifier={textModifier}
              color={color.GRAY500}
            >
              {emptyResultText}
            </Typography>
          )}

          {/* INFO: Render search suggestion */}
          {options.length > 0 && (
            <ul>
              {options.map((item) => {
                return (
                  <li key={item.value}>
                    <SelectSuggestionItem {...item} onChange={handleOnChange} />
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </BottomSheet.Content>
    </BottomSheet>
  );
};

export default SelectSuggestion;
