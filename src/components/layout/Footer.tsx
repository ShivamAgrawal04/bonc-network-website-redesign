"use client";

import Link from "next/link";
import { Globe, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Globe className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                BONC
              </span>
            </Link>
            <p className="text-slate-600 leading-relaxed max-w-xs">
              The world's most trusted business listing platform. Redefining how professionals connect with premium services.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-600 hover:bg-white transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6">Explore</h3>
            <ul className="space-y-4">
              {["Discover", "Categories", "Featured Listings", "Newest", "Top Rated"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6">Support</h3>
            <ul className="space-y-4">
              {["How it Works", "Pricing Plans", "Privacy Policy", "Terms of Service", "Help Center"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-bold text-slate-900 mb-6">Newsletter</h3>
            <p className="text-slate-600 text-sm">
              Subscribe to get the latest business trends and featured listings delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email address" 
                className="bg-white border-slate-200 text-slate-900 rounded-xl"
              />
              <Button size="icon" className="bg-indigo-600 hover:bg-indigo-700 shrink-0 rounded-xl">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} BONC Network. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
