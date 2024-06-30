import type { MouseEventHandler, PropsWithChildren } from 'react';
import { useCallback } from 'react';

import Typography from '@/components/Typography';

import { noop } from '@/utils/noop';

import { styTabItem } from './style';
import type { TabItemFnType, TabItemProps, TabVariantType } from './types';

interface PrivateTabItemProps extends TabItemProps {
  active: boolean;
  onClick?: (keyName: string | number) => void;
  variant: TabVariantType;
}

const TabItem: TabItemFnType = (props) => {
  const { active, children, keyName, onClick, variant, ...res } =
    props as PropsWithChildren<PrivateTabItemProps>;

  const handleOnClick: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.preventDefault();
      onClick?.(keyName);
    },
    [keyName, onClick]
  );

  return (
    <section
      css={styTabItem}
      {...res}
      data-variant={variant}
      data-active={active}
      role="button"
      tabIndex={0}
      onKeyDown={noop}
      onClick={handleOnClick}
    >
      <Typography
        className="tab-item__text"
        fontWeight="strong"
        modifier="text_body_sm"
        textAlign="center"
      >
        {children}
      </Typography>
    </section>
  );
};

TabItem.COMPONENT_NAME = 'tab-item';

export default TabItem;
