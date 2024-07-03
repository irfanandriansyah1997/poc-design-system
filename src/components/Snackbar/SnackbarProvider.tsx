import type { PropsWithChildren } from 'react';
import { createContext, memo, useContext, useMemo, useRef } from 'react';

import SnackbarImperative from './SnackbarImperative';
import type { SnackbarImperativeRefType } from './types';

const _SnackbarContext = createContext<SnackbarImperativeRefType>({
  close: () => {},
  open: () => {}
});

const SnackbarProvider = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  const snackbarRef = useRef<SnackbarImperativeRefType>(null);

  const contextValue = useMemo<SnackbarImperativeRefType>(() => {
    return {
      close: () => {
        if (snackbarRef.current) snackbarRef.current.close();
      },
      open: (args) => {
        if (snackbarRef.current) snackbarRef.current.open(args);
      }
    };
  }, []);

  return (
    <_SnackbarContext.Provider value={contextValue}>
      {children}

      <SnackbarImperative ref={snackbarRef} />
    </_SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(_SnackbarContext);

export default memo(SnackbarProvider);
