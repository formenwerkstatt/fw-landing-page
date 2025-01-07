"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { subService } from "@/types";
import RelatedPost from "@/components/Services/RelatedPost";

interface SwiperRelatedPostsProps {
  relatedPosts: subService[];
}

export default function SwiperRelatedPosts({
  relatedPosts,
}: SwiperRelatedPostsProps) {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    _s: SwiperType,
    time: number,
    progress: number,
  ): void => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress),
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <div
        className="mx-auto h-[50dvh] max-w-[full] overflow-hidden rounded-md"
        data-wow-delay=".15s"
      >
        <Swiper
          direction="vertical"
          slidesPerView={3}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          {relatedPosts.map((service, index) => (
            <SwiperSlide key={`${service.title}-${index}`}>
              <RelatedPost
                title={service.title}
                iconName={service.iconName}
                path={`/services${service.path}`}
                description={service.description}
              />
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}
