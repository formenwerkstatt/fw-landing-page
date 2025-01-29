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
  callToAction: string;
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
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  stock: number;
};

export type Review = {
  id: string;
  productId: string;
  userId: string;
  username: string;
  rating: number;
  comment: string;
};

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
};

export type UserState = {
  id: string;
  cart: CartItem[];
  total: number;
  lastUpdated: Date;
};

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
