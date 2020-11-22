import React from "react";

import Slider from "../Slider/Slider";
import Cast from "./Cast/Cast";

const Casts = (props) => {
  return (
    <Slider>
      {props.casts.map((cast) => (
        <Cast
          key={cast.id}
          id={cast.id}
          profile_path={cast.profile_path}
          name={cast.name}
          character={cast.character}
          gender={cast.gender}
        />
      ))}
    </Slider>
  );
};

export default Casts;
