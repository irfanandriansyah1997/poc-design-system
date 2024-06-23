import {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

import type { NullAble } from '@/types/utils';

import Toaster from './Toaster';
import type {
  BaseToasterProps,
  ToasterImperativeRefType,
  ToasterRefType
} from './types';

const ToasterImperative = forwardRef<ToasterImperativeRefType, unknown>(
  (_, ref) => {
    const [toaster, setToaster] = useState<BaseToasterProps | false>(false);
    const toasterRef = useRef<ToasterRefType>(null);
    const toasterQueue = useRef<NullAble<BaseToasterProps>>(null);

    useEffect(() => {
      if (!toaster && toasterQueue.current) {
        setToaster(toasterQueue.current);
        toasterQueue.current = null;
      }
    }, [toaster]);

    useImperativeHandle(
      ref,
      () => ({
        close: () => {
          if (toasterRef.current) toasterRef.current.close();
        },
        open: (toasterProps) => {
          if (toasterRef.current) {
            toasterQueue.current = toasterProps;
            toasterRef.current.close();
          } else setToaster(toasterProps);
        }
      }),
      []
    );

    if (toaster)
      return <Toaster ref={toasterRef} {...toaster} onClose={setToaster} />;

    return null;
  }
);

export default memo(ToasterImperative);
