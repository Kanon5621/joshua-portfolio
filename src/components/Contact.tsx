"use client";
import { siteConfig } from "@/config/site";
import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-dark-bg py-24 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Let's build something <span className="text-primary">efficient</span> together.
            </h2>
            <p className="text-zinc-400 mb-8 max-w-md">
              Currently open to full-time remote roles and specialized e-commerce projects. 
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><MapPin size={18}/></div>
                <span>{siteConfig.location}</span>
              </div>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-zinc-300 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><Mail size={18}/></div>
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><Phone size={18}/></div>
                {siteConfig.phone}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-4">
            <a 
              href={siteConfig.socials.onlinejobs}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface border border-white/5 p-6 rounded-3xl flex justify-between items-center group hover:border-primary/50 transition-all shadow-2xl"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Official Profile</p>
                <p className="font-bold text-white group-hover:text-primary transition-colors">Hire me on OnlineJobs.ph</p>
              </div>
              <ExternalLink className="text-zinc-600 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <p>Built with Next.js & Tailwind v4</p>
        </div>
      </div>
    </footer>
  );
}