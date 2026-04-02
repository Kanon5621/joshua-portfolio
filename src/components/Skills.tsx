"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-dark-bg">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-sm font-bold text-slate-500 mb-16 uppercase tracking-[0.4em] text-center"
        >
          Tools of Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.skills.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-surface border border-white/5 rounded-3xl group hover:border-primary/30 transition-all"
            >
              <h3 className="text-primary font-bold text-xs uppercase tracking-widest mb-6">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}