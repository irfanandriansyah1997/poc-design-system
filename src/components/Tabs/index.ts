import TabItem from './TabItem';
import MainTabs from './Tabs';
import type { TabFnType } from './types';

// @ts-expect-error irfan@fithub.id
const Tabs: TabFnType = MainTabs;

// @ts-expect-error irfan@fithub.id
Tabs.Item = TabItem;

export default Tabs;
