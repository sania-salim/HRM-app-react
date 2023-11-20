import Table from "../components/table/table.tsx";
import Header from "../components/header/header.tsx";
import Tools from "../components/tools/tools.tsx";
import { ButtonContainer } from "../components/form/form.style.ts";
import Button from "../components/buttons/button.tsx";
import Popup from "../components/popup/popup.tsx";
import { useMyContext } from "../context/mycontext.tsx";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { popupProps } from "../components/popup/popup.tsx";

function Home() {
  const { data } = useMyContext();
  // const [popupDetails, setPopupDetails] = useState({
  //   actionType: "",
  //   name: "",
  // });

  // function updatePopup(popupDetails: popupProps) {
  //   setPopupDetails(popupDetails);
  // }

  return (
    <>
      <Header />
      {data.name.length === 0 ? null : <Popup name="" message="" />}
      <Tools />
      <Table></Table>
      <ButtonContainer>
        <Button
          buttontype="regularButton"
          buttontext="Previous"
          buttonicon=""
        />

        <Button buttontype="regularButton" buttontext="Next" buttonicon="" />
      </ButtonContainer>
    </>
  );
}

export default Home;
