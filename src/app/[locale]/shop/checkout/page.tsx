"use client";
import { useUser } from "@/app/providers";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { CartItem } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function Checkout() {
  const { user, updateUser } = useUser();
  const [quantity, setQuantity] = useState(1);

  if (!user) return null;

  function handleRemoveFromCart(item: CartItem) {
    if (!user) return;
    updateUser({
      cart: user.cart.filter(
        (cartItem) => cartItem.productId !== item.productId,
      ),
    });
  }

  return (
    <>
      <Breadcrumb
        pageName="Shop"
        description="Formenwerkstatt Shop"
        showLink={false}
      />

      <section className="container mb-24">
        <h2 className="text-2xl font-semibold">CART</h2>
        {user.cart.length === 0 ? (
          <p>No items yet!</p>
        ) : (
          user.cart.map((item) => (
            <div
              key={item.productId}
              className="mb-4 flex items-center justify-between text-lg"
            >
              <div className="flex  items-center gap-4">
                <Image
                  src={item.imgUrl}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="h-20 w-20 rounded-lg object-cover"
                />
              </div>

              <h3>{item.name}</h3>
              <p>{item.price}</p>
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
                  value={item.quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Number(e.target.value)))
                  }
                  min="1"
                />
                <button
                  className="rounded-r-lg bg-primary px-2 text-xl font-semibold text-white hover:bg-blue-600"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="rounded-lg bg-red-500 px-4 py-2 text-white"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </section>
    </>
  );
}
