"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/utils/storageHelper";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      ad_personalization: newValue,
      analytics_storage: newValue,
      ad_user_data: newValue,
      ad_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);
  return (
    <div
      className={`fixed bottom-0 left-0 right-0
                  z-50 mx-auto my-10 flex 
                  max-w-max flex-col items-center justify-between gap-4 rounded-lg bg-gray-700 px-3 py-3  
                  shadow sm:flex-row md:max-w-screen-sm md:px-4
                  ${cookieConsent !== null ? "hidden" : "flex"}`}
    >
      <div className="text-cente text-white-200">
        <Link href="/info/cookies">
          <p>
            We use <span className="font-bold text-sky-400">cookies</span> on
            our site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="rounded-md border-gray-900 px-5 py-2 text-gray-300"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className="text-white-200 rounded-lg bg-gray-900 px-5 py-2"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
