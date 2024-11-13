import ContactCard from "./ContactCard";

import { getScopedI18n } from "@/locales/server";
import { cn } from "@/utils/cn";
import ImageSection from "../Common/ImageSection";
import MapComponent from "../Google/MapComponent";

export default async function Contact() {
  const t2 = await getScopedI18n("about");

  return (
    <>
      <div className={cn("mb-24 flex flex-wrap")}>
        <ContactCard />
        {/* <MapComponent /> */}
        <div className="w-3/5 px-4 pb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.169804862286!2d8.844841716017683!3d49.70760484848979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd607196f1b0cb%3A0xba05bbb5a15f044e!2sFormenwerkstatt+GmbH!5e0!3m2!1sde!2sde!4v1482094744213"
            width="100%"
            height="570"
          />
        </div>
      </div>
      <ImageSection
        title="info@formenwerkstatt.de"
        paragraph={t2("cta")}
        list={[t2("ctaList.0"), t2("ctaList.1"), t2("ctaList.2")]}
        src=""
        center
      />
    </>
  );
}
