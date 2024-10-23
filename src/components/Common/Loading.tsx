import { cn } from "@/utils/cn";

export default function Loading({ color }: { color: string }) {
  return (
    <section
      className={cn(
        "animate-pulse bg-gray-light text-6xl dark:bg-gray-dark",
        "flex items-center justify-center",
        "w-[100vw], h-[100vh]",
        `text-${color}`,
      )}
    >
      Loading...
    </section>
  );
}
