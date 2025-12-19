import React from 'react';
import { Server, Layers, Settings2 } from 'lucide-react';

export default function Skills() {
  const backendSkills = [
    { name: 'PHP & Symfony (Architecture MVC)', percentage: 95 },
    { name: 'SQL (PostgreSql / MariaDb)', percentage: 90 },
    { name: 'C# / C++ (Notions/Outils spécifiques)', percentage: 60 },
  ];

  const frontendSkills = [
    { name: 'Javascript Vanilla & ES6+', percentage: 85 },
    { name: 'React / Twig (Templating)', percentage: 80 },
    { name: 'HTML / CSS / Webpack', percentage: 92 },
  ];

  const devopsTools = [
    'Docker & Vmware Esxi',
    'Git / GitHub & CI/CD',
    'Agile / Kanban / Scrum',
    'Réseaux Cisco / Systèmes Ubuntu',
    'Bash / Scripting',
  ];

  return (
    <section id="skills" className="mb-24">
      <h2 className="text-3xl font-bold text-lab-primary border-b border-lab-primary/50 pb-4 mb-10 flex items-center gap-3">
        <Server className="w-8 h-8 text-lab-cyan" />
        <span className="glow-text-primary">MODULES & EXPERTISE (COMPÉTENCES)</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Back-end / Architecture */}
        <div className="glass-panel p-6 rounded-sm border border-lab-border space-y-4">
          <h3 className="text-xl font-bold text-lab-terminal mb-4 flex items-center gap-2">
            <Server className="w-5 h-5" />
            Back-end & Architecture (PHP/SQL)
          </h3>

          <div className="space-y-3">
            {backendSkills.map((skill) => (
              <div key={skill.name} className="font-mono text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-lab-text">{skill.name}</span>
                  <span className="text-lab-terminal">{skill.percentage}%</span>
                </div>
                <div className="progress-container h-2">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Front-end / UI */}
        <div className="glass-panel p-6 rounded-sm border border-lab-border space-y-4">
          <h3 className="text-xl font-bold text-lab-primary mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5" />
            Front-end & Interface (JS/React)
          </h3>

          <div className="space-y-3">
            {frontendSkills.map((skill) => (
              <div key={skill.name} className="font-mono text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-lab-text">{skill.name}</span>
                  <span className="text-lab-cyan">{skill.percentage}%</span>
                </div>
                <div className="progress-container h-2">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outils et Ops */}
        <div className="md:col-span-2 glass-panel p-6 rounded-sm border border-lab-border">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Settings2 className="w-5 h-5 text-lab-muted" />
            Outils & DevOps (Intégration/Infra)
          </h3>
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            {devopsTools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-lab-border/50 text-lab-cyan rounded-full border border-lab-cyan/30"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
