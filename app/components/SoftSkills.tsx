import React from 'react';
import { Users, FileCheck2, Lightbulb, Wrench, Shuffle } from 'lucide-react';

export default function SoftSkills() {
  const skills = [
    {
      icon: <FileCheck2 className="w-8 h-8 text-lab-terminal" />,
      title: 'Rigueur',
      description: 'Garantie d\'un code propre et testé.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-lab-cyan" />,
      title: 'Curiosité / Autodidacte',
      description: 'Comprendre l\'écosystème avant de coder.',
    },
    {
      icon: <Wrench className="w-8 h-8 text-lab-primary" />,
      title: 'Orienté Solutions',
      description: 'De la détection à l\'implémentation efficace.',
    },
    {
      icon: <Shuffle className="w-8 h-8 text-lab-muted" />,
      title: 'Adaptabilité',
      description: 'Passage fluide de l\'infra au développement.',
    },
  ];

  return (
    <section id="soft-skills" className="mb-24">
      <h2 className="text-3xl font-bold text-lab-primary border-b border-lab-primary/50 pb-4 mb-10 flex items-center gap-3">
        <Users className="w-8 h-8 text-lab-primary" />
        <span className="glow-text-primary">QUALITÉS HUMAINES (SOFT SKILLS)</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="glass-panel p-5 rounded-sm border border-lab-border text-center flex flex-col items-center"
          >
            {skill.icon}
            <div className="font-bold text-lg text-white mt-2">{skill.title}</div>
            <div className="text-xs text-lab-muted mt-1">{skill.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
