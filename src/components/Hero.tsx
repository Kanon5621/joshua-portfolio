"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-dark-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 blur-[160px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl text-center"
      >
        {/* Profile Image Container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8"
        >
          <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-20 animate-pulse" />
          <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-2xl">
            <Image
              src={siteConfig.profileImage}
              alt={siteConfig.name}
              fill
              className="object-cover object-top" // Changed from object-center to object-top
              priority
            />
          </div>
        </motion.div>

        <div className="inline-block px-4 py-1 border border-accent/30 bg-accent/5 rounded-full mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-accent">Open for Opportunities</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-white">
          {siteConfig.name}<span className="text-primary">.</span>
        </h1>

        <p className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {siteConfig.headline}
        </p>

        <div className="flex justify-center gap-4">
          <a href="#contact" className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-primary/20">
            Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}