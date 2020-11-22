import React, { useMemo } from "react";

import Slider from "react-slick";

const SliderWrapper = (props) => {
  console.log("[Slider]");
  
  const slider = useMemo(() => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings}>
        {props.children}
      </Slider>
    );
  }, [props.children]);

  return slider;
};

export default SliderWrapper;
