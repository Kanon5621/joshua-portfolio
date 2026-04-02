"use client";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  return (
    // Applied: bg-dark-bg/80 for better theme consistency
    <nav className="fixed top-0 w-full bg-dark-bg/80 backdrop-blur-md border-b border-white/5 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg tracking-tight text-white">
          {siteConfig.name}<span className="text-primary">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <a
          // Fixed: Changed .contact to .socials to match siteConfig
          href={siteConfig.socials.onlinejobs}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-tighter border border-white/10 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}