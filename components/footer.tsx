import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-50">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">AG Kapital</h3>
            <p className="text-sm text-slate-400">
              AgrosurKapital (AG) is a legally incorporated American technology and professional services company.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">For Clients</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  How to Hire
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Talent Marketplace
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Project Catalog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">For Talent</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  How to Find Work
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Direct Contracts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Find Freelance Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold">Stay Updated</h3>
            <p className="text-sm text-slate-400">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-slate-800 border-slate-700" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Agrosur Kapital LLC. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
