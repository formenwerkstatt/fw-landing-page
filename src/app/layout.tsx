import { Inter, Titillium_Web } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import "leaflet/dist/leaflet.css";
import { ReactElement } from "react";
import { Providers } from "./providers";
import { getCurrentLocale } from "@/locales/server";
import Script from "next/script";
import GoogleAnalytics from "@/components/Google/Analytics";

const titillium = Titillium_Web({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }: { children: ReactElement }) {
  const locale = getCurrentLocale();

  return (
    <html lang={locale} suppressHydrationWarning={false}>
      <GoogleAnalytics
        GA_MEASUREMENT_ID={`${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <body className={`bg-[#FCFCFC] dark:bg-black ${titillium.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
