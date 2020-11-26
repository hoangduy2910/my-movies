import React from "react";
import styled from "styled-components";

import { apiImage } from "../../../api";

import Genres from "../../Genres/Genres";

const MovieTvShowInfoStyled = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding: 50px 100px;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;

  .movieTvShow__info-image {
    width: 20%;
    position: relative;
  }

  .movieTvShow__info-content {
    margin-left: 30px;
    position: relative;

    &__title {
      font-size: 2.2rem;
      font-weight: 900;
    }

    &__overview {
      margin-bottom: 30px;

      h3 {
        font-size: 1.5rem;
        font-weight: 900;
        margin-bottom: 5px;
      }

      p {
        font-size: 1.2rem;
      }
    }

    &__director {
      margin-bottom: 30px;

      h3 {
        font-size: 1.5rem;
        font-weight: 900;
        margin-bottom: 5px;
      }

      a {
        font-size: 1.2rem;
        text-decoration: none;
        color: white;
      }

      a:hover {
        border-bottom: 2px solid white;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.65);
  }
`;

const MovieTvShowInfo = (props) => {
  return (
    <MovieTvShowInfoStyled style={{backgroundImage: `url(${apiImage + props.backdrop_path})`}}>
      <img
        className="movieTvShow__info-image"
        src={apiImage + props.poster_path}
        alt={props.title}
      />
      <div className="movieTvShow__info-content">
        <h2 className="movieTvShow__info-content__title">
          {props.title}
        </h2>
        <div className="movieTvShow__info-content__genres">
          <Genres genres={props.genres} />
        </div>
        <div className="movieTvShow__info-content__overview">
          <h3>Overview</h3>
          <p>{props.overview}</p>
        </div>
      </div>
    </MovieTvShowInfoStyled>
  );
};

export default MovieTvShowInfo;
