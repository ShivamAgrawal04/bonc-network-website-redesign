"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, User } from "lucide-react";
import { NAV_LINKS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-2 shadow-sm"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md">
            <Globe className="text-primary-foreground w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            BONC
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="font-semibold text-muted-foreground">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="bg-accent hover:opacity-90 text-white font-bold rounded-lg px-6 shadow-sm">
            List Business
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 space-y-4 shadow-xl animate-in slide-in-from-top-1">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 flex flex-col space-y-3">
            <Button variant="outline" className="w-full justify-start">Sign In</Button>
            <Button className="w-full bg-accent text-white">List Business</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
