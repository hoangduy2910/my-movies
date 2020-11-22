import React from "react";
import styled from "styled-components";
import { apiImage } from "../../../../api";
import noImage from "../../../../images/noImage.svg";

const SearchItemStyled = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 30px;

  .search-item__img {
    display: inline-block;
  }

  .search-item__img {
    width: 12%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .search-item__content {
    padding: 30px 20px;
  }

  .search-item__content-title {
    margin-bottom: 10px;
  }

  .search-item__content-release-date {
    color: #999;
    margin-bottom: 10px;
  }
`;

const SearchItem = (props) => {
  let image = noImage; 
  if (props.src) {
    image = apiImage + props.src;
  }

  console.log("[SearchItem]");

  return (
    <SearchItemStyled>
      <img
        className="search-item__img"
        src={image}
        alt={props.title}
      />
      <div className="search-item__content">
        <h3 className="search-item__content-title">{props.title}</h3>
        <p className="search-item__content-release-date">{props.date}</p>
        <p className="search-item__content-overview">{props.overview}</p>
      </div>
    </SearchItemStyled>
  );
};

export default SearchItem;
