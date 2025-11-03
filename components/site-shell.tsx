"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, UserRound } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/listings/new", label: "Sell" },
  { href: "/dashboard", label: "Dashboard" }
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold">
            <ShoppingBag className="h-6 w-6 text-primary-600" />
            EduSwap Somalia
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href ? "text-primary-600" : "text-slate-500 hover:text-primary-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link
            href="/auth"
            className="hidden items-center gap-2 rounded-full border border-primary-100 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 md:flex"
          >
            <UserRound className="h-4 w-4" />
            Account
          </Link>
        </div>
        {mobileOpen ? (
          <nav className="border-t border-slate-200 bg-white px-6 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium",
                    pathname === link.href
                      ? "bg-primary-50 text-primary-700"
                      : "text-slate-600 hover:bg-slate-100"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/auth"
                className="rounded-md px-3 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50"
                onClick={() => setMobileOpen(false)}
              >
                Account
              </Link>
            </div>
          </nav>
        ) : null}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EduSwap Somalia. Empowering learners across the Horn.</p>
          <div className="flex gap-4">
            <Link href="/studio" className="hover:text-primary-600">
              Design Studio Prompt
            </Link>
            <Link href="/about" className="hover:text-primary-600">
              About
            </Link>
            <Link href="/support" className="hover:text-primary-600">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
