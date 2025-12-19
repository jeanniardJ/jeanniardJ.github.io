"use client";
import React, { useEffect, useState } from 'react';

type Repo = {
  id: number;
  name: string;
  description?: string;
  language?: string;
  stargazers_count?: number;
  html_url?: string;
  archived?: boolean;
  fork?: boolean;
  updated_at?: string;
};

const DEMO_PROJECTS: Repo[] = [
  { id: 1, name: 'demo-1', description: 'Demo project', language: 'TypeScript', stargazers_count: 5, html_url: '#' },
  { id: 2, name: 'demo-2', description: 'Another demo', language: 'PHP', stargazers_count: 2, html_url: '#' },
];

function getLanguageColor(language?: string) {
  if (!language) return 'text-lab-muted bg-lab-border/50';
  const l = language.toLowerCase();
  if (l === 'php') return 'text-lab-terminal bg-lab-terminal/10 border-lab-terminal/30';
  if (l === 'javascript' || l === 'typescript') return 'text-lab-primary bg-lab-primary/10 border-lab-primary/30';
  if (l === 'html') return 'text-lab-cyan bg-lab-cyan/10 border-lab-cyan/30';
  return 'text-lab-muted bg-lab-border/50 border-lab-border/50';
}

export default function ProjectsClient() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let canceled = false;
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/jeanniardJ/repos?sort=updated');
        if (!res.ok) throw new Error('GitHub API error');
        const data = await res.json();
        if (!canceled) setRepos(data.slice(0, 8));
      } catch (e) {
        setRepos(DEMO_PROJECTS);
      } finally {
        if (!canceled) setLoading(false);
      }
    }
    fetchRepos();
    return () => { canceled = true; };
  }, []);

  if (loading) return <div className="py-8">Loading projects…</div>;

  return (
    <section id="projects" className="mb-24">
      <h2 className="text-3xl font-bold text-lab-primary border-b border-lab-primary/50 pb-4 mb-10 flex items-center gap-3">PROJECTS</h2>
      <div className="space-y-6" id="project-container">
        {repos.map((r) => (
          <article key={r.id} className="glass-panel p-6 rounded-sm border border-lab-border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-lab-terminal">{r.name}</h3>
              <span className={`text-xs font-mono px-3 py-1 rounded-full ${getLanguageColor(r.language)}`}>{r.language || 'UNKNOWN'}</span>
            </div>
            <p className="text-sm text-lab-muted mb-4">{r.description || 'No description provided.'}</p>
            <div className="mt-4 pt-3 border-t border-lab-border/50 flex justify-between items-center">
              <div className="text-xs text-lab-muted">Updated: {r.updated_at ? new Date(r.updated_at).toLocaleDateString() : '-'}</div>
              <a href={r.html_url} target="_blank" rel="noreferrer" className="text-lab-primary text-xs font-mono">VIEW</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
