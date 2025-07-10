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

// Personal
export const personalDetails = {
  name: 'Denesh',
  initials: 'DN',
  position: 'Frontend Engineer',
  location: 'Cheras, Kuala Lumpur, Malaysia',
  greetMessage: "Hi, I'm Denesh!",
  description:
    "I'm a software engineer with 4 years of experience, specializing in frontend development. I build scalable and high-performance web applications with modern technologies. 🧠🚀",
};

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
