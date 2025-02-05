"use server";

import { shopifyFetch } from "@/lib/shopify";
import { Product, ShopifyProduct } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const data = await shopifyFetch({ endpoint: "products.json" });

  console.dir(data, { depth: null });
  return data.products.map((p: ShopifyProduct) => ({
    id: p.id,
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
    name: p.title,
    description: p.body_html,
    price: parseFloat(p.variants[0].price),
    stock: p.variants[0].inventory_quantity,
    imgUrl: p.images.map((img: any) => img.src),
    createdAt: new Date().toISOString(),
  };
}
