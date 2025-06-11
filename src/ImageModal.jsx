import React, { useState, useEffect } from 'react';

const ImageModal = ({ images = [], onClose, initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [rotating, setRotating] = useState(false);

  const changeIndex = (idx) => {
    if (idx === activeIndex) return;
    setRotating(true);
    setActiveIndex(idx);
  };

  useEffect(() => {
    if (rotating) {
      const timer = setTimeout(() => setRotating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [rotating]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
      <div
        className="relative bg-gray-900 border border-cyan-500/50 rounded-xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-white"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex items-center justify-center gap-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => changeIndex(idx)}
              className={`transition-all duration-300 rounded-lg cursor-pointer ${
                idx === activeIndex
                  ? `w-96 ${rotating ? 'rotate-180' : ''}`
                  : 'w-24 opacity-50 grayscale hover:opacity-80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
