import MainDrawer from './Drawer';
import DrawerContent from './DrawerContent';
import DrawerHeader from './DrawerHeader';
import type { DrawerFnType } from './types';

// @ts-expect-error irfan@fithub.id need to fix later error typecheck
const Drawer: DrawerFnType = MainDrawer;

Drawer.Header = DrawerHeader;

Drawer.Content = DrawerContent;

export default Drawer;
