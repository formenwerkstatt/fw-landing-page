"use client";
import { Product } from "@/types";
import { cn } from "@/utils/cn";
import Gallery from "../Common/Gallery";
import BuyButtonPlate from "./BuyButtonPlate";
import { useCurrentLocale } from "@/locales/client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductSection({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.find((v) => v.isDefault) || product.variants?.[0],
  );

  const [hoveredVariant, setHoveredVariant] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const descDE = product.description.slice().split("The")[0];
  const descEN = product.description.slice().split("The")[1];

  const locale = useCurrentLocale();

  const mediaItems = product.videoUrl
    ? product.videoUrl?.concat(product.imgUrl)
    : product.imgUrl;

  useEffect(() => {
    if (hoveredVariant) {
      const timer = setTimeout(() => setShowTooltip(true), 100);
      return () => clearTimeout(timer);
    } else {
      setShowTooltip(false);
    }
  }, [hoveredVariant]);

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
            <div className="my-8 grid grid-cols-3 gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  onMouseEnter={() => setHoveredVariant(variant)}
                  onMouseLeave={() => setHoveredVariant(null)}
                  onMouseMove={(e) =>
                    setMousePosition({ x: e.clientX, y: e.clientY })
                  }
                  disabled={variant.stock === 0}
                  className={cn(
                    "relative rounded-md px-4 py-2",
                    variant.stock === 0
                      ? "cursor-not-allowed bg-gray-300 text-gray-500"
                      : "cursor-pointer border border-transparent bg-gray-200 text-gray-dark hover:border-blue-500",
                    selectedVariant?.id === variant.id &&
                      "border-none bg-primary text-white",
                  )}
                >
                  {variant.title}{" "}
                  {variant.stock === 0 && (
                    <>
                      <br />
                      {"(nicht lieferbar)"}
                    </>
                  )}
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

      {/* Image Tooltip */}
      <div
        className={`pointer-events-none fixed z-50 rounded-md shadow-lg transition-opacity duration-300 ${
          hoveredVariant ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y - 60}px`,
          maxWidth: "200px",
          transform: "translate(-10%, -50%)",
        }}
      >
        {hoveredVariant && (
          <Image
            src={hoveredVariant.imageUrl || product.imgUrl[0]}
            alt={hoveredVariant.title || "Product variant"}
            width={200}
            height={200}
            className="h-auto w-full rounded-md border border-gray-200 object-cover"
            priority
          />
        )}
      </div>
    </>
  );
}
