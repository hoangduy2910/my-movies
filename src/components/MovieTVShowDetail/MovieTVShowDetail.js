import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "../../axios";
import { apiKey, apiImage } from "../../api";

import Spinner from "../Spinner/Spinner";
import Genres from "../Genres/Genres";
import Casts from "../Casts/Casts";

const MovieTvShowDetailStyled = styled.div`
  display: flex;
  flex-direction: column;

  .movieTvShow__detail {
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

  .movieTvShow__cast {
    width: 70%;
    margin: 40px auto;

    &-header {
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
  }
`;

const MovieTvShowDetail = (props) => {
  const [movieTvShowDetail, setMovieTvShowDetail] = useState(null);
  const [credits, setCredits] = useState(null);
  const mediaType = props.location.search.split("=")[1];

  // let director = null;

  // if (credits) {
  //   for (let c of credits.crew) {
  //     if (c.job === "Director") {
  //       director = c;
  //       break;
  //     }
  //   }
  // }

  useEffect(() => {
    switch (mediaType) {
      case "movies":
        axios
          .get(`/movie/${props.match.params.id}?api_key=${apiKey}`)
          .then((res) => {
            setMovieTvShowDetail(res.data);
          });
        axios
          .get(`/movie/${props.match.params.id}/credits?api_key=${apiKey}`)
          .then((res) => {
            setCredits(res.data);
          });
        break;
      case "tvShows":
        axios
          .get(`/tv/${props.match.params.id}?api_key=${apiKey}`)
          .then((res) => {
            setMovieTvShowDetail(res.data);
          });
        axios
          .get(
            `/tv/${props.match.params.id}/aggregate_credits?api_key=${apiKey}`
          )
          .then((res) => {
            setCredits(res.data);
          });
        break;
      default:
        break;
    }
  }, [props.match.params.id, mediaType]);

  let movieTvShow = <Spinner />;

  if (movieTvShowDetail && credits) {
    movieTvShow = (
      <MovieTvShowDetailStyled>
        <div
          className="movieTvShow__detail"
          style={{
            backgroundImage: `url(${apiImage + movieTvShowDetail.backdrop_path})`,
          }}
        >
          <img
            className="movieTvShow__detail-image"
            src={apiImage + movieTvShowDetail.poster_path}
            alt={movieTvShowDetail.title ? movieTvShowDetail.title : movieTvShowDetail.name}
          />
          <div className="movieTvShow__detail-content">
            <h2 className="movieTvShow__detail-content__title">
              {movieTvShowDetail.title ? movieTvShowDetail.title : movieTvShowDetail.name}
            </h2>
            <div className="movieTvShow__detail-content__genres">
              <Genres genres={movieTvShowDetail.genres} />
            </div>
            <div className="movieTvShow__detail-content__overview">
              <h3>Overview</h3>
              <p>{movieTvShowDetail.overview}</p>
            </div>
            {/* <div className="movieTvShow__detail-content__director">
              <h3>Director</h3>
              <NavLink to={`/person/${director.id}`}>{director.name}</NavLink>
            </div> */}
          </div>
        </div>
        <div className="movieTvShow__cast">
          <div className="movieTvShow__cast-header">
            <h1>Casts</h1>
            <NavLink to={`/${props.match.params.id}/credits/${props.location.search}`}>See more</NavLink>
          </div>
          <div className="movieTvShow__cast-content">
            <Casts casts={credits.cast} />
          </div>
        </div>
      </MovieTvShowDetailStyled>
    );
  }

  return movieTvShow;
};

export default MovieTvShowDetail;
