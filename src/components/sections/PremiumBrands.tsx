"use client";

import { PREMIUM_BRANDS } from "@/lib/mock-data";
import { motion } from "framer-motion";

export default function PremiumBrands() {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-2">Premium Brands</h2>
          <div className="h-0.5 w-12 bg-accent rounded-full" />
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {PREMIUM_BRANDS.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-24 h-12 flex items-center justify-center"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-w-full max-h-full object-contain filter dark:invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
