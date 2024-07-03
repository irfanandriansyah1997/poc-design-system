import { useCallback, useRef } from 'react';

import { requestAnimationHandler } from '@/utils/animation';
import type { NullAble } from '@/types/utils';

interface UseRequestAnimationArgs {
  animateFn: (percentage: number) => void;
  duration: number;
  onFinish: () => void;
}

/**
 * Custom hook to execute animation using requestAnimationFrame.
 *
 * @param args - The arguments for the hook.
 * @returns An object containing a function to execute the animation.
 */
const useRequestAnimation = (args: UseRequestAnimationArgs) => {
  const { animateFn, duration, onFinish } = args;
  const requestAnimationRef = useRef<NullAble<number>>(null);

  const handleRegisterAnimation = (instance: number) => {
    requestAnimationRef.current = instance;
  };

  const handleExecuteAnimation = useCallback(() => {
    if (requestAnimationRef.current) {
      cancelAnimationFrame(requestAnimationRef.current);
      requestAnimationRef.current = null;
    }

    requestAnimationHandler({
      animateFn,
      duration,
      onFinish,
      registerRequestAnimationFn: handleRegisterAnimation
    });
  }, [animateFn, duration, onFinish]);

  return {
    executeAnimation: handleExecuteAnimation
  };
};

export default useRequestAnimation;
