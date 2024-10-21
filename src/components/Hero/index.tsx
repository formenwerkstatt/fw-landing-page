import Link from "next/link";
import { getI18n } from "@/locales/server";
import InteractiveBanner from "./InteractiveBanner";
import { cn } from "@/utils/cn";

export default async function Hero() {
  const t = await getI18n();

  return (
    <>
      <section
        id="home"
        className={cn(
          "relative z-10 overflow-hidden bg-white pt-[140px]",
          "dark:bg-gray-dark",
          // " md:pb-[100px] md:pt-[180px] xl:pb-[150px] xl:pt-[220px] 2xl:pb-[200px] 2xl:pt-[250px]",
        )}
      >
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video> */}

        <InteractiveBanner />

        
      </section>
    </>
  );
}
