import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "../../axios";
import { apiKey } from "../../api";

import Spinner from "../Spinner/Spinner";
import MovieTvShowInfo from "./MovieTvShowInfo/MovieTvShowInfo";
import MovieTvShowCasts from "./MovieTvShowCasts/MovieTvShowCasts";

const MovieTvShowDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieTvShowDetail = (props) => {
  const [dataDetail, setDataDetail] = useState({ data: null, credits: null });
  const mediaType = props.location.search.split("=")[1];

  useEffect(() => {
    let pro1, pro2 = null;

    switch (mediaType) {
      case "movies":
        pro1 = axios.get(
          `/movie/${props.match.params.id}?api_key=${apiKey}`
        );

        pro2 = axios.get(
          `/movie/${props.match.params.id}/credits?api_key=${apiKey}`
        );
        Promise.all([pro1, pro2]).then((res) => {
          setDataDetail({ data: res[0].data, credits: res[1].data });
        });
        break;
      case "tvShows":
        pro1 = axios.get(
          `/tv/${props.match.params.id}?api_key=${apiKey}`
        );
        pro2 = axios.get(
          `/tv/${props.match.params.id}/aggregate_credits?api_key=${apiKey}`
        );
        Promise.all([pro1, pro2]).then((res) => {
          setDataDetail({ data: res[0].data, credits: res[1].data });
        });
        break;
      default:
        break;
    }
  }, [props.match.params.id, mediaType]);

  let movieTvShow = <Spinner />;

  if (dataDetail.data && dataDetail.credits) {
    movieTvShow = (
      <MovieTvShowDetailStyled>
        <MovieTvShowInfo
          backdrop_path={dataDetail.data.backdrop_path}
          poster_path={dataDetail.data.poster_path}
          title={
            dataDetail.data.title
              ? dataDetail.data.title
              : dataDetail.data.name
          }
          genres={dataDetail.data.genres}
          overview={dataDetail.data.overview}
        />
        <MovieTvShowCasts
          movieTvShowId={props.match.params.id}
          query={props.location.search}
          casts={dataDetail.credits.cast}
        />
      </MovieTvShowDetailStyled>
    );
  }

  console.log(dataDetail);

  return movieTvShow;
};

export default MovieTvShowDetail;
