import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "ts0s5z-h1.myshopify.com";
const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || "3cf196462d484d391604160b6d241929";

export default function BuyButtonPlate({
  productId,
  variantId,
}: {
  productId: string;
  variantId?: string;
}) {
  const initialized = useRef(false);
  const buttonId = "shopify-buy-button-container";

  useEffect(() => {
 // Reset the initialization flag when product or variant changes
 initialized.current = false;
 const container = document.getElementById(buttonId);
 if (container) container.innerHTML = '';

    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    const loadShopifyScript = () => {
      if (document.querySelector(`script[src="${scriptURL}"]`)) {
        initializeShopifyBuy();
        return;
      }

      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      script.onload = initializeShopifyBuy;
      document.body.appendChild(script);
    };

    const initializeShopifyBuy = () => {
      if (window.ShopifyBuy) {
        const client = window.ShopifyBuy.buildClient({
          domain: DOMAIN,
          storefrontAccessToken: STOREFRONT_TOKEN,
        });

        window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
          ui.createComponent("product", {
            id: productId,
            node: document.getElementById(buttonId),
            moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
            options: {
              product: {
                variantId: variantId,
                styles: {
                  product: {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px"
                    }
                  },
                  button: {
                    "font-family": "Montserrat, sans-serif",
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px",
                    ":hover": {
                      "background-color": "#004a95"
                    },
                    "background-color": "#0052a5",
                    ":focus": {
                      "background-color": "#004a95"
                    },
                    "border-radius": "6px",
                    "width": "100%"
                  },
                  quantityInput: {
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px"
                  }
                },
                contents: {
                  img: false,
                  title: false,
                  price: false,
                  button: true,
                  buttonWithQuantity: false,
                  options:false
                },
                text: {
                  button: "Add to cart"
                },
                googleFonts: ["Montserrat"]
              },
              productSet: {
                styles: {
                  products: {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px"
                    }
                  }
                }
              },
              modalProduct: {
                contents: {
                  img: false,
                  imgWithCarousel: true,
                  button: false,
                  buttonWithQuantity: true
                },
                styles: {
                  product: {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px"
                    }
                  },
                  button: {
                    "font-family": "Montserrat, sans-serif",
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px",
                    ":hover": {
                      "background-color": "#004a95"
                    },
                    "background-color": "#0052a5",
                    ":focus": {
                      "background-color": "#004a95"
                    },
                    "border-radius": "6px"
                  },
                  quantityInput: {
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px"
                  }
                },
                googleFonts: ["Montserrat"],
                text: {
                  button: "Add to cart"
                }
              },
              option: {
                styles: {
                  label: {
                    "font-family": "Montserrat, sans-serif"
                  },
                  select: {
                    "font-family": "Montserrat, sans-serif"
                  }
                },
                googleFonts: ["Montserrat"]
              },
              cart: {
                styles: {
                  button: {
                    "font-family": "Montserrat, sans-serif",
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px",
                    ":hover": {
                      "background-color": "#004a95"
                    },
                    "background-color": "#0052a5",
                    ":focus": {
                      "background-color": "#004a95"
                    },
                    "border-radius": "6px"
                  }
                },
                text: {
                  total: "Subtotal",
                  button: "Checkout"
                },
                googleFonts: ["Montserrat"]
              },
              toggle: {
                styles: {
                  toggle: {
                    "font-family": "Montserrat, sans-serif",
                    "background-color": "#0052a5",
                    ":hover": {
                      "background-color": "#004a95"
                    },
                    ":focus": {
                      "background-color": "#004a95"
                    }
                  },
                  count: {
                    "font-size": "16px"
                  }
                },
                googleFonts: ["Montserrat"]
              }
            }
          });
        });
      }
    };

    loadShopifyScript();

    return () => {
      const container = document.getElementById(buttonId);
      if (container) container.innerHTML = '';
    };
  }, [productId, variantId]);

  return <div id={buttonId} className="w-full" />;
}