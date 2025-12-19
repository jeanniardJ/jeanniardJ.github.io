import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-lab-border bg-lab-panel py-8 relative z-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="font-bold text-white tracking-widest text-sm">J. JEANNIARD // PORTFOLIO</div>
          <div className="text-[10px] text-lab-muted font-mono mt-1">SYSTEM ONLINE // SECURE CONNECTION</div>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono">
          <a href="mailto:jonathan@jja-dev.fr" className="text-lab-muted hover:text-lab-primary transition-colors flex items-center gap-2">CONTACT_SYSTEM</a>
          <a href="https://github.com/jeanniardJ" target="_blank" rel="noreferrer" className="text-lab-muted hover:text-white transition-colors flex items-center gap-2">GITHUB_REPO</a>
          <a href="https://linkedin.com/in/jonathan-jeanniard" target="_blank" rel="noreferrer" className="text-lab-muted hover:text-white transition-colors flex items-center gap-2">LINKEDIN_PROFILE</a>
        </div>
      </div>
      <div className="text-center mt-6 text-[10px] text-lab-border font-mono">// EXECUTION TIME: <span id="execution-time">0.000</span>s // VERSION: V4.2</div>
    </footer>
  );
}