import React from "react";
import styled from "styled-components";

const PersonInfoStyled = styled.div`
  flex-basis: 30%;

  h2 {
    margin-bottom: 30px;
  }

  div {
    p {
      margin-bottom: 20px;
    }
  }
`;

const PersonInfo = (props) => {
  return (
    <PersonInfoStyled>
      <h2>Personal Info</h2>
      <div>
        <h3>Known For</h3>
        <p>{props.known_for_department}</p>

        <h3>Known Credits</h3>
        <p>{props.knownCredits}</p>

        <h3>Gender</h3>
        <p>{props.gender === 1 ? "Female" : "Male"}</p>

        <h3>Birthday</h3>
        <p>{props.birthday}</p>

        <h3>Place of Birth</h3>
        <p>{props.place_of_birth}</p>
      </div>
    </PersonInfoStyled>
  );
};

export default PersonInfo;
