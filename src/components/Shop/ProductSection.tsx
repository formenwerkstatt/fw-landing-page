"use client";
import { useUser } from "@/app/providers";
import { Product } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import QuantityCounter from "./QuantityCounter";

export default function ProductSection({
  product,
  averageRating,
}: {
  product: Product;
  averageRating: number;
}) {
  const [quantity, setQuantity] = useState(1);

  const { user, updateUser, isUpdating } = useUser();

  function handleAddToCart(product: Product) {
    if (!user) return;

    const existingItemIndex = user.cart.findIndex(
      (item) => item.productId === product.id,
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...user.cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + quantity,
      };

      updateUser({
        cart: updatedCart,
      });
    } else {
      const newCartItem = {
        itemId: uuidv4(),
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity,
        imgUrl: product.imgUrl,
      };

      updateUser({
        cart: [...user.cart, newCartItem],
      });
    }
  }

  return (
    <section
      className={cn(
        "container mb-8 px-0",
        "grid grid-cols-none grid-rows-[1fr_1.2fr] gap-8 lg:grid-cols-[1fr_1.5fr] lg:grid-rows-none",
      )}
    >
      <div className="relative overflow-hidden shadow-lg">
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
        <p className="mb-4 text-lg">{product.description}</p>

        <div className="mb-4 flex items-center gap-2 text-lg">
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

        <p className="text-lg">
          <span className="font-semibold">Stock: </span>
          {product.stock < 10 ? "Contact us for availability" : "In Stock"}
        </p>

        <div className="mt-8 flex items-center justify-between py-4">
          <QuantityCounter
            setQuantity={setQuantity}
            quantity={quantity}
            isUpdating={isUpdating}
          />
          <p className=" text-right text-3xl font-semibold ">
            {product.price} €
          </p>
        </div>
        <button
          onClick={() => handleAddToCart(product)}
          className={cn(
            "rounded-lg bg-primary px-6 py-3 text-xl font-semibold text-white transition duration-300 hover:bg-blue-600",
            isUpdating && "pointer-events-none cursor-wait bg-gray-200",
          )}
          disabled={isUpdating}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
