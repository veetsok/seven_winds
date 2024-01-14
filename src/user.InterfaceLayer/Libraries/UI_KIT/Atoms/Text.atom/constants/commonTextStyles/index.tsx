import { css } from "styled-components";

import { TextStyleProps } from "../../type";
import Colors from "../../../../../../constants/colors";

export const commonTextStyles = css<TextStyleProps>`
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  white-space: normal;
  color: ${Colors.GRAY};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
  color: ${(props) => props.color};
`;
