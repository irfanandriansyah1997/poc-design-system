import type { PropsWithChildren } from 'react';

import { styModalFooter } from './style';

const ModalFooter = (props: PropsWithChildren<unknown>) => {
  const { children } = props;

  return <section css={styModalFooter}>{children}</section>;
};

export default ModalFooter;
