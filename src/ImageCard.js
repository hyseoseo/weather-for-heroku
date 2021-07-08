import React from "react";
//import { CardWrapper } from "./Card.styles";
import Carousel from "./Carousel";

const ImageCard = (props) => {
  const { images } = props;
  return (
    <div>
      <Carousel imgs={images} />
    </div>
  );
};

export default ImageCard;
