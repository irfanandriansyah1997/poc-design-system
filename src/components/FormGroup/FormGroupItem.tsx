import { Children, cloneElement, type PropsWithChildren, useMemo } from 'react';

import { isCompoundComponentValid } from '@/utils/dom';
import type { InputSizeType } from '@/types/input';

import type {
  FormGroupItemFnType,
  FormGroupItemKind,
  FormGroupItemProps
} from './types';

interface PrivateFormGroupItemProps extends FormGroupItemProps {
  kind: FormGroupItemKind;
  sizes?: InputSizeType;
}

// @ts-expect-error irfan@fithub.id
const FormGroupItem: FormGroupItemFnType = (
  props: PropsWithChildren<PrivateFormGroupItemProps>
) => {
  const { children, kind, layout = 'auto', sizes } = props;

  const injectedProps = useMemo(
    () => ({ formGroupKind: kind, helper: undefined, label: undefined, sizes }),
    [kind, sizes]
  );

  return (
    <section className="form-group__item" data-layout={layout}>
      {Children.map(children, (child) => {
        if (
          isCompoundComponentValid(child, 'select-bottom-sheet') ||
          isCompoundComponentValid(child, 'textfield') ||
          isCompoundComponentValid(child, 'password')
        ) {
          return cloneElement(child, injectedProps);
        }

        return null;
      })}
    </section>
  );
};

FormGroupItem.COMPONENT_NAME = 'form-group-item';

export default FormGroupItem;
