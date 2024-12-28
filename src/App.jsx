import React, { useState, useEffect } from "react";
import WritingCanvas from "./components/WritingCanvas";
import Toolbar from "./components/Toolbar";

const App = () => {
  const [pressedKey, setPressedKey] = useState(""); // Key pressed
  const [fontColor, setFontColor] = useState("#000000"); // Default black color
  const [readingMode, setReadingMode] = useState("letters"); // Mode: letters or words

  // Keypress event listener
  useEffect(() => {
    const handleKeyPress = (event) => {
      setPressedKey(event.key);

      // Text-to-Speech
      const utterance = new SpeechSynthesisUtterance(
        readingMode === "letters" ? event.key : getWord(event.key)
      );
      speechSynthesis.speak(utterance);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [readingMode]);

  // Helper function for words (you can expand this dictionary)
  const getWord = (key) => {
    const dictionary = { a: "Apple", b: "Banana", c: "Cat", "1": "One" };
    return dictionary[key.toLowerCase()] || key;
  };

  return (
    <div>
      <h1 className="app-title">Kid Keyboard Reader</h1>
      <Toolbar
        fontColor={fontColor}
        setFontColor={setFontColor}
        readingMode={readingMode}
        setReadingMode={setReadingMode}
      />
      <WritingCanvas pressedKey={pressedKey} fontColor={fontColor} />
    </div>
  );
};

export default App;
