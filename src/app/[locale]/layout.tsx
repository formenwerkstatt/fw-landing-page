"use client";
import { ReactElement } from "react";
import { I18nProviderClient } from "@/locales/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/Google/CookieBanner";

export default function SubLayout({
  children,
  params,
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  return (
    <I18nProviderClient locale={params.locale}>
      <main className="size-full">
        <CookieBanner />
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </main>
    </I18nProviderClient>
  );
}
