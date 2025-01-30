import { deleteDocument } from "@/app/actions";
import { useUser } from "@/app/providers";
import { Review } from "@/types";
import { useState } from "react";

type ReviewsProps = {
  reviews: Review[];
  handleEdit: (review: Review) => void;
};

export default function Reviews({ reviews, handleEdit }: ReviewsProps) {
  const { user } = useUser();
  const [visibleReviews, setVisibleReviews] = useState(3);

  function handleViewMore() {
    if (visibleReviews < reviews.length) {
      setVisibleReviews((prev) => prev + 10);
    } else {
      setVisibleReviews(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  async function handleDelete(id: string) {
    try {
      const result = await deleteDocument("reviews", id);
      if (result.deleted) {
        window.location.reload();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        console.error("Failed to delete review");
      }
    } catch (error) {
      console.error("Failed to delete review", error);
    }
  }

  return (
    <section className="container mb-24 rounded-lg bg-gray-light py-4 shadow-lg dark:bg-gray-dark">
      <h3 className="mb-4 text-2xl font-bold">Reviews</h3>
      {reviews.length > 0 ? (
        reviews.slice(0, visibleReviews).map((review) => (
          <div
            key={review.id}
            className="mx-auto mb-4 space-y-4 rounded-lg bg-white p-4 shadow-md dark:bg-slate-800"
          >
            <div className="flex w-full items-center justify-between gap-4">
              <p className="font-semibold ">{review.username}</p>

              <div className="flex items-center gap-2">
                <p className="font-semibold">Rating:</p>
                <p>{review.rating ? review.rating : "N/A"} /5</p>
                <div className="hidden md:flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="relative">
                      <div className="text-xl text-gray-300">★</div>

                      <div
                        className={
                          "absolute inset-0 overflow-hidden text-xl text-primary"
                        }
                        style={{
                          width: `${Math.max(0, Math.min(100, (review.rating - (star - 1)) * 100))}%`,
                        }}
                      >
                        ★
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p>{review.comment}</p>

            <div className="flex items-center justify-between">
              {review.userId === user?.id && (
                <>
                  <p className=" text-sm">Created at {review.createdAt}</p>

                  <div>
                    <button
                      onClick={() => handleEdit(review)}
                      className=" mr-2 rounded-lg border-none bg-primary p-3 text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(review.id)}
                      className=" rounded-lg border-none bg-red-500 p-3 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No reviews</p>
      )}

      {reviews.length > 3 && (
        <button
          type="button"
          className="w-full rounded-lg bg-primary px-4 py-2 text-lg text-white"
          onClick={handleViewMore}
        >
          {visibleReviews >= reviews.length ? "View Less" : "View More"}
        </button>
      )}
    </section>
  );
}
