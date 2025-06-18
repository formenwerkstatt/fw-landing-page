import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

export default function StaticBanner() {
  return (
    <div
      className={cn(
        "m-auto h-dvh w-full py-12",
        "bg-linear-to-t from-transparent via-primary/40 to-transparent",
        "flex flex-col items-center justify-center",
      )}
    >
      <div className="container px-4 text-center">
        <h1
          className={cn(
            "mb-4 text-gray-light",
            "text-2xl font-bold md:text-3xl",
            "animate-pop-in",
          )}
        >
          Loading...
        </h1>
        <p
          className={cn(
            "mx-auto max-w-2xl",
            "hidden text-lg text-gray-light md:block md:text-xl",
            "animate-stagger-in",
          )}
        >
          Erreichen Sie uns für die Beste Preis und schnellste liefern unter:
        </p>

        <div
          className={cn(
            "mt-8 flex flex-col items-center justify-center gap-4 md:flex-row",
            "animate-slide-in-left",
          )}
        >
          <Link
            href="mailto:info@formenwerkstatt.de"
            className="group rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-gray-light transition-all duration-300 hover:bg-blue-700"
            aria-label="Send us an email"
          >
            <span className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@formenwerkstatt.de
            </span>
          </Link>
          <Link
            href="tel:+4906164913017"
            className="group rounded-lg bg-green-500 px-6 py-3 text-lg font-semibold text-gray-light transition-all duration-300 hover:bg-green-700"
            aria-label="Call us now"
          >
            <span className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +49 (0) 6164-913017
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
