import React from "react";
import styled from 'styled-components';

const SwitchStyled = styled.div`
  display: flex;

  div {
    color: black;
    font-size: 1.2rem;
    padding: 7px 10px;
    border-radius: 15px;
  }

  div:hover {
    cursor: pointer;
  }
`;

const Switch = (props) => {
  console.log("[Switch]");
  return (
    <SwitchStyled>
      <div className="switch__movies" onClick={props.switchToMovies}>Movies</div>
      <div className="switch__tv-shows" onClick={props.switchToTVShows}>Tv Shows</div>
    </SwitchStyled>
  );
};

export default Switch;
