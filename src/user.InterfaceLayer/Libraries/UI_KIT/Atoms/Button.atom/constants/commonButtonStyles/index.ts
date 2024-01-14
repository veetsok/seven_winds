import { css } from "styled-components";

import { ButtonStyleProps } from "../../type";
import Colors from "../../../../../../constants/colors";

export const commonButtonStyles = css<ButtonStyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${(props) =>
    props.background ? props.background : `${Colors.TRANSPARENT}`};
  margin: ${(props) => props.margin};
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "14px 0")};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
`;
