"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Common/Gallery";
import RelatedPost from "@/components/Services/RelatedPost";
import SharePost from "@/components/Services/SharePost";

import TagButton from "@/components/Services/TagButton";

import { useParams, useRouter } from "next/navigation";

export default function JobPage() {
  const { id } = useParams();
  const router = useRouter();

  const title = "job title";
  const description = "job description";
  const images = [""];



  return (
    <>
      <Breadcrumb pageName={title} description={description} />

      <Gallery serviceTitle={title} images={images} />

      <section className="overflow-hidden pb-[120px] ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">JOB PAGE CONTENT</div>

            <div className="flex items-center sm:justify-end">
              <SharePost />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
