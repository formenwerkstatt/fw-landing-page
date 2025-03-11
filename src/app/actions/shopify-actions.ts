"use server";

import { adminClient } from "@/lib/shopify-gql";
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_ORDER,
  GET_ORDERS,
} from "@/lib/shopify-queries";
import { Product } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const data = (await adminClient.request(GET_PRODUCTS)) as {
    products: { edges: any[] };
  };

  return data.products.edges.map((edge: any) => {
    const p = edge.node;
    const defaultVariant = p.variants.edges[0].node;

    // Extract all variants
    const variants = p.variants.edges.map((variantEdge: any) => {
      const v = variantEdge.node;
      return {
        id: v.id.split("/").pop() || v.id,
        title: v.title || "Default",
        price: parseFloat(v.price),
        stock: v.inventoryQuantity || 0,
        isDefault: v === defaultVariant,
        imageUrl: v.image?.url || null // Add the variant image URL
      };
    });

    // Extract video URLs from media with duplicate prevention
    const videoSet = new Set();
    const videoUrls = p.media?.edges
      .filter((mediaEdge: any) => {
        const mediaType = mediaEdge.node.mediaContentType;
        return mediaType === "VIDEO" || mediaType === "EXTERNAL_VIDEO";
      })
      .map((mediaEdge: any) => {
        const mediaNode = mediaEdge.node;
        let url = null;
        if (mediaNode.mediaContentType === "VIDEO") {
          url = mediaNode.sources?.[0]?.url || mediaNode.originalSource?.url;
        } else if (mediaNode.mediaContentType === "EXTERNAL_VIDEO") {
          url = mediaNode.embedUrl;
        }
        return url;
      })
      .filter((url: string | null) => {
        if (!url) return false;
        if (videoSet.has(url)) return false;
        videoSet.add(url);
        return true;
      });

    return {
      id: p.id.split("/").pop() || p.id,
      var_id: defaultVariant.id.split("/").pop() || defaultVariant.id,
      name: p.title,
      description: p.description,
      price: parseFloat(defaultVariant.price),
      stock: defaultVariant.inventoryQuantity || 0,
      imgUrl: p.images.edges.map((img: any) => img.node.url),
      videoUrl: videoUrls,
      variants: variants,
      createdAt: p.createdAt,
      isBundle:
        p.title.toLowerCase().includes("bundle") || p.tags?.includes("bundle"),
    };
  });
}

export async function getProduct(id: string): Promise<Product> {
  const formattedId = id.includes("gid://")
    ? id
    : `gid://shopify/Product/${id}`;

  const data = (await adminClient.request(GET_PRODUCT, {
    id: formattedId,
  })) as { product: any };

  const p = data.product;
  const defaultVariant = p.variants.edges[0].node;

  // Extract all variants
  const variants = p.variants.edges.map((variantEdge: any) => {
    const v = variantEdge.node;
    return {
      id: v.id.split("/").pop() || v.id,
      title: v.title || "Default",
      price: parseFloat(v.price),
      stock: v.inventoryQuantity || 0,
      isDefault: v === defaultVariant,
      imageUrl: v.image?.url || null // Add the variant image URL
    };
  });

  // Extract video URLs with duplicate prevention
  const videoSet = new Set();
  const videoUrls = p.media?.edges
    .filter((mediaEdge: any) => {
      const mediaType = mediaEdge.node.mediaContentType;
      return mediaType === "VIDEO" || mediaType === "EXTERNAL_VIDEO";
    })
    .map((mediaEdge: any) => {
      const mediaNode = mediaEdge.node;
      let url = null;
      if (mediaNode.mediaContentType === "VIDEO") {
        url = mediaNode.sources?.[0]?.url || mediaNode.originalSource?.url;
      } else if (mediaNode.mediaContentType === "EXTERNAL_VIDEO") {
        url = mediaNode.embedUrl;
      }
      return url;
    })
    .filter((url: string | null) => {
      if (!url) return false;
      if (videoSet.has(url)) return false;
      videoSet.add(url);
      return true;
    });

  return {
    id: p.id.split("/").pop() || p.id,
    var_id: defaultVariant.id.split("/").pop() || defaultVariant.id,
    name: p.title,
    description: p.description,
    price: parseFloat(defaultVariant.price),
    stock: defaultVariant.inventoryQuantity || 0,
    imgUrl: p.images.edges.map((img: any) => img.node.url),
    videoUrl: videoUrls,
    variants: variants,
    createdAt: p.createdAt,
    isBundle:
      p.title.toLowerCase().includes("bundle") || p.tags?.includes("bundle"),
  };
}

export async function getOrderDB(id: string) {
  // Format ID properly for GraphQL
  const formattedId = id.includes("gid://") ? id : `gid://shopify/Order/${id}`;

  const data = (await adminClient.request(GET_ORDER, { id: formattedId })) as {
    order: any;
  };
  return data.order;
}

export async function getOrdersDB() {
  const data = (await adminClient.request(GET_ORDERS)) as {
    orders: { edges: any[] };
  };
  return data.orders.edges.map((edge: any) => edge.node);
}

export async function getProductsDB(): Promise<any[]> {
  const data = (await adminClient.request(GET_PRODUCTS)) as {
    products: { edges: any[] };
  };
  return data.products.edges.map((edge: any) => edge.node);
}

export async function getProductDB(id: string): Promise<any> {
  const formattedId = id.includes("gid://")
    ? id
    : `gid://shopify/Product/${id}`;
  const data = (await adminClient.request(GET_PRODUCT, {
    id: formattedId,
  })) as { product: any };
  return data.product;
}
