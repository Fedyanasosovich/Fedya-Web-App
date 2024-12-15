import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");

  // Define domain-to-page mapping
  const domainMapping = {
    "https://buypfizergenotropinhgh.com": "/buypfizergenotropinhgh",
    "buypfizergenotropinhgh.com": "/buypfizergenotropinhgh",
    "www.buypfizergenotropinhgh.com": "/buypfizergenotropinhgh",
    "http://www.buypfizergenotropinhgh.com": "/buypfizergenotropinhgh",
    "https://www.buypfizergenotropinhgh.com": "/buypfizergenotropinhgh",

    "fakegenotropinhgh.com": "/fakegenotropinhgh",
    "www.fakegenotropinhgh.com": "/fakegenotropinhgh",
    "http://www.fakegenotropinhgh.com": "/fakegenotropinhgh",
    "https://www.fakegenotropinhgh.com": "/fakegenotropinhgh",
    "https://fakegenotropinhgh.com": "/fakegenotropinhgh",
  };

  // Check if the requested URL is for a static asset (CSS, JS, images, etc.)
  const isStaticAsset =
    /\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/i.test(
      url.pathname
    );

  if (isStaticAsset) {
    // If it's a static asset, return it as is, without rewriting
    return NextResponse.next();
  }

  // Check if the hostname matches one of your domains
  const targetPage = domainMapping[hostname];
  if (targetPage) {
    url.pathname = targetPage; // Rewrite to the target page
    return NextResponse.rewrite(url);
  }

  // Default behavior (if no match found)
  return NextResponse.next();
}
