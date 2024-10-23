import ContactCard from "./ContactCard";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

import { getScopedI18n } from "@/locales/server";
import { cn } from "@/utils/cn";

export default async function Contact() {
  const t = await getScopedI18n("contact");

  return (
    <section id="contact" className="overflow-hidden py-16 md:pb-20 lg:pb-24">
      <div className="container">
        <div className={cn("-mx-4 flex flex-wrap")}>
          
          <ContactCard />

          <div className={cn(" w-full px-4 pb-4 ")}>
            <Map center={[49.707556892870045, 8.84701398118458]} zoom={16} />
          </div>

          <div className={cn("col-span-7 h-full w-full px-4 pb-4 ")}>
            <div
              className={cn(
                " rounded-sm bg-white px-8 py-11 shadow-two dark:bg-gray-dark ",
                // " sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]",
              )}
              data-wow-delay=".15s
              "
            >
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
