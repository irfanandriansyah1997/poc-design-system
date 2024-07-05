import type { DrawerContentFnType } from './types';

const DrawerContent: DrawerContentFnType = (props) => {
  const { children } = props;

  return <section className="drawer__content">{children}</section>;
};

DrawerContent.COMPONENT_NAME = 'drawer-content';

export default DrawerContent;
