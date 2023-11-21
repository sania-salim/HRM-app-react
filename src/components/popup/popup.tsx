import { useEffect, useState } from "react";
import { useMyContext } from "../../context/mycontext.tsx";
import { ToastOverlay } from "./popup.style.ts";

export interface popupProps {
  message: string;
  actionType?: "added" | "edited" | "deleted";
  name: string;
}

const Popup: React.FC<popupProps> = () => {
  const [openToast, setOpenToast] = useState<boolean>(false);

  console.log("Inside popup function");

  function popup() {
    setOpenToast(true);
    setTimeout(() => {
      console.log("Opening and closing function");
      setOpenToast(false);
    }, 5000);
  }

  const { data } = useMyContext();

  useEffect(popup, [data]);

  console.log(data, "my context somewhere");

  const popuptext = `${data.name} has been ${data.message}`;
  console.log(openToast);

  if (openToast) {
    return (
      <ToastOverlay opentoast={openToast}>
        <div>
          <p>{popuptext}</p>
        </div>
      </ToastOverlay>
    );
  } else {
    return null;
  }
};

export default Popup;
