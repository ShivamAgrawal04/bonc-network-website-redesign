"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const INDUSTRIES = [
  {
    name: "Architecture & Interior",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=600&fit=crop",
    count: "1,200+ Listings",
    colSpan: "lg:col-span-2",
  },
  {
    name: "Electronics & Electrical",
    image: "https://images.unsplash.com/photo-1550009158-9ebf691769d5?w=800&h=600&fit=crop",
    count: "850+ Listings",
    colSpan: "lg:col-span-1",
  },
  {
    name: "Software Services",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    count: "2,000+ Listings",
    colSpan: "lg:col-span-1",
  },
  {
    name: "Industrial Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    count: "1,500+ Listings",
    colSpan: "lg:col-span-1",
  },
  {
    name: "Automotive & Parts",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
    count: "900+ Listings",
    colSpan: "lg:col-span-1",
  },
  {
    name: "Textile & Fabrics",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop",
    count: "1,100+ Listings",
    colSpan: "lg:col-span-2",
  },
];

export default function ExploreByIndustry() {
  return (
    <section id="explore" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Explore by Industry</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full" />
          </div>
          <Button variant="outline" className="hidden md:flex font-semibold hover:bg-white hover:text-blue-600">
            View All Industries <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-3xl overflow-hidden cursor-pointer ${industry.colSpan}`}
            >
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent z-10" />
              
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                  {industry.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {industry.count}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button className="w-full font-bold" variant="outline">
            View All Industries
          </Button>
        </div>
      </div>
    </section>
  );
}
