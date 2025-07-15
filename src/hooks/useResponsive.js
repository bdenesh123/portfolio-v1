import { useCallback, useEffect, useRef, useState } from 'react';

const useResponsive = () => {
  const debounceTime = 250;
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  const timeoutRef = useRef(null);

  const handleResize = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, debounceTime);
  }, [debounceTime]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set initial width
    setWindowWidth(window.innerWidth);

    // Attach debounced resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleResize]);

  return { windowWidth };
};

export default useResponsive;
