import { styBottomSheetFooter } from './style';
import type { BottomSheetFooterFnType } from './types';

const BottomSheetFooter: BottomSheetFooterFnType = (props) => {
  const { children } = props;

  return (
    <section data-footer css={styBottomSheetFooter}>
      {children}
    </section>
  );
};

BottomSheetFooter.COMPONENT_NAME = 'bottom-sheet-footer';

export default BottomSheetFooter;
