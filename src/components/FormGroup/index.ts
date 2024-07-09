import BaseFormGroup from './FormGroup';
import FormGroupItem from './FormGroupItem';
import type { FormGroupFnType } from './types';

// @ts-expect-error irfan@fithub.id
const FormGroup: FormGroupFnType = BaseFormGroup;

FormGroup.Item = FormGroupItem;

export default FormGroup;
