"use client";
import React from "react";
import SectionTitle from "../Common/SectionTitle";
import useHomeArticle from "@/data/useHomeArticle";
import Image from "next/image";

export default function HomeArticle() {
  const homeArticle = useHomeArticle();
  return (
    <section className="container">
      <SectionTitle
        title={homeArticle.title}
        paragraph={homeArticle.introduction}
        width="full"
        isHomepage
      />
      <ul className="flex flex-wrap gap-24">
        {homeArticle.sections.map((section, index) => (
          <li
            key={section.title}
            className={`flex flex-wrap gap-8 md:flex-nowrap ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <aside>
              <h4 className="mb-4 text-2xl font-bold text-black dark:text-white">
                {section.title}
              </h4>
              <p className="mb-4 text-xl text-body-color">{section.list[0]}</p>
              <ul className="mx-4 flex list-disc flex-col gap-4">
                {section.list.slice(1).map((item) => {
                  const boldPart = item.slice(0, item.indexOf(":"));
                  return (
                    <li className="text-lg text-body-color" key={item}>
                      <p>
                        <span className="font-bold">{boldPart}:</span>{" "}
                        {item.slice(boldPart.length + 1)}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </aside>

            <Image
              src={`${index === 1 ? "/images/macro-03.png" : index === 2 ? "/images/gallery/workshop-02.jpg" : "/images/werkzeug-01.png"}`}
              width={640}
              height={400}
              alt={section.title + " image"}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
