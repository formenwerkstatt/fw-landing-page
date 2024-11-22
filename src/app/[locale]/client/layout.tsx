"use client";
import { ReactElement } from "react";
import { I18nProviderClient } from "@/locales/client";
import Loading from "@/components/Common/Loading";

export default function SubLayout({
  children,
  params,
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  return (
    <I18nProviderClient locale={params.locale} fallback={<Loading />}>
      {children}
    </I18nProviderClient>
  );
}
