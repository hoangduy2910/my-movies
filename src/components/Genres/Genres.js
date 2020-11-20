import React from "react";
import styled from "styled-components";

import Genre from "./Genre/Genre";

const GenresStyled = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 30px 0;

  p {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;  

const Genres = (props) => {
  return (
    <GenresStyled>
      <p>Genres:&nbsp;&nbsp;</p>
      {props.genres.map((genre) => (
        <Genre key={genre.id} name={genre.name} />
      ))}
    </GenresStyled>
  );
};

export default Genres;
