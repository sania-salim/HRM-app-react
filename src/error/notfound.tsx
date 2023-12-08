// ErrorPage.tsx
import React from "react";
import Button from "../components/buttons/button";
import { ButtonContainer } from "../components/form/form.style";
import { ErrorContainer } from "./error.style";
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <div>
        <h1>Oops! The page you requested was not found.</h1>
        <ButtonContainer>
          <Button
            buttontext="Back"
            buttontype="regularButton"
            onSmash={() => navigate(-1)}
          ></Button>
          <Button
            buttontext="Take me home"
            buttontype="regularButton"
            onSmash={() => navigate("/")}
          ></Button>
        </ButtonContainer>
      </div>
    </ErrorContainer>
  );
};

export default PageNotFound;
