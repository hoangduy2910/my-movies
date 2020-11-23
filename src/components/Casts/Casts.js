import React from "react";

import Slider from "../Slider/Slider";
import Cast from "./Cast/Cast";

const Casts = (props) => {
  return (
    <Slider slidesToShow={6}>
      {props.casts.slice(0, 10).map((cast) => (
        <Cast
          key={cast.id}
          id={cast.id}
          profile_path={cast.profile_path}
          name={cast.name}
          character={cast.character ? cast.character : cast.roles[0].character}
          gender={cast.gender}
        />
      ))}
    </Slider>
  );
};

export default Casts;
