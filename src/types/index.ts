export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string;
}

export interface StudioMetric {
  value: string;
  label: string;
  detail: string;
}

export interface PhilosophyPillar {
  title: string;
  description: string;
  keyAspect: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  location: string;
  year: string;
  area: string;
  type: string;
  testimonial: {
    quote: string;
    client: string;
    role: string;
  };
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
