"use client";

import { useUser } from "@/app/providers";
import { createCheckoutUrl } from "@/lib/shopify";
import { cn } from "@/utils/cn";
import { useState } from "react";

export default function ProceedToCheckout() {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (!user?.cart.length || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const checkoutUrl = await createCheckoutUrl(user.cart);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Checkout error:", error);
      setError("Failed to create checkout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        className={cn(
          "flex items-center justify-center gap-2 rounded-lg",
          "bg-blue-500 px-4 py-2 text-white shadow-md",
          "transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400",
          isLoading && "cursor-not-allowed opacity-70",
          !user?.cart.length && "cursor-not-allowed opacity-50",
        )}
        onClick={handleCheckout}
        disabled={isLoading || !user?.cart.length}
      >
        {isLoading ? "Processing..." : "Proceed to Checkout"}
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
