'use server'

import { shopifyFetch } from "@/lib/shopify";
import { CartItem } from "@/types";
import { redirect } from "next/navigation";

export async function createCheckout(cart: CartItem[]) {
  try {
    console.log('Checkout cart items:', JSON.stringify(cart, null, 2));

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
      }
    });

    console.log('Shopify checkout response:', JSON.stringify(response, null, 2));

    // Directly redirect to Shopify checkout URL
    redirect(response.checkout.web_url);
  } catch (error) {
    console.error('Detailed Checkout Error:', error);
    throw new Error(`Checkout failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}