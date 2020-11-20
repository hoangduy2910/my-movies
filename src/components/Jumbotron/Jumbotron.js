import React from "react";
import styled from 'styled-components';

import SearchBar from "../SearchBar/SearchBar";

const JumbotronStyled = styled.div`
  height: 300px;
  width: 100%;
  background-color: #eee;
  padding: 50px 20px;

  h2 {
    font-size: 3rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const Jumbotron = (props) => {
  return (
    <JumbotronStyled>
      <h2>Wellcom.</h2>
      <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>

      <SearchBar />
    </JumbotronStyled>
  );
};

export default Jumbotron;
