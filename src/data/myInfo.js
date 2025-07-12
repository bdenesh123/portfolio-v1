import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import dayjs from 'dayjs';
import { Briefcase, Folder, Laptop, User } from 'lucide-react';

import FontAwesomeIcon from '@/assets/icons/FontAwesomeIcon';
import GitlabIcon from '@/assets/icons/Gitlab';
import JavascriptIcon from '@/assets/icons/JavascriptIcon';
import MaterialUiIcon from '@/assets/icons/MaterialUiIcon';
import MotionJsIcon from '@/assets/icons/MotionIcon';
import PythonIcon from '@/assets/icons/PythonIcon';
import ReactIcon from '@/assets/icons/ReactIcon';
import ShadcnUiIcon from '@/assets/icons/ShadcnUiIcon';
import TailwindCssIcon from '@/assets/icons/TailwindIcon';
import VercelIcon from '@/assets/icons/VercelIcon';
import ViteJsIcon from '@/assets/icons/VIteJsIcon';
import airbnbDark from '@/assets/images/airbnbDark.jpg';
import airbnbLight from '@/assets/images/airbnbLight.jpg';
import portfolioDark from '@/assets/images/portfoliov1Dark.jpg';
import portfolioLight from '@/assets/images/portfoliov1Light.jpg';
import toyotiresLogo from '@/assets/images/toyotires.png';
import utpLogo from '@/assets/images/utp.png';
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
    'Self-taught Frontend Engineer, driven by grit and curiosity. I build responsive websites with React.js and JavaScript, improving and growing with one line of code at a time. 👨‍💻',
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
        { id: 'echarts', label: 'Apache ECharts' },
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
        { id: 'smp', label: 'Shape Memory Polymers' },
      ],
    },
    {
      startDate: 'Jun 2020',
      endDate: 'Dec 2020',
      logo: toyotiresLogo,
      company: 'Toyo Tyres Malaysia',
      title: 'Engineering Intern',
      description: [
        'Assisted the engineering department in maintaining mechanical and electrical systems, monitored work progress, and implemented quality control procedures.',
      ],
      techStack: [
        { id: 'excel', label: 'Excel' },
        { id: 'qa', label: 'Quality Assurance' },
      ],
    },
  ],
};

// Projects

export const getProjectDetails = (isDarkMode) => [
  {
    id: 'portfolio.v1',
    name: 'Portfolio Project',
    repoUrl: 'https://github.com/bdenesh123/portfolio-v1',
    url: 'https://your-portfolio-url.com',
    image: isDarkMode ? portfolioDark : portfolioLight,
    description:
      'A modern, responsive portfolio website built with React, Framer Motion, and Tailwind CSS. Designed to highlight my development journey, showcase projects, and reflect my passion for clean, interactive user interfaces. Features smooth animations, dark mode, and modular component design.',
    techStack: [
      { id: 'react', label: 'React' },
      { id: 'javascript', label: 'JavaScript' },
      { id: 'motion', label: 'Motion' },
      { id: 'tailwind', label: 'Tailwind' },
    ],
  },
  {
    id: 'airbnb',
    name: 'Airbnb Clone',
    repoUrl: 'https://github.com/bdenesh123/airbnb-project',
    url: 'https://react-airbnb-project.vercel.app/',
    image: isDarkMode ? airbnbDark : airbnbLight,
    description:
      'An online booking platform inspired by Airbnb, built with React, Redux, and Tailwind CSS. It features dynamic listings, authentication with JWT, protected routes, and seamless navigation via React Router. The project showcases modern frontend practices including global state management, data fetching with React Query, and responsive UI design.',
    techStack: [
      { id: 'react', label: 'React' },
      { id: 'javascript', label: 'JavaScript' },
      { id: 'tailwind', label: 'Tailwind' },
      { id: 'redux', label: 'Redux' },
      { id: 'axios', label: 'Axios' },
    ],
  },
];

// Layout
export const navItems = [
  { name: 'Profile', href: '#profile', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Folder },
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
  lastUpdated: dayjs('2025-07-12').format('DD/MMM/YY'),
};
