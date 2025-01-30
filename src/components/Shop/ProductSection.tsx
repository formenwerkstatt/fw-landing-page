"use client";
import { useUser } from "@/app/providers";
import { Product } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

export default function ProductSection({
  product,
  averageRating,
}: {
  product: Product;
  averageRating: number;
}) {
  const [quantity, setQuantity] = useState(1);

  const { user, updateUser } = useUser();

  function handleAddToCart(product: Product) {
    if (!user) return;
    const newCartItem = {
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

  return (
    <section
      className={cn(
        "container mb-8 px-0",
        "grid grid-cols-none grid-rows-[1fr_3fr] gap-8 lg:grid-cols-[1fr_1.5fr] lg:grid-rows-none",
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
        <p className="mb-4 ">
          {product.description} Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut vehicula mauris eget sem tincidunt varius. Nam
          volutpat bibendum elit, vel tempor elit dapibus eget. Nam elit dui,
          venenatis sed lectus vel, dignissim mattis mauris. Vivamus malesuada
          id dolor et eleifend. Nam eget aliquet turpis, et sagittis purus.
          Integer vel sapien in diam mollis tristique vitae ut sem. Suspendisse
          quis lorem sit amet odio maximus fermentum finibus vel leo. Nunc
          lacinia faucibus orci non condimentum.{" "}
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

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <button
              className="rounded-l-lg bg-primary px-2 text-xl font-semibold text-white hover:bg-blue-600"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <input
              type="number"
              className=" rounded-none border border-gray-300 text-center"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              min="1"
            />
            <button
              className="rounded-r-lg bg-primary px-2 text-xl font-semibold text-white hover:bg-blue-600"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <p className=" text-right text-3xl font-semibold ">
            {product.price} €
          </p>
        </div>
        <button
          onClick={() => handleAddToCart(product)}
          className={cn(
            "rounded-lg bg-primary px-6 py-3 text-xl font-semibold text-white transition duration-300 hover:bg-blue-600",
          )}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
