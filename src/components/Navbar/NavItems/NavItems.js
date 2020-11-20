import React from "react";
import styled from 'styled-components';

import NavItem from "./NavItem/NavItem";

const NavItemsStyled = styled.ul`
  list-style: none;
  display: flex;
  margin: 20px;
`;

const items = [
  { name: "Movies", url: "/movies" },
  { name: "TV Shows", url: "/tv" },
  { name: "People", url: "/people" },
  { name: "Login", url: "/login"}
];

const NavItems = (props) => {
  return (
    <NavItemsStyled>
      {items.map((item) => (
        <NavItem key={item.name} name={item.name} url={item.url} />
      ))}
    </NavItemsStyled>
  );
};

export default NavItems;
