import { MenuItem, ShowcaseMedia } from '../types';
import mainMenuImg from '../assets/images/regenerated_image_1789281488380.jpg';
import coffeeSteakImg from '../assets/images/regenerated_image_1789281491259.jpg';
import cafeLogoImg from '../assets/images/regenerated_image_1789282708688.png';
import cafeOverviewImg from '../assets/images/cafe_bahria_overview_poster_1789283410804.jpg';
import ourInfoImg from '../assets/images/our_info_card_1789284548616.jpg';

export const CAFE_INFO = {
  name: 'Cafe Bahria',
  tagline: 'Good Food. Great Coffee. Better Moments.',
  taglineUrdu: 'عمدہ کھانا، بہترین کافی، یادگار لمحات',
  owner: 'Rehan Qaiser',
  phone: '0309-9911227',
  whatsappRaw: '03099911227',
  whatsappIntl: '+923099911227',
  whatsappNumberOnly: '923099911227',
  address: 'Hospital Commercial, Bahria Town, Karachi, Pakistan',
  landmark: 'Hospital Commercial, Bahria Town Karachi (کیفے بحریہ)',
  city: 'Karachi, Pakistan',
  logo: cafeLogoImg,
  overviewPoster: cafeOverviewImg,
  ourInfoImage: ourInfoImg,
  timings: {
    weekdays: '10:00 AM – 01:00 AM',
    weekends: '10:00 AM – 02:00 AM',
  },
  email: 'info@cafebahria.pk',
};

// Core showcase items: Main Menu, Coffee Cuisine Steak, and Our Info
export const SHOWCASE_ITEMS: ShowcaseMedia[] = [
  {
    id: 'media-1',
    title: 'Main Menu Cafe Bahria',
    caption: 'Wood-fired pizzas, gourmet smash burgers, artisan pastas & savory appetizers prepared fresh to order.',
    type: 'image',
    url: mainMenuImg,
    targetPage: 'menu',
    badge: 'Our Culinary Spread',
  },
  {
    id: 'media-2',
    title: 'Coffee Cuisine Steak',
    caption: 'Specialty single-origin espresso roasts, sizzling master-cut ribeye steaks and chef-crafted cuisine.',
    type: 'image',
    url: coffeeSteakImg,
    targetPage: 'menu',
    badge: 'Specialty Sizzlers & Brews',
  },
  {
    id: 'media-our-info',
    title: 'Our Info',
    caption: 'Hospital Commercial, Bahria Town Karachi. Coffee, Steaks, Gourmet Cuisine & Hospitality. Contact: 0309-9911227.',
    type: 'image',
    url: ourInfoImg,
    posterUrl: ourInfoImg,
    targetPage: 'about',
    badge: 'Hospital Commercial',
  },
];

// Helper to generate WhatsApp links
export const getWhatsAppOrderLink = (text?: string): string => {
  const defaultText = 'Hello Cafe Bahria, I would like to know more about your menu and place an order.';
  const encoded = encodeURIComponent(text || defaultText);
  return `https://wa.me/${CAFE_INFO.whatsappNumberOnly}?text=${encoded}`;
};

