export interface Benefit {
  id: string;
  iconName: string; // Will match Lucide icon keys dynamically
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  badge: string;
  priceEstimate: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  petName: string;
  petBreed: string;
  comment: string;
  rating: number;
  avatarUrl: string;
  ownerReply?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
}
