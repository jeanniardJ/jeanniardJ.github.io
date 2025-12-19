import React from 'react';
import { Activity } from 'lucide-react';

export default function Metrics() {
  return (
    <section id="metrics" className="mb-24">
      <h2 className="text-2xl font-bold text-lab-primary border-b border-lab-border/50 pb-2 mb-8 flex items-center gap-3">
        <Activity className="w-6 h-6 text-lab-terminal" /> ANALYSE OPÉRATIONNELLE
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="glass-panel p-5 rounded-sm border border-lab-border">
          <div className="text-lab-muted font-mono text-xs uppercase mb-2">Expérience Opérationnelle</div>
          <div className="text-4xl font-bold text-lab-primary">2+</div>
          <div className="text-sm text-lab-text">Années de développement</div>
        </div>
        <div className="glass-panel p-5 rounded-sm border border-lab-border">
          <div className="text-lab-muted font-mono text-xs uppercase mb-2">Formation Clé</div>
          <div className="text-xl font-bold text-lab-terminal mt-1">Dev Web & Mobile</div>
          <div className="text-sm text-lab-text">Niveau 5 (Bac+2) - CRP Mulhouse</div>
        </div>
        <div className="glass-panel p-5 rounded-sm border border-lab-border">
          <div className="text-lab-muted font-mono text-xs uppercase mb-2">Vision IT</div>
          <div className="text-4xl font-bold text-white">Full Stack / Infra</div>
          <div className="text-sm text-lab-text">Du backend au réseau</div>
        </div>
        <div className="glass-panel p-5 rounded-sm border border-lab-border">
          <div className="text-lab-muted font-mono text-xs uppercase mb-2">Lien Git Public</div>
          <div className="text-xl font-bold text-lab-cyan mt-1"><a href="https://github.com/jeanniardJ" target="_blank" rel="noopener noreferrer">jeanniardJ</a></div>
          <div className="text-sm text-lab-text">GitHub ID (via API)</div>
        </div>
      </div>
    </section>
  );
}
