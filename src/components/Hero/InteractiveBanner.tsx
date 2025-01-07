"use client";
import { lazy, useState, Suspense } from "react";
import { cn } from "@/utils/cn";
import { useI18n } from "@/locales/client";
import Loading from "../Common/Loading";
import Image from "next/image";
import ControlButton from "./ControlButton";
import Link from "next/link";

const ThreeFiber = lazy(() => import("./ThreeFiber"));

const IMAGELIST = [
  {
    src: "/images/beratung.png",
    alt: "Beratung und Consulting für CNC-Fertigung",
  },
  {
    src: "/images/gallery/machine-dmg-02.jpg",
    alt: "DMG CNC Maschine in der Formenwerkstatt",
  },
  {
    src: "/images/gallery/macro-part-11.jpg",
    alt: "Präzise gefertigtes CNC-Teil im Detail",
  },
];

export default function InteractiveBanner() {
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(true);
  const [isHelpVisible, setIsHelpVisible] = useState<boolean>(false);
  const currentHour = new Date().getHours();
  const imageIndex = currentHour % IMAGELIST.length;
  const t = useI18n();

  return (
    <div
      className={cn(
        "relative h-[80dvh] w-full overflow-hidden",
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
          {/* Full-width image container */}
          <div className="absolute inset-0 w-full">
            <Image
              src={IMAGELIST[imageIndex].src}
              alt={IMAGELIST[imageIndex].alt}
              fill
              className="object-cover opacity-30"
              priority
              sizes="100vw"
            />
          </div>

          {/* Content overlay */}
          <div
            className={cn(
              "relative z-50 w-full py-12",
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
                  "hidden text-xl text-gray-light md:block md:text-2xl",
                  "animate-stagger-in",
                )}
              >
                {t("landingDescription")}
              </p>

              <div
                className={cn(
                  "mt-8 flex flex-col items-center justify-center gap-4 md:flex-row",
                  "animate-slide-in-left",
                )}
              >
                <Link
                  href="mailto:info@formenwerkstatt.de"
                  className="group rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-gray-light transition-all duration-300 hover:bg-blue-700"
                  aria-label="Send us an email"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@formenwerkstatt.de
                  </span>
                </Link>
                <Link
                  href="tel:+4906164913017"
                  className="group rounded-lg bg-green-500 px-6 py-3 text-lg font-semibold text-gray-light transition-all duration-300 hover:bg-green-700"
                  aria-label="Call us now"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +49 (0) 6164-913017
                  </span>
                </Link>
              </div>

              <button
                onClick={() => setIsOverlayVisible(false)}
                className={cn(
                  "mt-8 rounded-lg bg-gray-light/50 px-6 py-3",
                  "text-lg font-semibold text-gray-dark",
                  "transition-all duration-300 hover:bg-white",
                  "animate-slide-in-right",
                )}
                aria-label="View 3D Demo"
              >
                3D Demo
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      )}
    </div>
  );
}
