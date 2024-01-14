import styled from "styled-components";

import load from "./animations/load";
import Colors from "../../../../../constants/colors";
import { InputCommonStyle } from "./commonInputStyles";
import { IInputStyleProps } from "../type";

export const InputStyle = styled.input<IInputStyleProps>`
  ${InputCommonStyle};
  border-radius: 6px;
  background: transparent;
  color: ${Colors.WHITE};
  outline: none;
  box-sizing: content-box;
  &:placeholder {
    color: ${Colors.WHITE};
  }
  &:active,
  &:focus {
    border: ${(props) =>
      props.borderActive ? props.borderActive : `1px solid ${Colors.BORDER}`};
    color: ${(props) => (props.colorActive ? props.colorActive : `${Colors.GRAY}`)};
  }
`;

export const Error = styled.div`
  color: ${Colors.RED};
  font-size: 25px;
`;

export const Skeleton = styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  height: 40px;
  position: relative;
  box-shadow: 0 2px 10px 0 ${Colors.BORDER};
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 80%;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${Colors.BORDER} 50%,
      transparent 100%
    );
    animation: ${load} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;
