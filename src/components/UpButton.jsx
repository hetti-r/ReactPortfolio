import React, { useState, useEffect, useCallback } from 'react';

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  return (
    <div>
      {isVisible && (
        <button id="backToTop" onClick={scrollToTop}>
          <span className="material-symbols-outlined">vertical_align_top</span>
        </button>
      )}
    </div>
  );
};

export default UpButton;