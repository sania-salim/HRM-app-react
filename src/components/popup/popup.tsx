import { ToastOverlay } from "./popup.style.ts";
import { popupMessage } from "../../core/config/content.ts";

const message = popupMessage.editPopupMessage;

function Popup() {
  return (
    <ToastOverlay>
      <div>
        <p>{message}</p>
      </div>
    </ToastOverlay>
  );
}

export default Popup;
