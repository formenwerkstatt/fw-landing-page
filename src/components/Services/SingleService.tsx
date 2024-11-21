import { Services } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import ServiceIcon from "./ServiceIcon";
import { useState, useEffect, useRef } from "react";
import { useI18n } from "@/locales/client";

export default function SingleService({ service }: { service: Services }) {
  const { title, image, paragraph, subServices } = service;

  const [overlayActive, setOverlayActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [detailsActive, setDetailsActive] = useState(false);

  const serviceRef = useRef<HTMLDivElement>(null);

  const t = useI18n();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 },
    );

    if (serviceRef.current) observer.observe(serviceRef.current);

    return () => {
      if (serviceRef.current) observer.unobserve(serviceRef.current);
    };
  }, []);

  return (
    <div
      ref={serviceRef}
      className={cn(
        "group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark",
        "translate-y-10 opacity-0 transition-all duration-700",
        isVisible && "translate-y-0 cursor-pointer opacity-100",
      )}
    >
      <div
        onClick={() => setOverlayActive((prev) => !prev)}
        onMouseEnter={() => setDetailsActive(true)}
        onMouseLeave={() => setDetailsActive(false)}
        className={cn(
          "relative block h-[75dvh] w-full overflow-hidden",
          "scale-95 opacity-0 transition-all duration-700",
          isVisible && "scale-100 opacity-100",
        )}
      >
        <Image
          src={image}
          alt="Service Image"
          fill
          className="object-cover opacity-50 transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className={cn(
            "absolute bg-gradient-to-r from-slate-950 to-transparent p-6",
            "transition-all duration-700",
            isVisible && "animate-slide-in-left",
          )}
        >
          <h3 className="animate-fade-in mb-4 border-b border-body-color text-5xl font-bold text-white lg:text-7xl">
            {title}
          </h3>
          <p className="animate-fade-in-delayed mb-6 text-2xl font-medium text-white lg:text-3xl">
            {paragraph}
          </p>
        </div>
        {detailsActive && (
          <div
            className={cn(
              "absolute right-0 top-2/3 w-1/2  rounded-xl px-6 py-6",
              "bg-gradient-to-r from-primary/95 to-transparent",
              "animate-slide-in-right transition-all duration-700",
            )}
          >
            <span className="animate-pop-in text-xl font-medium text-white transition-transform duration-300  lg:text-2xl">
              {t("details")}
            </span>
          </div>
        )}
      </div>

      {overlayActive && (
        <div
          className="animate-fade-in absolute inset-0 z-30 flex items-center justify-center bg-white bg-opacity-60 transition-opacity duration-500 dark:bg-opacity-50"
          onClick={() => setOverlayActive(false)}
        >
          <div className="w-11/12 px-4 md:w-4/5 lg:w-3/4">
            <div className="animate-stagger-in flex flex-wrap justify-center gap-4">
              {subServices.map((subService, index) => (
                <Link
                  key={subService.title}
                  href={`/services${subService.path}`}
                  className={cn(
                    "flex items-center gap-4 rounded-xl bg-primary px-4 py-3 text-lg text-white transition-transform duration-300 hover:scale-105 md:px-6 md:py-4",
                    `delay-${index * 200}ms`,
                  )}
                >
                  <ServiceIcon
                    iconname={subService.iconName}
                    className="size-8 transition-transform duration-300 sm:size-10 md:size-16 lg:size-24"
                  />
                  <span className="text-center">{subService.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
