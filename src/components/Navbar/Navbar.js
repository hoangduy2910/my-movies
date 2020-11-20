import React from "react";
import styled from 'styled-components';

import NavItems from "./NavItems/NavItems";
import NavIcon from "./NavIcon/NavIcon";

const NavbarStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  justify-content: space-between;
  height: 70px;
  background-color: black;
  color: white;
`;

const NavBar = React.memo((props) => {
  return (
    <NavbarStyled>
      <NavIcon />
      <NavItems />
    </NavbarStyled>
  );
});

export default NavBar;
