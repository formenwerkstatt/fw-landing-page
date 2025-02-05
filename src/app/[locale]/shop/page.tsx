import { getCollection } from "@/app/actions";
import { getProducts } from "@/app/actions/products";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductCard from "@/components/Shop/ProductCard";


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
        <section className="container mb-24 grid gap-16 md:grid-cols-2 lg:grid-cols-3 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </>
  );
}
