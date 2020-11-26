import React from "react";
import styled from "styled-components";

const PersonBiographyStyled = styled.div`
  flex-basis: 70%;
  margin-left: 50px;
  margin-top: 50px;

  div {
    margin-bottom: 20px;

    h2 {
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

const PersonBiography = (props) => {
  return (
    <PersonBiographyStyled>
      <div className="person__biography-name">
        <h1>{props.name}</h1>
      </div>
      <div className="person__biography-content">
        <h2>Biography</h2>
        <p>{props.biography}</p>
      </div>
    </PersonBiographyStyled>
  );
};

export default PersonBiography;
