'use client'
import { useState, useEffect } from 'react';

// Type definitions
type ConsentState = 'granted' | 'denied';

interface ConsentUpdate {
  analytics_storage: ConsentState;
  ad_storage: ConsentState;
  ad_user_data: ConsentState;
  ad_personalization: ConsentState;
}


// Properly type the gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Safe gtag function
const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
};

// Initialize analytics with consent mode
const initializeAnalytics = (GA_ID: string) => {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Define gtag function
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Set default consent state
  const defaultConsent: ConsentUpdate = {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
  };

  gtag('consent', 'default', {
    ...defaultConsent,
    'region': ['EE-EEA', 'GB']
  });

  // Initialize gtag
  gtag('js', new Date());
  gtag('config', GA_ID, {
    page_path: window.location.pathname,
  });
};

// Cookie utilities
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
};

const getCookie = (name: string): string | null => {
  if (typeof window === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

// Analytics Component
export function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  
  useEffect(() => {
    if (!GA_ID) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    script.onload = () => initializeAnalytics(GA_ID);
    document.head.appendChild(script);

    // Check existing consent
    const consentCookie = getCookie('cookie-consent');
    if (consentCookie === 'granted') {
      const grantedConsent: ConsentUpdate = {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      };
      gtag('consent', 'update', grantedConsent);
    }
  }, [GA_ID]);

  return null;
}

// Consent Banner Component
export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(true);
  
  useEffect(() => {
    const existingConsent = getCookie('cookie-consent');
    if (existingConsent) {
      setShowBanner(false);
    }
  }, []);

  const updateConsent = (consent: ConsentUpdate) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', consent);
    }
  };

  const handleAccept = () => {
    const consentUpdate: ConsentUpdate = {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    };
    
    updateConsent(consentUpdate);
    setCookie('cookie-consent', 'granted', 365);
    setShowBanner(false);
  };

  const handleReject = () => {
    const consentUpdate: ConsentUpdate = {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    };
    
    updateConsent(consentUpdate);
    setCookie('cookie-consent', 'denied', 365);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 p-4 shadow-lg">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white">
            We use cookies to enhance your browsing experience and analyze our traffic.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleReject}
              className="rounded border border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              Reject All
            </button>
            <button
              onClick={handleAccept}
              className="rounded bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}