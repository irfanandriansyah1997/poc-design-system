import type { PropsWithChildren } from 'react';

import { styModalContent } from './style';

const ModalContent = (props: PropsWithChildren<unknown>) => {
  const { children } = props;

  return <section css={styModalContent}>{children}</section>;
};

export default ModalContent;
