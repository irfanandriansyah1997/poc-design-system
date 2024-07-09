import type { PropsWithChildren } from 'react';
import { Children, cloneElement, useMemo } from 'react';

import Input from '@/components/shared/Input';

import { isCompoundComponentValid } from '@/utils/dom';
import type { BaseInputProps } from '@/types/input';

import { styFormGroup } from './style';
import type { FormGroupItemKind } from './types';

const FormGroup = (props: PropsWithChildren<BaseInputProps>) => {
  const {
    children,
    disabled = false,
    error = false,
    helper,
    label,
    optional,
    required,
    sizes
  } = props;

  const injectedProps = useMemo(
    () => ({ helper: undefined, label: undefined, sizes }),
    [sizes]
  );

  const items = Children.map(children, (child) => {
    if (isCompoundComponentValid(child, 'form-group-item')) {
      return cloneElement(child, injectedProps);
    }

    return null;
  });

  return (
    <Input css={styFormGroup}>
      {/* INFO: Form Group Label Section */}
      {label && (
        <Input.Label label={label} optional={optional} required={required} />
      )}

      {/* INFO: Textfield Content Section */}
      <Input.Content className="form-group__content">
        {Array.isArray(items) &&
          items.map((child, index) => {
            let formGroupKind: FormGroupItemKind = 'default';

            if (items.length === 1) formGroupKind = 'single';
            else if (index === 0) formGroupKind = 'first-item';
            else if (index === items.length - 1) formGroupKind = 'last-item';

            const injectedProps = { kind: formGroupKind };

            return cloneElement(child, injectedProps);
          })}
      </Input.Content>

      {/* INFO: Select Helper Section */}

      {helper && (
        <Input.Helper disabled={disabled} error={error} helper={helper} />
      )}
    </Input>
  );
};

export default FormGroup;
