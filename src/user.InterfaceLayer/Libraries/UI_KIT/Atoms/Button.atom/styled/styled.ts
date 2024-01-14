import styled from "styled-components";
import commonButtonFonts from "../constants/fonts";
import ButtonEnum from "../enum";
import { ButtonStyleProps } from "../type";
import { commonButtonStyles } from "../constants/commonButtonStyles";
import { commonButtonAnimate } from "../constants/commonButtonStyles/animation";
import Colors from "../../../../../constants/colors";

export const DefaultButton = styled.button<ButtonStyleProps>`
  ${commonButtonStyles};
  ${commonButtonAnimate};
  border: 2px solid transparent;
  background: ${(props) => (props.active ? Colors.WHITE : Colors.TRANSPARENT)};
  color: ${(props) => (props.active ? Colors.WHITE : Colors.GRAY)};
  font-size: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontSize};
  font-style: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontStyle};
  font-weight: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontWeight};
`;

export const Button = styled.div<ButtonStyleProps>`
  ${commonButtonStyles};
  border: 2px solid ${Colors.RED};
  color: ${Colors.RED};
`;
