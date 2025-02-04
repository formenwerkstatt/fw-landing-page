import dateToLocale from "@/utils/dateToLocale";
import { allImages } from "@/data/galleryImages";

function pickRandomPics() {
  const randomPics = [];

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * allImages.length);
    randomPics.push(allImages[randomIndex]);
  }
  return randomPics;
}
const reviews = [
  {
    userName: "John Doe",
    rating: 5,
    text: "Excellent quality and craftsmanship!",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Jane Smith",
    rating: 4,
    text: "Very sturdy and well-made.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Mike Johnson",
    rating: 5,
    text: "Perfect for my workshop needs.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Emily Davis",
    rating: 4,
    text: "Great product, but a bit expensive.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Chris Brown",
    rating: 5,
    text: "Highly recommend this workbench.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Patricia Wilson",
    rating: 3,
    text: "Good quality, but had some minor issues.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Robert Taylor",
    rating: 4,
    text: "Solid construction and easy to assemble.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Linda Anderson",
    rating: 5,
    text: "Exceeded my expectations!",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "James Thomas",
    rating: 4,
    text: "Very functional and well-designed.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Barbara Jackson",
    rating: 5,
    text: "Fantastic product, worth every penny.",
    createdAt: dateToLocale(new Date()),
  },
];

export const mockProducts = [
  {
    name: "Classic Workbench",
    imgUrl: pickRandomPics(),
    description: "Sturdy traditional workbench with solid wood construction",
    reviews: reviews,
  },
  {
    name: "Professional Tool Cabinet",
    imgUrl: pickRandomPics(),
    description: "Heavy-duty storage solution with multiple drawers",
    reviews: reviews,
  },
  {
    name: "Custom Workshop Table",
    imgUrl: pickRandomPics(),
    description: "Adjustable height table perfect for woodworking",
    reviews: reviews,
  },
];
