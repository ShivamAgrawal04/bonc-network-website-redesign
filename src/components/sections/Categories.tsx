"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

// Using placeholders for brands
const BRAND_LOGOS = Array(12).fill(null).map((_, i) => ({
    id: i,
    initial: ["E", "F", "H", "S", "A", "G", "S", "R", "L", "K", "M", "T"][i],
    name: ["ESAB", "Furnico", "Herbal", "Singh", "Arumai", "Global", "Stylo", "Revive", "Losa", "Keton", "Mihaana", "Tahura"][i],
    color: ["yellow", "blue", "green", "orange", "red", "purple", "indigo", "pink", "teal", "cyan", "rose", "emerald"][i]
}));

const TOP_IN_DEMAND = [
  { name: "Self Priming Monoblock Pump", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop" },
  { name: "Offshore Software Development", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=400&fit=crop" },
  { name: "Medical Billing Software", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop" },
  { name: "Shopping Cart Customization", image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=400&h=400&fit=crop" },
];

const TOP_IN_SEARCH = [
  { name: "Industrial Rim Lock", image: "https://images.unsplash.com/photo-1587582541194-e69c3a3754d9?w=400&h=400&fit=crop" },
  { name: "High Back Office Chair", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=400&h=400&fit=crop" },
  { name: "RGB LED Lighting", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop" },
  { name: "Nitco Floor Tiles", image: "https://images.unsplash.com/photo-1502005229766-939cb8a54f29?w=400&h=400&fit=crop" },
];

export default function CategoriesAndBrands() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Market Trends Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          
          {/* Top In Demand */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Top In Demand</h3>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-white hover:shadow-sm"><ArrowLeft className="w-4 h-4" /></Button>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-white hover:shadow-sm"><ArrowRight className="w-4 h-4" /></Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {TOP_IN_DEMAND.map((item) => (
                <motion.div 
                  key={item.name}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="aspect-square rounded-lg overflow-hidden bg-slate-100 mb-3 relative">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-700 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">{item.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Top In Search */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Search className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Top In Search</h3>
              </div>
               <div className="flex gap-2">
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-white hover:shadow-sm"><ArrowLeft className="w-4 h-4" /></Button>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-white hover:shadow-sm"><ArrowRight className="w-4 h-4" /></Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {TOP_IN_SEARCH.map((item) => (
                <motion.div 
                  key={item.name}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="aspect-square rounded-lg overflow-hidden bg-slate-100 mb-3 relative">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-700 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">{item.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Premium Brands Marquee */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-black text-slate-900">Premium Brands</h2>
            <Button variant="link" className="text-blue-600 font-semibold">View All Brands</Button>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
            
            <motion.div 
              className="flex gap-8 w-max"
              animate={{ x: "-50%" }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, i) => (
                <div 
                  key={i} 
                  className="w-48 h-32 flex-shrink-0 bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 hover:border-blue-200 hover:shadow-premium transition-all cursor-pointer group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-${brand.color}-100 flex items-center justify-center text-xl font-black text-${brand.color}-600 mb-3 group-hover:scale-110 transition-transform`}>
                    {brand.initial}
                  </div>
                  <span className="font-bold text-slate-700 group-hover:text-blue-600">{brand.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
