import { useLoading } from '@providers/LoadingProviders';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

// Progress labels based on percent
const loadingText = {
  20: 'Profile',
  40: 'Experience',
  60: 'Projects',
  80: 'Finalizing',
  100: 'Completed',
};

const FullScreenLoader = () => {
  const { setLoading } = useLoading();
  const [progress, setProgress] = useState(0);

  if (progress === 100) {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 60 - 2 * progress,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (custom) => ({
      opacity: custom < progress ? 0 : 1,
      x: custom < progress ? -40 : 0,
      y: 0,
      scale: custom === progress ? 2 : 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        mass: 0.8,
      },
    }),
  };

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prev) => {
        const next = prev + 20;
        return next >= 100 ? 100 : next;
      });
    };

    const intervalId = setInterval(updateProgress, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='bg-charcoal-gray fixed inset-0 z-50 flex flex-col justify-center'>
      <motion.div
        className='ml-[30%] flex flex-col gap-4'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {Object.entries(loadingText).map(([key, text]) => {
          const keyNumber = Number(key);
          return (
            <motion.div
              key={key}
              custom={keyNumber}
              variants={itemVariants}
              className='flex origin-left items-center gap-2'
            >
              <span>{text}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FullScreenLoader;
