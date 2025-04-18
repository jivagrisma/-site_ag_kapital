import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Este middleware optimiza la entrega de recursos
export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Añadir encabezados de caché para recursos estáticos
  const url = request.nextUrl.pathname

  if (url.includes("/images/") || url.includes("/_next/static/") || url.includes("/_next/image")) {
    // Caché para recursos estáticos - 1 semana
    response.headers.set("Cache-Control", "public, max-age=604800, stale-while-revalidate=86400")
  } else if (url === "/") {
    // Caché para la página principal - 1 hora con revalidación en segundo plano
    response.headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=300")
  }

  // Añadir encabezados de seguridad
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")

  return response
}

// Configurar las rutas a las que se aplica el middleware
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/images/:path*"],
}
