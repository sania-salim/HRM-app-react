import { ConfirmOverlay } from "./confirm.styles";
import { ButtonContainer } from "../form/form.style";
import Button from "../buttons/button";

export interface confirmProps {
  name: string;
  confirm?: boolean;
}

export const Confirm: React.FC<confirmProps> = ({
  confirm,
  name,
}: confirmProps) => {
  console.log("im inside this confirm", confirm);

  return (
    <ConfirmOverlay confirm={confirm}>
      <p>Are you sure you want to delete{name}</p>
      <ButtonContainer>
        <Button buttontype="regularButton" buttontext="Cancel" />
        <Button
          buttontype="deleteButton"
          buttontext="Delete"
          buttonicon=""
          // onSmash={(fetchID) => deleteEmployee(fetchID)}
        />
      </ButtonContainer>
    </ConfirmOverlay>
  );
};
