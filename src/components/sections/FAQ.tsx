"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { FAQ_DATA } from "@/lib/mock-data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">
              Questions? <br />
              <span className="text-primary">We&apos;re glad you asked.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Finding help should be as easy as finding businesses. Here are some of the most common questions we get.
            </p>
            <div className="pt-8">
              <div className="p-8 rounded-3xl bg-secondary/30 border border-border space-y-4">
                <div className="text-sm font-black text-foreground uppercase tracking-widest">Still have questions?</div>
                <p className="text-muted-foreground text-sm">Our support team is available 24/7 to assist you with any inquiries.</p>
                <button className="text-primary font-bold text-sm hover:underline">Contact Support →</button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <div 
                key={i} 
                className="group border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors bg-card hover:bg-secondary/20"
                >
                  <span className="text-base font-bold text-foreground">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed bg-card"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
