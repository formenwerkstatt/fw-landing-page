import { cn } from "@/utils/cn";
import Image from "next/image";
import { BsPersonFill } from "react-icons/bs";

const persons = [
  {
    id: "1",
    url: "",
    name: "Bektas Isik",
    role: "Geschäfftsführer",
  },
  {
    id: "2",
    url: "",
    name: "Huseyin Isik",
    role: "Prokuristin",
  },
  {
    id: "3",
    url: "",
    name: "Belgin Isik",
    role: "Prokuristin",
  },
];

export default function ImageAccordion() {
  return (
    <article className="group mx-auto mb-10 mt-3 flex  justify-center gap-2 max-md:flex-col">
      {persons.map((person) => {
        return (
          <article
            key={person.id}
            className={cn(
              "group/article relative w-full overflow-hidden rounded-xl transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)]",
              "before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity",
              "after:absolute after:inset-0 after:rounded-lg after:bg-white/30 after:opacity-0 after:backdrop-blur after:transition-all",
              "focus-within:ring focus-within:ring-indigo-300 focus-within:before:opacity-100",
              "md:before:opacity-0 md:hover:before:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 md:group-hover:[&:not(:hover)]:w-[20%] md:group-hover:[&:not(:hover)]:after:opacity-100",
            )}
          >
            <div className="absolute inset-0 z-10 flex  flex-col justify-end p-3 text-white">
              <h4
                className={cn(
                  "text-2xl font-medium transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] ",
                  "group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-300 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-300 ",
                  "md:translate-y-2 md:truncate md:whitespace-nowrap md:opacity-0",
                )}
              >
                {person.name}
              </h4>
              <span
                className={cn(
                  "text-3xl font-medium transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] ",
                  "group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-500 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-500",
                  "md:translate-y-2 md:truncate md:whitespace-nowrap md:opacity-0",
                )}
              >
                {person.role}
              </span>
            </div>

            {person.url ? (
              <Image
                className={cn("h-72 w-full object-cover md:h-[420px]")}
                src={person.url}
                width="960"
                height="480"
                alt={`picture of ${person.name} ${person.role}`}
              />
            ) : (
              <div className="w-full bg-gradient-to-b from-primary/25 md:h-[420px]">
                <BsPersonFill className="m-auto size-full text-gray-dark/10 dark:text-gray-light/10" />
              </div>
            )}
          </article>
        );
      })}
    </article>
  );
}
