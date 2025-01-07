"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ParallelGallery from "@/components/Services/ParallelGallery";
import SharePost from "@/components/Services/SharePost";
import SubserviceContent from "@/components/Services/SubserviceContent";
import useServicesData from "@/data/useServiceData";
import { useParams, useRouter } from "next/navigation";
import SwiperRelatedPosts from "./SwiperRelatedPosts";
import { useScopedI18n } from "@/locales/client";

export default function ServicePage() {
  const { id } = useParams();
  const router = useRouter();
  const serviceData = useServicesData();
  const t = useScopedI18n("menu");

  const subserviceList = serviceData.flatMap((service) => service.subServices);
  const subservice = subserviceList.find(
    (subservice) => subservice.path === `/${id}`,
  );

  if (!subservice) {
    router.push("/error");
    return null;
  }

  const { title, description, iconName } = subservice;

  return (
    <>
      <Breadcrumb pageName={title} description={description} />

      {/* <Gallery images={galleryImages} /> */}

      <ParallelGallery iconName={iconName} />

      <section className="overflow-hidden pb-[120px] ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <SubserviceContent subservice={subservice} />
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="mb-10 flex flex-col gap-2 rounded-lg bg-white shadow-three dark:bg-gray-dark dark:shadow-none ">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  {t("services")}
                </h3>
                <SwiperRelatedPosts relatedPosts={subserviceList} />
              </div>
              <div className="flex items-center sm:justify-end">
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
