import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import dayjs from 'dayjs';
import { Briefcase, Laptop, User } from 'lucide-react';

import FontAwesomeIcon from '@/assets/icons/FontAwesomeIcon';
import GitlabIcon from '@/assets/icons/Gitlab';
import JavascriptIcon from '@/assets/icons/JavascriptIcon';
import MaterialUiIcon from '@/assets/icons/MaterialUiIcon';
import MotionJsIcon from '@/assets/icons/MotionIcon';
import PythonIcon from '@/assets/icons/PythonIcon';
import ReactIcon from '@/assets/icons/ReactIcon';
import ReduxIcon from '@/assets/icons/ReduxIcon';
// import ReduxIcon from '@/assets/icons/ReduxIcon';
import ShadcnUiIcon from '@/assets/icons/ShadcnUiIcon';
import TailwindCssIcon from '@/assets/icons/TailwindIcon';
import VercelIcon from '@/assets/icons/VercelIcon';
import ViteJsIcon from '@/assets/icons/VIteJsIcon';
import dummyImage from '@/assets/images/carpic.jpg';
import toyotiresLogo from '@/assets/images/toyotires.jpg';
import utpLogo from '@/assets/images/UTP.jpg';
import wvbLogo from '@/assets/images/wvb1.png';

const currentUrl = window.location.href;

// Tech Stack
export const techStack = [
  { id: 'react', label: 'React', icon: ReactIcon },
  { id: 'javascript', label: 'JavaScript', icon: JavascriptIcon },
  { id: 'python', label: 'Python', icon: PythonIcon },
  { id: 'motion', label: 'Motion', icon: MotionJsIcon },
  { id: 'tailwind', label: 'Tailwind', icon: TailwindCssIcon },
  { id: 'mui', label: 'MUI', icon: MaterialUiIcon },
  { id: 'shadcn', label: 'Shadcn UI', icon: ShadcnUiIcon },
  // { id: 'fontawesome', label: 'Font Awesome', icon: FontAwesomeIcon },
  // { id: 'redux', label: 'Redux', icon: ReduxIcon },
  // { id: 'gitlab', label: 'GitLab', icon: GitlabIcon },
  { id: 'vite', label: 'Vite.js', icon: ViteJsIcon },
  { id: 'vercel', label: 'Vercel', icon: VercelIcon },
  // { id: 'mysql', label: 'SQL', icon: Database },
];
// Personal
export const personalDetails = {
  name: 'Denesh',
  initials: 'DN',
  position: 'Frontend Engineer',
  location: 'Cheras, Kuala Lumpur, Malaysia',
  greetMessage: "Hi, I'm Denesh!",
  description:
    'Self-taught Frontend Engineer from non-tech background, driven by grit and curiosity. I build responsive websites with React.js and JavaScript, improving and growing with one line of code at a time. 👨‍💻',
  experiences: [
    {
      startDate: 'Oct 2023',
      endDate: 'Apr 2025',
      logo: wvbLogo,
      company: 'World Vest Base',
      title: 'Frontend Engineer',
      description: [
        'Developed real-time dashboard features and dynamic platform pages for a global financial intelligence platform. Implemented interactive financial data tables, custom visualizations, and page-specific maintenance handling. Enhanced dark mode UI, integrated REST APIs, and collaborated cross-functionally to deliver high-performance, user-centric experiences.',
      ],
      // description: [
      //   'Developed ',
      //   {
      //     name: 'Boost PayFlex',
      //     url: 'https://myboost.co/feature/boost-payflex',
      //   },
      //   ' enabling seamless payment flexibility for millions of merchants, while enhancing ',
      //   {
      //     name: 'SME lending applications',
      //     url: 'https://myboost.co/credit/capital-by-boost-credit',
      //   },
      //   ' internal management tools, and scalable admin panel templates. Focused on improving user experience, streamlining workflows, and optimizing application performance.',
      // ],
      techStack: [
        { id: 'react', label: 'React' },
        { id: 'javascript', label: 'JavaScript' },
        { id: 'mui', label: 'MUI' },
        { id: 'redux', label: 'Redux' },
        { id: 'gitlab', label: 'GitLab' },
      ],
    },
    {
      startDate: 'Mar 2022',
      endDate: 'Apr 2023',
      logo: utpLogo,
      company: 'Universiti Teknologi PETRONAS',
      title: 'Research Officer',
      description: [
        'Designed and simulated a soft gripper mechanism using shape memory polymers for application in soft robotics. Led the design and 4D printing processes for developing functional soft grippers while collaborating with research team members to ensure seamless project progression under the PETRONAS Future Positioning Project.',
      ],
      techStack: [
        { id: 'cad', label: 'SolidWorks' },
        { id: 'simulation', label: 'Simulation Software (Altair)' },
        { id: '4dprint', label: '4D Printing' },
      ],
    },
    {
      startDate: 'Jun 2020',
      endDate: 'Dec 2020',
      logo: toyotiresLogo,
      company: 'Toyo Tyres Malaysia',
      title: 'Engineering Intern',
      description: [
        'Assisted the engineering department in maintaining mechanical and electrical systems, monitored work progress, and implemented quality control procedures. Ensured engineering operations were in line with regulatory, legal, and contractual standards throughout the internship period.',
      ],
      techStack: [
        { id: 'excel', label: 'Excel' },
        { id: 'qa', label: 'Quality Assurance' },
      ],
    },
  ],
};

// Projects

export const projectDetails = [
  {
    id: 'portfolio.v1',
    name: 'portfolio.v1',
    repoUrl: 'https://github.com/bryansimyf/bryansim-portfolio-v2',
    url: currentUrl,
    image: dummyImage,
    description:
      'A personal web portfolio to showcase my projects, growth, and passion for building great user experiences.',
    techStack: [
      { id: 'react', label: 'React', icon: ReactIcon },
      { id: 'javascript', label: 'JavaScript', icon: JavascriptIcon },
      { id: 'python', label: 'Python', icon: PythonIcon },
    ],
  },
];

// Layout
export const navItems = [
  { name: 'Profile', href: '#profile', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Laptop },
];

// Socials
export const socialItems = [
  {
    name: 'Github',
    icon: faGithub,
    url: 'https://github.com/bdenesh123',
  },
  {
    name: 'Linkedin',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/deneshwaran/',
  },
];

// App
export const appInfo = {
  version: `v${import.meta.env.VITE_APP_VERSION}`,
  lastUpdated: dayjs('2025-07-12').format('DD MMMM YYYY'),
};
