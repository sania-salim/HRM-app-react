import { ButtonStyled } from "./buttons.style";

interface ButtonProps {
  buttontype: "deleteButton" | "iconButton" | "regularButton";
  buttontext: string;
  buttonicon?: string;
}

const Button: React.FC<ButtonProps> = ({
  buttontype,
  buttontext,
  buttonicon,
}: ButtonProps) => {
  return (
    <ButtonStyled buttontype={buttontype}>
      {buttonicon ? <img src={buttonicon} alt="" /> : ""}
      {buttontext}
    </ButtonStyled>
  );
};

export default Button;
