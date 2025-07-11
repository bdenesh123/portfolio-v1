import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Briefcase, Database, Flag, FolderOpen, User } from 'lucide-react';

import GitlabIcon from '@/assets/icons/Gitlab';
import JavascriptIcon from '@/assets/icons/JavascriptIcon';
import MaterialUiIcon from '@/assets/icons/MaterialUiIcon';
import MotionJsIcon from '@/assets/icons/MotionIcon';
import PythonIcon from '@/assets/icons/PythonIcon';
import ReactIcon from '@/assets/icons/ReactIcon';
import ReduxIcon from '@/assets/icons/reduxIcon';
import ShadcnUiIcon from '@/assets/icons/ShadcnUiIcon';
import TailwindCssIcon from '@/assets/icons/TailwindIcon';
import ViteJsIcon from '@/assets/icons/VIteJsIcon';
import dummyImage from '@/assets/images/carpic.jpg';

const currentUrl = window.location.href;

// Tech Stack
export const techStack = [
  { id: 'react', label: 'React', icon: ReactIcon },
  { id: 'javascript', label: 'JavaScript', icon: JavascriptIcon },
  { id: 'python', label: 'Python', icon: PythonIcon },
  { id: 'tailwind', label: 'Tailwind', icon: TailwindCssIcon },
  { id: 'mui', label: 'MUI', icon: MaterialUiIcon },
  { id: 'motion', label: 'Motion', icon: MotionJsIcon },
  { id: 'shadcn', label: 'Shadcn UI', icon: ShadcnUiIcon },
  { id: 'fontawesome', label: 'Font Awesome', icon: Flag },
  { id: 'redux', label: 'Redux', icon: ReduxIcon },
  { id: 'vite', label: 'Vite.js', icon: ViteJsIcon },
  { id: 'gitlab', label: 'GitLab', icon: GitlabIcon },
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
    "I'm a software engineer with 4 years of experience, specializing in frontend development. I build scalable and high-performance web applications with modern technologies. 🧠🚀",
  experiences: [
    {
      startDate: '2023',
      endDate: '',
      logo: '',
      company: 'Boost Credit',
      title: 'Software Engineer',
      // description:
      //   "Developed Boost PayFlex, enabling seamless payment flexibility for millions of merchants, while enhancing SME lending applications, internal management tools, and scalable admin panel templates. Focused on improving user experience, streamlining workflows, and optimizing application performance.",
      description: [
        'Developed ',
        {
          name: 'Boost PayFlex',
          url: 'https://myboost.co/feature/boost-payflex',
        },
        ' enabling seamless payment flexibility for millions of merchants, while enhancing ',
        {
          name: 'SME lending applications',
          url: 'https://myboost.co/credit/capital-by-boost-credit',
        },
        ' internal management tools, and scalable admin panel templates. Focused on improving user experience, streamlining workflows, and optimizing application performance.',
      ],
      techStack: [
        { id: 'react', label: 'React', icon: ReactIcon },
        { id: 'javascript', label: 'JavaScript', icon: JavascriptIcon },
        { id: 'python', label: 'Python', icon: PythonIcon },
        { id: 'tailwind', label: 'Tailwind', icon: TailwindCssIcon },
        { id: 'mui', label: 'MUI', icon: MaterialUiIcon },
      ],
    },
    {
      startDate: '2020',
      endDate: '2023',
      logo: '',
      company: 'Komaci Network',
      title: 'Software Engineer',
      // description:
      //   "Developed and improved Komaci (micro-influencing) and EZlife (social commerce, 250+ sellers, 210K+ transactions). Led UI/UX collaboration, built reusable components, designed APIs and database structures, and ensured seamless feature integrations. Worked on API consumption, dynamic state updates, and backend enhancements.",
      description: [
        'Developed and improved ',
        {
          name: 'Komaci',
          url: 'https://komacinetwork.com/my/brand',
        },
        ' (micro-influencing) and ',
        {
          name: 'EZlife',
          url: 'https://ezlive.biz/my-en',
        },
        ' (social commerce, 250+ sellers, 210K+ transactions). Led UI/UX collaboration, built reusable components, designed APIs and database structures, and ensured seamless feature integrations. Worked on API consumption, dynamic state updates, and backend enhancements.',
      ],
      techStack: [
        { id: 'react', label: 'React', icon: ReactIcon },
        { id: 'javascript', label: 'JavaScript', icon: JavascriptIcon },
        { id: 'python', label: 'Python', icon: PythonIcon },
        { id: 'tailwind', label: 'Tailwind', icon: TailwindCssIcon },
        { id: 'mui', label: 'MUI', icon: MaterialUiIcon },
      ],
    },
    {
      startDate: '2019',
      endDate: '2019',
      logo: '',
      company: 'Eboss Group Holdings',
      title: 'Intern, Software Developer',
      description: ['Minor enhancements & bugs fixing backend logic.'],
      techStack: [
        { id: 'react', label: 'React', icon: ReactIcon },
        { id: 'javascript', label: 'JavaScript', icon: JavascriptIcon },
        { id: 'python', label: 'Python', icon: PythonIcon },
        { id: 'tailwind', label: 'Tailwind', icon: TailwindCssIcon },
        { id: 'mui', label: 'MUI', icon: MaterialUiIcon },
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
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
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
