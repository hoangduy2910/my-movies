import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import axios from "../../axios";
import { apiKey } from "../../api";

import SearchBar from "../SearchBar/SearchBar";
import SearchItems from "./SearchItems/SearchItems";
import Spinner from "../Spinner/Spinner";

const SearchStyled = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const Search = (props) => {
  const keyword = props.location.search.split("=")[1];
  const [searchItems, setSearhItems] = useState([]);

  useEffect(() => {
    axios
      .get(`/search/movie?api_key=${apiKey}&query=${keyword}`)
      .then((res) => {
        setSearhItems(res.data.results);
      });
  }, [keyword]);

  let search = <Spinner />;

  if (searchItems.length !== 0) {
    search = (
      <SearchStyled>
        <SearchBar value={keyword} isBorder={true} />
        <SearchItems items={searchItems} />
      </SearchStyled>
    );
  }

  return search;
};

export default withRouter(Search);
