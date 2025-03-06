import { redirect } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductSection from "@/components/Shop/ProductSection";
import Reviews from "@/components/Shop/Reviews";
import { getProduct } from "@/app/actions/shopify-actions";
import HomeArticle from "@/components/HomeArticle";
import { getI18n, getScopedI18n } from "@/locales/server";

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // const product = await getDocument<Product>("products", id);
  const product = await getProduct(id);

  if (!product) {
    redirect("/error");
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
