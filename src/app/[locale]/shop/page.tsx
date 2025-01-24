// app/shop/page.tsx
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductCard from "@/components/Common/ProductCard";
import SectionTitle from "@/components/Common/SectionTitle";
import { adminDb } from "@/firebase/firebaseAdminConfig";

async function fetchProductsServerSide() {
  const snapshot = await adminDb.collection("products").get();
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      description: data.description,
      price: data.price,
      imgUrl: data.imgUrl,
      stock: data.stock,
    };
  });
}

export default async function ShopPage() {
  const products = await fetchProductsServerSide();

  return (
    <>
      <Breadcrumb pageName="Shop" description="Formenwerkstatt Shop" />

      <section className="container mb-24 grid grid-cols-2 gap-16 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
