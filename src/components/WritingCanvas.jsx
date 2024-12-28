import React from "react";
import { motion } from "framer-motion";

const WritingCanvas = ({ pressedKey, fontColor }) => {
  return (
    <div className="writing-canvas">
      {pressedKey && (
        <motion.div
          className="animated-key"
          style={{ color: fontColor }}
          animate={{ scale: [0.5, 1.5, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 0.5 }}
        >
          {pressedKey.toUpperCase()}
        </motion.div>
      )}
    </div>
  );
};

export default WritingCanvas;
