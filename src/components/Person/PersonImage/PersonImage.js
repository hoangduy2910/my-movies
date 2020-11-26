import React from "react";
import styled from "styled-components";

import { apiImage } from "../../../api";

const PersonImageStyled = styled.div`
  flex-basis: 30%;
  width: 80%;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const PersonImage = (props) => {
  return (
    <PersonImageStyled>
      <img src={apiImage + props.profile_path} alt={props.name} />
    </PersonImageStyled>
  );
};

export default PersonImage;
