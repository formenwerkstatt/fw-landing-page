import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductCard from "@/components/Common/ProductCard";

import { products } from "./products";
import Hero from "@/components/Hero";

export default function ShopPage() {
  return (
    <>
      <Breadcrumb pageName="Shop" description="Formenwerkstatt Shop" />
      
      <section className="container grid grid-cols-2 gap-16 md:grid-cols-3 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      ;
    </>
  );
}
