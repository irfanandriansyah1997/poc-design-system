import type { PropsWithChildren } from 'react';

import { styModalFooter } from './style';
import type { ModalFooterFnType } from './types';

const ModalFooter: ModalFooterFnType = (props: PropsWithChildren<unknown>) => {
  const { children } = props;

  return <section css={styModalFooter}>{children}</section>;
};

ModalFooter.COMPONENT_NAME = 'modal-footer';

export default ModalFooter;
