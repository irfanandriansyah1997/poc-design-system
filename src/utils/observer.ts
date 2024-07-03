export interface ResizeObserverFnType {
  (arg: ResizeObserverEntry): void;
}

export interface ResizerObserverStateType {
  element: Element;
  fn: ResizeObserverFnType;
}

/**
 * Creates a handler for ResizeObserver that allows registering and unregistering elements to observe for resizing.
 *
 * @returns An object with methods to register and unregister elements.
 */
export const resizeObserverHandler = () => {
  let state: Partial<ResizerObserverStateType> = {};

  const instance = new ResizeObserver((entries) => {
    if (Array.isArray(entries) && entries.length > 0 && state.fn) {
      const [firstItem] = entries;
      state.fn(firstItem);
    }
  });

  return {
    register: (args: ResizerObserverStateType) => {
      state.element = args.element;
      state.fn = args.fn;
      instance.observe(args.element);
    },
    unregister: () => {
      if (state.element) instance.unobserve(state.element);
      state = {};
    }
  };
};

export interface IntersectObserverFnType {
  (arg: IntersectionObserverEntry): void;
}

export interface IntersectObserverStateType {
  element: Element;
  fn: IntersectObserverFnType;
}

export const intersectObserverHandler = () => {
  let state: Partial<IntersectObserverStateType> = {};

  const instance = new IntersectionObserver((entries) => {
    if (Array.isArray(entries) && entries.length > 0 && state.fn) {
      const [firstItem] = entries;
      state.fn(firstItem);
    }
  });

  return {
    register: (args: IntersectObserverStateType) => {
      state.element = args.element;
      state.fn = args.fn;
      instance.observe(args.element);
    },
    unregister: () => {
      if (state.element) instance.unobserve(state.element);
      state = {};
    }
  };
};
