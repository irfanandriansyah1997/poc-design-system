import { useTheme } from '@emotion/react';

import Typography from '@/components/Typography';

import type { InputHelperFnType } from './types';

const InputHelper: InputHelperFnType = (props) => {
  const { disabled, error, helper } = props;
  const {
    color,
    components: { 'form-helper-modifier': helperVariant },
    transition
  } = useTheme();

  return (
    <Typography
      tag="p"
      color={error && !disabled ? color.RED500 : color.GRAY500}
      modifier={helperVariant}
      style={{
        transition: `color ${transition.duration} ${transition.timingFunction}`
      }}
    >
      {helper}
    </Typography>
  );
};

InputHelper.COMPONENT_NAME = 'input-helper';

export default InputHelper;
