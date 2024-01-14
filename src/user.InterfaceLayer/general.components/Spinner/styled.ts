import styled, { keyframes } from "styled-components";
import Colors from "../../constants/colors";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid ${Colors.BLUE};
  border-left: 4px solid ${Colors.WHITE};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 0.8s linear infinite;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 999;
`;

export const Background = styled.div`
  background: ${Colors.BG_SPINNER};
  inset: 0;
  position: absolute;
  z-index: -1;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  @media (max-width: 1025px) {
    min-height: 60vh;
  }
  @media (max-width: 740px) {
    min-height: 40vh;
  }
`;
