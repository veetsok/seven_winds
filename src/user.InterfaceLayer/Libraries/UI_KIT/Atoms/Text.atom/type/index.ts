import { ICommonComponentProps } from "../../../../../constants/commonComponentProps";
import TextEnum from "../enum";

export interface TextType extends ICommonComponentProps, TextStyleProps {
  type: TextEnum;
  children?: ICommonComponentProps["children"];
  isLoading?: ICommonComponentProps["isLoading"];
}
export interface TextStyleProps {
  isLoading?: ICommonComponentProps["isLoading"];
  color?: ICommonComponentProps["color"];
  margin?: ICommonComponentProps["margin"];
  padding?: ICommonComponentProps["padding"];
  align?: ICommonComponentProps["align"];
}
