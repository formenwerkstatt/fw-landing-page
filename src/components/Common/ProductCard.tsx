import { Product } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/product/${product.id}`}
      className={cn(
        "flex flex-col rounded-lg",
        "hover:bg-primary/10 dark:hover:bg-primary/20",
        "animate-pop-in",
        "transition duration-300",
      )}
    >
      <div>
        <Image
          src={product.imgUrl}
          width={300}
          height={300}
          alt={product.description}
          className="h-auto w-full object-cover"
        />
      </div>
      <div className={cn("flex justify-between p-4")}>
        <div className="mr-12 flex-grow">
          <h3 className="line-clamp-1 text-lg font-bold text-black dark:text-white ">
            {product.name} ({product.stock})
          </h3>
          <p className="line-clamp-2 text-sm text-gray-600">
            {product.description}
          </p>
        </div>
        <p className="whitespace-nowrap text-right text-2xl font-bold ">
          {product.price}€
        </p>
      </div>
    </Link>
  );
}
