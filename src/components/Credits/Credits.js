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
    background-image: linear-gradient(to right, black, #999);
  }

  .credits__header > div {
    display: flex;
    width: 70%;
    align-items: center;
    margin: 10px auto;

    img {
      width: 10%;
      margin: 20px;
      border-radius: 5px;
    }

    div {
      h1 {
        color: white;
        font-size: 2.2rem;
        font-weight: 800;
      }

      div {
        color: #ccc;
        text-decoration: none;
        font-size: 1.2rem;
        border-bottom: 1px solid #ccc;

        i {
          font-size: 1rem;
        }
      }

      div:hover {
        cursor: pointer;
      }
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
        const promise1 = axios.get(
          `/movie/${props.match.params.id}?api_key=${apiKey}`
        );

        const promise2 = axios.get(
          `/movie/${props.match.params.id}/credits?api_key=${apiKey}`
        );
        Promise.all([promise1, promise2]).then((res) => {
          // const movie = res[0].data;
          // const credits = res[1].data;
          // console.log(movie, credits);
          setData(res[0].data);
          setCreditsData(res[1].data);
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

  if (creditsData.length !== 0 && data.length !== 0) {
    credits = (
      <CreditsStyled className="credits">
        <div className="credits__header">
          <div>
            <img src={apiImage + data.poster_path} alt={data.title} />
            <div>
              <h1>{data.title}</h1>
              <div onClick={() => props.history.goBack()}>
                <i className="fas fa-arrow-left"></i> Back to main
              </div>
            </div>
          </div>
        </div>
        <div className="credits__content">
          <div className="credits__content-casts">
            <h2>Casts</h2>
            {creditsData.cast.map((c, idx) => (
              <Credit
                key={idx}
                id={c.id}
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
                id={c.id}
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

  console.log(creditsData);

  return credits;
};

export default Credits;
