"use client";

import { HOW_IT_WORKS } from "@/lib/mock-data";
import { Search, Layers, MessageSquare, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Layers,
  MessageSquare,
};

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            Three simple steps to connect with the best businesses for your needs.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group text-center space-y-6 px-6"
                >
                  <div className="w-20 h-20 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-indigo-200">
                    {Icon && <Icon className="w-8 h-8" />}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 text-xs font-bold">
                    0{index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
