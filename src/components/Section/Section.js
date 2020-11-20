import React from "react";
import styled from "styled-components";

import Slider from "../Slider/Slider";
import Switch from "../Switch/Switch";

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
  return (
    <SectionStyled>
      <div className="section__header">
        <h3 className="section__header-title">{props.title}</h3>
        <Switch
          isMovie={props.isMovie}
        />
      </div>
      <Slider isMovie={props.isMovie} data={props.data} />
    </SectionStyled>
  );
});

export default Section;
