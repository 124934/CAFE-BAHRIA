export type PageRoute = 'home' | 'menu' | 'about' | 'gallery' | 'contact';

export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: MenuCategory;
  price: number;
  description: string;
  badge?: 'Popular' | "Chef's Special" | 'New' | 'Signature';
  image: string;
  prepTime?: string;
}

export type MenuCategory =
  | 'All'
  | 'Coffee & Hot Beverages'
  | 'Cold Beverages'
  | 'Breakfast'
  | 'Burgers & Sandwiches'
  | 'Pizza'
  | 'Pasta'
  | 'Steaks & Fast Food'
  | 'Desserts';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface ShowcaseMedia {
  id: string;
  title: string;
  caption: string;
  type: 'image' | 'video';
  url: string;
  posterUrl?: string;
  videoUrl?: string;
  targetPage?: PageRoute;
  badge: string;
}
