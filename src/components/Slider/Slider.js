import React from "react";

import Slider from "react-slick";
import Card from "../Card/Card";

const SliderWrapper = React.memo((props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {props.data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          src={item.poster_path}
          title={item.title}
          date={item.release_date}
          isMovie={props.isMovie}
        />
      ))}
    </Slider>
  );
});

export default SliderWrapper;
