import { cn } from "@/utils/cn";

export default function Loading({ color = "black" }: { color?: string }) {
  return (
    <section
      className={cn(
        "animate-ping text-4xl",
        "flex items-center justify-center",
        `text-${color}`,
      )}
    >
      <p>Loading...</p>
    </section>
  );
}
