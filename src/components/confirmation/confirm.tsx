import { ConfirmOverlay, Overlay } from "./confirm.styles";
import { ButtonContainer } from "../form/form.style";
import Button from "../buttons/button";
import { deleteData } from "../../core/api/api";
import { useMyContext } from "../../context/mycontext";
import { useNavigate } from "react-router-dom";

export interface confirmProps {
  id: number | undefined;
  name: string | undefined;
  confirm?: boolean;
}

export const Confirm: React.FC<confirmProps> = ({
  confirm,
  name,
  id,
}: confirmProps) => {
  const { updateData } = useMyContext();
  const navigate = useNavigate();

  function deleteEmployee() {
    if (id) {
      const deleteURL = `/employee/${id}`;
      deleteData(deleteURL).then(() =>
        updateData({ name: name, message: "has been deleted" })
      );
    }
  }

  // going back to details
  function goBack() {
    navigate(-1);
  }

  return (
    <Overlay>
      <ConfirmOverlay confirm={confirm}>
        <p>Are you sure you want to delete {name}</p>
        <ButtonContainer>
          <Button
            buttontype="regularButton"
            buttontext="Cancel"
            onSmash={goBack}
          />
          <Button
            buttontype="deleteButton"
            buttontext="Delete"
            buttonicon=""
            onSmash={deleteEmployee}
          />
        </ButtonContainer>
      </ConfirmOverlay>
    </Overlay>
  );
};
