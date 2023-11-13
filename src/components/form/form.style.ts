import styled from "styled-components";

export const OuterFormContainer = styled.div`
  display: flex;
  gap: 114px;
  justify-content: center;
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
  &:focus {
    outline: 2px var(--selection);
  }
`;

export const InputFullStyled = styled.input`
  width: 585px;
  height: 30px;
  &:focus {
    outline: 2px var(--selection);
  }
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
  margin: 60px 0 30px 0;
`;

//////////// elements for custom dropdown ///////////
export const DropDownUl = styled.ul`
  transition: 0.25s ease;
  width: fit-content;
  list-style-type: none;
  position: absolute;
  background-color: #fff;
  padding: 0;
  border-radius: 0 0 4px 4px;
  border-top: 0;
  border-left: 2px solid var(--selection);
  border-right: 2px solid var(--selection);
  border-bottom: 2px solid var(--selection);
  margin-top: 65px;
  // box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropDownLi = styled.li`
  display: flex;
  align-items: center;
  font-size: 14.5px;
  width: 233px;
  height: 30px;
  padding-left: 12px;
  &:hover,
  &:focus {
    transition: 0.01s ease-in;
    background-color: var(--selection);
  }
`;

export const CustomSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

// Headings to forms and details
export const PageHeading = styled.h2`
  text-align: left;
  padding-left: 90px;
`;

/////// validation error

export const ValidationError = styled.div`
  color: var(--themeRed);
  font-size: 12px;
  margin: 10px 0;
`;
