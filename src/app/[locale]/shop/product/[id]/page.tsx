import Breadcrumb from "@/components/Common/Breadcrumb";
import ReviewForm from "@/components/Shop/ReviewForm";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { Product, Review } from "@/types";
import Link from "next/link";
import Loading from "@/components/Common/Loading";
import Reviews from "@/components/Shop/Reviews";
import { getCollection, getDocument } from "@/app/actions";

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const product = await getDocument<Product>("products", id);
  const reviews = await getCollection<Review>("reviews");
  const filteredReviews = reviews.filter((review) => review.productId === id);
  const averageRating =
    filteredReviews.length > 0
      ? (
          filteredReviews.reduce((acc, review) => acc + review.rating, 0) /
          filteredReviews.length
        ).toFixed(2)
      : 0;

  if (!product) {
    return <Loading />;
  }

  return (
    <>
      <Breadcrumb pageName={""} description={""} showLink={false} />

      <section className="container mb-12 grid grid-cols-[auto_auto] gap-16 ">
        <div>
          <Link
            href="/shop"
            className={cn(
              "rounded-lg bg-primary px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600 ",
            )}
          >
            {`< Shop`}
          </Link>
          <Image
            className="w-full rounded-lg p-4"
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
            <span className="font-semibold">
              Rating: {filteredReviews.length}{" "}
            </span>
            {averageRating ? averageRating : "No ratings"}/5 Stars
          </p>

          <p>
            <span className="font-semibold">Stock: {product.stock} </span>
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
      <ReviewForm productId={id} />
      <Reviews reviews={filteredReviews} />
    </>
  );
}
