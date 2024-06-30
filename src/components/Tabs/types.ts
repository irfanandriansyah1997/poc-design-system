import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { GenericCompoundComponentType } from '@/types/react';

type HTMLSectionProps = Omit<HTMLAttributes<HTMLElement>, 'style'>;

export type TabVariantType = 'center' | 'equal';

/////////////////////////////////////////////////////////////////////////////
// Tab Item Component Interface
/////////////////////////////////////////////////////////////////////////////

export interface TabItemProps extends Omit<HTMLSectionProps, 'onClick'> {
  keyName: string | number;
}

export type TabItemFnType = GenericCompoundComponentType<
  {
    (props: PropsWithChildren<TabItemProps>): JSX.Element;
  },
  'tab-item'
>;

/////////////////////////////////////////////////////////////////////////////
// Tab Component Interface
/////////////////////////////////////////////////////////////////////////////

export interface TabProps extends HTMLSectionProps {
  activeKey: string | number;
  onTabClick: (keyName: string | number) => void;
  variant?: TabVariantType;
}

export type TabFnType = ((
  props: PropsWithChildren<TabProps>
) => JSX.Element) & {
  Item: TabItemFnType;
};
