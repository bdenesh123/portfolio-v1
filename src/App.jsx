import { useEffect } from 'react';

import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Experience from './components/sections/Experience';
import Profile from './components/sections/Profile';
import Projects from './components/sections/Projects';
import { ShootingStars } from './components/ui/ShootingStars';
import { StarsBackground } from './components/ui/StarsBackground';

const App = () => {
  // Auto scroll back to main
  // useEffect(() => {
  //   window.history.scrollRestoration = 'manual';
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <div className='font-poppins  box-border min-h-[100dvh] text-white'>
        <ShootingStars />
        <StarsBackground className='pointer-events-none' />
        <Navbar />
        <div className='z-1 relative mx-auto mb-20 flex w-full max-w-2xl flex-col gap-6 px-4 pt-20'>
          <Profile />
          <Experience />
          <Projects />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;
