// import { useState } from "react";
import { ToastOverlay } from "./popup.style.ts";

interface popupProps {
  actionType: "added" | "edited" | "deleted";
  name: string;
}

const Popup: React.FC<popupProps> = ({ actionType, name }: popupProps) => {
  // const [isOpen, setIsOpen] = useState(false);

  // function popup() {
  //   setIsOpen(!isOpen);
  // }

  const message = `${name} has been ${actionType}`;

  return (
    <ToastOverlay>
      <div>
        <p>{message}</p>
      </div>
    </ToastOverlay>
  );
};

export default Popup;
