"use client";
import { Product } from "@/types";
import { cn } from "@/utils/cn";
import Gallery from "../Common/Gallery";
import BuyButtonPlate from "./BuyButtonPlate";
import { useCurrentLocale } from "@/locales/client";
import { useState } from "react";

export default function ProductSection({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.find((v) => v.isDefault) || product.variants?.[0],
  );

  const descDE = product.description.slice().split("The")[0];
  const descEN = product.description.slice().split("The")[1];

  const locale = useCurrentLocale();

  const mediaItems = product.videoUrl
    ? product.videoUrl?.concat(product.imgUrl)
    : product.imgUrl;

  return (
    <>
      <section
        className={cn(
          "container mb-24 px-0",
          "grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]",
        )}
      >
        <Gallery images={mediaItems} showBg={false} autoplay={false} />

        <div className="flex flex-col justify-between  rounded-lg bg-gray-light p-6 shadow-lg dark:bg-gray-dark">
          <h2 className="mb-4 text-3xl font-bold">{product.name}</h2>
          <p className="mb-4 text-lg">{locale === "de" ? descDE : descEN}</p>

          {/* <p className="text-lg">
            <span className="font-semibold">Stock: </span>
            {product.stock < 10 ? "Contact us for availability" : "In Stock"}
          </p> */}

          {product.variants && product.variants.length > 1 && (
            <div className="my-8 flex flex-col justify-evenly gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  disabled={variant.stock === 0}
                  className={cn(
                    "rounded-md px-4 py-2",
                    variant.stock === 0
                      ? "cursor-not-allowed bg-gray-300 text-gray-500"
                      : "cursor-pointer border border-transparent bg-gray-200 text-gray-dark hover:border-blue-500",
                    selectedVariant?.id === variant.id &&
                      "border-none bg-primary text-white",
                  )}
                >
                  {variant.title} {variant.stock === 0 && "(nicht lieferbar)"}
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-col items-center justify-evenly">
            <div className="text-center">
              <p className=" text-4xl font-semibold ">
                {(selectedVariant?.price || product.price).toFixed(2)} €{" "}
                <span className="text-sm font-normal text-gray-500">
                  inkl. MwSt.
                </span>
              </p>
            </div>
            <BuyButtonPlate
              productId={product.id}
              variantId={selectedVariant?.id}
            />
          </div>
        </div>
      </section>
    </>
  );
}
