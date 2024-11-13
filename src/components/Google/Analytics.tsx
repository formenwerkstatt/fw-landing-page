"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Type definitions
type ConsentState = "granted" | "denied";

interface ConsentUpdate {
  analytics_storage: ConsentState;
  ad_storage: ConsentState;
  personalization_storage: ConsentState;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// gtag function for pushing events to the dataLayer
const gtag = (...args: any[]) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
};

// Initialize Google Analytics with consent mode
const initializeAnalytics = (GA_ID: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    // Check and set default consent state
    const defaultConsent: ConsentUpdate = {
      analytics_storage: "denied",
      ad_storage: "denied",
      personalization_storage: "denied",
    };
    gtag("consent", "default", defaultConsent);

    // Initialize Google Analytics
    gtag("js", new Date());
    gtag("config", GA_ID, {
      page_path: window.location.pathname,
    });

    // Set a short timeout to confirm initialization
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

// Utility for setting cookies
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure`;
};

// Utility for retrieving cookies
const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2 ? parts.pop()?.split(";").shift() || null : null;
};

// Analytics Component
export function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const [isInitialized, setIsInitialized] = useState(false);
  const pathname = usePathname();

  // Load and initialize analytics on page load
  useEffect(() => {
    if (!GA_ID) {
      console.error("Google Analytics ID is not configured");
      return;
    }

    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;

    script.onload = async () => {
      const initialized = await initializeAnalytics(GA_ID);
      setIsInitialized(initialized);

      // Set consent based on cookie state
      const consentCookie = getCookie("cookie-consent");
      if (consentCookie === "granted") {
        const grantedConsent: ConsentUpdate = {
          analytics_storage: "granted",
          ad_storage: "granted",
          personalization_storage: "granted",
        };
        gtag("consent", "update", grantedConsent);
      }
    };

    script.onerror = () => {
      console.error("Failed to load Google Analytics script");
      setIsInitialized(false);
    };

    document.head.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [GA_ID]);

  // Track page views on route change
  useEffect(() => {
    if (isInitialized && GA_ID && pathname) {
      gtag("config", GA_ID, {
        page_path: pathname,
      });
    }
  }, [isInitialized, GA_ID, pathname]);

  return null;
}

// Consent Banner Component
export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const existingConsent = getCookie("cookie-consent");
    setShowBanner(!existingConsent);
  }, []);

  const handleConsent = (isGranted: boolean) => {
    const consentUpdate: ConsentUpdate = {
      analytics_storage: isGranted ? "granted" : "denied",
      ad_storage: isGranted ? "granted" : "denied",
      personalization_storage: isGranted ? "granted" : "denied",
    };

    // Update consent in gtag and set cookie
    gtag("consent", "update", consentUpdate);
    setCookie("cookie-consent", isGranted ? "granted" : "denied", 365);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 p-4 shadow-lg">
      <div className="flex items-center justify-between text-white">
        <p>We use cookies to enhance your experience. Do you consent?</p>
        <div>
          <button onClick={() => handleConsent(false)} className="mr-4">
            Deny
          </button>
          <button onClick={() => handleConsent(true)}>Accept</button>
        </div>
      </div>
    </div>
  );
}
