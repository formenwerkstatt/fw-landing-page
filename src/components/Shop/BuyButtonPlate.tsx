import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

export default function BuyButtonPlate() {


  useEffect(() => {

    // Function to load Shopify Buy SDK script
    const loadShopifyScript = () => {
      const scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      script.onload = initializeShopifyBuy;
      document.body.appendChild(script);
    };

    // Initialize Shopify Buy SDK
    const initializeShopifyBuy = () => {
      if (window.ShopifyBuy) {
        const client = window.ShopifyBuy.buildClient({
          // domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
          // storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN,
          domain: "ts0s5z-h1.myshopify.com",
          storefrontAccessToken: "3cf196462d484d391604160b6d241929",
        });

        window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
          ui.createComponent("product", {
            id: "14990153712001",
            node: document.getElementById("shopify-buy-button-container"),
            moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
            options: {
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
                contents: {
                  img: false,
                  button: false,
                  buttonWithQuantity: true,
                  title: false,
                  price: false,
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
                googleFonts: ["Montserrat"],
                text: {
                  button: "Add to cart",
                },
              },
              cart: {
                styles: {
                  button: {
                    "font-family": "Montserrat, sans-serif",
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
                },
                googleFonts: ["Montserrat"],
              },
            },
          });
        });
      }
    };

    // Check if Shopify Buy SDK is already loaded
    if (!window.ShopifyBuy) {
      loadShopifyScript();
    } else if (window.ShopifyBuy.UI) {
      initializeShopifyBuy();
    }

    // Cleanup function
    return () => {
      const script = document.querySelector(
        `script[src="${"https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"}"]`,
      );
      if (script) {
        script.remove();
      }

    };
  }, []);

  return <div id="shopify-buy-button-container" className="w-full" />;
}
