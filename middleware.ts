import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export const config = {
  matcher: "/",
};

export default function middleware(request: NextRequest) {
  //   if (signedinPages.find((p) => p === request.nextUrl.pathname)) {
  //     const token = request.cookies.TRANCE_ACCESS_TOKEN;

  //     if (!token) {
  //       const url = request.nextUrl.clone();
  //       url.pathname = "/signin";
  //       return NextResponse.redirect(new URL("/signin", request.url));
  //     } else {
  //       return NextResponse.redirect("/");
  //     }
  //   }
  console.log("Middleware ");
}
