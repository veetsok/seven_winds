import { css } from "styled-components";

import { IInputStyleProps } from "../../type";
import commonTextFonts from "../../../Text.atom/constants/fonts";
import TextEnum from "../../../Text.atom/enum";
import Colors from "../../../../../../constants/colors";

export const InputCommonStyle = css<IInputStyleProps>`
  cursor: pointer;
  margin: ${(props) => props.margin};
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  background: ${(props) => props.background};
  border: ${(props) => (props.border ? props.border : `1px solid ${Colors.TRANSPARENT}`)};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  font-feature-fettings: ${commonTextFonts[TextEnum.enum_Text_H5].fontFeatureFettings};
  font-family: ${commonTextFonts[TextEnum.enum_Text_H5].fontFamily};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H5].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H5].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_Text_H5].fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_Text_H5].lineHeight};
  letter-spacing: ${commonTextFonts[TextEnum.enum_Text_H5].letterSpacing};
`;
