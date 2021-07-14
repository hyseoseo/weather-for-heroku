import React from "react";
import { Route, Link } from "react-router-dom";

import MainContainer from "./MainContainer";
import Header from "./Header";
import ImageContainer from "./ImageContainer";

function App() {
  return (
    <div>
      <Header className="header-container" />
      <Route path="/" exact={true} component={MainContainer} />
      <Route path="/:style" component={ImageContainer} />
    </div>
  );
}

export default App;
