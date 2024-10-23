"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

export default function Gallery({
  serviceTitle,
  images,
}: {
  serviceTitle: string;
  images: string[];
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="relative pb-12">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto h-[100vh] max-w-[full] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <Swiper
                style={
                  {
                    "--swiper-pagination-color": "#fff",
                    "--swiper-navigation-color": "#fff",
                  } as React.CSSProperties
                }
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={image + index}>
                    <Image
                      src={image}
                      alt={serviceTitle + "-big-swiper-image"}
                      width={768}
                      height={432}
                      className="h-full w-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mt-4"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={image + index}>
                    <Image
                      src={image}
                      alt={serviceTitle + "-small-swiper-image"}
                      width={768}
                      height={432}
                      className="h-full w-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
}
