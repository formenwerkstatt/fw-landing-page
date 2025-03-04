"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/index.css";
import { Pagination, Autoplay } from "swiper/modules";
import { cn } from "@/utils/cn";
import dateToLocale from "@/utils/dateToLocale";

const REVIEWS = [
  {
    userName: "Johannes Müller",
    rating: 5,
    text: "Ausgezeichnete Qualität und Handwerkskunst!",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Jana Schmidt",
    rating: 4,
    text: "Sehr robust und gut verarbeitet.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Michael Weber",
    rating: 5,
    text: "Perfekt für die Bedürfnisse meiner Werkstatt.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Emma Fischer",
    rating: 4,
    text: "Großartiges Produkt, aber etwas teuer.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Christian Braun",
    rating: 5,
    text: "Ich empfehle diese Werkbank sehr.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Patricia Wagner",
    rating: 3,
    text: "Gute Qualität, aber mit kleinen Problemen.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Robert Schneider",
    rating: 4,
    text: "Solide Konstruktion und einfach zu montieren.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Linda Becker",
    rating: 5,
    text: "Hat meine Erwartungen übertroffen!",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Jakob Thomas",
    rating: 4,
    text: "Sehr funktional und gut durchdacht.",
    createdAt: dateToLocale(new Date()),
  },
  {
    userName: "Barbara Hoffmann",
    rating: 5,
    text: "Fantastisches Produkt, jeden Cent wert.",
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
