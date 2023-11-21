import styled from "styled-components";

export const ConfirmOverlay = styled.div<{
  confirm?: boolean;
}>`
  display: ${(props) => (props.confirm ? "flex" : "none")};
  position: absolute;
  inset: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 500px;
  height: 200px;
  padding: 30px;
  background-color: white;
  z-index: 1;
  border-radius: 8px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.034);
`;
