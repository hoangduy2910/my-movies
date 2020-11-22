import React, { useState, useCallback } from "react";
import styled from "styled-components";

import Section from "../Section/Section";
import Jumbotron from "../Jumbotron/Jumbotron";

const HomeStyled = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const Home = React.memo((props) => {
  const [isPopularMovies, setIsPopularMovies] = useState(true);
  const [isTrendingMovies, setIsTrendingMovies] = useState(true);

  const switchPopularMoviesHandler = useCallback(() => {
    setIsPopularMovies(true);
  }, []);

  const switchPopularTVShowsHandler = useCallback(() => {
    setIsPopularMovies(false);
  }, []);

  const switchTrendingMoviesHandler = useCallback(() => {
    setIsTrendingMovies(true);
  }, []);

  const switchTrendingTVShowsHandler = useCallback(() => {
    setIsTrendingMovies(false);
  }, []);

  console.log("[Home]");

  return (
    <HomeStyled>
      <Jumbotron />
      <Section
        isPopularMovies={isPopularMovies}
        title="What's Popular"
        switchToMovies={switchPopularMoviesHandler}
        switchToTVShows={switchPopularTVShowsHandler}
      />
      <Section
        isTrendingMovies={isTrendingMovies}
        title="Trending"
        switchToMovies={switchTrendingMoviesHandler}
        switchToTVShows={switchTrendingTVShowsHandler}
      />
    </HomeStyled>
  );
});

export default Home;
