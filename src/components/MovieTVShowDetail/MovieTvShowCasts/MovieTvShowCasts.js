import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Casts from "../../Casts/Casts";

const MovieTvShowCastsStyled = styled.div`
  width: 70%;
  margin: 40px auto;

  .movieTvShow__casts-header {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;

    h1 {
      margin-right: 10px;
    }

    a {
      text-decoration: none;
      font-size: 1.1rem;
      color: blue;
      border-bottom: 1px solid blue;
    }
  }
`;

const MovieTvShowCasts = (props) => {
  return (
    <MovieTvShowCastsStyled>
      <div className="movieTvShow__casts-header">
        <h1>Casts</h1>
        <NavLink to={`/${props.movieTvShowId}/credits/${props.query}`}>
          See more
        </NavLink>
      </div>
      <div className="movieTvShow__casts-content">
        <Casts casts={props.casts} />
      </div>
    </MovieTvShowCastsStyled>
  );
};

export default MovieTvShowCasts;
