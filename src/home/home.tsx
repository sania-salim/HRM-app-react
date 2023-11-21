import Table from "../components/table/table.tsx";
import Header from "../components/header/header.tsx";
import Tools from "../components/tools/tools.tsx";
import { ButtonContainer } from "../components/form/form.style.ts";
import Button from "../components/buttons/button.tsx";
import Popup from "../components/popup/popup.tsx";
import { useMyContext } from "../context/mycontext.tsx";

import { getData } from "../core/api/api.ts";

function Home() {
  const { data } = useMyContext();

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

        <Button
          buttontype="regularButton"
          buttontext="Next"
          buttonicon=""
          onSmash={() => getData("/employee/1")}
        />
      </ButtonContainer>
    </>
  );
}

export default Home;
