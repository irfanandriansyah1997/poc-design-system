import type { PropsWithChildren } from 'react';
import { createContext, memo, useContext, useMemo, useRef } from 'react';

import ToasterImperative from './ToasterImperative';
import type { ToasterImperativeRefType } from './types';

const _toasterContext = createContext<ToasterImperativeRefType>({
  close: () => {},
  open: () => {}
});

const ToasterProvider = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  const toaster = useRef<ToasterImperativeRefType>(null);

  const contextValue = useMemo<ToasterImperativeRefType>(() => {
    return {
      close: () => {
        if (toaster.current) toaster.current.close();
      },
      open: (args) => {
        if (toaster.current) toaster.current.open(args);
      }
    };
  }, []);

  return (
    <_toasterContext.Provider value={contextValue}>
      {children}

      <ToasterImperative ref={toaster} />
    </_toasterContext.Provider>
  );
};

export const useToaster = () => useContext(_toasterContext);

export default memo(ToasterProvider);
