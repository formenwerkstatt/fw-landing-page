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

  function createdAtToDate(dateStr: string) {
    if (!dateStr) return 0;
    const [date, time] = dateStr.split(", ");
    const [day, month, year] = date.split(".");
    const [hours, minutes] = time.split(":");
    return new Date(+year, +month - 1, +day, +hours, +minutes).getTime();
  }

  const filteredReviews = reviews
    .filter((review) => review.productId === id)
    .sort(
      (a, b) =>
        createdAtToDate(b.createdAt ?? "") - createdAtToDate(a.createdAt ?? ""),
    );

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
