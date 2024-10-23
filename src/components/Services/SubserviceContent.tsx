import { subService } from "@/types";
import AboutSectionTwo from "../About/AboutSectionTwo";
import AboutSectionOne from "../Common/ImageSection";
import Link from "next/link";

export default function SubserviceContent({
  subservice,
}: {
  subservice: subService;
}) {
  const { paragraph, nestedList, cta } = subservice;

  return (
    <>
      <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
        {paragraph}
      </p>

      {nestedList.map((bList) => (
        <div key={bList.title} className="pl-4">
          <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
            {bList.title}
          </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
            {bList.list.map((item) => (
              <li
                className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link
        href="/contact"
        className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
      >
        {cta}
      </Link>
    </>
  );
}
