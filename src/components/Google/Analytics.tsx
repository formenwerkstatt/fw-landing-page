"use client";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize gtag
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag("config", GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };

    handleRouteChange(`${pathname}?${searchParams}`);
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

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

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure'
            });
            
            // Initialize consent mode
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `,
        }}
      />
    </>
  );
}

// Add this type declaration at the top of your file or in a separate .d.ts file
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}