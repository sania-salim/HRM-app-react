import styled from "styled-components";

export const ToastOverlay = styled.div`
  display: flex;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 300px;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: var(--themeWhite);
  background-color: var(--themeGreen);
  transition: ease;
  z-index: 3;
  border-radius: 8px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.034);
`;
