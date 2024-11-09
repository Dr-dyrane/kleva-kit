import React, { useEffect, useState, useRef } from 'react';

const TypewriterEffect = ({ texts, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const typingRef = useRef(null);

  useEffect(() => {
    let currentText = texts[textIndex];
    let index = 0;

    const typingEffect = () => {
      if (index < currentText.length) {
        setDisplayedText(currentText.substring(0, index + 1));
        index++;
        typingRef.current = setTimeout(typingEffect, speed);
      } else {
        typingRef.current = setTimeout(eraseText, 1000);
      }
    };

    const eraseText = () => {
      if (index > 0) {
        setDisplayedText(currentText.substring(0, index - 1));
        index--;
        typingRef.current = setTimeout(eraseText, speed);
      } else {
        setTextIndex((prev) => (prev + 1) % texts.length);
        typingRef.current = setTimeout(typingEffect, 500);
      }
    };

    typingEffect();

    return () => clearTimeout(typingRef.current);
  }, [texts, textIndex, speed]);

  return (
    <span
      className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 transition-opacity transition-transform duration-300 min-h-96"
      style={{
        opacity: displayedText ? 1 : 0.5,
        transform: displayedText ? 'translateY(0)' : 'translateY(10px)',
      }}
    >
      {displayedText}
    </span>
  );
};

export default TypewriterEffect;