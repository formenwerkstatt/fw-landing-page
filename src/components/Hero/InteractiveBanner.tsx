"use client";
import { lazy, useState, Suspense } from "react";
import { cn } from "@/utils/cn";
import { useI18n } from "@/locales/client";
import Loading from "../Common/Loading";
import Image from "next/image";
import ControlButton from "./ControlButton";

const ThreeFiber = lazy(() => import("./ThreeFiber"));

const imageList = [
  "/images/beratung.png",
  "/images/gallery/machine-dmg-02.jpg",
  "/images/gallery/macro-part-11.jpg",
];

export default function InteractiveBanner() {
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(true);
  const [isHelpVisible, setIsHelpVisible] = useState<boolean>(false);

  const t = useI18n();
  return (
    <>
      <div
        className={cn(
          "relative h-[80dvh] w-full ",
          "bg-gradient-to-b from-slate-300 via-transparent to-slate-400",
        )}
      >
        {isOverlayVisible ? (
          <div
            className={cn(
              "absolute inset-0 z-10 size-full",
              "flex flex-col items-center justify-center gap-12 ",
              "text-center",
              "relative bg-gray-400/50 dark:bg-black/50",
            )}
          >
            <div
              id="img-wrapper"
              className="absolute inset-0 flex overflow-hidden opacity-10 "
            >
              {imageList.map((img, index) => (
                <div key={img} className="relative flex-1">
                  <Image
                    src={img}
                    alt={`HeroBackground-${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105  "
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Content overlay */}
            <div
              className={cn(
                "relative z-50 w-full py-12",
                "bg-gradient-to-t from-transparent via-primary/40 to-transparent",
              )}
            >
              <h1 className={cn(`mb-4 text-gray-light`, "text-4xl font-bold")}>
                {t("slogan")}
              </h1>
              <button
                onClick={() => setIsOverlayVisible(false)}
                className="animate-pulse rounded-lg bg-gray-light  px-6 py-3 text-lg font-semibold text-gray-dark duration-1000"
              >
                {t("cta")}
              </button>
            </div>
          </div>
        ) : (
          <Suspense fallback={<Loading />}>
            <ThreeFiber />
            {isHelpVisible && (
              <div
                className={cn(
                  "w-[200px] text-balance bg-white text-center text-black",
                  "rounded-lg p-4",
                  "absolute bottom-[10%] right-4  shadow-lg",
                )}
              >
                <p>{t("help")}</p>
              </div>
            )}
            {/* CONTROLS */}
            <ControlButton
              className="absolute right-4 top-4 size-10 "
              text="X"
              handleClick={() => setIsOverlayVisible(true)}
            />
            <ControlButton
              className="absolute bottom-4 right-4 size-10"
              text="?"
              handleClick={() => setIsHelpVisible(!isHelpVisible)}
            />
          </Suspense>
        )}
      </div>
    </>
  );
}
