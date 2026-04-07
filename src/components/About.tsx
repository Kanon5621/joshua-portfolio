"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/joshua-portfolio" : "");

export default function About() {
  const profileSrc = `${basePath}${siteConfig.profileImage}`;

  return (
    <section id="about" className="py-24 px-6 border-y border-white/5 bg-dark-bg">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src={profileSrc}
              alt={siteConfig.name}
              fill
              className="object-cover object-top"
            />
        </div>
        
        <div>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">Mission & Education</h2>
          <p className="text-2xl font-bold text-white leading-tight mb-6">
            {siteConfig.mission}
          </p>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            {siteConfig.about}
          </p>
          
          <div className="p-6 bg-surface border border-white/5 rounded-2xl">
            <h3 className="text-white font-bold mb-2">{siteConfig.education.institution}</h3>
            <p className="text-primary text-sm font-medium mb-1">{siteConfig.education.degree}</p>
            <div className="flex justify-between text-xs text-slate-500 font-mono">
              <span>{siteConfig.education.period}</span>
              <span className="text-accent">{siteConfig.gpa}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}