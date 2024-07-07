import { useCallback } from 'react';

import { useTheme } from '@emotion/react';

import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import type { SelectSuggestionOptionType } from '@/types/input';

interface SelectSuggestionItemProps extends SelectSuggestionOptionType {
  onChange: (value: string | number) => void;
}

const SelectSuggestionItem = (props: SelectSuggestionItemProps) => {
  const { disabled, label, onChange, selected = false, value } = props;
  const {
    color: colorPreset,
    components: { 'select-text-modifier': textModifier }
  } = useTheme();

  let color = colorPreset.GRAY500;
  if (selected) color = colorPreset.GRAY900;
  if (disabled) color = colorPreset.GRAY200;

  const handleOnClickContainer = useCallback(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      onClick={handleOnClickContainer}
    >
      <Flex.Item>
        <Typography
          modifier={textModifier}
          dangerouslySetInnerHTML={{ __html: label }}
          data-selected={selected}
          color={color}
        />
      </Flex.Item>

      {selected && (
        <Flex.Item>
          <Icon size={24} icon="check" color={colorPreset.FITSKY550} />
        </Flex.Item>
      )}
    </Flex>
  );
};

export default SelectSuggestionItem;
