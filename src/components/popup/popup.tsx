import { useEffect, useState } from "react";
import { useMyContext } from "../../context/mycontext.tsx";
import { ToastOverlay } from "./popup.style.ts";

export interface popupProps {
  message: string;
  actionType?: "added" | "edited" | "deleted";
  name: string;
}

const Popup: React.FC<popupProps> = () => {
  const { data, updateData } = useMyContext();
  const [openToast, setOpenToast] = useState<boolean>(false);

  function popup() {
    setOpenToast(true);
    setTimeout(() => {
      setOpenToast(false);
      updateData({ name: "", message: "" });
    }, 5000);
  }

  useEffect(popup, [data]);

  const popuptext = `${data.name} has been ${data.message}`;

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
