import ContactCard from "./ContactCard";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

import { getScopedI18n } from "@/locales/server";
import { cn } from "@/utils/cn";
import ImageSection from "../Common/ImageSection";

export default async function Contact() {
  const t = await getScopedI18n("contact");
  const t2 = await getScopedI18n("about");

  return (
    <>
      <div className={cn("mb-24 flex flex-wrap")}>
        <ContactCard />

        {/* <div className={cn(" w-full px-4 pb-4 ")}>
     <Map center={[49.707556892870045, 8.84701398118458]} zoom={16} />
   </div> */}
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
