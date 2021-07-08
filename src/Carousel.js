import React, { useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = (props) => {
  const { imgs } = props;

  const [currentImage, setCurrentImage] = useState(0);

  const handleRight = () => {
    if (currentImage === imgs.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const handleLeft = () => {
    if (currentImage === 0) {
      setCurrentImage(imgs.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ backgroundImage: `url(${imgs[currentImage]})` }}
      >
        <div className="left" onClick={handleLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="center"></div>
        <div className="right" onClick={handleRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
