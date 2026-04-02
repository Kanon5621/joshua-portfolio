"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold mb-16 text-center tracking-[0.4em] uppercase text-slate-500">
          Professional Background
        </h2>

        <div className="space-y-8">
          {siteConfig.experience.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 bg-surface border border-white/5 rounded-3xl group"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-accent text-sm font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-slate-500">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.tasks.map((task, j) => (
                  <li key={j} className="text-slate-400 text-sm">▹ {task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}