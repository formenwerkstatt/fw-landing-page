"use client";
import { Product } from "@/types";
import { cn } from "@/utils/cn";
import Gallery from "../Common/Gallery";
import BuyButtonPlate from "./BuyButtonPlate";
import { useUser } from "@/app/providers";
import { useState } from "react";
import { useCurrentLocale } from "@/locales/client";

export default function ProductSection({ product }: { product: Product }) {
  // const [quantity, setQuantity] = useState(1);

  // const { user, updateUser } = useUser();

  // function handleAddToCart(product: Product) {
  //   if (!user) return;

  //   const existingItemIndex = user.cart.findIndex(
  //     (item) => item.productId === product.id,
  //   );

  //   if (existingItemIndex !== -1) {
  //     const updatedCart = [...user.cart];
  //     updatedCart[existingItemIndex] = {
  //       ...updatedCart[existingItemIndex],
  //       quantity: updatedCart[existingItemIndex].quantity + quantity,
  //     };

  //     updateUser({
  //       cart: updatedCart,
  //     });
  //   } else {
  //     const newCartItem = {
  //       id: product.var_id,
  //       productId: product.id,
  //       name: product.name,
  //       price: product.price,
  //       quantity,
  //       imgUrl: product.imgUrl[0],
  //     };

  //     updateUser({
  //       cart: [...user.cart, newCartItem],
  //     });
  //   }
  // }

  const descDE = product.description.slice().split("The")[0];
  const descEN = product.description.slice().split("The")[1];

  const locale = useCurrentLocale();

  return (
    <>
      <section
        className={cn(
          "container mb-24 px-0",
          "grid grid-cols-none grid-rows-[1fr_1.2fr] gap-8 lg:grid-cols-[1.5fr_1fr] lg:grid-rows-none",
        )}
      >
        <Gallery images={product.imgUrl} showBg={false} autoplay={false} />

        <div className="flex min-h-[55vh] flex-col justify-between rounded-lg bg-gray-light p-6 shadow-lg dark:bg-gray-dark">
          <h2 className="mb-4 text-3xl font-bold">{product.name}</h2>
          <p className="mb-4 text-lg">{locale === "de" ? descDE : descEN}</p>

          {/* <p className="text-lg">
            <span className="font-semibold">Stock: </span>
            {product.stock < 10 ? "Contact us for availability" : "In Stock"}
          </p> */}

          <div className="mt-8 flex items-center justify-between py-4">
            {/* <QuantityCounter
            setQuantity={setQuantity}
            quantity={quantity}
            isUpdating={isUpdating}
            /> */}
            <BuyButtonPlate />
            <p className=" text-right text-4xl font-semibold ">
              {product.price.toFixed(2)} €
            </p>
          </div>
          {/* <button
          onClick={() => handleAddToCart(product)}
          className={cn(
            "rounded-lg bg-primary px-6 py-3 text-xl font-semibold text-white transition duration-300 hover:bg-blue-600",
            isUpdating && "pointer-events-none cursor-wait bg-gray-200",
          )}
          disabled={isUpdating}
        >
          Add to Cart
        </button> */}
        </div>
      </section>
    </>
  );
}
