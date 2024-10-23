import InteractiveBanner from "./InteractiveBanner";
import Loading from "../Common/Loading";
import { cn } from "@/utils/cn";
import { Suspense } from "react";

export default async function Hero() {
  return (
    <>
      <section
        id="home"
        className={cn(
          "relative z-10 overflow-hidden bg-white pt-[120px]",
          "dark:bg-gray-dark",
          // " md:pb-[100px] md:pt-[180px] xl:pb-[150px] xl:pt-[220px] 2xl:pb-[200px] 2xl:pt-[250px]",
        )}
      >
        <Suspense fallback={<Loading color="red-500" />}>
          <InteractiveBanner />
        </Suspense>
      </section>
    </>
  );
}
