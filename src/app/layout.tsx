import { Titillium_Web } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import { ReactElement, Suspense } from "react";
import { Providers } from "./providers";
import { getCurrentLocale } from "@/locales/server";
import GoogleAnalytics from "@/components/Google/Analytics";
import { setStaticParamsLocale } from "next-international/server";

const titillium = Titillium_Web({ subsets: ["latin"], weight: ["400", "700"] });

export default async function RootLayout({
  children,
}: {
  children: ReactElement<any>;
}) {
  let locale;
  try {
    locale = await getCurrentLocale();
  } catch (error) {
    // Fallback to default locale if getCurrentLocale fails
    locale = 'de';
  }
  
  setStaticParamsLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${titillium.className}`}>
        <Suspense fallback={null}>
          <GoogleAnalytics
            GA_MEASUREMENT_ID={`${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          />
        </Suspense>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}