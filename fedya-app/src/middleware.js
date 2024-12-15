import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");

  // Define domain-to-page mapping
  const domainMapping = {
    "https://buypfizergenotropinhgh.com/": "/buypfizergenotropinhgh",
    "buypfizergenotropinhgh.com": "/buypfizergenotropinhgh",
    "www.buypfizergenotropinhgh.com": "/buypfizergenotropinhgh",
    "http://www.buypfizergenotropinhgh.com": "/buypfizergenotropinhgh",
    "https://www.buypfizergenotropinhgh.com": "/buypfizergenotropinhgh",

    "fakegenotropinhgh.com": "/fakegenotropinhgh", // Map domain to /page2
    "www.fakegenotropinhgh.com": "/fakegenotropinhgh",
    "http://www.fakegenotropinhgh.com": "/fakegenotropinhgh",
    "https://www.fakegenotropinhgh.com": "/fakegenotropinhgh",
 
    "https://fakegenotropinhgh.com": "/fakegenotropinhgh",
  };

  // Check if the hostname matches one of your domains
  const targetPage = domainMapping[hostname];
  if (targetPage) {
    url.pathname = targetPage; // Rewrite to the target page
    return NextResponse.rewrite(url);
  }

  // Default behavior (if no match found)
  return NextResponse.next();
}