export const MENU_ITEMS: MenuItem[] = [
  // Coffee & Hot Beverages
  {
    id: 'c-1',
    name: 'Spanish Latte (Signature Hot)',
    urduName: 'اسپینش لاٹے',
    category: 'Coffee & Hot Beverages',
    price: 680,
    description: 'Double espresso shot with steamed condensed milk and creamy velvet foam.',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    prepTime: '5-7 mins',
  },
  {
    id: 'c-2',
    name: 'Bahria Caramel Macchiato',
    urduName: 'کیریمل میکیاٹو',
    category: 'Coffee & Hot Beverages',
    price: 720,
    description: 'Freshly steamed milk with vanilla-flavored syrup, marked with espresso and caramel drizzle.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80',
    prepTime: '5 mins',
  },
  {
    id: 'c-3',
    name: 'Artisanal Cappuccino',
    urduName: 'کیپوچینو',
    category: 'Coffee & Hot Beverages',
    price: 590,
    description: 'Rich dark espresso topped with thick micro-textured milk foam and cocoa dusting.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
    prepTime: '4 mins',
  },
  {
    id: 'c-4',
    name: 'Royal Karak Chai & Green Tea',
    urduName: 'شاہی کڑک چائے',
    category: 'Coffee & Hot Beverages',
    price: 380,
    description: 'Slow-simmered rich Pakistani karak chai infused with cardamom and saffron essence.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    prepTime: '6 mins',
  },

  // Cold Beverages
  {
    id: 'cb-1',
    name: 'Iced Spanish Latte',
    urduName: 'آئسڈ اسپینش لاٹے',
    category: 'Cold Beverages',
    price: 740,
    description: 'Chilled condensed milk blend poured over cracked ice and bold double espresso.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80',
    prepTime: '4 mins',
  },
  {
    id: 'cb-2',
    name: 'Lotus Biscoff Shake',
    urduName: 'لوٹس بسکوف شیک',
    category: 'Cold Beverages',
    price: 890,
    description: 'Vanilla cream gelato blended with pure Lotus Biscoff spread, topped with crunchy biscuits.',
    badge: "Chef's Special",
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    prepTime: '6 mins',
  },
  {
    id: 'cb-3',
    name: 'Electric Mint Lemonade',
    urduName: 'منٹ لیمونیڈ',
    category: 'Cold Beverages',
    price: 490,
    description: 'Fresh garden mint, crushed ice, zesty lemon juice and sparkling club soda.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    prepTime: '3 mins',
  },

  // Breakfast
  {
    id: 'b-1',
    name: 'Bahria Grand English Breakfast',
    urduName: 'گرینڈ انگلش بریک فاسٹ',
    category: 'Breakfast',
    price: 1350,
    description: 'Two eggs cooked your way, grilled sausages, sautéed mushrooms, baked beans, hash brown & sourdough toast.',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80',
    prepTime: '12-15 mins',
  },
  {
    id: 'b-2',
    name: 'Stuffed French Brioche Toast',
    urduName: 'فرینچ ٹوسٹ',
    category: 'Breakfast',
    price: 980,
    description: 'Thick-cut golden brioche stuffed with Nutella or cream cheese, served with wild berry compote & maple syrup.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80',
    prepTime: '10 mins',
  },

  // Burgers & Sandwiches
  {
    id: 'burg-1',
    name: 'The Bahria Gourmet Smash Burger',
    urduName: 'اسپیشل اسمیش برگر',
    category: 'Burgers & Sandwiches',
    price: 1290,
    description: 'Double Angus beef patties, melted sharp cheddar, caramelized onions, house truffle aioli on toasted brioche.',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    prepTime: '12 mins',
  },
  {
    id: 'burg-2',
    name: 'Crispy Nashville Buttermilk Chicken Burger',
    urduName: 'کرسپی چکن برگر',
    category: 'Burgers & Sandwiches',
    price: 1150,
    description: 'Crispy fried chicken thigh glazed with spicy honey glaze, purple cabbage slaw and pickled gherkins.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
    prepTime: '10 mins',
  },
  {
    id: 'burg-3',
    name: 'Bahria Club Supreme Sandwich',
    urduName: 'کلب سینڈوچ سپریم',
    category: 'Burgers & Sandwiches',
    price: 990,
    description: 'Triple-layered toasted bread with shredded roasted chicken, fried egg, cheese, lettuce and herb mayo. Served with fries.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    prepTime: '10 mins',
  },

  // Pizza
  {
    id: 'p-1',
    name: 'Bahria Tikka Royale Pizza',
    urduName: 'تکہ رائل پیزا',
    category: 'Pizza',
    price: 1550,
    description: 'Char-grilled chicken tikka chunks, capsicum, onions, mozzarella, spicy tomato reduction on hand-tossed crust.',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    prepTime: '15 mins',
  },
  {
    id: 'p-2',
    name: 'Pepperoni Classic & Truffle Cheese',
    urduName: 'پیپرونی کلاسک پیزا',
    category: 'Pizza',
    price: 1650,
    description: 'Crisp beef pepperoni slices, Italian herbs, generous mozzarella and a light drizzle of white truffle oil.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    prepTime: '15 mins',
  },

  // Pasta
  {
    id: 'pasta-1',
    name: 'Creamy Fettuccine Alfredo with Grilled Chicken',
    urduName: 'فیٹوچینی الفریڈو',
    category: 'Pasta',
    price: 1390,
    description: 'Tender fettuccine tossed in rich garlic parmesan cream sauce, topped with herb-crusted grilled chicken breast.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80',
    prepTime: '12 mins',
  },
  {
    id: 'pasta-2',
    name: 'Fiery Penne Arrabbiata',
    urduName: 'پینی ارابیاتا',
    category: 'Pasta',
    price: 1190,
    description: 'Al dente penne in a spicy San Marzano tomato sauce with garlic, chili flakes, fresh basil and parmesan.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=600&q=80',
    prepTime: '10 mins',
  },

  // Steaks & Fast Food
  {
    id: 'st-1',
    name: 'Cafe Bahria Prime Ribeye Steak',
    urduName: 'پرائم رب آئی اسٹیک',
    category: 'Steaks & Fast Food',
    price: 2450,
    description: 'Char-grilled prime beef cut basted in garlic-rosemary butter. Served with creamy mash, grilled vegetables & mushroom pepper sauce.',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    prepTime: '18-20 mins',
  },
  {
    id: 'st-2',
    name: 'Grilled Herb Chicken Steak with Moroccan Sauce',
    urduName: 'گرلڈ چکن اسٹیک',
    category: 'Steaks & Fast Food',
    price: 1750,
    description: 'Juicy marinated chicken breasts grilled over charcoal, smothered in creamy mildly spiced Moroccan sauce with sautéed veggies.',
    badge: "Chef's Special",
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80',
    prepTime: '15 mins',
  },
  {
    id: 'st-3',
    name: 'Truffle & Cheese Loaded Fries',
    urduName: 'چیزی لوڈڈ فرائز',
    category: 'Steaks & Fast Food',
    price: 850,
    description: 'Golden crispy skin-on fries smothered in hot cheddar cheese sauce, jalapeño slices, minced chicken and garlic ranch.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    prepTime: '8 mins',
  },

  // Desserts
  {
    id: 'd-1',
    name: 'Warm Belgian Molten Lava Cake',
    urduName: 'مولٹن لاوا کیک',
    category: 'Desserts',
    price: 890,
    description: 'Freshly baked dark chocolate cake with an oozing Belgian ganache core, paired with artisanal French vanilla gelato.',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    prepTime: '10 mins',
  },
  {
    id: 'd-2',
    name: 'Basque Burnt San Sebastian Cheesecake',
    urduName: 'سان سیباسٹین چیز کیک',
    category: 'Desserts',
    price: 850,
    description: 'Silky, caramelized crust with a molten creamy center, served warm with molten Belgian milk chocolate pour.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=600&q=80',
    prepTime: '5 mins',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Hamza Farooqi',
    role: 'Bahria Town Karachi Resident',
    comment: 'Cafe Bahria has completely raised the standard of dining in Bahria Town Karachi. The steaks are succulent and the Spanish Latte is unrivaled!',
    rating: 5,
  },
  {
    name: 'Dr. Ayesha Malik',
    role: 'Food Critic & Local Resident',
    comment: 'The ambiance is warm, luxurious yet cozy. Ordering on WhatsApp is seamless, and their Nashville Crispy Burger is an absolute masterpiece.',
    rating: 5,
  },
  {
    name: 'Bilal Siddiqui',
    role: 'Coffee Enthusiast',
    comment: 'Finally a proper artisanal coffee spot in Bahria Town with genuine barista talent. The 2-second slider on the site makes choosing so tempting!',
    rating: 5,
  },
];
