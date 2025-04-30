import { ServiceType, TestimonialType } from '../types';

export const services: ServiceType[] = [
  {
    id: 1,
    title: 'Birth Chart Reading',
    description: 'A comprehensive analysis of your natal chart, revealing your cosmic blueprint and life path.',
    price: '$150',
    icon: 'zodiac',
  },
  {
    id: 2,
    title: 'Tarot Reading',
    description: 'Guidance through the ancient wisdom of tarot cards to illuminate your path and future possibilities.',
    price: '$95',
    icon: 'sparkles',
  },
  {
    id: 3,
    title: 'Relationship Compatibility',
    description: 'Discover the celestial connections between you and your partner or potential match.',
    price: '$180',
    icon: 'heart',
  },
  {
    id: 4,
    title: 'Career Path Analysis',
    description: 'Uncover your professional strengths and optimal career trajectory through the stars.',
    price: '$120',
    icon: 'milestone',
  },
  {
    id: 5,
    title: 'Solar Return Reading',
    description: 'An annual forecast based on your solar return chart, perfect for birthday insights.',
    price: '$110',
    icon: 'sun',
  },
  {
    id: 6,
    title: 'Astrology Coaching',
    description: 'Ongoing celestial guidance through regular sessions to navigate life\'s journey.',
    price: '$200/month',
    icon: 'compass',
  },
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Sophia R.',
    text: 'The birth chart reading was incredibly accurate and gave me profound insights about my life path. I\'ve gained clarity on decisions I\'ve been struggling with for months.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Michael T.',
    text: 'I was skeptical at first, but my career path analysis was spot on. It helped me recognize talents I hadn\'t fully embraced and guided me toward a more fulfilling profession.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'Emma L.',
    text: 'The relationship compatibility reading for my partner and I explained so many of our dynamics. We now understand each other on a much deeper level.',
    rating: 4,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    name: 'James K.',
    text: 'Monthly astrology coaching sessions have been transformative. I navigate challenges with more confidence and align my actions with cosmic energies.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];