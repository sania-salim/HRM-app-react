import HeaderStyled from "./header.style.ts";
import logo from "../../assets/HRM logo.svg";

function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="" />
    </HeaderStyled>
  );
}

export default Header;
