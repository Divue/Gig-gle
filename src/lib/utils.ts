import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
}

export const sampleCategories = [
  { id: '1', name: 'Web Development', icon: 'Code' },
  { id: '2', name: 'Graphic Design', icon: 'Palette' },
  { id: '3', name: 'Content Writing', icon: 'PenTool' },
  { id: '4', name: 'Digital Marketing', icon: 'TrendingUp' },
  { id: '5', name: 'Video Editing', icon: 'Video' },
  { id: '6', name: 'Translation', icon: 'Languages' },
];

export const sampleGigs = [
  {
    id: '1',
    title: 'Professional Website Development',
    description: 'I will create a modern, responsive website using React and Tailwind CSS.',
    price: 15000,
    category: 'Web Development',
    freelancerId: '1',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'Eye-catching Logo Design',
    description: 'Custom logo design that perfectly represents your brand identity.',
    price: 5000,
    category: 'Graphic Design',
    freelancerId: '2',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'SEO-Optimized Content Writing',
    description: 'Engaging and SEO-friendly content for your website or blog.',
    price: 3000,
    category: 'Content Writing',
    freelancerId: '3',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80',
  },
];

export const sampleFreelancers = [
  {
    id: '1',
    name: 'Priya Sharma',
    title: 'Full Stack Developer',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    rating: 4.8,
    hourlyRate: 2000,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    description: 'Experienced web developer specializing in modern JavaScript frameworks.',
  },
  {
    id: '2',
    name: 'Rahul Verma',
    title: 'UI/UX Designer',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
    rating: 4.9,
    hourlyRate: 1500,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    description: 'Creating beautiful and intuitive user interfaces for web and mobile applications.',
  },
  {
    id: '3',
    name: 'Anjali Patel',
    title: 'Content Strategist',
    skills: ['SEO', 'Copywriting', 'Content Planning', 'Editing'],
    rating: 4.7,
    hourlyRate: 1000,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    description: 'Expert in creating engaging and SEO-optimized content that drives results.',
  },
];