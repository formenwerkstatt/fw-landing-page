import { Services } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import ServiceIcon from "./ServiceIcon";

const SingleService = ({ service }: { service: Services }) => {
  const { title, image, paragraph, tags, subServices } = service;

  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      {/* Main Content */}
      <div className="relative">
        {/* Image */}
        <div className="relative block h-[75dvh] w-full">
          <Image src={image} alt="image" fill className="object-cover" />

          <div
            className={cn(
              "absolute p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8",
              "bg-gradient-to-r from-slate-950 to-transparent ",
            )}
          >
            <h3
              className={cn(
                "mb-4 block pb-4 text-4xl font-bold text-white lg:text-6xl",
                "border-b border-body-color",
              )}
            >
              {title}
            </h3>
            <p className="mb-6 text-xl font-medium text-white lg:text-2xl">
              {paragraph}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 z-30 flex items-center justify-center bg-white bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="w-11/12 px-4 md:w-4/5 lg:w-3/4">
          <div
            className={cn(
              "grid gap-4",
              // Mobile: 1 column for very small screens, 2 columns for larger phones
              "grid-cols-1 sm:grid-cols-2",
              // Tablet and up: 3 or 4 columns depending on number of items
              "md:grid-cols-3 lg:grid-cols-4",
              // If 3 or fewer items, use flex layout on larger screens
              subServices.length <= 3 &&
                "md:flex md:grid-cols-none md:justify-around",
            )}
          >
            {subServices.map((subService) => (
              <Link
                key={subService.title}
                href={`/services${subService.path}`}
                className={cn(
                  "flex items-center gap-2 md:flex-col md:gap-4",
                  "rounded-xl bg-primary px-4 py-3 md:px-6 md:py-4",
                  "text-white",
                  "transition-transform duration-300 hover:scale-105",
                  "text-base sm:text-lg md:text-xl lg:text-2xl",
                  "w-full",
                )}
              >
                <ServiceIcon
                  iconname={subService.iconName}
                  className="size-8 sm:size-10 md:size-16 lg:size-24"
                />
                <span className="flex flex-grow items-center text-center">
                  {subService.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
