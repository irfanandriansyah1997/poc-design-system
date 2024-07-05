import type { PropsWithChildren } from 'react';

import { styModalContent } from './style';
import type { ModalContentFnType } from './types';

const ModalContent: ModalContentFnType = (
  props: PropsWithChildren<unknown>
) => {
  const { children } = props;

  return <section css={styModalContent}>{children}</section>;
};

ModalContent.COMPONENT_NAME = 'modal-content';

export default ModalContent;
