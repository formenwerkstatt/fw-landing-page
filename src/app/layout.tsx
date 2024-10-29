import { Inter, Titillium_Web } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import "leaflet/dist/leaflet.css";
import { ReactElement } from "react";
import { Providers } from "./providers";
import { getCurrentLocale } from "@/locales/server";
import AdsComponent from "@/components/Google/AdsComponent";
import { AnalyticsComponent } from "@/components/Google/AnalyticsComponent";
import CookieConsent from "@/components/Google/CookieConsent";
import { ConsentBanner } from "@/components/Google/ConsentBanner";

const titillium = Titillium_Web({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }: { children: ReactElement }) {
  const locale = getCurrentLocale();

  return (
    <html lang={locale} suppressHydrationWarning={false}>
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${titillium.className}`}>
        <Providers>{children}</Providers>
        {/* <AdsComponent />
        <AnalyticsComponent /> */}
        <ConsentBanner />
      </body>
    </html>
  );
}
