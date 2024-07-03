import type { Maybe } from '@/types/utils';

interface RequestAnimationHandlerArgs {
  animateFn: (percentage: number) => void;
  duration: number;
  onFinish: () => void;
  registerRequestAnimationFn: (
    args: ReturnType<typeof window.requestAnimationFrame>
  ) => void;
}

/**
 * Handles animation using requestAnimationFrame.
 *
 * @param args - The arguments for the animation handler.
 */
export const requestAnimationHandler = (args: RequestAnimationHandlerArgs) => {
  const { animateFn, duration, onFinish, registerRequestAnimationFn } = args;
  let start: Maybe<number>;
  let previousTimestamp: Maybe<number>;

  /**
   * Callback function for requestAnimationFrame to perform the animation.
   *
   * @param timestamp - The timestamp provided by requestAnimationFrame.
   */
  const doAnimate = (timestamp: number) => {
    if (typeof start === 'undefined') {
      start = timestamp;
    }

    const elapsed = timestamp - start;
    const percentage = Math.round((elapsed / duration) * 100) / 100;

    if (previousTimestamp !== timestamp) {
      animateFn(percentage);
    }

    // INFO: Stop the animation after tick count is equal duration parameter
    if (elapsed < duration) {
      previousTimestamp = timestamp;
      registerRequestAnimationFn(window.requestAnimationFrame(doAnimate));
      return;
    }

    onFinish();
  };

  registerRequestAnimationFn(window.requestAnimationFrame(doAnimate));
};
