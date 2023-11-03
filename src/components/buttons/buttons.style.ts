import styled from "styled-components";
const deleteButton = "deleteButton";
const iconButton = "iconButton";

export const ButtonStyled = styled.button<{
  buttontype?: string;
}>`
  display: ${(props) => (props.buttontype === iconButton ? "flex" : "block")};
  justify-content: space-between;
  color: ${(props) =>
    props.buttontype === deleteButton ? "white" : "var(--primaryDark)"};
  background-color: ${(props) =>
    props.buttontype === deleteButton
      ? "var(--themeRed)"
      : "var(--primaryLight)"};
  width: 150px;
  height: 40px;
  padding: 5px;
  border-radius: 3px;
  border: none;
  margin-top: 20px;
  margin-bottom: 30px;
  &:hover,
  &:focus {
    color: white;
    background-color: ${(props) =>
      props.buttontype === deleteButton ? "#8B0000" : "var(--primaryDark)"};
  }
`;
