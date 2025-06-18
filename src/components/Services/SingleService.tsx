import { Services } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import ServiceIcon from "./ServiceIcon";
import { useState, useEffect, useRef } from "react";
import { useI18n } from "@/locales/client";
import { useRouter } from "next/navigation";

export default function SingleService({ service }: { service: Services }) {
  const { title, image, paragraph, subServices } = service;
  const router = useRouter();

  const [overlayActive, setOverlayActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
        "group relative overflow-hidden rounded-xs bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark",
        "translate-y-10 opacity-0 transition-all duration-700",
        isVisible && "translate-y-0 cursor-pointer opacity-100",
      )}
    >
      <div
        onClick={() => {
          if (subServices.length > 1) {
            setOverlayActive((prev) => !prev);
          } else {
            router.push("/services/" + subServices[0].path);
          }
        }}
        className={cn(
          "relative block h-[80dvh] w-full overflow-hidden",
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
            "absolute bg-linear-to-r from-slate-950 to-transparent p-6",
            "transition-all duration-700",
            isVisible && "animate-slide-in-left",
          )}
        >
          <h3 className="mb-4 animate-fade-in border-b border-body-color text-5xl font-bold text-white lg:text-7xl">
            {title}
          </h3>
          <p className="mb-6 animate-fade-in-delayed text-2xl font-medium text-white lg:text-3xl">
            {paragraph}
          </p>
        </div>
        <div
          className={cn(
            "absolute right-0 top-2/3 w-1/2  rounded-xl px-6 py-6",
            "bg-linear-to-r from-primary/95 to-transparent",
            isVisible && "animate-slide-in-right transition-all duration-1000",
          )}
        >
          <span className=" text-xl font-medium text-white  lg:text-2xl">
            {t("details")}
          </span>
        </div>
      </div>

      {overlayActive && (
        <div
          className="absolute inset-0 z-30 flex animate-fade-in items-center justify-center bg-white bg-opacity-60 transition-opacity duration-500 dark:bg-opacity-50"
          onClick={() => setOverlayActive(false)}
        >
          <div className="w-full px-4 md:w-4/5 lg:w-3/4">
            <div className="flex animate-stagger-in flex-wrap justify-center gap-4">
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
