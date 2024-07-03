import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

import type { ResizeObserverFnType } from '@/utils/observer';
import { resizeObserverHandler } from '@/utils/observer';

const singleton = resizeObserverHandler();

/**
 * Custom hook for observing the resize of a DOM element using ResizeObserver.
 *
 * @param fn - The callback function to be called when the element is resized.
 * @returns An object containing a ref to attach to the DOM element.
 */
const useResizeObserver = <E extends Element>(
  fn: ResizeObserverFnType
): RefObject<E> => {
  const ref = useRef<E>(null);

  useEffect(() => {
    if (ref.current) {
      singleton.register({ element: ref.current, fn });

      return () => singleton.unregister();
    }
  }, [fn]);

  return ref;
};

export default useResizeObserver;
