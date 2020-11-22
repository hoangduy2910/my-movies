import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { apiImage } from "../../../api";
import userMale from "../../../images/userMale.svg";
import userFemale from "../../../images/userFemale.svg";

const CastStyled = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 1px 2px 5px #eee;
  margin: 20px;

  .cast {
    display: flex;
    width: 100%;
    flex-direction: column;
    text-decoration: none;
    color: black;
  }

  .cast__image {
   
  }

  .cast__image img {
    width: 100%;
    border-radius: 10px;
  }

  .cast__content {
    margin: 10px;
  }

  .cast__content h3 {
    font-size: 1.2rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Cast = (props) => {
  let imagePath = apiImage + props.profile_path;

  if (!props.profile_path) {
    imagePath = props.gender === 1 ? userFemale : userMale; 
  }

  return (
    <CastStyled>
      <NavLink className="cast" to="/">
        <div className="cast__image">
          <img className={props.profile_path ? "" : "cast__image-no-cast"} src={imagePath} alt={props.name} />
        </div>
        <div className="cast__content">
          <h3>{props.name}</h3>
          <p>{props.character}</p>
        </div>
      </NavLink>
    </CastStyled>
  );
};

export default Cast;
