import React from "react";
import { ButtonStyled } from "./buttons.style";

interface ButtonProps {
  buttontype: "deleteButton" | "iconButton" | "regularButton";
  buttontext: string;
  buttonicon?: string;
  type?: string;
  onSmash?: React.EventHandler<React.MouseEvent>;
}

const Button: React.FC<ButtonProps> = ({
  buttontype,
  buttontext,
  buttonicon,
  type,
  onSmash,
}: ButtonProps) => {
  return (
    <ButtonStyled buttontype={buttontype} type={type} onClick={onSmash}>
      {buttonicon ? <img src={buttonicon} alt="" /> : ""}
      {buttontext}
    </ButtonStyled>
  );
};

export default Button;
