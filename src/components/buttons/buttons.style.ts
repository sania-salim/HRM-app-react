import styled from "styled-components";

const Button = styled.button<{
  deleteButton?: boolean;
  iconButton?: boolean;
}>`
  color: ${(props) => (props.deleteButton ? "white" : "var(--primaryDark)")};
  background-color: ${(props) =>
    props.deleteButton ? "var(--themeRed)" : "var(--primaryLight)"};
  width: 150px;
  height: 40px;
  border-radius: 3px;
  border: none;
  margin-top: 20px;
  margin-bottom: 30px;
  &:hover,
  &:focus {
    color: white;
    background-color: ${(props) =>
      props.deleteButton ? "#8B0000" : "var(--primaryDark)"};
  }
`;

export default Button;
