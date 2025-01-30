import { addDocument, updateDocument } from "@/app/actions";
import { useUser } from "@/app/providers";
import { Review } from "@/types";
import { cn } from "@/utils/cn";
import { useState } from "react";

type ReviewFormProps = {
  productId: string;
  review?: Review;
  handleCancel: () => void;
};

export default function ReviewForm({
  productId,
  review,
  handleCancel,
}: ReviewFormProps) {
  const { user } = useUser();
  const [rating, setRating] = useState(review?.rating ?? 5);
  const [comment, setComment] = useState(review?.comment ?? "");
  const [username, setUsername] = useState(review?.username ?? "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = {
      productId,
      rating,
      comment,
      username,
      userId: user?.id,
    };

    try {
      if (data.username.length > 1 && data.comment.length > 1) {
        if (review) {
          await updateDocument("reviews", review.id, data);
        } else {
          await addDocument("reviews", data);
        }
        window.location.reload();
      } else {
        window.alert("Failed to add review. Please fill out all fields.");
      }
    } catch (error) {
      console.error("Failed to add review", error);
    }
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={cn(
        "fixed inset-0 top-24 z-50 m-auto p-4",
        "h-min max-w-md max-h-[60dvh] overflow-auto",
        "flex flex-col gap-4",
        "rounded-lg bg-gray-light p-4 shadow-lg dark:bg-gray-dark",
      )}
    >
      <div className="flex  items-center">
        <label htmlFor="rating" className="mb-2">
          Rating:
        </label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-3xl ${star <= rating ? "text-primary" : "text-gray-300"}`}
            >
              ★
            </button>
          ))}
        </div>
        <p>{rating}/5</p>
      </div>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="rounded border border-gray-300 p-2"
      />

      <div className="flex flex-col">
        <textarea
          value={comment}
          placeholder="Type your review here..."
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px] rounded border border-gray-300 p-2 "
        />
      </div>
      <div className="flex justify-around">
        <button
          type="button"
          onClick={handleCancel}
          className=" rounded-lg border-none bg-red-500 p-3 text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg border-none bg-blue-500 p-3 text-white"
        >
          Submit Review
        </button>
      </div>
    </form>
  );
}
