/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lab-bg': '#0a0e27',
        'lab-panel': '#0f1429',
        'lab-border': '#1e293b',
        'lab-primary': '#00ff88',
        'lab-terminal': '#00d9ff',
        'lab-cyan': '#00d9ff',
        'lab-muted': '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
};
