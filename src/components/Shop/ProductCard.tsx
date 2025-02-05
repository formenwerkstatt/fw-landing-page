import { Product } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export default async function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/product/${product.id}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-xl",
        "bg-white dark:bg-gray-dark",
        "shadow-lg dark:shadow-none",
        "hover:scale-105 hover:shadow-xl",
        "animate-pop-in",
        "transition duration-300",
      )}
    >
      <div className="relative h-96 w-full ">
        <Image
          src={product.imgUrl[0]}
          alt={product.description}
          fill
          sizes="33vw"
          className="w-full object-cover"
        />
      </div>

      <div className={cn("flex justify-between p-4")}>
        <div className="mr-12 flex-grow">
          <h3 className="line-clamp-1 text-xl font-bold text-black dark:text-white ">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm text-gray-600">
            {product.description}
          </p>
        </div>

        <div className="hidden flex-col justify-between text-right lg:flex">
          <p className="whitespace-nowrap  text-xl font-bold ">
            {product.price}€
          </p>
        </div>
      </div>
    </Link>
  );
}
