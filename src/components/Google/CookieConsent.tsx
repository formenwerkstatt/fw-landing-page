"use client";
import { useI18n } from "@/locales/client";
import { useEffect, useState } from "react";

// Cookie helper functions
const setCookie = (name: string, value: string, days: number) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  
  const cookieValue = encodeURIComponent(value) + 
    "; expires=" + expirationDate.toUTCString() + 
    "; path=/; SameSite=Lax; Secure";
  
  document.cookie = name + "=" + cookieValue;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const t = useI18n();

  useEffect(() => {
    // Check for existing cookie consent
    const consent = getCookie("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Set cookie with 365 days expiration
    setCookie("cookie-consent", "accepted", 365);
    setShowBanner(false);
  };

  const handleReject = () => {
    // Set cookie with rejected status
    setCookie("cookie-consent", "rejected", 365);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 p-4 shadow-lg">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white">{t("cookie")}</p>
          <div className="flex gap-4">
            <button
              onClick={handleReject}
              className="rounded border border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              {t("reject")}
            </button>
            <button
              onClick={handleAccept}
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