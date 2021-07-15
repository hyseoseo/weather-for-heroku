import React from "react";

import StyleStyled from "./Style.styles";

const Style = (props) => {
  const { styles, fetchOutfitImage } = props;

  return (
    <StyleStyled>
      오늘 당신의 스타일은?
      <div className="style-keywords">
        {styles.map((style) => {
          return (
            <button
              className="style-keyword-button"
              onClick={() => fetchOutfitImage(style.value)}
            >
              {`#${style.show}`}
            </button>
          );
        })}
      </div>
    </StyleStyled>
  );
};

export default Style;
