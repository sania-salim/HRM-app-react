// ErrorPage.tsx
import React from "react";
import Button from "../components/buttons/button";
import { ButtonContainer } from "../components/form/form.style";
import { ErrorContainer } from "./error.style";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <div>
        <h1>
          Oops! Something went
          <i>
            <small>ever so slightly </small>
          </i>
          wrong.
        </h1>
        <p>{error.message}</p>
        <p>
          Maybe it's a sign to stop looking at tables.
          <br /> Take a break or try again later.
        </p>
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

export default ErrorPage;
