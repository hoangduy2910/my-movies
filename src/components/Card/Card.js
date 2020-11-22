import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { apiImage } from "../../api";

const CardStyled = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    margin: 20px;
    text-decoration: none;
    color: black;
  }

  .card__image img {
    width: 100%;
    border-radius: 10px;
  }

  .card__content {
    margin-top: 10px;
  }

  .card__content h3 {
    font-size: 1.2rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Card = React.memo((props) => {
  console.log("[Card]");

  const path = props.isMovie ? `/movie/${props.id}` : `/tv/${props.id}`;

  return (
    <CardStyled>
      <NavLink className="card" to={path}>
        <div className="card__image">
          <img src={apiImage + props.src} alt={props.title} />
        </div>
        <div className="card__content">
          <h3>{props.title ? props.title : props.name}</h3>
          <p>{props.release_date ? props.release_date : props.first_air_date}</p>
        </div>
      </NavLink>
    </CardStyled>
  );
});

export default Card;
