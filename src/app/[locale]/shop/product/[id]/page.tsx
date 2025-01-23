"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { products } from "../../products";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/utils/cn";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const product = products.find((item) => `${item.id}` === `${id}`);

  if (!product) {
    router.push("/error");
    return null;
  }

  return (
    <>
      <Breadcrumb pageName={""} description={""} showLink={false} />

      <section className="container mb-24 grid grid-cols-[auto_auto] gap-16">
        <div>
          <Image
            src={product.imgUrl}
            width={300}
            height={300}
            alt={product.description}
          />
        </div>

        <div className="bg-slate-200">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price} €</p>

          <button className={cn("bg-red-200 px-4 py-2")}>BUY NOW</button>
        </div>

        <div className="container col-span-2">
          <h3>Related Products</h3>
          <div className=" flex flex-wrap gap-24">
            {products.map((item, index) =>
              index < 3 ? (
                <div key={item.id}>
                  <Image
                    src={item.imgUrl}
                    width={150}
                    height={150}
                    alt={item.description}
                  />
                  <h4>{item.name}</h4>
                  <p>{item.price} €</p>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </section>
    </>
  );
}
