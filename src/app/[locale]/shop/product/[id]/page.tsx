import { Product, Review } from "@/types";
import { getCollection, getDocument } from "@/app/actions";
import { redirect } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ReviewWrapper from "@/components/Shop/ReviewWrapper";
import ProductSection from "@/components/Shop/ProductSection";

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
      <Breadcrumb
        pageName={"Shop"}
        description={"Formenwerkstatt Shop"}
        showLink={false}
      />

      <ProductSection product={product} averageRating={averageRating} />

      <ReviewWrapper reviews={filteredReviews} />
    </>
  );
}
