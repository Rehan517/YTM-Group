import type { Testimonial } from '@/types';

export const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Business Owner',
    company: 'Johnson Consulting Ltd',
    avatar: '/images/testimonials/sarah-johnson.jpg',
    content: 'YTM Group transformed our financial planning completely. Their expert guidance helped us increase our revenue by 40% in just 12 months. The team is professional, knowledgeable, and truly cares about their clients success.',
    rating: 5,
    service: 'Financial Planning',
    date: '2024-01-15',
    verified: true,
    featured: true,
    location: 'London, UK'
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Property Developer',
    company: 'Chen Developments',
    content: 'The property investment advice from YTM Group was invaluable. They helped us secure financing for three major projects and their market insights saved us from costly mistakes. Highly recommended!',
    rating: 5,
    service: 'Property Services',
    date: '2024-02-08',
    verified: true,
    location: 'Manchester, UK'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    title: 'CEO',
    company: 'Thompson & Associates',
    avatar: '/images/testimonials/emma-thompson.jpg',
    content: 'Outstanding legal services! The team at YTM Group handled our complex merger with expertise and attention to detail. Their legal guidance was crucial for our successful acquisition.',
    rating: 5,
    service: 'Legal Services',
    date: '2024-01-22',
    verified: true,
    featured: true,
    location: 'Birmingham, UK'
  },
  {
    id: '4',
    name: 'James Wilson',
    title: 'Restaurant Owner',
    company: 'Wilson Restaurants',
    content: 'YTM Group helped us secure the business loan we needed to expand our restaurant chain. Their lending specialists made the process smooth and stress-free. Great service!',
    rating: 4.5,
    service: 'Business Lending',
    date: '2024-02-14',
    verified: true,
    location: 'Liverpool, UK'
  },
  {
    id: '5',
    name: 'Dr. Priya Patel',
    title: 'Medical Practice Owner',
    company: 'Patel Medical Group',
    avatar: '/images/testimonials/priya-patel.jpg',
    content: 'The business insurance recommendations from YTM Group provided comprehensive coverage for our medical practice. Their risk assessment was thorough and their rates were competitive.',
    rating: 4.5,
    service: 'Business Insurance',
    date: '2024-01-30',
    verified: true,
    location: 'Leeds, UK'
  },
  {
    id: '6',
    name: 'Robert Davies',
    title: 'Manufacturing Director',
    company: 'Davies Manufacturing',
    content: 'YTM Groups business advisory services helped us streamline operations and improve efficiency by 25%. Their strategic insights were exactly what our company needed.',
    rating: 5,
    service: 'Business Advisory',
    date: '2024-02-05',
    verified: true,
    featured: true,
    location: 'Cardiff, UK'
  },
  {
    id: '7',
    name: 'Lisa Anderson',
    title: 'Startup Founder',
    company: 'TechStart Solutions',
    content: 'As a first-time entrepreneur, YTM Groups guidance was invaluable. They helped with everything from business planning to securing initial funding. Couldnt have done it without them!',
    rating: 5,
    service: 'Business Advisory',
    date: '2024-02-12',
    verified: true,
    location: 'Edinburgh, UK'
  },
  {
    id: '8',
    name: 'David Smith',
    title: 'Retail Manager',
    company: 'Smith Retail Group',
    content: 'Professional and reliable service. The financial planning team helped us optimize our cash flow and plan for expansion. Very satisfied with the results.',
    rating: 4,
    service: 'Financial Planning',
    date: '2024-01-18',
    verified: true,
    location: 'Bristol, UK'
  }
];

export const featuredTestimonials = sampleTestimonials.filter(t => t.featured);

export const testimonialsByService = (service: string) => 
  sampleTestimonials.filter(t => t.service === service);

export const getAverageRating = (): number => {
  const total = sampleTestimonials.reduce((sum, t) => sum + t.rating, 0);
  return Math.round((total / sampleTestimonials.length) * 10) / 10;
};

export const getTotalReviews = (): number => sampleTestimonials.length; 