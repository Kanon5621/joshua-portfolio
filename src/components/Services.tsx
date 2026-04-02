"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-4xl font-bold mb-20 text-center text-white"
        >
          Elite Support Solutions
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-10 bg-surface border border-white/5 rounded-3xl group hover:border-primary/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}