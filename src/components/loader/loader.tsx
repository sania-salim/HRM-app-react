import { Loader } from "./loader.style";

const SpinnerLoader = ({ load }: { load: boolean }) => {
    return (
      <Loader load={load} />
    );
  }

export default SpinnerLoader;