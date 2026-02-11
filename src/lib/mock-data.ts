export interface Business {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  rating: number;
  status: 'Open' | 'Closed';
  logo: string;
  image: string;
  featured?: boolean;
}

export const NAV_LINKS = [
  { name: 'Discover', href: '#' },
  { name: 'Categories', href: '#' },
  { name: 'How it Works', href: '#' },
  { name: 'Pricing', href: '#' },
];

export const CATEGORIES = [
  { name: 'Machinery', icon: 'Settings' },
  { name: 'Textile', icon: 'Shirt' },
  { name: 'Agriculture', icon: 'Sprout' },
  { name: 'Electronics', icon: 'Cpu' },
  { name: 'Food & Bev', icon: 'Utensils' },
  { name: 'Chemicals', icon: 'FlaskConical' },
  { name: 'Auto', icon: 'Car' },
  { name: 'Construction', icon: 'Hammer' },
];

export const PREMIUM_BRANDS = [
  { name: 'R-R-A-K', logo: 'https://placehold.co/100x100/png?text=RRAK' },
  { name: 'Bio-fuel', logo: 'https://placehold.co/100x100/png?text=BIO' },
  { name: 'Heritage', logo: 'https://placehold.co/100x100/png?text=HER' },
  { name: 'NexGen', logo: 'https://placehold.co/100x100/png?text=NEX' },
  { name: 'Alpha', logo: 'https://placehold.co/100x100/png?text=ALP' },
  { name: 'Vortex', logo: 'https://placehold.co/100x100/png?text=VOR' },
];

export const MOCK_BUSINESSES: Business[] = [
  {
    id: '1',
    name: 'Precision Engg',
    category: 'Industry',
    location: 'Mumbai, MH',
    description: 'High-precision industrial machinery components.',
    rating: 4.9,
    status: 'Open',
    logo: 'https://placehold.co/100x100/png?text=P',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: '2',
    name: 'Silk Route',
    category: 'Textile',
    location: 'Surat, GJ',
    description: 'Premium silk and textile manufacturing.',
    rating: 4.8,
    status: 'Open',
    logo: 'https://placehold.co/100x100/png?text=S',
    image: 'https://images.unsplash.com/photo-1524292332407-39327348911b?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: '3',
    name: 'Agro Pro',
    category: 'Agriculture',
    location: 'Pune, MH',
    description: 'Advanced agricultural solutions and seeds.',
    rating: 4.7,
    status: 'Closed',
    logo: 'https://placehold.co/100x100/png?text=A',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    featured: false,
  },
];

export const FAQ_DATA = [
  {
    question: "How do I list my business?",
    answer: "You can click on the 'List Business' button, create an account, and fill in your details."
  },
  {
    question: "What is the cost of listing?",
    answer: "Starting from free basic listings to premium verified plans for higher visibility."
  },
  {
    question: "How to contact support?",
    answer: "Visit our help center or use the 24/7 chat support available on your dashboard."
  }
];

export const TESTIMONIALS = [
  {
    name: 'Rohan Sharma',
    role: 'Owner, RS Textiles',
    content: 'BONC transformed my business outreach. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?u=rohan',
  },
  {
    name: 'Anita Desai',
    role: 'CEO, Foodies Inc',
    content: 'The most intuitive platform for B2B networking.',
    avatar: 'https://i.pravatar.cc/150?u=anita',
  },
];
