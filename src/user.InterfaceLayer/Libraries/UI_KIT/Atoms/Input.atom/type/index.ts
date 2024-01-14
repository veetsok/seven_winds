import {
  CommonComponentsProps,
  ICommonComponentProps,
} from "../../../../../constants/commonComponentProps";
import { InputTypeEnum } from "../enum";

type ExtendsCommonType = Pick<
  ICommonComponentProps,
  | CommonComponentsProps.className
  | CommonComponentsProps.maxLength
  | CommonComponentsProps.isError
  | CommonComponentsProps.isLoading
  | CommonComponentsProps.max
  | CommonComponentsProps.placeholder
  | CommonComponentsProps.autoFocus
  | CommonComponentsProps.required
  | CommonComponentsProps.disabled
  | CommonComponentsProps.value
>;

export interface IInputProps extends ExtendsCommonType {
  readonly?: boolean;
  type: InputTypeEnum;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (val: string) => void;
}

export interface IInputStyleProps {
  padding?: ICommonComponentProps["padding"];
  margin?: ICommonComponentProps["margin"];
  color?: ICommonComponentProps["color"];
  border?: ICommonComponentProps["border"];
  borderRadius?: ICommonComponentProps["borderRadius"];
  background?: ICommonComponentProps["background"];
  height?: ICommonComponentProps["height"];
  width?: ICommonComponentProps["width"];
  borderActive?: ICommonComponentProps["borderActive"];
  colorActive?: ICommonComponentProps["colorActive"];
}
