"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, ShoppingCart } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 py-4">
                <Link href="/" className="text-2xl font-bold" onClick={() => setIsOpen(false)}>
                  AG Kapital
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link
                    href="#"
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Find Talent
                  </Link>
                  <Link
                    href="#"
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Find Work
                  </Link>
                  <Link
                    href="#"
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Why AG
                  </Link>
                  <Link
                    href="#"
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Enterprise
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="text-xl font-bold md:text-2xl">
            AG Kapital
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Find Talent
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Find Work
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Why AG
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Enterprise
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="User Account">
            <User className="h-5 w-5" />
          </Button>
          <div className="hidden md:flex gap-2">
            <Button variant="outline">Sign In</Button>
            <Button>Join</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
