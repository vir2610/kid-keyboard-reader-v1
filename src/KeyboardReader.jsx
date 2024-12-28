import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";

const KeyboardReader = () => {
  const { speak } = useSpeechSynthesis();
  const [keyPressed, setKeyPressed] = useState("");
  const [fontColor, setFontColor] = useState("#000000");
  const [readWords, setReadWords] = useState(false);

  const animations = {
    scale: 1.5,
    rotate: 360,
    transition: { duration: 0.5 },
  };

  const handleKeyPress = (key) => {
    setKeyPressed(key);
    if (!readWords) {
      speak({ text: key });
    } else {
      speak({ text: key === " " ? "Space" : key });
    }
  };

  useHotkeys("a-z, 0-9, space", (e) => handleKeyPress(e.key.toUpperCase()), {
    filter: () => true,
  });

  const changeFontColor = (color) => {
    setFontColor(color);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <motion.div
        key={keyPressed}
        animate={animations}
        style={{ fontSize: "100px", color: fontColor }}
      >
        {keyPressed}
      </motion.div>

      <button onClick={() => setReadWords(!readWords)}>
        Toggle Reading Mode ({readWords ? "Words" : "Letters"})
      </button>

      <input
        type="color"
        value={fontColor}
        onChange={(e) => changeFontColor(e.target.value)}
      />
    </div>
  );
};

export default KeyboardReader;
