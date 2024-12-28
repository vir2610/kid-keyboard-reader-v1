import React from "react";
import { TwitterPicker } from "react-color";

const Toolbar = ({ fontColor, setFontColor, readingMode, setReadingMode }) => {
  return (
    <div className="toolbar">
      <button
        onClick={() =>
          setReadingMode((prev) => (prev === "letters" ? "words" : "letters"))
        }
      >
        Toggle Reading Mode ({readingMode === "letters" ? "Letters" : "Words"})
      </button>
      <TwitterPicker
        color={fontColor}
        onChangeComplete={(color) => setFontColor(color.hex)}
      />
    </div>
  );
};

export default Toolbar;
