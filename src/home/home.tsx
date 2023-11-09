import Table from "../components/table/table.tsx";
import Header from "../components/header/header.tsx";
import Tools from "../components/tools/tools.tsx";
import { ButtonContainer } from "../components/form/form.style.ts";
import Button from "../components/buttons/button.tsx";
// import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Tools></Tools>
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
