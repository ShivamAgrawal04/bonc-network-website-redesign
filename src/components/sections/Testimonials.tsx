"use client";

import { TESTIMONIALS } from "@/lib/mock-data";
import { Quote } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 bg-indigo-600 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Trusted by thousands of <span className="text-indigo-200">professionals</span> worldwide.
            </h2>
            <p className="text-xl text-indigo-100 max-w-lg leading-relaxed">
              Join the growing community of business owners and customers who have found their perfect match through BONC.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10k+</div>
                <div className="text-indigo-200 text-sm">Businesses</div>
              </div>
              <div className="w-px h-10 bg-indigo-500" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-indigo-200 text-sm">Rating</div>
              </div>
              <div className="w-px h-10 bg-indigo-500" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-indigo-200 text-sm">Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-150 -z-10" />
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {TESTIMONIALS.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl space-y-8">
                      <p className="text-xl text-slate-700 italic leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-4">
                        <Avatar className="w-14 h-14 border-2 border-slate-100">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                          <div className="text-indigo-600 font-medium">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-3 mt-8">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
                <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
