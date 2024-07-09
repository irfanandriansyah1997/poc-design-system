import { type HTMLAttributes, memo, type PropsWithChildren } from 'react';

import type { GenericHTMLProps } from '@/types/react';

import { styContainer } from './style';

type BaseHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

const _Container = (props: PropsWithChildren<BaseHTMLProps>) => {
  const { children, ...res } = props;

  return (
    <section css={styContainer} {...res}>
      {children}
    </section>
  );
};

const Container = memo(_Container);

Container.displayName = 'Container';

export default Container;
