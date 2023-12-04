import Table from "../components/table/table.tsx";
import Header from "../components/header/header.tsx";
import Tools from "../components/tools/tools.tsx";

import Popup from "../components/popup/popup.tsx";
import { useMyContext } from "../context/mycontext.tsx";
import { Pagination } from "../components/pagination/pagination.tsx";

function Home() {
  const { data } = useMyContext();

  return (
    <>
      <Header />
      {data.name.length === 0 ? null : <Popup name="" message="" />}
      <Tools />
      <Table></Table>
      <Pagination></Pagination>
    </>
  );
}

export default Home;
