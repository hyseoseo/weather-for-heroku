import React, { useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarouselStyled from "./Carousel.styles";

const Carousel = (props) => {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const handleRight = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const handleLeft = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <CarouselStyled>
      <div
        className="carousel-inner"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="left" onClick={handleLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="center"></div>
        <div className="right" onClick={handleRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </CarouselStyled>
  );
};

export default Carousel;
