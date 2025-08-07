import { motion } from 'motion/react';
import React from 'react';

import { useTheme } from '../ThemeProvider';
import { Button } from '../ui';

const HoverButton = (props) => {
  const {
    children,
    className,
    buttonClassName,
    // variant = "outline",
    ...rest
  } = props;

  const { theme } = useTheme();

  const isDarkMode = theme === 'dark';

  const bgColor = isDarkMode ? '#FAFAF9' : '#0C0A09';

  return (
    <div className={`relative inline-block ${className || ''}`}>
      <div
        className='absolute inset-0 rounded-lg'
        style={{ backgroundColor: bgColor }}
      />
      <motion.div
        whileTap={{ x: 0, y: 0 }}
        whileHover={{ x: -2.5, y: -2.5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      >
        <Button
          variant='outline'
          className={`font-vt323 text-responsive-4 relative ${buttonClassName || ''}`}
          {...rest}
        >
          {children}
        </Button>
      </motion.div>
    </div>
  );
};

export default HoverButton;
