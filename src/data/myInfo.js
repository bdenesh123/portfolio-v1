import { Briefcase, FolderOpen, User } from 'lucide-react';

// Personal

export const personalDetails = {
  name: 'Denesh',
  initials: 'DN',
  position: 'Frontend Engineer',
  location: 'Cheras, Kuala Lumpur, Malaysia',
  greetMessage: "Hi, I'm Denesh!",
};

// Layout
export const navItems = [
  { name: 'About', href: '/profile', icon: User },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
];
