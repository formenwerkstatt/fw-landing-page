import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    ShopifyBuy: any;
    ShopifyBuyInit: boolean;
  }
}

const DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "ts0s5z-h1.myshopify.com";
const STOREFRONT_TOKEN =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ||
  "3cf196462d484d391604160b6d241929";
const SCRIPT_URL =
  "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

export default function BuyButtonPlate({
  productId,
  variantId,
}: {
  productId: string;
  variantId?: string;
}) {
  const buttonId = `shopify-buy-button-${productId}${variantId ? `-${variantId}` : ""}`;
  const componentRef = useRef<any>(null);

  useEffect(() => {
    // Load the Shopify Buy Button script if not already loaded
    const loadScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${SCRIPT_URL}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.async = true;
        script.src = SCRIPT_URL;
        script.onload = () => resolve();
        script.onerror = (err) =>
          reject(new Error(`Failed to load Shopify Buy Button: ${err}`));
        document.body.appendChild(script);
      });
    };

    // Initialize and create the Shopify Buy Button component
    const initializeComponent = async () => {
      try {
        // Ensure container is empty
        const container = document.getElementById(buttonId);
        if (container) container.innerHTML = "";

        await loadScript();

        if (!window.ShopifyBuy) {
          console.error("ShopifyBuy not available after loading script");
          return;
        }

        const client = window.ShopifyBuy.buildClient({
          domain: DOMAIN,
          storefrontAccessToken: STOREFRONT_TOKEN,
        });

        const ui = await window.ShopifyBuy.UI.onReady(client);

        // Create the component with the specific variant if provided
        const component = ui.createComponent("product", {
          id: productId,
          variantId: variantId, // This is at the root level
          node: document.getElementById(buttonId),
          moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
          options: getShopifyOptions(),
        });

        // Store reference to component for cleanup
        componentRef.current = component;
      } catch (error) {
        console.error("Failed to initialize Shopify Buy Button:", error);
      }
    };

    initializeComponent();

    // Cleanup function
    return () => {
      if (componentRef.current) {
        // Try to destroy the component if possible
        try {
          if (componentRef.current.destroy) {
            componentRef.current.destroy();
          }
        } catch (e) {
          console.warn("Could not properly destroy Shopify component", e);
        }
        componentRef.current = null;
      }

      // Ensure the container is cleared
      const container = document.getElementById(buttonId);
      if (container) container.innerHTML = "";
    };
  }, [productId, variantId, buttonId]);

  // Function to get Shopify options
  const getShopifyOptions = () => {
    return {
      product: {
        styles: {
          product: {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px",
            },
          },
          button: {
            "font-family": "Montserrat, sans-serif",
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#004a95",
            },
            "background-color": "#0052a5",
            ":focus": {
              "background-color": "#004a95",
            },
            "border-radius": "6px",
            width: "100%",
          },
          quantityInput: {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
          },
        },
        contents: {
          img: false,
          title: false,
          price: false,
          button: true,
          buttonWithQuantity: false,
          options: false,
        },
        text: {
          button: "Add to cart",
        },
        googleFonts: ["Montserrat"],
      },
      productSet: {
        styles: {
          products: {
            "@media (min-width: 601px)": {
              "margin-left": "-20px",
            },
          },
        },
      },
      modalProduct: {
        contents: {
          img: false,
          imgWithCarousel: true,
          button: false,
          buttonWithQuantity: true,
        },
        styles: {
          product: {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px",
            },
          },
          button: {
            "font-family": "Montserrat, sans-serif",
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#004a95",
            },
            "background-color": "#0052a5",
            ":focus": {
              "background-color": "#004a95",
            },
            "border-radius": "6px",
          },
          quantityInput: {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
          },
        },
        googleFonts: ["Montserrat"],
        text: {
          button: "Add to cart",
        },
      },
      option: {
        styles: {
          label: {
            "font-family": "Montserrat, sans-serif",
          },
          select: {
            "font-family": "Montserrat, sans-serif",
          },
        },
        googleFonts: ["Montserrat"],
      },
      cart: {
        styles: {
          button: {
            "font-family": "Montserrat, sans-serif",
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#004a95",
            },
            "background-color": "#0052a5",
            ":focus": {
              "background-color": "#004a95",
            },
            "border-radius": "6px",
          },
        },
        text: {
          total: "Subtotal",
          button: "Checkout",
        },
        googleFonts: ["Montserrat"],
      },
      toggle: {
        styles: {
          toggle: {
            "font-family": "Montserrat, sans-serif",
            "background-color": "#0052a5",
            ":hover": {
              "background-color": "#004a95",
            },
            ":focus": {
              "background-color": "#004a95",
            },
          },
          count: {
            "font-size": "16px",
          },
        },
        googleFonts: ["Montserrat"],
      },
    };
  };

  return <div id={buttonId} className="w-full" />;
}
