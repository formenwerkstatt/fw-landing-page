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
    text: "Die CreativePlate bietet fantastische Anpassungsmöglichkeiten! Perfekt für mein Auto.",
  },
  {
    userName: "Jana Schmidt",
    rating: 4,
    text: "Sehr einfach zu personalisieren und robust verarbeitet. Tolle deutsche Qualität.",
  },
  {
    userName: "Michael Weber",
    rating: 5,
    text: "Die 24 anpassbaren Steckplätze bieten unendliche Möglichkeiten. Genau was ich suchte!",
  },
  {
    userName: "Emma Fischer",
    rating: 4,
    text: "Tolles Produkt zum Individualisieren meines Autos, aber etwas teurer als Standard-Halter.",
  },
  {
    userName: "Christian Braun",
    rating: 5,
    text: "Ich empfehle die CreativePlate jedem, der seinem Auto eine persönliche Note geben möchte.",
  },
  {
    userName: "Patricia Wagner",
    rating: 3,
    text: "Gute Idee und Verarbeitung, aber die Symbole könnten etwas größer sein.",
  },
  {
    userName: "Robert Schneider",
    rating: 4,
    text: "Hochwertige Konstruktion und die Montage war kinderleicht. Macht wirklich Spaß zu personalisieren!",
  },
  {
    userName: "Linda Becker",
    rating: 5,
    text: "Die Präzisionstechnik aus Deutschland ist beeindruckend. Hat meine Erwartungen übertroffen!",
  },
  {
    userName: "Jakob Thomas",
    rating: 4,
    text: "Die Emojis und Symbole sind ein Hit! Jeder fragt nach meinem personalisierten Kennzeichenhalter.",
  },
  {
    userName: "Barbara Hoffmann",
    rating: 5,
    text: "Formenwerkstatt hat mit der CreativePlate ein fantastisches Produkt erschaffen. Jeden Cent wert!",
  },
];

export default function Reviews() {
  return (
    <>
      <section className="container mb-8">
        <h3 className="mb-4 text-2xl font-semibold">Reviews</h3>
      </section>

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
                "h-[25dvh] bg-gray-light dark:bg-gray-dark",
                "rounded-lg px-8 shadow-lg",
                "flex flex-col justify-evenly",
              )}
            >
              <div className="flex items-center justify-between">
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
              {/* <p>{review.createdAt}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
