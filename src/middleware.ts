import { createI18nMiddleware } from "next-international/middleware";
import { NextResponse, NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "de"],
  defaultLocale: "de",
  urlMappingStrategy: "rewriteDefault",
});

export function middleware(request: NextRequest) {
  const response = I18nMiddleware(request);

  // Add security headers to all responses
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  return response;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
