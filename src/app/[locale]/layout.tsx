"use client";
import { ReactElement } from "react";
import { I18nProviderClient } from "@/locales/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Loading from "@/components/Common/Loading";
import { Analytics, ConsentBanner } from "@/components/Google/Analytics";

export default function SubLayout({
  children,
  params,
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  return (
    <I18nProviderClient locale={params.locale} fallback={<Loading />}>
      <Analytics />
      <ConsentBanner />
      <main className="size-full">
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </main>
    </I18nProviderClient>
  );
}
