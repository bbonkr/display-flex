import { FlexDirection } from './FlexDirection';
import { FlexWrap } from './FlexWrap';

export interface FormValues {
    boxes: number;
    flexDirection?: FlexDirection;
    justifyContent?: string;
    alignItems?: string;
    flexWrap?: FlexWrap;
}

export interface FlexPropertyFormState {
    values: FormValues;
}
