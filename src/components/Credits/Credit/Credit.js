import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { apiImage } from "../../../api";
import userFemale from "../../../images/userFemale.png";
import userMale from "../../../images/userMale.png";

const CreditStyled = styled.div`
  a {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    text-decoration: none;
    color: black;
  }

  img {
    width: 100px;
    border-radius: 5px;
    border: 1px solid #eee;
    box-shadow: 1px 2px 5px #eee;
    margin-right: 20px;
  }

  .no-image {
    background-color: #ccc;
  }
`;

const Credit = (props) => {
  return (
    <CreditStyled>
      <NavLink to="/">
        <img
          className={props.profile_path ? "" : "no-image"}
          src={
            props.profile_path
              ? apiImage + props.profile_path
              : props.gender === 1
              ? userFemale
              : userMale
          }
          alt={props.name}
        />
        <div>
          <h3>{props.name}</h3>
          <p>{props.character ? props.character : props.job}</p>
        </div>
      </NavLink>
    </CreditStyled>
  );
};

export default Credit;
