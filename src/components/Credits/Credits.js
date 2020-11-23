import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "../../axios";
import { apiKey, apiImage } from "../../api";

import Spinner from "../Spinner/Spinner";
import Credit from "./Credit/Credit";

const CreditsStyled = styled.div`
  display: flex;
  flex-direction: column;

  .credits__header {
    background-image: linear-gradient(to right, #999, black);
  }

  .credits__header div {
    display: flex;
    width: 70%;
    align-items: center;
    margin: 10px auto;

    img {
      width: 10%;
      margin: 20px;
      border-radius: 5px;
    }

    h1 {
      color: white;
      font-size: 2rem;
      font-weight: 800;
    }

    h1:hover {
      cursor: pointer;
      border-bottom: 1px solid white;
    }
  }

  .credits__content {
    width: 70%;
    margin: 20px auto;
    display: grid;
    grid-template-columns: auto auto;

    &-casts > h2,
    &-crews > h2 {
      margin-bottom: 50px;
    }
  }
`;

const Credits = (props) => {
  const [data, setData] = useState([]);
  const [creditsData, setCreditsData] = useState([]);
  const mediaType = props.location.search.split("=")[1];

  useEffect(() => {
    switch (mediaType) {
      case "movies":
        axios
          .get(`/movie/${props.match.params.id}?api_key=${apiKey}`)
          .then((res) => {
            setData(res.data);
          });
        axios
          .get(`/movie/${props.match.params.id}/credits?api_key=${apiKey}`)
          .then((res) => {
            setCreditsData(res.data);
          });
        break;
      case "tvShows":
        axios
          .get(`/tv/${props.match.params.id}?api_key=${apiKey}`)
          .then((res) => {
            setData(res.data);
          });
        axios
          .get(
            `/tv/${props.match.params.id}/aggregate_credits?api_key=${apiKey}`
          )
          .then((res) => {
            setCreditsData(res.data);
          });
        break;
      default:
        break;
    }
  }, [props.match.params.id, mediaType]);

  let credits = <Spinner />;

  if (creditsData.length !== 0) {
    credits = (
      <CreditsStyled className="credits">
        <div className="credits__header">
          <div>
            <img src={apiImage + data.poster_path} alt={data.title} />
            <h1 onClick={() => props.history.goBack()}>{data.title}</h1>
          </div>
        </div>
        <div className="credits__content">
          <div className="credits__content-casts">
            <h2>Casts</h2>
            {creditsData.cast.map((c, idx) => (
              <Credit
                key={idx}
                profile_path={c.profile_path}
                gender={c.gender}
                name={c.name}
                character={c.character}
              />
            ))}
          </div>
          <div className="credits__content-crews">
            <h2>Crews</h2>
            {creditsData.crew.map((c, idx) => (
              <Credit
                key={idx}
                profile_path={c.profile_path}
                gender={c.gender}
                name={c.name}
                job={c.job}
              />
            ))}
          </div>
        </div>
      </CreditsStyled>
    );
  }

  return credits;
};

export default Credits;
