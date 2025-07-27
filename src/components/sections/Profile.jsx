import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

import profilePic from '@/assets/images/profilepic.jpg';
import { personalDetails, socialItems, techStack } from '@/data/myInfo';
import { transitions } from '@/utils/transitions';

import BottomFadeOverlay from '../common/BottomFadeOverlay';
import HoverButton from '../common/HoverButton';
import { Separator } from '../ui';
import Threads from '../ui/Threads';

const Profile = () => {
  return (
    <section id='profile' className='scroll-mt-nav'>
      <div id='profile-wrapper' className='relative'>
        <motion.div
          layout
          id='profile-banner-wrapper'
          className='h-30 relative overflow-hidden md:h-44'
          initial={{ ...transitions.fadeUp.initial, filter: 'blur(10px)' }}
          animate={{ ...transitions.fadeUp.animate, filter: 'blur(0px)' }}
          transition={{
            type: 'tween',
            duration: 1.2,
            ease: 'easeInOut',
          }}
        >
          <div>
            <Threads
              amplitude={2.5}
              distance={0.2}
              enableMouseInteraction={true}
            />
          </div>

          {/* <BottomFadeOverlay /> */}
        </motion.div>

        <motion.div
          initial={transitions.fadeUp.initial}
          // animate={isLoading ? {} : transitions.fadeUp.animate}
          animate={transitions.fadeUp.animate}
          transition={{ ...transitions.fadeUp.transition, delay: 0.4 }}
        >
          <div
            id='profile-content-wrapper'
            className='relative mt-[-5%] flex flex-col gap-6 p-2'
          >
            <div
              id='profile-content-header'
              className='flex flex-col items-center gap-2 md:flex-row md:gap-6'
            >
              <img
                src={profilePic}
                alt='Profile Picture'
                className='h-[140px] w-[120px]  rounded-3xl object-cover'
              />
              <div className='flex w-full flex-col items-center gap-2 self-center p-2 md:items-start'>
                {/* <div className="px-4 py-2 rounded-2xl bg-midnight-blue">
              <span className="text-sm">{PERSONAL_DETAILS.greetMessage}</span>
            </div> */}
                <div className='flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-[0.3rem]'>
                  <span className='font-press-start-2p text-center text-[1.4rem] font-extrabold sm:text-left'>
                    {personalDetails.name}
                  </span>

                  {/* Separator only visible on sm and above */}
                  <Separator
                    orientation='vertical'
                    className='mx-[0.3rem] hidden h-8 bg-gray-700 dark:bg-gray-300 sm:block'
                  />

                  <span className='font-vt323 whitespace-nowrap text-[1.7rem] font-medium sm:text-[1.9rem]'>
                    {personalDetails.position}
                  </span>
                </div>
                {/* <span className="font-light text-sm">
                Open to New Opportunities
              </span> */}
                <div className='text-responsive-3 flex items-center gap-1 font-light md:mb-2'>
                  <MapPin className='h-[20px] w-[20px]' />
                  <p className='mb-0'>{personalDetails.location}</p>
                </div>
                <div className='text-responsive-3 flex items-center gap-1 font-light md:mb-2'>
                  <Mail className='h-[20px] w-[20px]' />
                  <a
                    href={`mailto:${personalDetails.email}`}
                    className='text-inherit hover:underline'
                  >
                    {personalDetails.email}
                  </a>
                </div>

                <div className='text-responsive-3 flex items-center gap-1 font-light md:mb-2'>
                  <Smartphone className='h-[20px] w-[20px]' />
                  <a
                    href={`tel:${personalDetails.hp.replace(/\s+/g, '')}`}
                    className='text-inherit hover:underline'
                  >
                    {personalDetails.hp}
                  </a>
                </div>
                <div className='flex w-full justify-center gap-2 md:justify-end'>
                  <div className='flex gap-2'>
                    {socialItems.map((item) => (
                      <HoverButton
                        key={item.name}
                        size='icon'
                        variant='outline'
                        onClick={() => window.open(item.url, '_blank')}
                      >
                        <FontAwesomeIcon icon={item.icon} />
                      </HoverButton>
                    ))}
                  </div>
                  {/* <Separator orientation='vertical' className='h-auto' /> */}
                  {/* <HoverButton onClick={handleDownloadResume}>
                    Resume <Download />
                  </HoverButton> */}
                </div>
              </div>
            </div>
            <div
              id='profile-content-desc'
              className='text-responsive-3.5 text-justify font-light text-gray-300'
            >
              <span>{personalDetails.description}</span>
            </div>
            <div className='font-vt323 rounded-lg border px-4 py-2 backdrop-blur-md dark:bg-[color:rgba(33,33,33,0.3)]'>
              <p className='text-responsive-4 mb-1 '>My Tech Stack:</p>
              <ul className='text-responsive-3.5 grid auto-cols-auto grid-flow-col grid-rows-3 gap-1'>
                {techStack.map(({ id, label, icon: Icon }) => (
                  <li key={id} className='flex items-center gap-2'>
                    <Icon className='h-5 w-5' />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
