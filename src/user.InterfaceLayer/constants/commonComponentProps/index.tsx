import { ReactNode } from "react";

export enum CommonComponentsProps {
  active = "active",
  align = "align",
  alt = "alt",
  autoFocus = "autoFocus",
  background = "background",
  border = "border",
  borderActive = "borderActive",
  borderRadius = "borderRadius",
  bottom = "bottom",
  checked = "checked",
  children = "children",
  className = "className",
  color = "color",
  colorActive = "colorActive",
  cursor = "cursor",
  disabled = "disabled",
  fill = "fill",
  height = "height",
  icon = "icon",
  isError = "isError",
  isLoading = "isLoading",
  key = "key",
  left = "left",
  margin = "margin",
  max = "max",
  maxLength = "maxLength",
  name = "name",
  onChange = "onChange",
  onClick = "onClick",
  padding = "padding",
  placeholder = "placeholder",
  position = "position",
  required = "required",
  right = "right",
  src = "src",
  top = "top",
  value = "value",
  width = "width",
}

export interface ICommonComponentProps {
  [CommonComponentsProps.active]?: boolean;
  [CommonComponentsProps.align]?: string;
  [CommonComponentsProps.alt]?: string;
  [CommonComponentsProps.autoFocus]?: boolean;
  [CommonComponentsProps.background]?: string;
  [CommonComponentsProps.border]?: string;
  [CommonComponentsProps.borderActive]?: string;
  [CommonComponentsProps.borderRadius]?: string;
  [CommonComponentsProps.bottom]?: string;
  [CommonComponentsProps.checked]?: boolean;
  [CommonComponentsProps.children]?: JSX.Element | ReactNode;
  [CommonComponentsProps.className]?: string;
  [CommonComponentsProps.color]?: string;
  [CommonComponentsProps.colorActive]?: string;
  [CommonComponentsProps.cursor]?: string;
  [CommonComponentsProps.disabled]?: boolean;
  [CommonComponentsProps.fill]?: string;
  [CommonComponentsProps.height]?: string;
  [CommonComponentsProps.icon]?: JSX.Element | ReactNode;
  [CommonComponentsProps.isError]?: boolean;
  [CommonComponentsProps.isLoading]?: boolean;
  [CommonComponentsProps.key]?: number;
  [CommonComponentsProps.left]?: string;
  [CommonComponentsProps.margin]?: string;
  [CommonComponentsProps.max]?: number;
  [CommonComponentsProps.maxLength]?: number;
  [CommonComponentsProps.name]?: string;
  [CommonComponentsProps.onChange]?: () => void;
  [CommonComponentsProps.onClick]?: () => void;
  [CommonComponentsProps.padding]?: string;
  [CommonComponentsProps.placeholder]?: string;
  [CommonComponentsProps.position]?: string;
  [CommonComponentsProps.required]?: boolean;
  [CommonComponentsProps.right]?: string;
  [CommonComponentsProps.src]?: string;
  [CommonComponentsProps.top]?: string;
  [CommonComponentsProps.value]?: string | number | undefined;
  [CommonComponentsProps.width]?: string;
}
