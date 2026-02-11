"use client";

import { CATEGORIES } from "@/lib/mock-data";
import { 
  Laptop, 
  Heart, 
  Wallet, 
  Stethoscope, 
  GraduationCap, 
  Megaphone, 
  Building2, 
  Utensils,
  LucideIcon
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  Laptop,
  Heart,
  Wallet,
  Stethoscope,
  GraduationCap,
  Megaphone,
  Building2,
  Utensils,
};

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Browse by Sector
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Find exactly what you are looking for in our specialized categories.
            </p>
          </div>
          <button className="text-indigo-600 font-semibold hover:underline decoration-2 underline-offset-4">
            Explore All Categories →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {CATEGORIES.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-indigo-100 group-hover:border-indigo-100 h-full">
                  <div className="p-3 rounded-xl bg-white border border-slate-100 mb-4 group-hover:scale-110 transition-transform text-slate-600 group-hover:text-indigo-600 shadow-sm">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <span className="text-sm font-semibold text-slate-900 text-center">
                    {category.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
