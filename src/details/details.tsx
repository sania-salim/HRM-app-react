import Header from "../components/header/header.js";
import Button from "../components/buttons/button.js";
import { ButtonContainer, PageHeading } from "../components/form/form.style.js";
import { DetailsDivider, DetailsMain } from "./details.style.js";

function Details() {
  return (
    <>
      <Header />
      <PageHeading>Employee details</PageHeading>
      <DetailsMain>
        <DetailsDivider>
          <img
            src="src/assets/Profile photo.png"
            alt="placeholder/profile image"
            className="ProfilePhoto"
          />
        </DetailsDivider>
        <DetailsDivider>
          <h3>Thomas</h3>
          <p>Serial chaser</p>
          <div>
            <img src="src/assets/mail.svg" alt="" />
            <p>tom@catchmouse.com</p>
          </div>
          <div>
            <img src="src/assets/phone number.svg" alt="" />
            <p>7895789468</p>
          </div>

          <p>Date of joining:14th July 2023</p>
          <p>Date of birth:11th May 2001</p>
          <div>
            <img src="src/assets/location.svg" alt="" />
            <p>Ganga building,Trivandrum</p>
          </div>
        </DetailsDivider>
      </DetailsMain>
      <ButtonContainer>
        <Button buttontype="regularButton" buttontext="Back" buttonicon="" />
        <Button buttontype="regularButton" buttontext="Edit" buttonicon="" />
      </ButtonContainer>
    </>
  );
}

export default Details;
