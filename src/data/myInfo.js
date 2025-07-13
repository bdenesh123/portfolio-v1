import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import dayjs from 'dayjs';
import {
  Briefcase,
  BriefcaseBusiness,
  Folder,
  Laptop,
  User,
} from 'lucide-react';

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
  { id: 'vite', label: 'Vite', icon: ViteJsIcon },
  { id: 'vercel', label: 'Vercel', icon: VercelIcon },
  // { id: 'mysql', label: 'SQL', icon: Database },
];
// Personal
export const personalDetails = {
  name: 'Deneshwaran',
  initials: 'DN',
  position: 'Frontend Engineer',
  location: 'Cheras, Kuala Lumpur, Malaysia',
  email: 'bdenesh123@gmail.com',
  hp: '+60 19 477 6236',
  greetMessage: "Hi, I'm Denesh!",
  description:
    'Self-taught developer passionate about building responsive, user-focused web experiences with React.js and JavaScript. Driven by curiosity and grit, I continuously improve my skills, one line of code at a time.',
  experiences: [
    {
      startDate: 'Oct 2023',
      endDate: 'Apr 2025',
      logo: wvbLogo,
      company: 'World Vest Base | Global Financial Intelligence',
      title: 'Frontend Engineer',
      description: [
        'Built real-time dashboards and dynamic platform pages.',
        'Created interactive financial data tables and custom charts.',
        'Enhanced dark mode UI and integrated REST APIs.',
        'Implemented page-specific error handling and fallback UIs.',
        'Collaborated cross-functionally to ship user-focused features.',
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
        { id: 'postman', label: 'Postman' },
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
        'Designed and simulated soft grippers using shape memory polymers.',
        'Led 4D printing and prototyping processes.',
        'Collaborated with research team on PETRONAS Future Positioning Project.',
      ],
      techStack: [
        { id: 'simulation', label: 'Finite Element Analysis' },
        { id: 'cad', label: '3D Modeling' },
        { id: 'smp', label: 'Shape Memory Polymers' },
      ],
    },
    {
      startDate: 'Jun 2020',
      endDate: 'Dec 2020',
      logo: toyotiresLogo,
      company: 'Toyo Tyres Malaysia',
      title: 'Internship',
      description: [
        'Supported mechanical/electrical system maintenance.',
        'Monitored project progress and assisted quality control.',
        'Maintained technical documentation and records.',
      ],
      techStack: [
        { id: 'qa', label: 'Quality Assurance' },
        { id: 'excel', label: 'Document Control' },
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
    url: 'https://deneshwaran-portfolio-v1.vercel.app/',
    image: isDarkMode ? portfolioDark : portfolioLight,
    description:
      'A responsive portfolio built with React, Framer Motion, and Tailwind CSS. Showcases projects with smooth animations, dark mode, and a modular design.',
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
      'An Airbnb-inspired booking app with React, Redux, and Tailwind. Features listings, auth with JWT, protected routes, and responsive design.',

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
  { name: 'Experience', href: '#experience', icon: BriefcaseBusiness },
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
  version: import.meta.env.VITE_APP_VERSION,
  // lastUpdated: dayjs('2025-07-12').format('DD/MMM/YY'),
};
