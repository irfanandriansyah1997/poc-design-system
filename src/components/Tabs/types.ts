import type { HTMLAttributes, PropsWithChildren } from 'react';

import type {
  GenericCompoundComponentType,
  GenericHTMLProps
} from '@/types/react';

export type TabVariantType = 'center' | 'equal';

/////////////////////////////////////////////////////////////////////////////
// Tab Item Component Interface
/////////////////////////////////////////////////////////////////////////////

export interface TabItemProps
  extends Omit<GenericHTMLProps<HTMLAttributes<HTMLElement>>, 'onClick'> {
  /**
   * Unique key name for the tab item.
   */
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

export interface TabProps
  extends GenericHTMLProps<HTMLAttributes<HTMLElement>> {
  /**
   * The key of the active tab.
   */
  activeKey: string | number;
  /**
   * Callback function to handle tab click.
   */
  onTabClick: (keyName: string | number) => void;
  /**
   * The variant of the tab layout.
   */
  variant?: TabVariantType;
  /**
   * Whether tabs using border bottom as separator
   */
  withBorder?: boolean;
}

export type TabFnType = ((
  props: PropsWithChildren<TabProps>
) => JSX.Element) & {
  Item: TabItemFnType;
};
