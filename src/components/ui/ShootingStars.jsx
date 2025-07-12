import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils/cn';

import { useTheme } from '../ThemeProvider';

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 }; // Top
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 }; // Right
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 }; // Bottom
    case 3:
      return { x: 0, y: offset, angle: 315 }; // Left
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars = ({
  minSpeed = 2,
  maxSpeed = 6,
  minDelay = 1500,
  maxDelay = 3000,
  starColor = '#9E00FF',
  trailColor = '#2EB9DF',
  starWidth = 10,
  starHeight = 1,
  maxStars = 6, // ✅ Limit total stars
  className,
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const computedStarColor = isDarkMode ? '#ffffff' : '#000000'; // white on dark
  const computedTrailColor = isDarkMode ? '#cccccc' : '#333333'; // soft gray trail

  const [stars, setStars] = useState([]);
  const svgRef = useRef(null);

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar = {
        id: Date.now() + Math.random(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };

      setStars((prev) => {
        if (prev.length >= maxStars) return prev;
        return [...prev, newStar];
      });

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();
  }, [minSpeed, maxSpeed, minDelay, maxDelay, maxStars]);

  useEffect(() => {
    const moveStars = () => {
      setStars((prevStars) =>
        prevStars
          .map((star) => {
            const newX =
              star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY =
              star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;

            if (
              newX < -20 ||
              newX > window.innerWidth + 20 ||
              newY < -20 ||
              newY > window.innerHeight + 20
            ) {
              return null; // remove off-screen stars
            }

            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
            };
          })
          .filter(Boolean),
      );

      requestAnimationFrame(moveStars);
    };

    moveStars();
  }, []);

  return (
    <svg
      ref={svgRef}
      className={cn('absolute inset-0 h-full w-full', className)}
    >
      <defs>
        <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop
            offset='0%'
            style={{ stopColor: computedTrailColor, stopOpacity: 0 }}
          />
          <stop
            offset='100%'
            style={{ stopColor: computedStarColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill='url(#gradient)'
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}
    </svg>
  );
};
