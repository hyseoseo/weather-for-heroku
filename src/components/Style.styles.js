import styled from "styled-components";

const StyleStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 20px 0;
  margin-top: 25px;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-family: "Cafe24SsurroundAir";
  font-weight: 400;
  color: #333;
  animation: fadein 2s;

  .style-keywords {
    margin-top: 10px;
    display: flex;
    flex: 1 0 auto;
    flex-flow: row nowrap;
    width: 65vw;
    max-width: 100%;
    justify-content: space-around;
    align-items: center;
    color: #333;
  }

  .style-keyword-button {
    margin: 0;
    border-radius: 8px;
    color: #333;
    font-size: 1.5rem;
    font-family: "Cafe24SsurroundAir";
    font-weight: 500;
    text-justify: center;
    width: 185px;
    height: 50px;
  }

  .style-keyword-button:active,
  .style-keyword-button:hover,
  .style-keyword-button:focus {
    margin: 0;
    border-radius: 8px;
    color: darkturquoise;
  }

  @media only screen and (max-width: 768px) {
    .style-kewords {
      width: 80vw;
    }
  }

  @media only screen and (max-width: 480px) {
    .style-kewords {
      width: 80vw;
    }

    .style-keyword-button {
      margin: 0;
      border-radius: 4px;
      color: #333;
      font-size: 1.2rem;
      font-family: 'Cafe24SsurroundAir';
      font-weight: 500;
      width: 100px;
      height: 50px;
    }
    
    .style-keyword-button:active, 
    .style-keyword-button:hover, 
    .style-keyword-button:focus {
      margin: 0;
      color: darkturquoise;
    }
`;

export default StyleStyled;
