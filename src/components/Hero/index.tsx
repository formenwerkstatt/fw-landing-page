import InteractiveBanner from "./InteractiveBanner";
import { cn } from "@/utils/cn";

export default async function Hero() {
  return (
    <>
      <section
        id="home"
        className={cn(
          "relative z-10 overflow-hidden bg-white ",
          "dark:bg-gray-dark",
          // " md:pb-[100px] md:pt-[180px] xl:pb-[150px] xl:pt-[220px] 2xl:pb-[200px] 2xl:pt-[250px]",
        )}
      >
        <InteractiveBanner />
      </section>
    </>
  );
}
