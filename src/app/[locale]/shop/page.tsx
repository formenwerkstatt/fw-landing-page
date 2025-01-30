import { getCollection } from "@/app/actions";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductCard from "@/components/Shop/ProductCard";
import { Product } from "@/types";

export default async function ShopPage() {
  const products = (await getCollection("products")) as Product[];

  return (
    <>
      <Breadcrumb
        pageName="Shop"
        description="Formenwerkstatt Shop"
        showLink={false}
      />

      {products && (
        <section className="container mb-24 grid gap-16 md:grid-cols-2 lg:grid-cols-3 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </>
  );
}
