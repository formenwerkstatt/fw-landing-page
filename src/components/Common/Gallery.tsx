"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

interface GalleryProps {
  images: string[];
  showBg?: boolean;
  autoplay?: boolean;
  centeredSlides?: boolean;
}

export default function Gallery({
  images,
  showBg = true,
  autoplay = true,
}: GalleryProps) {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string>("");
  const swiperRef = useRef<SwiperType | null>(null);

  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageModalOpen(false);
      }
    };

    if (isImageModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isImageModalOpen]);

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
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
              }
            : false
        }
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`}>
            <button
              onClick={() => {
                setSelectedImage(image);
                setIsImageModalOpen(true);
              }}
              className="relative size-full"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </button>
          </SwiperSlide>
        ))}
        {autoplay && (
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        )}
      </Swiper>

      {showBg && (
        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      )}

      {/* Custom Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setIsImageModalOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-auto max-w-[85vw] object-contain"
              priority
            />
            {/* Close button */}
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
