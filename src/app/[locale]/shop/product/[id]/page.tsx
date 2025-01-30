import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { Product, Review } from "@/types";
import { getCollection, getDocument } from "@/app/actions";
import { redirect } from "next/navigation";
import ReviewWrapper from "@/components/Shop/ReviewWrapper";

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
      ? parseFloat(
          (
            filteredReviews.reduce((acc, review) => acc + review.rating, 0) /
            filteredReviews.length
          ).toFixed(1),
        )
      : 0;

  if (!product) {
    redirect("/error");
  }

  return (
    <>
      <Breadcrumb pageName={"Shop"} description={"Formenwerkstatt Shop"} showLink={true} />

      <section className="container mb-12 grid grid-cols-[1fr_1.5fr] gap-8 px-0">
        <div className="relative h-full max-w-full overflow-hidden shadow-lg">
          <Image
            className="h-full w-full object-cover"
            src={product.imgUrl}
            // width={300}
            // height={300}
            fill
            alt={product.description}
          />
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-gray-light p-6 shadow-lg dark:bg-gray-dark">
          <h2 className="mb-4 text-3xl font-bold">{product.name}</h2>
          <p className="mb-4 ">
            {product.description} Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut vehicula mauris eget sem tincidunt varius. Nam
            volutpat bibendum elit, vel tempor elit dapibus eget. Nam elit dui,
            venenatis sed lectus vel, dignissim mattis mauris. Vivamus malesuada
            id dolor et eleifend. Nam eget aliquet turpis, et sagittis purus.
            Integer vel sapien in diam mollis tristique vitae ut sem.
            Suspendisse quis lorem sit amet odio maximus fermentum finibus vel
            leo. Nunc lacinia faucibus orci non condimentum.{" "}
          </p>

          <div className="flex items-center gap-2">
            <span className="font-semibold">Rating:</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="relative">
                  <div className="text-xl text-gray-300">★</div>

                  <div
                    className={
                      "absolute inset-0 overflow-hidden text-xl text-primary"
                    }
                    style={{
                      width: `${Math.max(0, Math.min(100, (averageRating - (star - 1)) * 100))}%`,
                    }}
                  >
                    ★
                  </div>
                </div>
              ))}
            </div>
            <p>{averageRating ? averageRating : "N/A"} /5</p>
          </div>

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

      <ReviewWrapper reviews={filteredReviews} />
    </>
  );
}
