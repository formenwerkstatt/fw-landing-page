import { createI18nMiddleware } from "next-international/middleware";
import { NextResponse, NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "de"],
  defaultLocale: "de",
  urlMappingStrategy: "rewriteDefault",
});

export function middleware(request: NextRequest) {
  // Regular i18n middleware
  const response = I18nMiddleware(request);
  
  // Add security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  
  return response;
}

export const config = {
  matcher: [
    // Match all pathnames except those starting with:
    "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
  ],
};
