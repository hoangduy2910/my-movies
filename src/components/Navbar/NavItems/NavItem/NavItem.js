import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavItemStyled = styled.li`
  margin: 0px 10px;
  padding: 10px;

  a {
    display: block;
    text-decoration: none; 
    color: white; 
  }

  &:hover {
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  &:hover a {
    color: black;
  }
`;

const NavItem = (props) => {
  return (
    <NavItemStyled>
      <NavLink to={props.url}>{props.name}</NavLink>
    </NavItemStyled>
  );
};

export default NavItem;
