import { Course } from '@/types';

export const courses: Course[] = [
  {
    id: 'html',
    title: 'HTML & CSS Fundamentals',
    description: 'Master the building blocks of the web. Learn semantic HTML and modern CSS.',
    thumbnail: '/courses/html.jpg',
    level: 'Beginner',
    duration: '8 hours',
    lessons: 24,
    progress: 0,
  },
  {
    id: 'javascript',
    title: 'JavaScript Essentials',
    description: 'Learn modern JavaScript from basics to advanced concepts including ES6+.',
    thumbnail: '/courses/javascript.jpg',
    level: 'Beginner',
    duration: '12 hours',
    lessons: 36,
    progress: 0,
  },
  {
    id: 'react',
    title: 'React Development',
    description: 'Build interactive UIs with React. Hooks, Context, and modern patterns.',
    thumbnail: '/courses/react.jpg',
    level: 'Intermediate',
    duration: '16 hours',
    lessons: 42,
    progress: 0,
  },
  {
    id: 'nextjs',
    title: 'Next.js Mastery',
    description: 'Full-stack React development with App Router, Server Components & more.',
    thumbnail: '/courses/nextjs.jpg',
    level: 'Advanced',
    duration: '20 hours',
    lessons: 48,
    progress: 0,
  },
  {
    id: 'git',
    title: 'Git & GitHub',
    description: 'Version control mastery. Branching, merging, collaboration workflows.',
    thumbnail: '/courses/git.jpg',
    level: 'Beginner',
    duration: '6 hours',
    lessons: 18,
    progress: 0,
  },
  {
    id: 'pwa',
    title: 'Progressive Web Apps',
    description: 'Build app-like experiences with service workers, offline support & more.',
    thumbnail: '/courses/pwa.jpg',
    level: 'Intermediate',
    duration: '10 hours',
    lessons: 28,
    progress: 0,
  },
  {
    id: 'backend',
    title: 'Backend Basics',
    description: 'Server-side fundamentals. APIs, databases, authentication & deployment.',
    thumbnail: '/courses/backend.jpg',
    level: 'Intermediate',
    duration: '14 hours',
    lessons: 32,
    progress: 0,
  },
];

export const socialLinks = {
  instagram: 'https://instagram.com/kodixacademy',
  telegram: 'https://t.me/kodixacademy',
  whatsapp: 'https://wa.me/1234567890',
  youtube: 'https://youtube.com/@kodixacademy',
  github: 'https://github.com/kodixacademy',
};

export const stats = {
  students: '10,000+',
  courses: '15+',
  hours: '200+',
  rating: '4.9',
};
