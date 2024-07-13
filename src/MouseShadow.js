import React, { useState, useEffect } from 'react';
import './MouseShadow.css';

const MouseShadow = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${cursorPosition.x - 100}px`,
        top: `${cursorPosition.y - 100}px`,
      }}
    />
  );
};

export default MouseShadow;
