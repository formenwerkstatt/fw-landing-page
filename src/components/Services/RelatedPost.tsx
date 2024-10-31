import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import ServiceIcon from "./ServiceIcon";

const RelatedPost = ({
  iconName,
  path,
  title,
  description,
}: {
  iconName: string;
  path: string;
  title: string;
  description: string;
}) => {
  return (
    <Link
      href={path}
      className={cn(
        "flex items-center rounded-lg p-4  lg:block xl:flex",
        "border-2 border-transparent transition duration-300 hover:border-primary/70 hover:bg-primary/10 hover:shadow-lg ",
      )}
    >
      <div className="mr-5 lg:mb-3 xl:mb-0 ">
        <div className="relative h-[70px] w-[70px] overflow-hidden rounded-md bg-primary/50 p-2 text-white sm:h-[85px] sm:w-[85px]">
          <ServiceIcon iconname={iconName} className="size-full" />
        </div>
      </div>
      <div className="w-full">
        <h5 className="mb-[6px] block text-base font-medium leading-snug text-black dark:text-white">
          {title}
        </h5>
        <p className="text-xs font-medium text-body-color">{description}</p>
      </div>
    </Link>
  );
};

export default RelatedPost;
