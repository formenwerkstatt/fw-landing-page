import { getCollection, getDocument } from "@/app/actions";
import { Product, Review } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export default async function ProductCard({ product }: { product: Product }) {
  const reviews = await getCollection<Review>("reviews");
  const filteredReviews = reviews.filter(
    (review) => review.productId === product.id,
  );
  const averageRating =
    filteredReviews.length > 0
      ? (
          filteredReviews.reduce((acc, review) => acc + review.rating, 0) /
          filteredReviews.length
        ).toFixed(1)
      : 0;

  return (
    <Link
      href={`/shop/product/${product.id}`}
      className={cn(
        "flex flex-col rounded-xl",
        "bg-white dark:bg-gray-dark",
        "shadow-lg dark:shadow-none",
        "hover:scale-105 hover:shadow-xl",
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
          className="h-auto w-full rounded-t-xl object-cover"
        />
      </div>
      <div className={cn("flex flex-1 justify-between p-4")}>
        <div className="mr-12 flex-grow">
          <h3 className="line-clamp-1 text-xl font-bold text-black dark:text-white ">
            {product.name} ({product.stock})
          </h3>
          <p className="line-clamp-2 text-sm text-gray-600">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col justify-between text-right">
          <p className=" text-sm">
            {averageRating === 0 ? "No Ratings" : `${averageRating} / 5`}
          </p>
          <p className="whitespace-nowrap  text-xl font-bold ">
            {product.price}€
          </p>
        </div>
      </div>
    </Link>
  );
}
