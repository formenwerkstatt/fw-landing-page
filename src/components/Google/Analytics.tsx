"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCurrentLocale, useI18n } from "@/locales/client";

// Type definitions
type ConsentState = "granted" | "denied";

interface ConsentUpdate {
  analytics_storage: ConsentState;
  ad_storage: ConsentState;
  ad_user_data: ConsentState;
  ad_personalization: ConsentState;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Improved gtag function with type checking and debugging
const gtag = (...args: any[]) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    if (process.env.NODE_ENV === "development") {
      console.log("GTM Event:", args);
    }
    window.dataLayer.push(args);
  }
};

// Enhanced analytics initialization with verification
const initializeAnalytics = (GA_ID: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if (!GA_ID || !GA_ID.startsWith("G-")) {
      console.error(
        "Invalid Google Analytics ID format. Expected format: G-XXXXXXXXXX",
      );
      resolve(false);
      return;
    }

    // Set default consent state before initializing analytics
    const defaultConsent: ConsentUpdate = {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    };
    gtag("consent", "default", { ...defaultConsent, region: ["EE-EEA", "GB"] });

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    // Enhanced gtag function with error handling
    window.gtag = function (...args: any[]) {
      try {
        window.dataLayer.push(arguments);
        if (process.env.NODE_ENV === "development") {
          console.log("GTM Push:", args);
        }
      } catch (error) {
        console.error("Error pushing to dataLayer:", error);
      }
    };

    // Initialize gtag with page view tracking
    gtag("js", new Date());
    gtag("config", GA_ID, {
      page_path: window.location.pathname,
      debug_mode: process.env.NODE_ENV === "development",
    });

    setTimeout(() => {
      if (window.dataLayer && window.dataLayer.length > 0) {
        if (process.env.NODE_ENV === "development") {
          console.log("Analytics initialized successfully");
        }
        resolve(true);
      } else {
        console.error(
          "Analytics initialization may have failed - no events in dataLayer",
        );
        resolve(false);
      }
    }, 1000);
  });
};

// Enhanced cookie utilities with secure defaults
const setCookie = (name: string, value: string, days: number) => {
  try {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure`;
    return true;
  } catch (error) {
    console.error("Error setting cookie:", error);
    return false;
  }
};

const getCookie = (name: string): string | null => {
  try {
    if (typeof window === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
  } catch (error) {
    console.error("Error getting cookie:", error);
    return null;
  }
};

// Enhanced Analytics Component with initialization verification
export function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;
  const [isInitialized, setIsInitialized] = useState(false);
  const pathname = usePathname();
  const locale = useCurrentLocale();

  // Initialize analytics
  useEffect(() => {
    if (!GA_ID || !locale) {
      console.error("Google Analytics ID or locale is not configured");
      return;
    }

    // Load Google Analytics script with error handling
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;

    script.onload = async () => {
      const initialized = await initializeAnalytics(GA_ID);
      setIsInitialized(initialized);

      const consentCookie = getCookie("cookie-consent");
      if (consentCookie === "granted" && initialized) {
        const grantedConsent: ConsentUpdate = {
          analytics_storage: "granted",
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
        };
        gtag("consent", "update", grantedConsent);
      }
    };

    script.onerror = () => {
      console.error("Failed to load Google Analytics script");
      setIsInitialized(false);
    };

    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [GA_ID, locale]);

  // Track page views
  useEffect(() => {
    if (isInitialized && GA_ID && pathname) {
      gtag("config", GA_ID, {
        page_path: pathname,
        page_location:
          typeof window !== "undefined" ? window.location.href : undefined,
      });
    }
  }, [isInitialized, GA_ID, pathname]);

  return null;
}

// Enhanced Consent Banner Component
export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const t = useI18n();

  useEffect(() => {
    const timer = setTimeout(() => {
      const existingConsent = getCookie("cookie-consent");
      setShowBanner(!existingConsent);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const updateConsent = (consent: ConsentUpdate) => {
    try {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", consent);
        if (process.env.NODE_ENV === "development") {
          console.log("Consent updated:", consent);
        }
      }
    } catch (error) {
      console.error("Error updating consent:", error);
    }
  };

  const handleAccept = () => {
    const consentUpdate: ConsentUpdate = {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    };

    updateConsent(consentUpdate);
    setCookie("cookie-consent", "granted", 365);
    setShowBanner(false);

    if (window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_TAG_ID, {
        page_path: window.location.pathname,
      });
    }
  };

  const handleReject = () => {
    const consentUpdate: ConsentUpdate = {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    };

    updateConsent(consentUpdate);
    setCookie("cookie-consent", "denied", 365);
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
