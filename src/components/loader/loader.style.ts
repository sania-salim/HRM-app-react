import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div<{ load: boolean }>`
  display: ${(props) => (props.load ? "flex" : "none")};
  position: absolute;
  top: 45%;
  left: 48.3%;
  transform: translate(-50%, -50%);
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--themeGreen);
  border-radius: 50%; /* Make it a circle */
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite; /* Apply the spin animation */
`;
