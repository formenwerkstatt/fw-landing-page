'use server'

import { shopifyFetch } from "@/lib/shopify";
import { Order } from "@/types";

export async function createOrder(order: Order) {
  const shopifyOrder = await shopifyFetch({
    endpoint: 'orders.json',
    method: 'POST',
    body: {
      order: {
        line_items: order.items.map(item => ({
          variant_id: item.id,
          quantity: item.quantity
        })),
        customer: {
          email: order.personalInfo.email,
          first_name: order.personalInfo.name,
          phone: order.personalInfo.phone
        },
        shipping_address: {
          address1: order.personalInfo.address,
          name: order.personalInfo.name,
        },
        financial_status: "pending",
        send_receipt: true, // Shopify will send order confirmation
        inventory_behaviour: "decrement_ignoring_policy" // Handle inventory
      }
    },
    cache: 'no-store'
  });

  return shopifyOrder;
}