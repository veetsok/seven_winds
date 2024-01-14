import { css } from "styled-components";
import Colors from "../../../../../../../constants/colors";

export const commonButtonAnimate = css`
  transition: all 0.3s;
  &:hover {
    border-bottom: 2px solid ${Colors.WHITE};
    background: ${Colors.TRANSPARENT};
    color: ${Colors.WHITE};
  }
`;
