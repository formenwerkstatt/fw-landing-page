"use client";
import React from "react";
import SectionTitle from "../Common/SectionTitle";
import useHomeArticle from "@/data/useHomeArticle";
import Image from "next/image";
import ImageSection from "../Common/ImageSection";
import { useScopedI18n } from "@/locales/client";

export default function HomeArticle({
  scope,
  nested,
  images = [
    "/images/shop/settings-wrench.svg",
    "/images/shop/laptop-portable.svg",
    "/images/shop/settings-configuration.svg",
  ],
}: {
  scope: string;
  nested?: string;
  images?: string[];
}) {
  const t = useScopedI18n("about");
  const article = useHomeArticle(scope, nested ? nested : "");

  return (
    <section className="container">
      <SectionTitle
        title={article.title}
        paragraph={article.introduction}
        width="full"
        isHomepage
        center
      />
      <ul className="mb-24 flex flex-wrap gap-12 ">
        {article.sections.map((section, index) => (
          <li
            key={section.title}
            className={`flex w-full items-center justify-evenly gap-8 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <aside className="max-w-3xl">
              <h4 className="mb-4 text-2xl font-bold text-black dark:text-white">
                {section.title}
              </h4>
              <ul className="flex  flex-col gap-4">
                {section.list.map((item) => (
                  <li className="text-lg text-body-color" key={item}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </aside>

            <Image
              src={`${index === 1 ? images[1] : index === 2 ? images[2] : images[0]}`}
              className="w-48 md:w-72"
              width={350}
              height={300}
              alt={section.title + " image"}
            />
          </li>
        ))}
      </ul>

      <ul className=" my-24 grid gap-4 text-center lg:grid-cols-3 lg:gap-36">
        {article.benefits.map((item) => {
          return (
            <li
              className="flex items-center justify-center rounded-3xl bg-white px-12 py-8 text-xl shadow-md dark:bg-gray-dark"
              key={item}
            >
              <p>{item}</p>
            </li>
          );
        })}
      </ul>

      <ImageSection
        title="info@formenwerkstatt.de"
        paragraph={t("cta")}
        list={[t("ctaList.0"), t("ctaList.1"), t("ctaList.2")]}
        src=""
        center
      />
    </section>
  );
}
