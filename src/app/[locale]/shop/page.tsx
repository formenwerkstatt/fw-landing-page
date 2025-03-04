import { getProducts } from "@/app/actions/shopify-actions";
import Breadcrumb from "@/components/Common/Breadcrumb";
import HomeArticle from "@/components/HomeArticle";
import ProductCard from "@/components/Shop/ProductCard";

// import { Product } from "@/types";

const CreativeCap = {
  id: "creative-cap",
  var_id: "N/A",
  name: "Creative Cap",
  description: "Coming soon!",
  price: NaN,
  imgUrl: ["/images/shop/bottlecaps.jpg"],
  stock: 0,
};

const SHOP_IMAGES = [
  "/images/shop/Flag_of_Germany.svg",
  "/images/shop/shopping-cart.svg",
  "/images/shop/headset.svg",
];

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

      <HomeArticle scope={"shop"} images={SHOP_IMAGES} />
    </>
  );
}
