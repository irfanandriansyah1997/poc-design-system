import { Children, cloneElement, memo } from 'react';

import { isCompoundComponentValid } from '@/utils/dom';

import { styInput } from './style';
import type { InputProps } from './types';

const Input = (props: InputProps) => {
  const { children, ...res } = props;

  return (
    <section css={styInput} {...res}>
      {Children.map(children, (child) => {
        if (
          isCompoundComponentValid(child, 'input-label') ||
          isCompoundComponentValid(child, 'input-content') ||
          isCompoundComponentValid(child, 'input-helper')
        ) {
          return cloneElement(child);
        }

        return null;
      })}
    </section>
  );
};

export default memo(Input);
