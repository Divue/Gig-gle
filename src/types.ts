export interface User {
  id: string;
  name: string;
  email: string;
  type: 'client' | 'freelancer';
  avatar?: string;
  skills?: string[];
  rating?: number;
}

export interface Gig {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  freelancerId: string;
  rating?: number;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}