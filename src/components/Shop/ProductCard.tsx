import { Product } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export default async function ProductCard({
  product,
  comingSoon,
}: {
  product: Product;
  comingSoon?: boolean;
}) {
  return (
    <Link
      href={comingSoon ? "" : `/shop/product/${product.id}`}
      scroll={!comingSoon}
      className={cn(
        "relative flex flex-col overflow-hidden rounded-xl",
        "bg-white dark:bg-gray-dark",
        "shadow-lg dark:shadow-none",

        comingSoon ? "cursor-default" : "hover:scale-105 hover:shadow-xl",
        "animate-pop-in",
        "transition duration-300",
      )}
    >
      {comingSoon && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-primary/60">
          <p className="text-3xl font-bold text-white">Coming Soon</p>
        </div>
      )}
      <div className="relative h-48 md:h-96 w-full ">
        <Image
          src={product.imgUrl[0]}
          alt={product.description}
          fill
          sizes="50vw"
          className="w-full object-cover"
        />
      </div>

      {!comingSoon && <div className={cn("flex justify-between p-4 text-center")}>
        <div className=" grow">
          <h3 className="line-clamp-1 text-xl font-bold text-black dark:text-white ">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm text-gray-600">
            {product.description}
          </p>
        </div>

        {/* <div className="hidden flex-col justify-between text-right lg:flex">
          <p className="whitespace-nowrap  text-xl font-bold ">
            {product.price}€
          </p>
        </div> */}
      </div>}
    </Link>
  );
}
