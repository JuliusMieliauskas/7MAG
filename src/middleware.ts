import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  console.log(
    "middleware: " + request.nextUrl + "   from: " + request.geo?.country
  )
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/analysis/:path*", "/about", "/"],
}
