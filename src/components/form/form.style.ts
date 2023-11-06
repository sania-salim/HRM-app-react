import styled from "styled-components";

export const OuterFormContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
`;

export const InnerFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 585px;
`;

export const InputHalfStyled = styled.input`
  width: 240px;
  height: 30px;
`;

export const InputFullStyled = styled.input`
  width: 585px;
  height: 30px;
`;

export const LabelForm = styled.label`
  margin-bottom: 10px;
`;

// divides form for half length fields
export const FormDivider = styled.div`
  display: flex;
  justify-content: space-between;
`;

// groups the label and input
export const FormFieldDivider = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
`;

//////////// elements for custom dropdown ///////////
export const DropDownUl = styled.ul`
  width: fit-content;
  list-style-type: none;
  background-color: var(--themeGrey);
  padding: 0;
  border-radius: 3px;
`;

export const DropDownLi = styled.li`
  width: 240px;
  height: 30px;
  padding-left: 12px;
  &:hover,
  &:focus {
    background-color: var(--selection);
  }
`;

export const CustomSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
