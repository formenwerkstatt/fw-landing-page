"use client";
import { ReactElement, use } from "react";
import { I18nProviderClient } from "@/locales/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/Google/CookieBanner";

export default function SubLayout(
  props: {
    children: ReactElement<any>;
    params: Promise<{ locale: string }>;
  }
) {
  const params = use(props.params);

  const {
    children
  } = props;

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
