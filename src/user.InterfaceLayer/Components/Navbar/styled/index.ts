import styled from "styled-components";
import Colors from "../../../constants/colors";

export const Navbar = styled.div`
  border-right: 1px solid ${Colors.BORDER};
  max-width: 234px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const NavbarTitle = styled.div`
  border-bottom: 1px solid ${Colors.BORDER};
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
`;
export const Title = styled.div``;
