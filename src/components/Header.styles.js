import styled from "styled-components";

const HeaderStyled = styled.nav`
  width: 75vw;
  flex: 10%;
  max-width: 100%;
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  padding-bottom: 15px;
  justify-content: center;
  align-items: center;
  font-family: "Cafe24SsurroundAir";
  font-size: 2.5rem;
  font-weight: 800;
  border-bottom: 1px solid gray;

  @media only screen and (max-width: 768px) {
    width: 100vw;
    margin: 0;
    margin-top: 20px;
  }

  @media only screen and (max-width: 480px) {
    width: 100vw;
    margin: 0;
    font-size: 2rem;
  }
`;

export default HeaderStyled;
