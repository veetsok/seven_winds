import { ICommonComponentProps } from "../../../../../constants/commonComponentProps";
import ImageEnum from "../enum";

export interface ImageType extends ICommonComponentProps, ImageStyleProps {
  type: ImageEnum;
  isLoading?: ICommonComponentProps["isLoading"];
  children?: ICommonComponentProps["children"];
  icon?: ICommonComponentProps["icon"];
  onClick?: ICommonComponentProps["onClick"];
  src?: ICommonComponentProps["src"];
  alt?: ICommonComponentProps["alt"];
}

export interface ImageStyleProps {
  isLoading?: ICommonComponentProps["isLoading"];
  background?: ICommonComponentProps["background"];
  borderRadius?: ICommonComponentProps["borderRadius"];
  height?: ICommonComponentProps["height"];
  width?: ICommonComponentProps["width"];
  margin?: ICommonComponentProps["margin"];
  padding?: ICommonComponentProps["padding"];
  fill?: ICommonComponentProps["margin"];
  cursor?: ICommonComponentProps["cursor"];
  position?: ICommonComponentProps["position"];
  top?: ICommonComponentProps["top"];
  bottom?: ICommonComponentProps["bottom"];
  right?: ICommonComponentProps["right"];
  left?: ICommonComponentProps["left"];
}
