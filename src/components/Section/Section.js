import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios";
import { apiKey } from "../../api";

import Slider from "../Slider/Slider";
import Switch from "../Switch/Switch";
import Spinner from "../Spinner/Spinner";
import Card from "../Card/Card";

const SectionStyled = styled.div`
  margin: 30px;
  margin-top: 50px;

  .section__header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    &-title {
      font-size: 1.8rem;
      margin-right: 50px;
    }
  }
`;

const Section = React.memo((props) => {
  const [content, setContent] = useState({ isMovie: true, data: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer = null;

    if (props.isPopularMovies) {
      setLoading(true);

      timer = setTimeout(() => {
        axios.get(`/movie/popular?api_key=${apiKey}`).then((res) => {
          setContent({ isMovie: true, data: res.data.results });
          setLoading(false);
        });
      }, 500);
    } else if (props.isPopularMovies === false) {
      setLoading(true);

      timer = setTimeout(() => {
        axios.get(`/tv/popular?api_key=${apiKey}`).then((res) => {
          setContent({ isMovie: false, data: res.data.results });
          setLoading(false);
        });
      }, 500);
    } else if (props.isTrendingMovies) {
      setLoading(true);

      timer = setTimeout(() => {
        axios.get(`/trending/movie/day?api_key=${apiKey}`).then((res) => {
          setContent({ isMovie: true, data: res.data.results });
          setLoading(false);
        });
      }, 500);
    } else if (props.isTrendingMovies === false) {
      setLoading(true);

      timer = setTimeout(() => {
        axios.get(`/trending/tv/day?api_key=${apiKey}`).then((res) => {
          setContent({ isMovie: false, data: res.data.results });
          setLoading(false);
        });
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [props.isPopularMovies, props.isTrendingMovies]);

  return (
    <SectionStyled>
      <div className="section__header">
        <h3 className="section__header-title">{props.title}</h3>
        <Switch
          switchToMovies={props.switchToMovies}
          switchToTVShows={props.switchToTVShows}
        />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Slider slidesToShow={5}>
          {content.data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              src={item.poster_path}
              title={item.title}
              name={item.name}
              release_date={item.release_date}
              first_air_date={item.first_air_date}
              isMovie={content.isMovie}
            />
          ))}
        </Slider>
      )}
    </SectionStyled>
  );
});

export default Section;
