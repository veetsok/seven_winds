import styled from "styled-components";
import Colors from "../../../../../constants/colors";

interface ItemsRowListStyles {
  $lineStyle?: string;
  top?: string;
  left?: string;
  $lineLeft?: string;
  $checkHover?: boolean;
}

export const Contents = styled.div<ItemsRowListStyles>`
  width: ${(props) => (props.$checkHover ? "0" : "28px")};
`;

export const Container = styled.div<ItemsRowListStyles>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 13px 12px;
  border-bottom: 1px solid ${Colors.BORDER};
  .right-icon {
    display: none;
  }
  &:hover .right-icon {
    display: ${(props) => (props.$checkHover ? "inline-flex" : "none")};
  }
  &:hover .left-icon,
  &:hover .right-icon {
    background: ${Colors.BORDER};
  }
`;

export const LineBlock = styled.div`
  position: relative;
`;

export const Line = styled.div<ItemsRowListStyles>`
  position: absolute;
  height: ${(props) => props.$lineStyle};
  top: ${(props) => (props.top ? props.top : "8px")};
  left: ${(props) => (props.left ? props.left : "-13px")};
  width: 2px;
  background: ${Colors.LINE};
`;

export const LineLeft = styled.div<ItemsRowListStyles>`
  height: ${(props) => props.$lineLeft};
  width: ${(props) => (props.$lineStyle ? "13px" : "0")};
  position: absolute;
  background: ${Colors.LINE};
  left: -33px;
  top: 1px;
`;
