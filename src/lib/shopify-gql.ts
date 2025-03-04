import { GraphQLClient } from 'graphql-request';

const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const SHOPIFY_STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;

// For Admin API
const SHOPIFY_ADMIN_API_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN!;

// Client for Storefront API (public)
export const storefrontClient = new GraphQLClient(
  `https://${SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`,
  {
    headers: {
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
      'Content-Type': 'application/json',
    },
  }
);

// Client for Admin API (private)
export const adminClient = new GraphQLClient(
  `https://${SHOPIFY_STORE_DOMAIN}/admin/api/2023-10/graphql.json`,
  {
    headers: {
      'X-Shopify-Access-Token': SHOPIFY_ADMIN_API_TOKEN,
      'Content-Type': 'application/json',
    },
  }
);