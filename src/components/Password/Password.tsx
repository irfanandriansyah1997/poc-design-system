import { forwardRef, memo, useCallback, useState } from 'react';

import type { FormGroupItemKind } from '@/components/FormGroup/types';
import Textfield from '@/components/Textfield';

import type { PasswordProps } from './types';
interface PrivatePasswordProps extends PasswordProps {
  formGroupKind?: FormGroupItemKind;
}

const _Password = forwardRef<HTMLInputElement, PrivatePasswordProps>(
  (props, ref) => {
    const [showPassword, toggleShowPassword] = useState(false);

    const handleOnClickToggle = useCallback(() => {
      toggleShowPassword(!showPassword);
    }, [showPassword]);

    return (
      <Textfield
        ref={ref}
        {...props}
        type={showPassword ? 'text' : 'password'}
        suffixIcon={showPassword ? 'visibility-off' : 'visibility-on'}
        onClickSuffix={handleOnClickToggle}
      />
    );
  }
);

const Password = memo(
  _Password as ReturnType<typeof forwardRef<HTMLInputElement, PasswordProps>>
);

Password.displayName = 'Password';

// @ts-expect-error irfan@fithub.id
Password.COMPONENT_NAME = 'password';

export default Password;
