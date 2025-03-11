import { cn } from "@/utils/cn";
import React from "react";

interface LanguageProps {
  locale: string;
  changeLocale: (locale: "de" | "en") => void;
  setNavbarOpen: (open: boolean) => void;
}

export default function LanguageSelector({
  locale,
  changeLocale,
  setNavbarOpen,
}: LanguageProps) {
  return (
    <div className="flex items-center  rounded-md border border-gray-300 bg-gray-100  dark:border-gray-600 dark:bg-gray-800">
      <button
        className={cn(
          "rounded-md px-4 py-2 text-sm font-medium",
          locale === "en"
            ? "bg-primary text-white"
            : "text-dark hover:bg-opacity-90 dark:text-white",
        )}
        onClick={() => {
          changeLocale("en");
          setNavbarOpen(false);
        }}
      >
        EN
      </button>
      <button
        className={cn(
          "rounded-md px-4 py-2 text-sm font-medium",
          locale === "de"
            ? "bg-primary text-white"
            : "text-dark hover:bg-opacity-90 dark:text-white",
        )}
        onClick={() => {
          changeLocale("de");
          setNavbarOpen(false);
        }}
      >
        DE
      </button>
    </div>
  );
}
