const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN!;

export async function shopifyFetch({
  endpoint,
  method = "GET",
  body,
  cache = "no-store",
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
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache,
  });

  const responseBody = await response.text();
  

  if (!response.ok) {
    throw new Error(`Shopify API error: ${responseBody}`);
  }

  return JSON.parse(responseBody);
}
