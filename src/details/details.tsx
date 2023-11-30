import Header from "../components/header/header.js";
import Button from "../components/buttons/button.js";
import { ButtonContainer, PageHeading } from "../components/form/form.style.js";
import { DetailsDivider, DetailsMain } from "./details.style.js";
import { detailsContent } from "../core/config/content.js";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../core/api/api.js";
import { useEffect, useState } from "react";
import { empData } from "../context/mycontext.js";
import mailIcon from "../assets/mail.svg";
import phoneIcon from "../assets/phone number.svg";
import locationIcon from "../assets/location.svg";
import placeHolderImage from "../assets/Profile photo.png";

export interface moreDetails {
  photoId?: string | undefined;
  location?: string | undefined;
}

function Details() {
  const navigate = useNavigate();
  const [emp, setEmp] = useState<empData>();
  // const [moreDetails, setMoreDetails] = useState<moreDetails>();
  const [photo, setPhoto] = useState<string | undefined>();

  useEffect(() => {
    if (!emp) {
      console.log("fetching employee details");
      getEmployee();
    }
  }, []);

  console.log("rendering", emp);

  let extraFields: moreDetails = { location: "", photoId: "" };

  function navigateToPage(id: number) {
    navigate(`/edit/${id}`);
  }

  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const path = url.pathname;
  const segments = path.split("/");
  const fetchID = Number(segments[segments.length - 1]);
  const empID = fetchID;

  function getEmployee() {
    getData(`/employee/${empID}`)
      .then((response) => {
        setEmp(response.data.data);
      })
      .catch((err) => {
        console.log("error in getting table:", err);
      });
  }

  if (emp && emp.moreDetails && !photo) {
    console.log("inside if condition");
    try {
      extraFields = JSON.parse(emp.moreDetails);
    } catch {
      console.log("in catch block");
    } finally {
      if (extraFields.photoId) {
        setPhoto(extraFields.photoId);
      }
    }
  }

  return (
    <>
      <Header />
      <PageHeading>{detailsContent.pageHeading}</PageHeading>
      <DetailsMain>
        <DetailsDivider className="skillchipcontainer">
          {emp?.skills.map((v: any) => (
            <div className="skillchip">{v?.skill}</div>
          ))}
        </DetailsDivider>
        <DetailsDivider>
          <img
            src={photo ? photo : placeHolderImage}
            alt="placeholder/profile image"
            className="ProfilePhoto"
          />
        </DetailsDivider>
        <DetailsDivider>
          <h3>{emp ? emp.firstName : null}</h3>
          <p>{emp ? emp.designation : null}</p>
          <div>
            <img src={mailIcon} alt="" />
            <p>{emp ? emp.email : null}</p>
          </div>
          <div>
            <img src={phoneIcon} alt="" />
            {/* <p>{emp ? emp.phone : null}7895789468</p> */}
            <p>7895789468</p>
          </div>

          <p>
            {detailsContent.employeeDOJ}
            {emp ? emp.dateOfJoining : null}
          </p>
          <p>
            {detailsContent.employeeDOB}
            {emp ? emp.dob : null}
          </p>
          <div>
            <img src={locationIcon} alt="" />
            <p>{extraFields.location ? extraFields.location : "--"}</p>
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
            navigateToPage(empID);
          }}
        />
      </ButtonContainer>
    </>
  );
}

export default Details;
