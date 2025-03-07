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
  const [isMediaModalOpen, setIsMediaModalOpen] = React.useState(false);
  const [selectedMedia, setSelectedMedia] = React.useState<string>("");
  const [isVideo, setIsVideo] = React.useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const pauseAllVideos = () => {
    // Find all videos in the swiper and pause them
    const videos = document.querySelectorAll(".mySwiper video");
    videos.forEach((video) => {
      if (video instanceof HTMLVideoElement) {
        video.pause();
      }
    });
  };

  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMediaModalOpen(false);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }
    };

    if (isMediaModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMediaModalOpen]);
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
        onSlideChange={pauseAllVideos}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`}>
            {image.includes(".mp4") ? (
              <button
                onClick={() => {
                  setSelectedMedia(image);
                  setIsVideo(true);
                  setIsMediaModalOpen(true);
                }}
                className="relative size-full"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  {/* Video thumbnail (could be first frame or custom thumbnail) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    {/* Play button overlay */}
                    <div className="rounded-full bg-white/25 p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    </div>
                  </div>
                  <video
                    className="h-full w-full object-cover"
                    preload="metadata"
                    muted
                  >
                    <source src={image} type="video/mp4" />
                  </video>
                </div>
              </button>
            ) : (
              <button
                onClick={() => {
                  setSelectedMedia(image);
                  setIsVideo(false);
                  setIsMediaModalOpen(true);
                }}
                className="relative size-full"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </button>
            )}
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

      {isMediaModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => {
            setIsMediaModalOpen(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }}
        >
          {/* Modal Content */}
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the content
          >
            {isVideo ? (
              <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-lg">
                <video
                  ref={videoRef}
                  className="h-full w-full"
                  controls
                  autoPlay
                  playsInline
                >
                  <source src={selectedMedia} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <Image
                src={selectedMedia}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="h-auto max-h-[85vh] w-auto max-w-[85vw] object-contain"
                priority
              />
            )}
            {/* Close button */}
            <button
              onClick={() => {
                setIsMediaModalOpen(false);
                if (videoRef.current) {
                  videoRef.current.pause();
                }
              }}
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
