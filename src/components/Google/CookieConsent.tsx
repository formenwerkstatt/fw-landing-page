"use client";
import { useI18n } from "@/locales/client";
import { useEffect, useState } from "react";

// Cookie helper functions
const setCookie = (name: string, value: string, days: number) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookieValue =
    encodeURIComponent(value) +
    "; expires=" +
    expirationDate.toUTCString() +
    "; path=/; SameSite=Lax; Secure";
  document.cookie = name + "=" + cookieValue;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
};

// Google Analytics helper functions
const initializeGA = (measurementId: string) => {
  // Load Google Analytics script
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", measurementId, {
    cookie_flags: "SameSite=None;Secure",
  });
};

const disableGA = () => {
  // Disable GA tracking
  (window as any)["ga-disable-" + process.env.NEXT_GOOGLE_ANALYTICS_ID] = true;
  
  // Remove GA cookies
  setCookie("_ga", "", -1);
  setCookie("_ga_" + process.env.NEXT_GOOGLE_ANALYTICS_ID?.replace("G-", ""), "", -1);
  setCookie("_gid", "", -1);
  setCookie("_gat", "", -1);
};

interface CookieConsentProps {
  measurementId?: string;
}

export default function CookieConsent({ 
  measurementId = process.env.NEXT_GOOGLE_ANALYTICS_ID 
}: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const t = useI18n();

  useEffect(() => {
    // Check for existing cookie consent
    const consent = getCookie("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted" && measurementId) {
      // Initialize GA if consent was previously given
      initializeGA(measurementId);
    }
  }, [measurementId]);

  const handleAccept = () => {
    // Set cookie with 365 days expiration
    setCookie("cookie-consent", "accepted", 365);
    setShowBanner(false);
    
    // Initialize GA when user accepts
    if (measurementId) {
      initializeGA(measurementId);
    }
  };

  const handleReject = () => {
    // Set cookie with rejected status
    setCookie("cookie-consent", "rejected", 365);
    setShowBanner(false);
    
    // Disable GA tracking and remove cookies
    disableGA();
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

// Add type definition for window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}