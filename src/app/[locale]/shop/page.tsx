import { getProducts } from "@/app/actions/products";
import Breadcrumb from "@/components/Common/Breadcrumb";
import HomeArticle from "@/components/HomeArticle";
import ProductCard from "@/components/Shop/ProductCard";
import { getI18n, getScopedI18n } from "@/locales/server";
import { Article } from "@/types";
// import { Product } from "@/types";

const CreativeCap = {
  id: "creative-cap",
  var_id: "N/A",
  name: "Creative Cap",
  description: "Coming soon!",
  price: NaN,
  imgUrl: ["/images/macro-03.png"],
  stock: 0,
};

export default async function ShopPage() {
  // const products = await getCollection<Product>("products");
  const products = await getProducts();

  return (
    <>
      <Breadcrumb
        pageName="Shop"
        description="Formenwerkstatt Shop"
        showLink={false}
      />

      {products && (
        <section className="container mb-24 grid gap-16 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          <ProductCard product={CreativeCap} comingSoon />
        </section>
      )}

      <HomeArticle scope={"shop"} />
    </>
  );
}
