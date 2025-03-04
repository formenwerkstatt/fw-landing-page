export type Menu = {
  title: string;
  path?: string;
  newTab: boolean;
};

export type Services = {
  title: string;
  paragraph: string;
  image: string;
  tags: string[];
  subServices: subService[];
};

export type subService = {
  title: string;
  description: string;
  path: string;
  iconName: string;
  paragraph: string;
  nestedList: bulletList[];
  cta: string;
};

type bulletList = {
  title: string;
  list: string[];
};

export type Article = {
  title: string;
  introduction: string;
  sections: bulletList[];
  benefits: string[];
};

export type Jobs = {
  title: string;
  paragraph: string;
  sectionTitle: string;
  sectionParagraph: string;
  sectionList: string[];
  ads: Ad[];
};

type Ad = {
  title: string;
  paragraph: string;
  content: bulletList[];
  cta: string;
};

export type Product = {
  id: string;
  var_id: string; // Keep for backward compatibility
  name: string;
  description: string;
  price: number;
  imgUrl: string[];
  videoUrl?: string[];
  stock: number;
  createdAt?: string;
  // Add these new fields
  variants?: ProductVariant[];
  isBundle?: boolean;
};

export type ProductVariant = {
  id: string;
  title: string;
  price: number;
  stock: number;
  isDefault?: boolean;
};


export type Review = {
  userName: string;
  rating: number;
  text: string;
  createdAt: string;
};

export type UserState = {
  id: string;
  cart: CartItem[];
  lastUpdated: string;
};

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
};

export type Order = {
  id: string;
  userId: string;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  status: OrderStatus;
  items: CartItem[];
  createdAt: string;
};

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "canceled";

export type Brand = {
  id: number;
  name: string;
  href: string;
  image: string;
  imageLight?: string;
};

export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
};
