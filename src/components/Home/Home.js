import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios";
import { apiKey } from "../../api";

import Section from "../Section/Section";
import Jumbotron from "../Jumbotron/Jumbotron";

const HomeStyled = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const Home = (props) => {
  const [isMovie, setIsMovie] = useState(true);
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios.get(`/movie/popular?api_key=${apiKey}`).then((res) => {
      setPopular(res.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get(`/trending/movie/day?api_key=${apiKey}`).then((res) => {
      setTrending(res.data.results);
    });
  }, []);

  // const switchToMoviesHandler = () => {
  //   setIsMovies(true);
  // };

  // const switchToTVShowsHandler = () => {
  //   setIsMovies(false);
  // };

  console.log("[Home]");

  return (
    <HomeStyled>
      <Jumbotron />
      <Section isMovie={isMovie} title="What's Popular" data={popular} />
      <Section isMovie={isMovie} title="Treding" data={trending} />
    </HomeStyled>
  );
};

export default Home;
