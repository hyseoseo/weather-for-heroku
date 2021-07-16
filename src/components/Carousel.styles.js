import styled from "styled-components";

const CarouselStyled = styled.div`
  position: relative;
  height: 70vh;
  width: 70vw;
  max-width: 640px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;

  .carousel-inner {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    margin: 0;
    padding: 0;
  }

  .carousel-inner .left {
    flex: 8%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
  }

  .carousel-inner .center {
    flex: 84%;
    height: 100%;
  }

  .carousel-inner .right {
    flex: 8%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    width: 85vw;
  }

  @media only screen and (max-width: 480px) {
    margin: 0 auto;
    width: 85vw;
  }
`;

export default CarouselStyled;
