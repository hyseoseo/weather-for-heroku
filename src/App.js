import React from "react";
import resetCss from "reset-css";
import { createGlobalStyle } from "styled-components";

import MainContainer from "./components/MainContainer";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
${resetCss}
@import url(//fonts.googleapis.com/earlyaccess/nanummyeongjo.css);
@font-face {
  font-family: 'SDSamliphopangche_Outline';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Cafe24SsurroundAir';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24SsurroundAir.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  width: 100%;
  height: 100%;
  letter-spacing: -0.3px;
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
  background-color: #e1e1e1;
  color: #333;
}

ul, ol {
  list-style: none;
}

a {
  border: none;
  text-decoration: none;
  cursor: pointer;
}

a:visited {
  color: #555555;
}

button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}

#root {
  display: flex;
  flex-flow: column nowrap;
  width: 80vw;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  background-color: white;

.main-container {
  flex: 90%;
  display: flex;
  flex-flow: column nowrap;
  width: 75vw;
  max-width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  animation: fadein 2s;
  font-family: 'Cafe24SsurroundAir';
  color: #333;
}

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 768px) {
    #root, .main-container, .header-container, .carousel {
      width: 100vw;
      margin: 0;
    }
  
    #root {
      width: 100vw;
      padding-top: 10px;
      margin: 0;
    }
  }

  @media only screen and (max-width: 480px) {
    #root, .header-container, .main-container, .carousel {
      width: 100vw;
      margin: 0;
    }
  
    #root {
      width: 100vw;
      padding-top: 10px;
      margin: 0;
    }
  
    .header-container, .main-container {
      font-size: 2rem;
    }
  }
  
}
`;

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
      <GlobalStyle />
    </div>
  );
}

export default App;
