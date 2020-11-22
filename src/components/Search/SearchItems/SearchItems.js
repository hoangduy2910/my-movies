import React from "react";
import styled from "styled-components";

import SearchItem from "./SearchItem/SearchItem";

const SearchItemsStyled = styled.div`
  margin-top: 50px;
`;

const SearchItems = (props) => {
  console.log("[SearchItems]");

  return (
    <SearchItemsStyled>
      {props.items.map((item) => (
        <SearchItem
          key={item.id}
          src={item.poster_path}
          title={item.title}
          date={item.release_date}
          overview={item.overview}
        />
      ))}
    </SearchItemsStyled>
  );
};

export default SearchItems;
