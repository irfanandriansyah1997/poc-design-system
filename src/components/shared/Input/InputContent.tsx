import type { InputContentFnType } from './types';

const InputContent: InputContentFnType = (props) => {
  const { children, ...res } = props;

  return <section {...res}>{children}</section>;
};

InputContent.COMPONENT_NAME = 'input-content';

export default InputContent;
