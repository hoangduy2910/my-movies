import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { apiImage } from "../../../api";
import userMale from "../../../images/userMale.png";
import userFemale from "../../../images/userFemale.png";

const CastStyled = styled.div`
  border: 1px solid #ccc;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 1px 2px 5px #eee;
  margin: 10px;

  .cast {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;

    &__no-image {
      background-color: #eee;
    }

    &__image img {
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom: 1px solid #ccc;
    }

    &__content {
      margin: 10px;
      height: 80px;
    }

    &__content h3 {
      font-size: 1.2rem;
    }
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
        <div
          className={
            props.profile_path ? "cast__image" : "cast__image cast__no-image"
          }
        >
          <img src={imagePath} alt={props.name} />
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
