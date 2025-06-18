import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductSection from "@/components/Shop/ProductSection";
import Reviews from "@/components/Shop/Reviews";
import { getProduct } from "@/ARCHIVE/actions/shopify-actions";
import HomeArticle from "@/components/HomeArticle";
import { Metadata } from "next";

export async function generateMetadata(
  props: {
    params: Promise<{ id: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;
  const product = await getProduct(id);

  return {
    title: product
      ? `${product.name} | Formenwerkstatt Shop`
      : "Creative Plate",
    description:
      "Die Creative Plate ist eine anpassbare Kennzeichenhalterung, die es Ihnen ermöglicht, Ihr Autokennzeichen individuell zu gestalten.",
    alternates: {
      canonical: `https://formenwerkstatt.de/shop/product/${id}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ProductDetailsPage(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;
  const { id } = params;

  // const product = await getDocument<Product>("products", id);
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        pageName={"Shop"}
        description={"Formenwerkstatt Shop"}
        showLink={false}
      />

      <ProductSection product={product} />

      <HomeArticle
        scope={"products"}
        nested={product.name}
        images={[
          "/images/shop/settings-wrench.svg",
          "/images/shop/Flag_of_Germany.svg",
          "/images/shop/settings-configuration.svg",
        ]}
      />

      <Reviews />
    </>
  );
}
