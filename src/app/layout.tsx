import { Inter, Titillium_Web } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import "leaflet/dist/leaflet.css";
import { ReactElement } from "react";
import { Providers } from "./providers";
import { getCurrentLocale } from "@/locales/server";
import { Analytics } from "@/components/Google/Analytics";
import Script from "next/script";

const titillium = Titillium_Web({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }: { children: ReactElement }) {
  const locale = getCurrentLocale();

  return (
    <html lang={locale} suppressHydrationWarning={false}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-TB3ZTBCB`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-TB3ZTBCB');`}
        </Script>
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${titillium.className}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-TB3ZTBCB`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
