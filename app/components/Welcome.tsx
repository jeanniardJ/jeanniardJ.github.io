import React from 'react';
import { Send } from 'lucide-react';

export default function Welcome() {
  return (
    <section id="welcome" className="min-h-[60vh] flex items-center justify-center text-center mb-24">
      <div className="max-w-4xl">
        <div className="font-mono text-xl md:text-2xl text-lab-terminal mb-6">
          <span className="inline-block text-lab-cyan">$</span>
          <span className="text-white">ACCESS GRANTED TO J.JEANNIARD_PROFILE.EXE</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight md:leading-snug">
          <span className="glow-text-primary block tracking-wider">SYMFONY / REACT ARCHITECT</span>
          <span className="text-lab-muted text-xl md:text-3xl font-mono block mt-4">// Jonathan Jeanniard</span>
        </h1>

        <p className="mt-8 text-lg text-lab-text max-w-2xl mx-auto">
          Curieux et autodidacte, je suis un Développeur Full Stack (Symfony / PHP/MySQL) avec une approche orientée qualité, sécurité et performance. Mon parcours, de technicien réseau à développeur, me confère une vision globale de l'écosystème IT. Je cherche à comprendre avant de coder et à faire simple avant de faire compliqué.
        </p>

        <a href="#contact" className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-lab-terminal text-black font-mono text-sm font-bold uppercase hover:bg-[#00e87d] transition-colors rounded-sm shadow-xl shadow-lab-terminal/20">
          <Send className="w-4 h-4" /> TRANSMETTRE UN MESSAGE
        </a>
      </div>
    </section>
  );
}
