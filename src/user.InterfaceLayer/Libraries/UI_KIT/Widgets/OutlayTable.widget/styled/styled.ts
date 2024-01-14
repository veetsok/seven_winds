import styled from "styled-components";
import Colors from "../../../../../constants/colors";

export const Container = styled.div`
  width: 100%;
`;

export const Table = styled.div`
  background: ${Colors.BG_TABLE};
  border-top: 1px solid ${Colors.BORDER};
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  width: 100%;
  box-sizing: border-box;
  grid-column-start: 1;
  grid-column-end: 6;
`;
