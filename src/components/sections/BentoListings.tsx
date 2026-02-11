"use client";

import { MOCK_BUSINESSES } from "@/lib/mock-data";
import { Star, MapPin, ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BentoListings() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Top Rated Businesses
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Handpicked premium services that are trending right now.
            </p>
          </div>
          <div className="flex gap-2">
            {["Featured", "Trending", "Newest"].map((filter, i) => (
              <Button 
                key={filter}
                variant={i === 0 ? "default" : "outline"} 
                size="sm"
                className={cn(
                  "rounded-full px-6",
                  i === 0 ? "bg-indigo-600 hover:bg-indigo-700" : "bg-white"
                )}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {MOCK_BUSINESSES.map((business, index) => {
            // Create a bento layout pattern
            const isLarge = index === 0 || index === 3;
            const spanClass = isLarge 
              ? "md:col-span-8 lg:col-span-7" 
              : "md:col-span-4 lg:col-span-5";

            return (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn("group h-full", spanClass)}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg shadow-slate-200/50 group-hover:shadow-xl group-hover:shadow-indigo-100 transition-all duration-300 flex flex-col">
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img 
                      src={business.image} 
                      alt={business.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={cn(
                        "font-semibold px-3 py-1 rounded-full",
                        business.status === 'Open' ? "bg-emerald-500 hover:bg-emerald-500" : "bg-rose-500 hover:bg-rose-500"
                      )}>
                        {business.status}
                      </Badge>
                      {business.featured && (
                        <Badge className="bg-amber-500 hover:bg-amber-500 font-semibold px-3 py-1 rounded-full text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex items-center text-white text-sm font-medium">
                        <Clock className="w-4 h-4 mr-2" />
                        Usually responds in 2 hours
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="p-6 pb-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 mb-1">
                          <img src={business.logo} className="w-6 h-6 rounded-full border border-slate-100" />
                          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">{business.category}</span>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-indigo-600 transition-colors">{business.name}</CardTitle>
                      </div>
                      <div className="flex items-center bg-amber-50 px-2 py-1 rounded-lg border border-amber-100">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500 mr-1" />
                        <span className="font-bold text-amber-700 text-sm">{business.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-6 py-2 flex-grow">
                    <p className="text-slate-600 line-clamp-2">{business.description}</p>
                    <div className="flex items-center mt-4 text-sm text-slate-500">
                      <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                      {business.location}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-2">
                    <Button variant="default" className="w-full bg-slate-900 hover:bg-indigo-600 text-white rounded-xl h-11 transition-all">
                      View Profile
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
