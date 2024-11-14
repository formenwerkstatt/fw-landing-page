import { redirect } from "next/navigation";
import { getCurrentLocale, getI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

export default async function NotFound() {
  try {
    // Set the default locale for static generation
    setStaticParamsLocale("de");

    // Get current locale if needed
    const locale = getCurrentLocale();

    // Redirect to error page
    redirect(`/de/error`);
  } catch (error) {
    // Fallback redirect
    redirect(`/de/error`);
  }
}
