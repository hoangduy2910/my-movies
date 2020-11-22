import React, { useMemo } from "react";

import Slider from "react-slick";
import Card from "../Card/Card";

const SliderWrapper = (props) => {
  console.log("[Slider]");
  
  const slider = useMemo(() => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings}>
        {props.content.data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            src={item.poster_path}
            title={item.title}
            name={item.name}
            release_date={item.release_date}
            first_air_date={item.first_air_date}
            isMovie={props.content.isMovie}
          />
        ))}
      </Slider>
    );
  }, [props.content.isMovie, props.content.data]);

  return slider;
};

export default SliderWrapper;
