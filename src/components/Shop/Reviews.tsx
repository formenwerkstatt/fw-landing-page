"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/index.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Product } from "@/types";
import { cn } from "@/utils/cn";

export default function Reviews({ product }: { product: Product }) {
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
      {product.reviews.map((review) => (
        <SwiperSlide key={review.userName} className=" pb-12">
          <div
            className={cn(
              "h-[30dvh] bg-gray-light dark:bg-gray-dark",
              "rounded-lg p-6 shadow-lg",
              "flex flex-col justify-between",
            )}
          >
            <p className="text-lg font-semibold">{review.userName}</p>
            <p>{review.text}</p>

            <div className="flex">
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
            <p>{review.createdAt}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
