import { useImperativeHandle, useRef } from 'react';

import type { InputContentFnType } from './types';

const InputContent: InputContentFnType = (props) => {
  const { children, componentRef, ...res } = props;
  const ref = useRef<HTMLElement>(null);

  useImperativeHandle(componentRef, () => {
    return ref.current as HTMLElement;
  });

  return (
    <section ref={ref} {...res}>
      {children}
    </section>
  );
};

InputContent.COMPONENT_NAME = 'input-content';

export default InputContent;
