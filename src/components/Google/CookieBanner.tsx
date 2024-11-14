"use client";
import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/utils/storageHelper";
import { useState, useEffect } from "react";
import { useI18n } from "@/locales/client";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  const t = useI18n();

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
  }, []);

  useEffect(() => {
    if (cookieConsent !== null) {
      const newValue = cookieConsent ? "granted" : "denied";

      // Check if gtag is available
      if (typeof window !== "undefined" && window.gtag) {
        try {
          window.gtag("consent", "update", {
            analytics_storage: newValue,
            ad_storage: newValue,
            ad_user_data: newValue,
            ad_personalization: newValue,
          });
          console.log("Successfully updated gtag consent");
        } catch (error) {
          console.error("Error updating gtag consent:", error);
        }
      } else {
        console.warn("Google Analytics not initialized yet");
      }

      setLocalStorage("cookie_consent", cookieConsent);
    }
  }, [cookieConsent]);

  if (cookieConsent !== null) return null; //If some animations would be added to the component delete this and use CSS to hide

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-gray-dark p-4 shadow-lg">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white">{t("cookie")}</p>
          <div className="flex gap-4">
            <button
              onClick={() => setCookieConsent(false)}
              className="rounded border border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              {t("reject")}
            </button>
            <button
              onClick={() => setCookieConsent(true)}
              className="rounded bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              {t("accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
