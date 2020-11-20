import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const IconStyled = styled.div`
  font-size: 2rem;
  margin-left: 20px;

  a {
    text-decoration: none;
    color: white;
  }
`;

const NavIcon = (props) => {
  return (
    <IconStyled>
      <NavLink to="/">Movies App</NavLink>
    </IconStyled>
  );
};

export default NavIcon;
