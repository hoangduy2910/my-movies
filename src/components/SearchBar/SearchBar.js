import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const SearchBarStyled = styled.div`
  margin-top: 50px;

  .search__form {
    width: 100%;
    position: relative;
  }

  .search__form-input {
    width: 100%;
    padding: 15px;
    border-radius: 20px;
    border: none;
    outline: none;
  }

  .search__form-btn {
    background-color: #ccc;
    color: black;
    padding: 15px 20px;
    border: none;
    border-radius: 20px;
    position: absolute;
    right: 0;
    outline: none;

    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
`;

const SearchBar = React.memo((props) => {
  const [keyword, setKeyword] = useState("");

  const searchInputHandler = (event) => {
    setKeyword(event.target.value);
  };

  const submitSearchHandler = (event) => {
    event.preventDefault();
    const path = `search?query=${keyword}`;
    props.history.push(path);
  }
  

  return (
    <SearchBarStyled>
      <form className="search__form" onSubmit={submitSearchHandler}>
        <input
          className="search__form-input"
          type="text"
          placeholder="Search for a movie, tv show, person, ..."
          onChange={(event) => searchInputHandler(event)}
          value={props.value}
        />
        <button className="search__form-btn">Search</button>
      </form>
    </SearchBarStyled>
  );
});

export default withRouter(SearchBar);
