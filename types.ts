export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  tag: string;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HERO = 'hero',
  COLLECTION = 'collection',
  ABOUT = 'about',
  LOCATION = 'location'
}