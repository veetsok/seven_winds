import styled from "styled-components";
import Colors from "../../../../../constants/colors";

interface ProjectsListStyleProps {
  active?: boolean;
}

export const Container = styled.div<ProjectsListStyleProps>`
  margin: 5px 0;
  display: flex;
  padding: 5px 20px;
  align-items: center;
  cursor: pointer;
  background: ${(props) => (props.active ? `${Colors.GRAY}` : `${Colors.TRANSPARENT}`)};
`;
