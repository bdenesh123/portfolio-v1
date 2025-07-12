import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
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
      <div className='font-poppins relative box-border min-h-[100dvh] overflow-hidden text-white'>
        {/* Background layers */}
        <div className='pointer-events-none absolute inset-0 z-0'>
          <ShootingStars />
          <StarsBackground />
        </div>

        {/* Foreground content */}
        <div className='relative z-10'>
          <Navbar />
          <div className='mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 pt-20'>
            <Profile />
            <Experience />
            <Projects />
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </div>
    </>
  );
};

export default App;
