"use client";

import { Review } from "@/types";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import { useState } from "react";

export default function ReviewWrapper({ reviews }: { reviews: Review[] }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | undefined>(
    undefined,
  );

  const productId = reviews[0]?.productId;

  function handleEdit(review: Review) {
    setSelectedReview(review);
    setShowForm(true);
  }

  function handleCancel() {
    setShowForm(false);
    setSelectedReview(undefined);
  }

  return (
    <>
      <section className="container relative mb-8 rounded-lg bg-gray-light py-6 shadow-lg dark:bg-gray-dark">
        <div className="space-y-8 text-center text-xl">
          <p>You liked what you saw?</p>
          <p>Leave a review!</p>
          <button
            onClick={() => setShowForm(true)}
            className="rounded-lg bg-primary px-4 py-2 text-lg text-white"
          >
            Add Review
          </button>
        </div>
      </section>
      {showForm && (
        <>
          {/* <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 "></div> */}
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => handleCancel()}
          />
          <ReviewForm
            productId={productId}
            review={selectedReview}
            handleCancel={() => handleCancel()}
          />
        </>
      )}
      <Reviews reviews={reviews} handleEdit={handleEdit} />
    </>
  );
}
