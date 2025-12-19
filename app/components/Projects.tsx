'use client';

import React, { useEffect, useState } from 'react';
import { Code2, Loader2, Github } from 'lucide-react';

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  archived: boolean;
  fork: boolean;
  stargazers_count: number;
  forks_count: number;
}

const DEMO_PROJECTS: GitHubRepo[] = [
  {
    name: 'jja_dev_lab',
    description: 'Symfony 7 Lab - Full Stack Development Environment',
    html_url: 'https://github.com/jeanniardJ/jja_dev_lab',
    language: 'PHP',
    archived: false,
    fork: false,
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: 'jeanniardJ.github.io',
    description: 'Portfolio React / TypeScript with Tailwind CSS',
    html_url: 'https://github.com/jeanniardJ/jeanniardJ.github.io',
    language: 'TypeScript',
    archived: false,
    fork: false,
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: 'JJA_DEV_LABS',
    description: 'Advanced development labs and experiments',
    html_url: 'https://github.com/jeanniardJ/JJA_DEV_LABS',
    language: 'PHP',
    archived: false,
    fork: false,
    stargazers_count: 0,
    forks_count: 0,
  },
];

// Display limit and caching
const DISPLAY_LIMIT = 6;
const CACHE_KEY = 'gh_repos_cache_v1';
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

function getLanguageColor(language: string | null): string {
  if (!language) return 'text-lab-muted bg-lab-border/50';

  const lang = language.toLowerCase();
  if (lang === 'php') return 'text-lab-terminal bg-lab-terminal/10 border-lab-terminal/30';
  if (lang === 'javascript') return 'text-lab-primary bg-lab-primary/10 border-lab-primary/30';
  if (lang === 'typescript') return 'text-lab-primary bg-lab-primary/10 border-lab-primary/30';
  if (lang === 'html') return 'text-lab-cyan bg-lab-cyan/10 border-lab-cyan/30';
  if (lang === 'css') return 'text-white bg-white/10 border-white/30';
  if (lang === 'bash') return 'text-lab-muted bg-lab-muted/10 border-lab-muted/30';
  return 'text-lab-muted bg-lab-border/50 border-lab-border/50';
}

async function fetchGitHubProjects(retries = 3): Promise<GitHubRepo[]> {
  const GITHUB_USERNAME = 'jeanniardJ';
  const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('Invalid response format');
      }

      if (data.length === 0) {
        return DEMO_PROJECTS;
      }

      return data;
    } catch (error) {
      if (attempt === retries - 1) {
        console.error('Failed to fetch GitHub projects:', error);
        return DEMO_PROJECTS;
      }
      const backoffDelay = Math.pow(2, attempt) * 1000;
      await new Promise((resolve) => setTimeout(resolve, backoffDelay));
    }
  }

  return DEMO_PROJECTS;
}

export default function Projects() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<'github' | 'demo'>('demo');
  const [cached, setCached] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        // Try cache first (client-side only)
        if (typeof window !== 'undefined' && window.localStorage) {
          const raw = localStorage.getItem(CACHE_KEY);
            if (raw) {
            try {
              const parsed = JSON.parse(raw);
              if (parsed && parsed.ts && parsed.data) {
                const age = Date.now() - parsed.ts;
                if (age < CACHE_TTL && Array.isArray(parsed.data)) {
                    setProjects(parsed.data.slice(0, DISPLAY_LIMIT));
                    setSource('github');
                    setCached(true);
                    setLoading(false);
                  return;
                }
              }
            } catch (e) {
              // ignore parse errors and continue to fetch
            }
          }
        }

        const data = await fetchGitHubProjects();

        // If fetch failed and returned demo projects, keep demo
        if (data === DEMO_PROJECTS) {
            setProjects(DEMO_PROJECTS.slice(0, DISPLAY_LIMIT));
            setSource('demo');
            setCached(false);
            setLoading(false);
          return;
        }

        // Filter out archived/forks, then limit displayed count
        const filtered = data.filter((p) => !p.archived && !p.fork);
        const limited = filtered.slice(0, DISPLAY_LIMIT);
        setProjects(limited);
          setSource('github');
          setCached(false);

        // Save to cache
        if (typeof window !== 'undefined' && window.localStorage) {
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ ts: Date.now(), data: filtered })
            );
          } catch (e) {
            // ignore storage errors (quota, private mode)
          }
        }
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="mb-24">
        <h2 className="text-3xl font-bold text-lab-primary border-b border-lab-primary/50 pb-4 mb-10 flex items-center gap-3">
          <Code2 className="w-8 h-8 text-lab-cyan" />
          <span className="glow-text-primary">RÉPERTOIRE DE PROJETS (SYSTEMS)</span>
        </h2>
        <div className="text-center p-10 glass-panel border border-lab-border rounded-sm">
          <div className="text-lab-terminal font-mono text-xl animate-pulse flex items-center justify-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin" />
            FETCHING_GH_DATA...
          </div>
          <p className="text-lab-muted text-sm mt-3">
            Chargement des dépôts publics depuis github.com/jeanniardJ
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="mb-24">
      <h2 className="text-3xl font-bold text-lab-primary border-b border-lab-primary/50 pb-4 mb-10 flex items-center gap-3">
        <Code2 className="w-8 h-8 text-lab-cyan" />
        <span className="glow-text-primary">RÉPERTOIRE DE PROJETS (SYSTEMS)</span>
        {cached && (
          <span className="ml-3 text-xs font-mono px-2 py-1 bg-lab-border/20 text-lab-muted rounded-sm">
            CACHED
          </span>
        )}
      </h2>

      <div className="space-y-6">
        {projects.length === 0 ? (
          <div className="text-center p-10 glass-panel border border-lab-border rounded-sm">
            <p className="text-lab-muted font-mono">EMPTY_PROJECT_LIST</p>
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.name}
              className="glass-panel p-6 rounded-sm border border-lab-border hover:border-lab-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-lab-primary mb-2 flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    {project.name}
                  </h3>
                  <p className="text-lab-text text-sm mb-3">
                    {project.description || 'No description available'}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    {project.language && (
                      <span
                        className={`text-xs px-2 py-1 rounded-full border font-mono ${getLanguageColor(
                          project.language
                        )}`}
                      >
                        {project.language}
                      </span>
                    )}
                    {project.archived && (
                      <span className="text-xs px-2 py-1 rounded-full border border-lab-border/50 text-lab-muted font-mono">
                        ARCHIVED
                      </span>
                    )}
                    {project.fork && (
                      <span className="text-xs px-2 py-1 rounded-full border border-lab-cyan/30 text-lab-cyan font-mono">
                        FORKED
                      </span>
                    )}
                    <span className="text-xs text-lab-muted font-mono ml-auto">
                      ⭐ {project.stargazers_count} | 🍴 {project.forks_count}
                    </span>
                  </div>
                </div>
              </div>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-lab-primary text-black font-mono text-xs font-bold hover:bg-lab-cyan transition-colors rounded-sm"
              >
                VISIT_REPO
              </a>
            </div>
          ))
        )}
      </div>

      {source === 'demo' && (
        <p className="text-center text-lab-muted text-xs font-mono mt-6">
          [DEMO_MODE] Affichage des données de démonstration. Les vrais projets seront chargés depuis GitHub.
        </p>
      )}
    </section>
  );
}
