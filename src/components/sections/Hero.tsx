"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight, ShieldCheck, Users, TrendingUp } from "lucide-react";

export default function Hero() {
  const popularSearches = ["Software Development", "Digital Marketing", "Web Design", "Consulting"];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50/50 to-orange-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 lg:mb-20">
          
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-all cursor-default"
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>India's Most Trusted B2B Platform</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Build Your Network.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Get More Business.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed"
          >
            Join thousands of growing businesses on BONC Network. Connect with verified buyers, manage inquiries, and grow your visibility.
          </motion.p>

          {/* Search Bar Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-3xl"
          >
            <div className="p-2 bg-white rounded-3xl shadow-2xl shadow-blue-900/5 border border-slate-100 flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 h-14 bg-slate-50/50 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-blue-100 group focus-within:bg-white focus-within:border-blue-200 focus-within:ring-2 focus-within:ring-blue-100">
                <Search className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full h-full bg-transparent border-none focus:ring-0 px-3 text-slate-900 placeholder:text-slate-400 font-medium"
                />
              </div>
              <div className="flex-1 flex items-center px-4 h-14 bg-slate-50/50 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-blue-100 group focus-within:bg-white focus-within:border-blue-200 focus-within:ring-2 focus-within:ring-blue-100">
                <MapPin className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="text"
                  placeholder="Location (e.g. Mumbai)"
                  className="w-full h-full bg-transparent border-none focus:ring-0 px-3 text-slate-900 placeholder:text-slate-400 font-medium"
                />
              </div>
              <Button className="h-14 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95">
                Search
              </Button>
            </div>
          </motion.div>

          {/* Popular Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center items-center gap-3"
          >
            <span className="text-sm font-semibold text-slate-400">Trending:</span>
            {popularSearches.map((term) => (
              <button 
                key={term}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                {term}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Hero Image / Illustration Area */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
             {/* Abstract UI Mockup mimicking the dashboard */}
             <div className="aspect-[16/9] relative bg-slate-50 flex items-center justify-center overflow-hidden group">
                {/* We can use an image here, or construct a refined CSS composition */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50" />
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Cards */}
                <div className="absolute top-12 right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Growth</div>
                      <div className="text-lg font-bold text-slate-900">+128%</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-12 left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                       ))}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">New Leads</div>
                      <div className="text-sm font-bold text-slate-900">Active Now</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
