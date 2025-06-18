"use client";
import { Product } from "@/types";
import { cn } from "@/utils/cn";
import Gallery from "../Common/Gallery";
import BuyButtonPlate from "./BuyButtonPlate";
import { useCurrentLocale } from "@/locales/client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ProductSection({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.find((v) => v.isDefault) || product.variants?.[0],
  );

  const [hoveredVariant, setHoveredVariant] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activePreviewVariant, setActivePreviewVariant] = useState<any>(null);

  // Detect touch device on component mount
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

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

        <div className="flex flex-col justify-between gap-8 rounded-lg bg-gray-light p-6 shadow-lg dark:bg-gray-dark">
          <h2 className=" text-3xl font-bold">{product.name}</h2>
          <p className="text-lg">{locale === "de" ? descDE : descEN}</p>

          <p className="text-center text-lg">
            {locale === "en" ? "Size" : "Größe"}: 52x11 cm
          </p>

          {product.variants && product.variants.length > 1 && (
            <div className="grid grid-cols-3 gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => {
                    setSelectedVariant(variant);
                    // For touch devices, toggle preview
                    if (isTouchDevice) {
                      setActivePreviewVariant(
                        activePreviewVariant?.id === variant.id
                          ? null
                          : variant,
                      );
                    }
                  }}
                  onMouseEnter={() =>
                    !isTouchDevice && setHoveredVariant(variant)
                  }
                  onMouseLeave={() => !isTouchDevice && setHoveredVariant(null)}
                  onMouseMove={(e) =>
                    !isTouchDevice &&
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
                    // Highlight active preview on mobile
                    isTouchDevice &&
                      activePreviewVariant?.id === variant.id &&
                      "ring-2 ring-blue-400 flex items-center justify-center",
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

          {/* Mobile variant preview */}
          {isTouchDevice && activePreviewVariant?.imageUrl && (
            <div className="mt-2 rounded-lg border border-gray-200 p-2 text-center">
              <p className="mb-1 text-sm font-medium">
                {activePreviewVariant.title}
              </p>
              <div className="relative mx-auto h-48 w-full max-w-xs overflow-hidden rounded-sm">
                <Image
                  src={activePreviewVariant.imageUrl}
                  alt={activePreviewVariant.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                />
              </div>
              <button
                onClick={() => setActivePreviewVariant(null)}
                className="mt-2 text-sm text-blue-500"
              >
                {locale === "en" ? "Close preview" : "Vorschau schließen"}
              </button>
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

      {/* Desktop tooltip */}
      {!isTouchDevice && showTooltip && (
        <div
          className={`pointer-events-none fixed z-50 rounded-md shadow-lg transition-opacity duration-300 ${
            hoveredVariant ? "visible opacity-100" : "invisible opacity-0"
          }`}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y + 30}px`,
            maxWidth: "300px",
            transform: "translate(0%, 0%)",
          }}
        >
          {hoveredVariant && (
            <div className="p-2 shadow-md bg-white rounded-md">
              <Image
                src={hoveredVariant.imageUrl}
                alt={hoveredVariant.title}
                width={200}
                height={200}
                className="h-auto w-full rounded-md border border-gray-200 object-cover"
                priority
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
