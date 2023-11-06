import Header from "../components/header/header.js";
import Button from "../components/buttons/button.js";
import { ButtonContainer, PageHeading } from "../components/form/form.style.js";

function Details() {
  return (
    <>
      <Header />
      <PageHeading>Employee details</PageHeading>
      <h3>Thomas</h3>
      <p>Serial chaser</p>
      <p>tom@catchmouse.com</p>
      <p>7895789468</p>
      <h3>Date of joining:</h3>
      <h3>Date of birth:</h3>
      <p>Ganga building, tvm</p>
      <ButtonContainer>
        <Button buttontype="regularButton" buttontext="Back" buttonicon="" />
        <Button buttontype="regularButton" buttontext="Edit" buttonicon="" />
      </ButtonContainer>
    </>
  );
}

export default Details;
