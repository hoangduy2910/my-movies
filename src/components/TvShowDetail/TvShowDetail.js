import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios";
import { apiKey, apiImage } from "../../api";

import Spinner from "../Spinner/Spinner";
import Genres from "../Genres/Genres";

const TvShowDetailStyled = styled.div`
  display: flex;

  .tvShow__detail {
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

      &__overview,
      &__director {
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

const TvShowDetail = (props) => {
  const [tvShowDetail, setTvShowDetail] = useState(null);
  const [credits, setCredits] = useState(null);
  let directors = [];

  if (credits) {
    for (let c of credits.crew) {
      if (c.known_for_department === "Directing") {
        directors.push(c);
        break;
      }
    }
  }

  useEffect(() => {
    axios
      .get(`/tv/${props.match.params.id}/aggregate_credits?api_key=${apiKey}`)
      .then((res) => {
        setCredits(res.data);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    axios.get(`/tv/${props.match.params.id}?api_key=${apiKey}`).then((res) => {
      setTvShowDetail(res.data);
    });
  }, [props.match.params.id]);

  let tvShow = <Spinner />;

  if (tvShowDetail && credits) {
    console.log(directors);
    tvShow = (
      <TvShowDetailStyled>
        <div
          className="tvShow__detail"
          style={{
            backgroundImage: `url(${apiImage + tvShowDetail.backdrop_path})`,
          }}
        >
          <img
            className="tvShow__detail-image"
            src={apiImage + tvShowDetail.poster_path}
            alt={tvShowDetail.title}
          />
          <div className="tvShow__detail-content">
            <h2 className="tvShow__detail-content__title">
              {tvShowDetail.title}
            </h2>
            <div className="tvShow__detail-content__genres">
              <Genres genres={tvShowDetail.genres} />
            </div>
            <div className="tvShow__detail-content__overview">
              <h3>Overview</h3>
              <p>{tvShowDetail.overview}</p>
            </div>
            <div className="tvShow__detail-content__director">
              <h3>Directors</h3>
              {directors.map((dir) => (
                <p key={dir.id}>{dir.name}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="tvShow__cast"></div>
      </TvShowDetailStyled>
    );
  }

  return tvShow;
};

export default TvShowDetail;
