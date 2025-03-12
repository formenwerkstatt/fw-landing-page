"use client";
import { lazy, useState, Suspense, useRef } from "react";
import { cn } from "@/utils/cn";
import { useI18n } from "@/locales/client";
import Loading from "../Common/Loading";
import Image from "next/image";
import ControlButton from "./ControlButton";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Mail, MapPin, PhoneCall } from "lucide-react";

const ThreeFiber = lazy(() => import("./ThreeFiber"));

// Define hero background images
const heroImages = [
  {
    id: 1,
    image: "/images/gallery/edm-frasen.png",
    alt: "Manufacturing Excellence",
  },
  {
    id: 2,
    image: "/images/gallery/macro-sparks.jpg",
    alt: "Precision Engineering",
  },
  {
    id: 3,
    image: "/images/gallery/macro-part-04.jpg",
    alt: "Quality Manufacturing",
  },
];

export default function InteractiveBanner() {
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(true);
  const [isHelpVisible, setIsHelpVisible] = useState<boolean>(false);
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const t = useI18n();

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
    <div
      className={cn(
        "relative min-h-[150vh] w-full overflow-hidden md:min-h-[100vh]",
        "bg-gradient-to-b from-slate-300 via-transparent to-slate-400",
      )}
    >
      {isOverlayVisible ? (
        <div
          className={cn(
            "absolute inset-0 z-10",
            "flex flex-col items-center justify-center",
            "bg-gray-400/50 dark:bg-black/50",
            "animate-fade-in",
          )}
        >
          {/* Swiper showcase section */}
          <div className="absolute inset-0 w-full">
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              effect="fade"
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              loop={true}
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="h-full w-full opacity-25"
            >
              {heroImages.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      priority
                      sizes="100vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Content overlay */}
          <div
            className={cn(
              "relative z-50 w-full py-8 md:py-12",
              "bg-gradient-to-t from-transparent via-primary/40 to-transparent",
            )}
          >
            <div className="container mx-auto px-4 text-center">
              <h1
                className={cn(
                  "mb-4 text-gray-light",
                  "text-3xl font-bold md:text-6xl",
                  "animate-pop-in",
                )}
              >
                {t("slogan")}
              </h1>
              <p
                className={cn(
                  "mx-auto max-w-2xl",
                  "text-sm text-gray-light md:text-xl lg:text-2xl",
                  "animate-stagger-in",
                )}
              >
                {t("landingDescription")}
              </p>

              {/* Main CTA Cards */}
              <div className="mt-8 grid animate-fade-in grid-cols-1 gap-6  md:grid-cols-2">
                {/* Shop Online Card */}
                {/* <div
                  className={cn(
                    "transform rounded-lg bg-gradient-to-br from-orange-600 to-orange-800 p-4 text-center text-white",
                    "shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:p-6",
                  )}
                >
                  <svg
                    className="mx-auto mb-4 h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <h3 className="mb-2 text-xl font-bold">Shop Online</h3>
                  <p className="mb-4 text-sm opacity-90">
                    Browse our quality products and order online
                  </p>
                  <Link
                    href="/shop"
                    className="inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-orange-700 hover:bg-gray-100"
                  >
                    Visit Shop
                  </Link>
                </div> */}

                {/* Contact Us Card */}
                <div
                  className={cn(
                    "transform rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-center text-white opacity-80",
                    "shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-100 hover:shadow-xl md:px-12 md:py-6",
                    "flex flex-col items-center justify-between",
                  )}
                >
                  <Mail className="h-10 w-10" />
                  <h3 className="mb-2 text-xl font-bold">
                    {t("contact.title")}
                  </h3>
                  <p className="mb-4 text-sm opacity-90">{t("contact.cta")}</p>
                  <div className="flex w-full flex-col gap-3">
                    <Link
                      href="mailto:info@formenwerkstatt.de"
                      className={cn(
                        "rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm",
                        "text-sm font-semibold text-white",
                        "border border-white/30",
                        "inline-flex items-center justify-center gap-2 transition-all",
                        "hover:bg-white/30 hover:shadow-md",
                      )}
                    >
                      <Mail className="h-4 w-4" /> info@formenwerkstatt.de
                    </Link>
                    <Link
                      href="tel:+4906164913017"
                      className={cn(
                        "rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm",
                        "text-sm font-semibold text-white",
                        "border border-white/30",
                        "inline-flex items-center justify-center gap-2 transition-all",
                        "hover:bg-white/30 hover:shadow-md",
                      )}
                    >
                      <PhoneCall className="h-4 w-4" /> +49 (0) 6164-913017
                    </Link>
                  </div>
                </div>

                {/* Find Us Card */}
                <Link
                  href="/contact"
                  className={cn(
                    "transform rounded-lg bg-gradient-to-br from-green-600 to-green-800 p-6 text-center text-white opacity-80",
                    " shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-100 hover:shadow-xl md:px-12 md:py-6",
                    "flex flex-col items-center justify-between",
                  )}
                >
                  <MapPin className="h-10 w-10" />
                  <h3 className="mb-2 text-xl font-bold">
                    {t("findUs.title")}
                  </h3>
                  <p className="mb-4 text-sm opacity-90">
                    {t("findUs.description")}
                  </p>
                  <p
                    className={cn(
                      "rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm",
                      "text-lg font-semibold text-white",
                      "border border-white/30",
                      "mt-2 inline-block",
                    )}
                  >
                    {t("findUs.cta")}
                  </p>
                </Link>
              </div>

              {/* 3D demo button */}
              <button
                onClick={() => setIsOverlayVisible(false)}
                className={cn(
                  "mt-8 rounded-lg bg-gray-light/50 px-6 py-2",
                  "text-sm font-semibold text-gray-dark",
                  "transition-all duration-300 hover:bg-white",
                  "animate-slide-in-right",
                )}
                aria-label="View 3D Demo"
              >
                Try 3D Demo
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Suspense fallback={<Loading />}>
          <div className="relative mt-[80px] h-[calc(100vh-80px)] w-full">
            <ThreeFiber />
            {isHelpVisible && (
              <div
                className={cn(
                  "absolute bottom-[10%] right-4",
                  "w-[200px] rounded-lg bg-white p-4 shadow-lg",
                  "text-balance text-center text-black",
                  "animate-fade-in",
                )}
              >
                <p>{t("help")}</p>
              </div>
            )}
            <ControlButton
              className="absolute right-4 top-4 size-10"
              text="X"
              handleClick={() => setIsOverlayVisible(true)}
              aria-label="Close 3D Demo"
            />
            <ControlButton
              className="absolute bottom-4 right-4 size-10"
              text="?"
              handleClick={() => setIsHelpVisible(!isHelpVisible)}
              aria-label="Show Help"
            />
          </div>
        </Suspense>
      )}
    </div>
  );
}
