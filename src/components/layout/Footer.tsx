"use client";

import Link from "next/link";
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-center shadow-2xl shadow-blue-600/20">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join 12,000+ businesses already growing their network with BONC
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 h-14 rounded-xl shadow-lg">
                List Your Business Free
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 h-14 rounded-xl">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black">
                BONC<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6">
              India's most trusted business directory connecting verified businesses and professionals.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "How it Works", "Pricing", "Success Stories", "Blog"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6">Top Categories</h3>
            <ul className="space-y-3">
              {["Technology", "Manufacturing", "Agriculture", "Textile", "Construction"].map((cat) => (
                <li key={cat}>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>support@bonc.network</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} BONC Network. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
