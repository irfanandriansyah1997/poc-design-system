import BaseInput from './Input';
import InputContent from './InputContent';
import InputCounter from './InputCounter';
import InputHelper from './InputHelper';
import InputLabel from './InputLabel';
import type { InputFnType } from './types';

// @ts-expect-error irfan@fithub.id
const Input: InputFnType = BaseInput;

Input.Content = InputContent;

Input.Helper = InputHelper;

Input.Label = InputLabel;

Input.Counter = InputCounter;

export default Input;
