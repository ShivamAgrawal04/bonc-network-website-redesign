"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Building2, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description: "Every business is verified to ensure a safe and trusted network for your trade.",
    color: "blue"
  },
  {
    icon: Globe2,
    title: "Wide Buyer Reach",
    description: "Connect with thousands of active buyers and expand your business globally.",
    color: "indigo"
  },
  {
    icon: Building2,
    title: "Trusted B2B Platform",
    description: "Built for businesses to grow, collaborate, and succeed in the digital economy.",
    color: "orange"
  }
];

export default function Features() {
    return (
      <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-premium transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-orange-500/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span>Fast Track Your Growth</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black mb-4">Need Product Quotes or Info Fast?</h3>
              <p className="text-orange-50 text-lg max-w-xl font-medium">
                BONC lets you raise detailed RFQs & RFPs to multiple verified vendors all in one place.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold border-0 h-14 rounded-xl px-8 shadow-lg">
                Send a Request
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
