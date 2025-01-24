import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { Product, Review } from "@/types";
import Link from "next/link";

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/`,
  );
  const data = await response.json();

  const product = data.products.find((product: Product) => product.id === id);

  const averageRating =
    product.reviews.reduce(
      (acc: number, review: Review) => acc + review.rating,
      0,
    ) / product.reviews.length;

  return (
    <>
      <Breadcrumb pageName={""} description={""} showLink={false} />

      <div className="container mb-8">
        <Link
          href="/shop"
          className={cn(
            "rounded-lg bg-primary px-4 py-2 text-lg font-bold text-white transition duration-300 hover:bg-blue-600",
          )}
        >
          {`< Shop`}
        </Link>
      </div>

      <section className="container mb-12 grid grid-cols-[auto_auto] gap-16">
        <div>
          <Image
            src={product.imgUrl}
            width={300}
            height={300}
            alt={product.description}
          />
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-gray-light p-6 shadow-lg dark:bg-gray-dark">
          <h2 className="mb-4 text-3xl font-bold">{product.name}</h2>
          <p className="mb-4 ">{product.description}</p>

          <p>
            <span className="font-semibold">Rating: </span>
            {averageRating ? averageRating : "No ratings"} Stars
          </p>

          <p>
            <span className="font-semibold">Stock: </span>
            {product.stock < 10 ? "Contact us for availability" : "In Stock"}
          </p>

          <p className="mb-6 text-right text-3xl font-semibold ">
            {product.price} €
          </p>
          <button
            className={cn(
              "rounded-lg bg-primary px-6 py-3 text-xl font-semibold text-white transition duration-300 hover:bg-blue-600",
            )}
          >
            BUY NOW
          </button>
        </div>
      </section>
      <section className="container mb-24  bg-gray-light p-6 shadow-lg dark:bg-gray-dark">
        <h3 className="mb-4 text-2xl font-bold">Reviews</h3>
        {product.reviews ? (
          product.reviews.map((review: Review) => (
            <div key={review.username} className="mb-4">
              <h4 className="font-semibold">{review.username}</h4>
              <p>{review.comment}</p>
              <p>{review.rating} stars</p>
            </div>
          ))
        ) : (
          <p>No reviews</p>
        )}
      </section>
    </>
  );
}
