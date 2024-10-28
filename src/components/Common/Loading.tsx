import { cn } from "@/utils/cn";
export default function Loading() {
  return (
    <section
      className={cn(
        "animate-bounce text-4xl",
        "absolute inset-0",
        "flex items-center justify-center",
        "text-black dark:text-white",
      )}
    >
      <p>Loading...</p>
    </section>
  );
}
