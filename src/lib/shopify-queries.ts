import { gql } from 'graphql-request';

// Query to get all products
export const GET_PRODUCTS = gql`
  query GetProducts($first: Int = 250) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description: descriptionHtml
          createdAt
          images(first: 10) {
            edges {
              node {
                url
                altText
              }
            }
          }
          media(first: 10) {
            edges {
              node {
                mediaContentType
                alt
                ... on Video {
                  id
                  sources {
                    url
                    mimeType
                  }
                  originalSource {
                    url
                  }
                }
                ... on ExternalVideo {
                  id
                  embedUrl
                }
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price
                inventoryQuantity
                availableForSale
              }
            }
          }
        }
      }
    }
  }
`;

// Query to get a single product by ID
export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      title
      handle
      description: descriptionHtml
      createdAt
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      media(first: 10) {
        edges {
          node {
            mediaContentType
            alt
            ... on Video {
              id
              sources {
                url
                mimeType
              }
              originalSource {
                url
              }
            }
            ... on ExternalVideo {
              id
              embedUrl
            }
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price
            inventoryQuantity
            availableForSale
          }
        }
      }
    }
  }
`;

// Query to get orders
export const GET_ORDERS = gql`
  query GetOrders($first: Int = 50) {
    orders(first: $first) {
      edges {
        node {
          id
          name
          totalPrice {
            amount
          }
          lineItems(first: 10) {
            edges {
              node {
                title
                quantity
                variant {
                  id
                  price {
                    amount
                  }
                }
              }
            }
          }
          customer {
            id
            email
          }
        }
      }
    }
  }
`;

// Query to get a specific order
export const GET_ORDER = gql`
  query GetOrder($id: ID!) {
    order(id: $id) {
      id
      name
      totalPrice {
        amount
      }
      lineItems(first: 20) {
        edges {
          node {
            title
            quantity
            variant {
              id
              price {
                amount
              }
            }
          }
        }
      }
      customer {
        id
        email
      }
    }
  }
`;