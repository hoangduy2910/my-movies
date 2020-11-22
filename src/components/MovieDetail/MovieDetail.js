import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "../../axios";
import { apiKey, apiImage } from "../../api";

import Spinner from "../Spinner/Spinner";
import Genres from "../Genres/Genres";

const MovieDetailStyled = styled.div`
  display: flex;

  .movie__detail {
    display: flex;
    width: 100%;
    position: relative;
    padding: 50px 100px;
    color: white;
    background-repeat: no-repeat;
    background-size: cover;

    &-image {
      width: 20%;
      position: relative;
    }

    &-content {
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
  }
`;

const MovieDetail = (props) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [credits, setCredits] = useState(null);
  let director = null;

  if (credits) {
    for (let c of credits.crew) {
      if (c.job === "Director") {
        director = c;
        break;
      }
    }
  }

  useEffect(() => {
    axios
      .get(`/movie/${props.match.params.id}/credits?api_key=${apiKey}`)
      .then((res) => {
        setCredits(res.data);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    axios
      .get(`/movie/${props.match.params.id}?api_key=${apiKey}`)
      .then((res) => {
        setMovieDetail(res.data);
      });
  }, [props.match.params.id]);

  let movie = <Spinner />;

  if (movieDetail && credits) {
    movie = (
      <MovieDetailStyled>
        <div
          className="movie__detail"
          style={{
            backgroundImage: `url(${apiImage + movieDetail.backdrop_path})`,
          }}
        >
          <img
            className="movie__detail-image"
            src={apiImage + movieDetail.poster_path}
            alt={movieDetail.title}
          />
          <div className="movie__detail-content">
            <h2 className="movie__detail-content__title">
              {movieDetail.title}
            </h2>
            <div className="movie__detail-content__genres">
              <Genres genres={movieDetail.genres} />
            </div>
            <div className="movie__detail-content__overview">
              <h3>Overview</h3>
              <p>{movieDetail.overview}</p>
            </div>
            <div className="movie__detail-content__director">
              <h3>Director</h3>
              <NavLink to={`/person/${director.id}`} >{director.name}</NavLink>
            </div>
          </div>
        </div>
        <div className="movie__cast"></div>
      </MovieDetailStyled>
    );
  }

  return movie;
};

export default MovieDetail;
