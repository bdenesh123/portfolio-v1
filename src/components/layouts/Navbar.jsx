import { Menu } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

// import logo from '@/assets/logo/logo2.png';
import { navItems, personalDetails } from '@/data/myInfo';
import { getInitials } from '@/utils/initials';
import { transitions } from '@/utils/transitions';

import ThemeModeMenu from '../ThemeModeMenu';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui';

const Navbar = () => {
  const nav = {
    hidden: {
      filter: 'blur(10px)',
      // y: -60,
    },
    show: {
      filter: 'blur(0px)',
      // y: 0,
      transition: {
        ...transitions.fadeUp.transition,
        delay: 1,
      },
    },
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.slice(1));

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Align to the top of the viewport
      });
    }
  };

  return (
    <motion.nav
      className='fixed z-10 w-full backdrop-blur-md'
      variants={nav}
      initial='hidden'
      animate='show'
    >
      <div className='mx-auto max-w-2xl px-4 py-2 md:p-2'>
        <div className='flex justify-between'>
          {/* Logo/Brand */}
          <div className='flex flex-shrink-0 items-center'>
            <a
              href='#'
              className='text-responsive-4.5 font-press-start-2p flex items-center gap-2 font-bold'
            >
              {/* <img src={logo} alt='Logo' className='h-11 w-auto' /> */}

              {/* <span className='hidden md:inline'>{personalDetails.name}</span> */}
              {/* <span className='md:hidden'>{personalDetails.initials}</span> */}
            </a>
          </div>

          {/* Desktop Navigation - hidden on mobile, shown on md screens and up */}
          <div className='hidden items-center space-x-4 md:flex'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-responsive-3 px-3 py-2 font-medium'
              >
                {item.name}
              </a>
            ))}
            {/* <ThemeModeMenu /> */}
          </div>

          {/* Mobile menu button - Hide on screens ≥768px */}
          <div className='flex items-center md:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                  <Menu />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className='w-30'>
                <DropdownMenuGroup>
                  {navItems.map((item) => (
                    <DropdownMenuItem
                      key={item.name}
                      onClick={() => handleScrollToSection(item.href)}
                    >
                      <div className='flex items-center gap-2'>
                        <item.icon />
                        <span>{item.name}</span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
