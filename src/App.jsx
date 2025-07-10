import Navbar from './components/layouts/Navbar';
import Experience from './components/sections/Experience';
import Profile from './components/sections/Profile';

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='z-1 relative mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 pt-20'>
          <Profile />
          <Experience />
        </div>
      </div>
    </>
  );
};

export default App;
