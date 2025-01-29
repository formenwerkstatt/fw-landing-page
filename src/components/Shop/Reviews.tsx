"use client";
import { deleteDocument } from "@/app/actions";
import { useUser } from "@/app/providers";
import { Review } from "@/types";
import { useState } from "react";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const { user } = useUser();
  const [visibleReviews, setVisibleReviews] = useState(3);

  function handleViewMore() {
    if (visibleReviews < reviews.length) {
      setVisibleReviews((prev) => prev + 3);
    } else {
      setVisibleReviews(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  async function handleDelete(id: string) {
    try {
      const result = await deleteDocument("reviews", id);
      if (result.deleted) {
        window.location.reload();
      } else {
        console.error("Failed to delete review");
      }
    } catch (error) {
      console.error("Failed to delete review", error);
    }
  }

  return (
    <>
      <section className="container mb-24 rounded-lg bg-gray-light py-4 shadow-lg dark:bg-gray-dark">
        <h3 className="mb-4 text-2xl font-bold">Reviews</h3>
        {reviews.length > 0 ? (
          reviews.slice(0, visibleReviews).map((review) => (
            <div
              key={review.id}
              className="mx-auto mb-4 flex justify-between rounded-lg bg-white p-4 shadow-md"
            >
              <div>
                <p className="font-semibold ">{review.username}</p>
                <p className="text-lg">{review.comment}</p>
                <p className="mt-8 text-sm">
                  Created at {new Date().toLocaleDateString()}
                </p>
              </div>

              <div>
                <p className="mb-4 text-center text-xl">
                  {review.rating} stars
                </p>
                {review.userId === user?.id && (
                  <>
                    <button className=" mr-2 rounded-lg border-none bg-primary p-3 text-white">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(review.id)}
                      className=" rounded-lg border-none bg-red-500 p-3 text-white"
                    >
                      Delete
                    </button>
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
    </>
  );
}
