import Header from "../components/header/header.js";
import Button from "../components/buttons/button.js";
import { ButtonContainer, PageHeading } from "../components/form/form.style.js";
import { DetailsDivider, DetailsMain } from "./details.style.js";
import { detailsContent } from "../core/config/content.js";
import { employeeList } from "../core/config/constants.js";
import { Link, useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();

  function navigateToPage(id: number) {
    navigate(`/edit/${id}`);
  }

  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const path = url.pathname;
  const segments = path.split("/");
  const fetchID = Number(segments[segments.length - 1]);

  let emp = employeeList[fetchID];

  return (
    <>
      <Header />
      <PageHeading>{detailsContent.pageHeading}</PageHeading>
      <DetailsMain>
        <DetailsDivider>
          <img
            src="../../src/assets/Profile photo.png"
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
        <Link to="/">
          <Button buttontype="regularButton" buttontext="Back" buttonicon="" />
        </Link>

        <Button
          buttontype="regularButton"
          buttontext="Edit"
          buttonicon=""
          onSmash={() => {
            navigateToPage(fetchID);
          }}
        />
      </ButtonContainer>
    </>
  );
}

export default Details;
