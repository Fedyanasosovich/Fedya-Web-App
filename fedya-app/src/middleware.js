import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host")?.toLowerCase();

  // Skip middleware for API routes and static assets
  if (url.pathname.startsWith("/api") || isStaticAsset(url.pathname)) {
    return NextResponse.next();
  }

  // Normalize hostname (remove protocol & 'www.')
  const normalizedHost = normalizeHostname(hostname);

  // Define domain-to-page mapping
  const domainMapping = {
    "buypfizergenotropinhgh.com": "/buypfizergenotropinhgh",
    "fakegenotropinhgh.com": "/fakegenotropinhgh",
    "fedyanasosovich.com": "/fedyanasosovich",
  };

  // Handle special case for /videos on fedyanasosovich.com
  if (normalizedHost === "fedyanasosovich.com" && url.pathname.startsWith("/videos")) {
    url.pathname = "/fedyanasosovich/videos";
    return NextResponse.rewrite(url);
  }

  // If there's a match for the domain, rewrite to the target page
  if (domainMapping[normalizedHost]) {
    url.pathname = domainMapping[normalizedHost];
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Function to check if the requested URL is for a static asset
function isStaticAsset(pathname) {
  return pathname.match(
    /\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf|webp|ico)$/i
  );
}

// Function to normalize hostnames (strip protocols and "www")
function normalizeHostname(hostname) {
  if (!hostname) return "";
  return hostname.replace(/^www\./, ""); // Remove "www." prefix
}
