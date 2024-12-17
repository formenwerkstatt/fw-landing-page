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
