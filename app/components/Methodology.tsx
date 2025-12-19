import React from 'react';
import { ShieldCheck, Zap, BookOpen } from 'lucide-react';

export default function Methodology() {
  const sections = [
    {
      id: 'quality',
      icon: <div className="w-5 h-5 text-lab-terminal">🧪</div>,
      title: 'Qualité & Vérification',
      items: [
        'Tests Unitaires/Fonctionnels : Garantie du non-régression et validation des fonctionnalités critiques.',
        'Normes PSR : Respect des standards de codage (PSR-12) pour la lisibilité et la maintenabilité.',
        'Code Review : Pratique d\'amélioration continue via la relecture collaborative.',
      ],
      borderColor: 'border-lab-terminal/50',
      textColor: 'text-lab-terminal',
    },
    {
      id: 'security',
      icon: <Zap className="w-5 h-5 text-lab-primary" />,
      title: 'Sécurité & Performance',
      items: [
        'Sécurité Symfony : Gestion rigoureuse des rôles, pare-feu et protection CSRF/XSS.',
        'Optimisation SQL : Requêtes efficaces, indexation et utilisation du cache Doctrine.',
        'Monitoring : Utilisation des outils de profilage (Symfony Profiler, Debugbar) pour l\'amélioration continue.',
      ],
      borderColor: 'border-lab-primary/50',
      textColor: 'text-lab-primary',
    },
    {
      id: 'rd',
      icon: <BookOpen className="w-5 h-5 text-lab-cyan" />,
      title: 'R&D & Formation Continue',
      items: [
        'Veille PHP/Symfony : Mise à jour régulière sur les nouvelles versions et l\'évolution du langage.',
        'Architectures : Exploration de DDD (Domain Driven Design) et Microservices.',
        'Infra Virtuelle : Maintien des compétences sur Docker, Linux, et virtualisation ESXi.',
      ],
      borderColor: 'border-lab-cyan/50',
      textColor: 'text-lab-cyan',
    },
  ];

  return (
    <section id="methodology" className="mb-24">
      <h2 className="text-3xl font-bold text-lab-primary border-b border-lab-primary/50 pb-4 mb-10 flex items-center gap-3">
        <ShieldCheck className="w-8 h-8 text-lab-terminal" />
        <span className="glow-text-terminal">APPROCHE MÉTHODOLOGIQUE (PROTOCOLE)</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`glass-panel p-6 rounded-sm border ${section.borderColor}`}
          >
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              {section.icon}
              {section.title}
            </h3>
            <ul className="text-lab-text space-y-2 list-none pl-0 font-mono text-xs">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className={`${section.textColor} flex-shrink-0`}>&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
