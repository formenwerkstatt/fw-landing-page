"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/index.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Product } from "@/types";
import { cn } from "@/utils/cn";
import dateToLocale from "@/utils/dateToLocale";

const REVIEWS = [
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

export default function Reviews() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      breakpoints={{
        300: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2.4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
      }}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper mb-24 pb-24"
    >
      {REVIEWS.map((review) => (
        <SwiperSlide key={review.userName} className=" pb-12">
          <div
            className={cn(
              "h-[30dvh] bg-gray-light dark:bg-gray-dark",
              "rounded-lg p-6 shadow-lg",
              "flex flex-col justify-between",
            )}
          >
            <div>
              <p className="text-lg font-semibold">{review.userName}</p>

              <div className="flex items-center ">
                <p className="mr-4 text-lg">{review.rating}/5</p>
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="relative">
                    <div className="text-xl text-gray-300">★</div>

                    <div
                      className={
                        "absolute inset-0 overflow-hidden text-xl text-primary"
                      }
                      style={{
                        width: `${Math.max(0, Math.min(100, (review.rating - (star - 1)) * 100))}%`,
                      }}
                    >
                      ★
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p>{review.text}</p>
            <p>{review.createdAt}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
