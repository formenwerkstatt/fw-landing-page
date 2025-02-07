"use server";

import { shopifyFetch } from "@/lib/shopify";
import { Product, ShopifyProduct } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const data = await shopifyFetch({ endpoint: "products.json" });

  return data.products.map((p: ShopifyProduct) => ({
    id: p.id,
    var_id: p.variants[0].id,
    name: p.title,
    description: p.body_html,
    price: parseFloat(p.variants[0].price),
    stock: p.variants[0].inventory_quantity,
    imgUrl: p.images.map((img) => img.src),
    createdAt: new Date().toISOString(),
  }));
}

export async function getProduct(id: string): Promise<Product> {
  const data = await shopifyFetch({
    endpoint: `products/${id}.json`,
    cache: "no-store",
  });

  const p = data.product;
  return {
    id: p.id,
    var_id: p.variants[0].id,
    name: p.title,
    description: p.body_html,
    price: parseFloat(p.variants[0].price),
    stock: p.variants[0].inventory_quantity,
    imgUrl: p.images.map((img: any) => img.src),
    createdAt: new Date().toISOString(),
  };
}

export async function getOrderDB(id: string) {
  const data = await shopifyFetch({
    endpoint: `orders/${id}.json`,
    cache: "no-store",
  });
  return data.order;
}

export async function getOrdersDB() {
  const data = await shopifyFetch({
    endpoint: "orders.json",
    cache: "no-store",
  });
  return data.orders;
}

export async function getProductsDB(): Promise<Product[]> {
  const data = await shopifyFetch({ endpoint: "products.json" });

  return data.products;
}

export async function getProductDB(id: string): Promise<Product> {
  const data = await shopifyFetch({
    endpoint: `products/${id}.json`,
    cache: "no-store",
  });

  return data.product;
}
