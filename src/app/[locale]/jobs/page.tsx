"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import useJobsData from "@/data/useJobsData";
import ImageSection from "@/components/Common/ImageSection";

export default function Jobs() {
  const jobs = useJobsData();
  const ad = jobs.ads[0];

  return (
    <>
      <Breadcrumb pageName={jobs.title} description={jobs.paragraph} />

      <section
        id="jobs"
        className="relative bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          <ImageSection
            title={jobs.sectionTitle}
            paragraph={jobs.sectionParagraph}
            list={jobs.sectionList}
            src="/images/enhance.webp"
          />
          <article className="mt-8 ">
            <h3 className="text-balanced mb-8 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-4xl">
              {ad.paragraph}
            </h3>
            <ul className="mx-auto mb-28 w-5/6 list-none">
              {ad.content.map((item, index) => (
                <li
                  key={index}
                  className="mb-8 text-lg text-body-color md:text-lg"
                >
                  {item.title}

                  <ul className="list-disc pl-6">
                    {item.list.map((bullet) => (
                      <li
                        key={bullet}
                        className="py-1 text-base !leading-relaxed text-body-color md:text-lg"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <ImageSection
              title="info@formenwerkstatt.de"
              paragraph={ad.cta}
              list={[]}
              src=""
              center
            />
          </article>
        </div>
      </section>
    </>
  );
}
