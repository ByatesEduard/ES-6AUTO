// Models.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Models.css";

export const Models = ({ models }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentModel = models[currentIndex];

  const selectModel = (index) => setCurrentIndex(index);

  return (
    <div className="models-container">
      {/* Список моделей зліва */}
      <ul className="models-list">
        {models.map((model, i) => (
          <li
            key={model.slug}
            className={`model-item ${i === currentIndex ? "active" : ""}`}
            onClick={() => selectModel(i)}
          >
            {model.name}
          </li>
        ))}
      </ul>

      {/* Відображення вибраної моделі */}
      <div className="model-display">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentModel.carImg}
            src={currentModel.carImg}
            alt={currentModel.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="model-image"
          />
        </AnimatePresence>
        <div className="model-info">
          <h2>{currentModel.name}</h2>
          {/* Тут можна додати будь-які характеристики */}
          {currentModel.heroBg && (
            <p>Фонове зображення: {currentModel.heroBg}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Models;
