import { appInfo } from '@/data/myInfo';

const Footer = () => {
  return (
    <footer className='text-responsive-4 font-vt323 mx-auto mb-5 mt-[3rem] flex max-w-2xl justify-center px-6 text-gray-300 md:px-4'>
      <span>Version {appInfo.version}</span>
      {/* <span>Last Update: {appInfo.lastUpdated}</span> */}
    </footer>
  );
};

export default Footer;
