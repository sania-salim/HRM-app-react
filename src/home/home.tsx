import Table from "../components/table/table.tsx";
import Header from "../components/header/header.tsx";
import Tools from "../components/tools/tools.tsx";
import { ButtonContainer } from "../components/form/form.style.ts";
import Button from "../components/buttons/button.tsx";
import Popup from "../components/popup/popup.tsx";
import { useMyContext } from "../context/mycontext.tsx";

function Home() {
  const { data, setPageOffset } = useMyContext();

  function paginateNext() {
    setPageOffset((prev) => prev + 10);
  }

  function paginatePrevious() {
    setPageOffset((prev) => prev - 10);
  }

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
          onSmash={paginatePrevious}
        />

        <Button
          buttontype="regularButton"
          buttontext="Next"
          buttonicon=""
          onSmash={paginateNext}
        />
      </ButtonContainer>
    </>
  );
}

export default Home;
