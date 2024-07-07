import { useTheme } from '@emotion/react';

import Typography from '@/components/Typography';

import type { InputLabelFnType } from './types';

const InputLabel: InputLabelFnType = (props) => {
  const { label, optional, required } = props;
  const {
    color,
    components: { 'form-label-modifier': textVariant }
  } = useTheme();

  return (
    <Typography tag="p" color={color.GRAY900} modifier={textVariant}>
      {required && (
        <>
          <Typography
            tag="span"
            display="inline"
            color={color.RED500}
            modifier={textVariant}
          >
            *
          </Typography>
          &nbsp;
        </>
      )}

      {label}

      {optional && (
        <>
          &nbsp;
          <Typography
            tag="span"
            display="inline"
            color={color.GRAY300}
            modifier={textVariant}
          >
            (optional)
          </Typography>
        </>
      )}
    </Typography>
  );
};

InputLabel.COMPONENT_NAME = 'input-label';

export default InputLabel;
