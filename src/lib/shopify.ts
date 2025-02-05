import { CartItem } from "@/types";

const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN!;

export async function shopifyFetch({
  endpoint,
  method = 'GET',
  body,
  cache = 'force-cache'
}: {
  endpoint: string;
  method?: string;
  body?: any;
  cache?: RequestCache;
}) {
  const url = `https://${SHOPIFY_DOMAIN}/admin/api/2025-01/${endpoint}`;
  
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN
    },
    body: body ? JSON.stringify(body) : undefined,
    cache
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Shopify API error: ${error.errors || response.statusText}`);
  }

  return response.json();
}

export async function createCheckoutUrl(cart: CartItem[]) {
  const response = await shopifyFetch({
    endpoint: 'checkouts.json',
    method: 'POST',
    body: {
      checkout: {
        line_items: cart.map(item => ({
          variant_id: item.id,
          quantity: item.quantity
        }))
      }
    },
    cache: 'no-store'
  });
  
  return `https://${SHOPIFY_DOMAIN}/checkout/${response.checkout.token}`;
}