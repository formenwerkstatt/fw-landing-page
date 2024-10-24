import { cn } from "@/utils/cn";

export default function Loading() {
  return (
    <section
      className={cn(
        "animate-bounce text-4xl",
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform",
        "flex items-center justify-center",
        `text-black dark:text-white`,
      )}
    >
      <p>Loading...</p>
    </section>
  );
}
