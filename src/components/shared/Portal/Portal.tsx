import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const Portal = (props: PropsWithChildren<unknown>) => {
  const { children } = props;

  // INFO: prevent render (broken when creating HTML string) if SSR because document.body is not defined
  if (typeof window === 'undefined') return null;

  return createPortal(children, document.body);
};

export default Portal;
