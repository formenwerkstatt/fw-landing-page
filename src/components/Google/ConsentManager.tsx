// consentManager.ts
import { useEffect, useState } from 'react';

interface ConsentConfig {
  analytics_storage?: 'granted' | 'denied';
  ad_storage?: 'granted' | 'denied';
  ad_user_data?: 'granted' | 'denied';
  ad_personalization?: 'granted' | 'denied';
  region?: string[];
}

// Cookie management utilities
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
};

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

// Consent mode initialization
export const initializeConsentMode = () => {
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }

  // Set default consent state
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'region': ['EE-EEA', 'GB']
  });
};

// Analytics Component
export const Analytics = () => {
  const GA_ID = process.env.NEXT_GOOGLE_ANALYTICS_ID;
  const ADS_ID = process.env.NEXT_GOOGLE_ADS_ID;

  useEffect(() => {
    // Initialize consent mode
    initializeConsentMode();

    // Check existing consent
    const consentCookie = getCookie('cookie-consent');
    if (consentCookie === 'granted') {
      updateConsentState({
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
    }
  }, []);

  return (
    <>
      {/* Google Analytics Script */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
            ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}
          `
        }}
      />
    </>
  );
};

// Consent Banner Component
export const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  
  useEffect(() => {
    const existingConsent = getCookie('cookie-consent');
    if (existingConsent) {
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    // Update consent state
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
    
    setCookie('cookie-consent', 'granted', 365);
    setShowBanner(false);
  };

  const handleReject = () => {
    // Keep consent denied
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
    
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
};

