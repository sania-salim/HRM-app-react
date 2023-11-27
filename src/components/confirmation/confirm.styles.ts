import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 4;
`;

export const ConfirmOverlay = styled.div<{
  confirm?: boolean;
}>`
  display: ${(props) => (props.confirm ? "flex" : "none")};
  position: fixed;
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
  top: 40%;
  left: 30%;
  z-index: 5;
`;
