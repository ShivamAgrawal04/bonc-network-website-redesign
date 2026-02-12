"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Zap, Users, ArrowRight } from "lucide-react";

export default function FeatureHighlights() {
  const whyChoose = [
    { title: "Reliable & Trusted", icon: ShieldCheck, desc: "Verified businesses only" },
    { title: "Verified Listings", icon: CheckCircle2, desc: "100% authentic data" },
    { title: "Efficient Network", icon: Zap, desc: "Fast connections locally" },
    { title: "Expert Support", icon: Users, desc: "24/7 dedicated help" },
  ];

  const industries = [
    { name: "Machinery & Industry", image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=400&h=300&fit=crop" },
    { name: "Automotive Parts", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop" },
    { name: "Agriculture", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=300&fit=crop" },
    { name: "Textile & Clothing", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=300&fit=crop" },
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 space-y-24">
        
        {/* Why Choose BONC? */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-black text-foreground">Why Choose <span className="text-primary">BONC?</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-secondary/30 border border-border flex items-center space-x-4 group hover:bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-black text-foreground">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Browse by Industry */}
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-foreground">Browse by Industry</h2>
              <p className="text-sm text-muted-foreground">Find tailored solutions for your specific sector.</p>
            </div>
            <button className="flex items-center space-x-2 text-primary font-bold text-sm hover:underline underline-offset-4">
              <span>Explore All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                whileHover={{ y: -10 }}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg shadow-primary/5"
              >
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-black text-white leading-tight">{industry.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
