import { useMemo } from 'react';

import { useTheme } from '@emotion/react';

import Typography from '@/components/Typography';

import { GRAY300 } from '@/constants/theme';

import type { InputCounterFnType } from './types';

const InputCounter: InputCounterFnType = (props) => {
  const { className, currentCounter, maxLength } = props;
  const {
    components: { 'textfield-text-modifier': textVariant }
  } = useTheme();

  const text = useMemo(() => {
    if (maxLength) {
      return `${currentCounter} / ${maxLength}`;
    }

    return currentCounter;
  }, [currentCounter, maxLength]);

  return (
    <Typography
      className={className}
      modifier={textVariant}
      color={GRAY300}
      display="inline"
    >
      {text}
    </Typography>
  );
};

export default InputCounter;
