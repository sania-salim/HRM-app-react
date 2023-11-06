import { ToastOverlay } from "./popup.style.ts";

const message = "Rahul has been edited.";
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
