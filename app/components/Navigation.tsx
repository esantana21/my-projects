"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d1320]/60 backdrop-blur-xl border-b border-[#424855]/15 shadow-[0_20_40px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center px-8 h-20 max-w-screen-2xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-[#8ff5ff] font-headline uppercase">EMANUEL.DEV</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-headline tracking-wider uppercase text-sm">
          <Link className="text-[#8ff5ff] border-b-2 border-[#8ff5ff] pb-1 transition-colors duration-300" href="#home">Home</Link>
          <Link className="text-[#a6abba] hover:text-[#8ff5ff] transition-colors duration-300" href="#projects">Projects</Link>
          <Link className="text-[#a6abba] hover:text-[#8ff5ff] transition-colors duration-300" href="#skills">Skills</Link>
          <Link className="text-[#a6abba] hover:text-[#8ff5ff] transition-colors duration-300" href="#contact">Contact</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-[#8ff5ff] cursor-pointer hover:bg-primary/10 p-2 rounded-full transition-all active:scale-95">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
          </button>
          <a 
            href="https://docs.google.com/viewer?url=https://storage.rxresu.me/clp9fy7vb98iw9huni1lrshme/resumes/emanuel-santana.pdf&embedded=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#8ff5ff] text-[#00363d] px-6 py-2 rounded-full font-headline text-sm font-bold hover:scale-105 transition-transform active:scale-95 inline-block"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
