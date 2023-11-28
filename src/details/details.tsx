import Header from "../components/header/header.js";
import Button from "../components/buttons/button.js";
import { ButtonContainer, PageHeading } from "../components/form/form.style.js";
import { DetailsDivider, DetailsMain } from "./details.style.js";
import { detailsContent } from "../core/config/content.js";
// import { employeeList } from "../core/config/constants.js";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../core/api/api.js";
import { iEmployee } from "../components/table/table.js";
import { useEffect, useState } from "react";

function Details() {
  const navigate = useNavigate();
  const [emp, setEmp] = useState<iEmployee>();
  console.log("Emp", emp);

  useEffect(getEmployee, []);

  function navigateToPage(id: number) {
    navigate(`/edit/${id}`);
  }

  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const path = url.pathname;
  const segments = path.split("/");
  const fetchID = Number(segments[segments.length - 1]);
  const empID = fetchID + 1;

  // let emp = employeeList[fetchID];

  // getEmployee();

  function getEmployee() {
    getData(`/employee/${empID}`)
      .then((response) => {
        setEmp(response.data.data);
      })
      .catch((err) => {
        console.log("error in getting table:", err);
      });
  }

  return (
    <>
      <Header />
      <PageHeading>{detailsContent.pageHeading}</PageHeading>
      <DetailsMain>
        <DetailsDivider className="skillchipcontainer">
          {emp?.skills.map((v) => (
            <div className="skillchip">{v?.skill}</div>
          ))}
        </DetailsDivider>
        <DetailsDivider>
          <img
            src="../../src/assets/Profile photo.png"
            alt="placeholder/profile image"
            className="ProfilePhoto"
          />
        </DetailsDivider>
        <DetailsDivider>
          <h3>{emp ? emp.firstName : null}</h3>
          <p>{emp ? emp.designation : null}</p>
          <div>
            <img src="../../src/assets/mail.svg" alt="" />
            <p>{emp ? emp.email : null}</p>
          </div>
          <div>
            <img src="../../src/assets/phone number.svg" alt="" />
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
            <img src="../../src/assets/location.svg" alt="" />
            <p>{detailsContent.employeeLocation}</p>
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
