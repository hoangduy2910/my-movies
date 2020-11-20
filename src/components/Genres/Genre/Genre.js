import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const GenreStyled = styled.li`
  margin-right: 10px;


  &:hover {
    border-bottom: 2px solid white;
  }

  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: white;
  }
`;

const Genre = (props) => {
  return (
    <GenreStyled>
      <NavLink to="#">{props.name}</NavLink>
    </GenreStyled>
  );
};

export default Genre;
