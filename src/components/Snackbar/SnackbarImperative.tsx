import {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

import type { NullAble } from '@/types/utils';

import Snackbar from './Snackbar';
import type {
  BaseSnackbarProps,
  SnackbarImperativeRefType,
  SnackbarRefType
} from './types';

const SnackbarImperative = forwardRef<SnackbarImperativeRefType, unknown>(
  (_, ref) => {
    const [snackbar, setSnackbar] = useState<BaseSnackbarProps | false>(false);
    const snackbarRef = useRef<SnackbarRefType>(null);
    const snackbarQueue = useRef<NullAble<BaseSnackbarProps>>(null);

    useEffect(() => {
      if (!snackbar && snackbarQueue.current) {
        setSnackbar(snackbarQueue.current);
        snackbarQueue.current = null;
      }
    }, [snackbar]);

    useImperativeHandle(
      ref,
      () => ({
        close: () => {
          if (snackbarRef.current) snackbarRef.current.close();
        },
        open: (props) => {
          if (snackbarRef.current) {
            snackbarQueue.current = props;
            snackbarRef.current.close();
          } else setSnackbar(props);
        }
      }),
      []
    );

    if (snackbar) {
      return <Snackbar ref={snackbarRef} {...snackbar} onClose={setSnackbar} />;
    }

    return null;
  }
);

export default memo(SnackbarImperative);
