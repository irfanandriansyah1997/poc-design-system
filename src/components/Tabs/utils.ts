export const calcIndicator = (
  tabBarNode: Element,
  indicatorNode: Element,
  activeIndex: number
) => {
  if (
    tabBarNode instanceof HTMLElement &&
    indicatorNode instanceof HTMLElement
  ) {
    const activeTabNode = tabBarNode.childNodes[activeIndex];
    const activeTabWidth = (activeTabNode as HTMLElement)?.offsetWidth;
    const activeTabLeft = (activeTabNode as HTMLElement)?.offsetLeft;

    Object.assign(indicatorNode.style, {
      translate: `${activeTabLeft + 12}px 0`,
      width: `${activeTabWidth - 24}px`
    });
  }
};

export const calcOverflowMask = (
  tabBarNode: Element,
  indicatorNode?: Element
) => {
  if (tabBarNode instanceof HTMLElement) {
    const tabBarWidth = tabBarNode.offsetWidth;
    const tabBarScroll = tabBarNode.scrollLeft;

    if (indicatorNode instanceof HTMLElement) {
      Object.assign(indicatorNode.style, {
        display: 'none'
      });
    }

    const tabBarScrollWidth = tabBarNode.scrollWidth;

    if (indicatorNode instanceof HTMLElement) {
      Object.assign(indicatorNode.style, {
        display: null
      });
    }

    if (tabBarScroll !== 0) {
      tabBarNode.setAttribute('data-fadestart', '');
    } else {
      tabBarNode.removeAttribute('data-fadestart');
    }

    if (Math.round(tabBarScroll) < tabBarScrollWidth - tabBarWidth) {
      tabBarNode.setAttribute('data-fadeend', '');
    } else {
      tabBarNode.removeAttribute('data-fadeend');
    }
  }
};

export const autoScroll = (tabBarNode: Element, activeIndex: number) => {
  if (tabBarNode instanceof HTMLElement) {
    const activeTabNode = tabBarNode.childNodes[activeIndex];
    const activeTabLeft = (activeTabNode as HTMLElement)?.offsetLeft;

    tabBarNode.scrollTo({
      behavior: 'smooth',
      left: activeTabLeft - 64
    });
  }
};
