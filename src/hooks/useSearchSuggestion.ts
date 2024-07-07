import { useEffect, useMemo, useState } from 'react';

import type {
  SelectOptionType,
  SelectSuggestionOptionType
} from '@/types/input';

interface FilterAndFormatOptionsArgs {
  keyword?: string;
  options: SelectOptionType[];
  value?: (string | number) | Array<string | number>;
}

/**
 * Filters and formats an option list based on a keyword and selected value(s).
 *
 * @param {FilterAndFormatOptionsArgs} args - The arguments for filtering and formatting the options.
 * @returns {SelectSuggestionOptionType[]} The filtered and formatted list of suggestions.
 */
const filterAndFormatOptions = (
  args: FilterAndFormatOptionsArgs
): SelectSuggestionOptionType[] => {
  const { keyword, options, value } = args;

  const escapeKeyword = (keyword: string) =>
    keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const boldenKeyword = (label: string, keyword: string) => {
    const keywordRegex = new RegExp(`(${escapeKeyword(keyword)})`, 'gi');
    return label.replace(keywordRegex, '<strong>$1</strong>');
  };

  const filterAndFormatOptions = (
    options: SelectOptionType[],
    keyword: string
  ) =>
    options.reduce<SelectSuggestionOptionType[]>((result, item) => {
      if (item.label.toLowerCase().includes(keyword.toLowerCase())) {
        result.push({
          ...item,
          label: boldenKeyword(item.label, keyword),
          selected: Array.isArray(value)
            ? value.includes(item.value)
            : item.value === value
        });
      }
      return result;
    }, []);

  const sortOption = (options: SelectSuggestionOptionType[]) => {
    return options.sort((prev, next) => {
      if (prev.selected === next.disabled) return 0;

      if (prev.selected) return -1;

      return 1;
    });
  };

  if (keyword) {
    return sortOption(filterAndFormatOptions(options, keyword));
  }

  if (typeof value !== 'undefined') {
    return sortOption(
      options.map<SelectSuggestionOptionType>((item) => ({
        ...item,
        selected: Array.isArray(value)
          ? value.includes(item.value)
          : item.value === value
      }))
    );
  }

  return options;
};

interface UseSearchSuggestionArgs {
  enableSearch: boolean;
  options: SelectOptionType[];
  value?: (string | number) | Array<string | number>;
}

const useSearchSuggestion = (args: UseSearchSuggestionArgs) => {
  const { enableSearch, options, value } = args;
  const [keyword, setKeyword] = useState('');

  const filteredOptions = useMemo(() => {
    if (!enableSearch) return filterAndFormatOptions({ options, value });

    return filterAndFormatOptions({ keyword, options, value });
  }, [enableSearch, keyword, options, value]);

  useEffect(() => {
    return () => setKeyword('');
  }, []);

  return useMemo(() => {
    return {
      action: { setKeyword },
      state: { keyword, options: filteredOptions }
    };
  }, [filteredOptions, keyword]);
};

export default useSearchSuggestion;
