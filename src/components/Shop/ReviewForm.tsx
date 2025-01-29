"use client";
import { addDocument } from "@/app/actions";
import { useUser } from "@/app/providers";
import { useState } from "react";

export default function ReviewForm({ productId }: { productId: string }) {
  const { user } = useUser();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const [hideForm, setHideForm] = useState(true);

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
        await addDocument("reviews", data);
        window.location.reload();
      } else {
        window.alert("Failed to add review. Please fill out all fields.");
      }
    } catch (error) {
      console.error("Failed to add review", error);
    }
  }

  return (
    <section className="container mb-8 rounded-lg bg-gray-light py-4 shadow-lg dark:bg-gray-dark">
      {hideForm ? (
        <div className="space-y-8 text-center text-xl">
          <p>You liked what you saw?</p>
          <p>Leave a review!</p>
          <button
            onClick={() => setHideForm(false)}
            className="rounded-lg bg-primary px-4 py-2 text-lg text-white"
          >
            Add Review
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mx-auto flex max-w-2xl flex-col gap-4"
        >
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-2">
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rating" className="mb-2">
              Rating (1-5):
            </label>
            <input
              type="number"
              min={1}
              max={5}
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="rounded border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="comment" className="mb-2">
              Comment:
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[100px] rounded border border-gray-300 p-2"
            />
          </div>
          <div className="flex justify-around">
            <button
              type="button"
              onClick={() => setHideForm(true)}
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
      )}
    </section>
  );
}
