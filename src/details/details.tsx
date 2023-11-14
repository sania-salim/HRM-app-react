import Header from "../components/header/header.js";
import Button from "../components/buttons/button.js";
import { ButtonContainer, PageHeading } from "../components/form/form.style.js";
import { DetailsDivider, DetailsMain } from "./details.style.js";
import { detailsContent } from "../core/config/content.js";

function Details() {
  return (
    <>
      <Header />
      <PageHeading>{detailsContent.pageHeading}</PageHeading>
      <DetailsMain>
        <DetailsDivider>
          <img
            src="src/assets/Profile photo.png"
            alt="placeholder/profile image"
            className="ProfilePhoto"
          />
        </DetailsDivider>
        <DetailsDivider>
          <h3>{detailsContent.employeeName}</h3>
          <p>{detailsContent.employeeDesignation}</p>
          <div>
            <img src="src/assets/mail.svg" alt="" />
            <p>{detailsContent.employeeMail}</p>
          </div>
          <div>
            <img src="src/assets/phone number.svg" alt="" />
            <p>{detailsContent.employeePhoneNumber}</p>
          </div>

          <p>{detailsContent.employeeDOJ}</p>
          <p>{detailsContent.employeeDOB}</p>
          <div>
            <img src="src/assets/location.svg" alt="" />
            <p>{detailsContent.employeeLocation}</p>
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
