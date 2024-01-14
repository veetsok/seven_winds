import styled from "styled-components";

import { ImageStyleProps } from "../type";
import { commonImageStyles } from "../constants/commonButtonStyles";

export const SrcImageBlock = styled.div<ImageStyleProps>`
  ${commonImageStyles};
`;

export const SrcImage = styled.img<ImageStyleProps>`
  height: auto;
  max-height: 100%;
  max-width: 100%;
  width: auto;
`;

export const BackgroundImage = styled.div<ImageStyleProps>`
  ${commonImageStyles};
`;

export const NodeSvgImage = styled.div<ImageStyleProps>``;

export const DefaultSvg = styled.div<ImageStyleProps>`
  ${commonImageStyles};
  background: ${(props) => props.background};
  & svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.fill};
  }
`;

export const Image = styled.div<ImageStyleProps>``;
