import { styBottomSheetContent } from './style';
import type { BottomSheetContentFnType } from './types';

const BottomSheetContent: BottomSheetContentFnType = (props) => {
  const { children } = props;

  return (
    <section data-content css={styBottomSheetContent}>
      {children}
    </section>
  );
};

BottomSheetContent.COMPONENT_NAME = 'bottom-sheet-content';

export default BottomSheetContent;
