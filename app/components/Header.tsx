"use client";
import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'skills', 'methodology', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset pour le header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <header className="fixed top-0 w-full z-40 glass-panel border-b border-lab-border/50 h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-lab-primary/10 border border-lab-primary flex items-center justify-center">
            <Terminal className="w-4 h-4 text-lab-primary" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold tracking-widest text-white text-sm">JONATHAN JEANNIARD</span>
            <span className="text-[10px] text-lab-muted font-mono uppercase tracking-[0.2em] mt-1">OPERATOR CONSOLE // PORTFOLIO V4.2</span>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-xs font-mono text-lab-muted">
          <a href="#welcome" className="hover:text-lab-primary transition-colors flex items-center gap-2 group"><span className={`transition-colors ${isActive('welcome') ? 'text-lab-cyan' : 'text-lab-border group-hover:text-lab-cyan'}`}>00.</span> ACCUEIL</a>
          <a href="#skills" className="hover:text-lab-primary transition-colors flex items-center gap-2 group"><span className={`transition-colors ${isActive('skills') ? 'text-lab-cyan' : 'text-lab-border group-hover:text-lab-cyan'}`}>01.</span> COMPÉTENCES</a>
          <a href="#methodology" className="hover:text-lab-primary transition-colors flex items-center gap-2 group"><span className={`transition-colors ${isActive('methodology') ? 'text-lab-cyan' : 'text-lab-border group-hover:text-lab-cyan'}`}>02.</span> MÉTHODE</a>
          <a href="#projects" className="hover:text-lab-primary transition-colors flex items-center gap-2 group"><span className={`transition-colors ${isActive('projects') ? 'text-lab-cyan' : 'text-lab-border group-hover:text-lab-cyan'}`}>03.</span> PROJETS</a>
          <a href="#contact" className="hover:text-lab-primary transition-colors flex items-center gap-2 group"><span className={`transition-colors ${isActive('contact') ? 'text-lab-cyan' : 'text-lab-border group-hover:text-lab-cyan'}`}>04.</span> CONTACT</a>
        </nav>

        <div className="flex items-center gap-3 px-3 py-1.5 border border-lab-border bg-lab-panel rounded-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lab-terminal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lab-terminal"></span>
          </span>
          <span className="text-[10px] font-mono text-lab-terminal tracking-wider">ONLINE / READY</span>
        </div>
      </div>
    </header>
  );
}
