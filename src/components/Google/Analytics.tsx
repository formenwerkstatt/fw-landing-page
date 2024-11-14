"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/utils/gtagHelper";

export default function GoogleAnalytics({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) {
  const pathname = usePathname();
  // Moving useSearchParams inside an effect to avoid the suspense requirement
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const searchParams = new URLSearchParams(window.location.search);
        const url = pathname + searchParams.toString();
        pageview(GA_MEASUREMENT_ID, url);
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Analytics error:', error);
      }
    }
  }, [pathname, GA_MEASUREMENT_ID]);

  // Don't render during SSR
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_storage': 'denied',
            });

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}