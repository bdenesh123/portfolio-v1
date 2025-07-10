import { motion } from 'motion/react';
import React from 'react';

import { personalDetails } from '@/data/myInfo';
import { transitions } from '@/utils/transitions';

import HoverCoverText from '../common/HoverCoverText';
import { Badge } from '../ui';

const Experience = () => {
  const { experiences } = personalDetails;

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      id='experience'
      className='scroll-mt-nav'
      initial={transitions.fadeUp.initial}
      animate={transitions.fadeUp.animate}
      transition={{
        ...transitions.fadeUp.transition,
        delay: 0.6,
      }}
    >
      <div id='experience-wrapper' className='flex flex-col gap-4 p-2'>
        <p className='text-responsive-4.5 mb-0 font-semibold'>
          Work Experience
        </p>
        <div id='experience-timeline'>
          {experiences.map((experience, index) => {
            const isCurrent = index === 0;

            return (
              <div
                key={index}
                id='experience-timeline-item'
                className='flex gap-5 md:gap-10'
              >
                <div
                  id='experience-timeline-item-dot-line'
                  className='flex flex-col items-center'
                >
                  <div className='relative my-1.5'>
                    {/* Pulsing background effect */}
                    {isCurrent && (
                      <div className='absolute -left-0.5 -top-0.5 h-5 w-5 animate-ping rounded-full bg-cyan-400 opacity-30'></div>
                    )}
                    {/* Core dot */}
                    <div
                      className={`${
                        isCurrent ? 'bg-cyan-300' : 'bg-zinc-200'
                      } relative h-3.5 w-3.5 rounded-full bg-cyan-300`}
                    />
                  </div>
                  <div className='h-full w-0.5 bg-gray-600' />
                </div>

                <div
                  id='experience-timeline-item-content'
                  className='flex w-full flex-col gap-2 px-2 pb-8 pt-1'
                >
                  <span className='text-responsive-3'>
                    {`${experience.startDate} - ${
                      isCurrent ? 'Present' : experience.endDate
                    }`}
                  </span>
                  <p className='text-responsive-3.25 mb-0 font-semibold'>
                    {`${experience.title} - ${experience.company}`}
                  </p>
                  <div className='text-responsive-3 mb-2 break-words text-gray-300'>
                    {experience.description.map((desc, index) => {
                      if (typeof desc === 'object') {
                        return (
                          <HoverCoverText
                            key={index}
                            className='font-bold text-gray-200'
                            onClick={() => openInNewTab(desc.url)}
                          >
                            {desc.name}
                          </HoverCoverText>
                        );
                      }

                      return <span key={index}>{desc}</span>;
                    })}
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {experience.techStack.map((item) => (
                      <Badge key={item.id} variant='secondary'>
                        {item.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
