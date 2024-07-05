export const calcScale = (
  index: number,
  activeIndex: number,
  length: number
) => {
  if (activeIndex !== index && length > 5) {
    const scaleStartIdx = 2;
    const scaleEndIdx = length - 3;

    if (
      (activeIndex > scaleStartIdx || index > scaleStartIdx) &&
      (activeIndex < scaleEndIdx || index < scaleEndIdx)
    ) {
      let scaleRelative = Math.max(activeIndex, scaleStartIdx);
      scaleRelative = Math.min(scaleRelative, scaleEndIdx);

      if (Math.abs(index - scaleRelative) === 1) return 'sm';

      return 'xs';
    }
  }
  return undefined;
};

export const calcTranslate = (activeIndex: number, length: number) => {
  if (length < 6) return undefined;

  let translate = Math.max(activeIndex - 2, 0);
  translate = Math.min(translate, length - 5);

  return `${-translate * 100}%`;
};
