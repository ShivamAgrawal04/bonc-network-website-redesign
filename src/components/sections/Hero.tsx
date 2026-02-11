"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, ChevronDown, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-background">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] opacity-40" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center space-x-2 text-primary font-bold mb-4">
              <span className="px-3 py-1 bg-primary/10 rounded-full text-xs uppercase tracking-widest">
                Business Directory ✌️
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-[1.1] tracking-tight">
              Build Your Network <br />
              <span className="text-primary">Get More Business.</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              Unlock the power of networking and discover top-rated businesses tailored to your needs. Leading the way in business networking technology at your fingertips.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button className="bg-accent hover:opacity-90 text-white px-8 h-12 rounded-xl text-base font-bold shadow-lg shadow-accent/20">
              List Business
            </Button>
            <Button variant="outline" className="border-border text-foreground px-8 h-12 rounded-xl text-base font-bold">
              How it works
            </Button>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border p-2 rounded-2xl shadow-xl shadow-foreground/5 flex flex-col md:flex-row items-center gap-2"
          >
            <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-border w-full">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <div className="flex-1">
                <div className="text-[10px] font-bold text-muted-foreground uppercase">What are you looking for?</div>
                <div className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-semibold text-foreground">Machinery & Industry</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center px-4 py-2 w-full">
              <MapPin className="w-5 h-5 text-muted-foreground mr-3" />
              <div className="flex-1">
                <div className="text-[10px] font-bold text-muted-foreground uppercase">Location</div>
                <Input 
                  placeholder="Near me" 
                  className="h-auto p-0 border-0 focus-visible:ring-0 text-sm font-semibold placeholder:text-muted-foreground/50"
                />
              </div>
            </div>
            <Button className="h-12 w-full md:w-auto px-10 bg-primary text-primary-foreground font-bold rounded-xl">
              Search
            </Button>
          </motion.div>
        </div>

        {/* Right side Image / Illustration placeholder based on SS */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-background">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=800&fit=crop" 
              alt="Business Network"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
          
          {/* Floating Card based on SS */}
          <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-2xl shadow-2xl animate-bounce-subtle">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase">New Listings</div>
                <div className="text-lg font-black text-foreground">1,240+ Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
