/**
 * Skills & Tech Stack Module
 * Interactive showcase for Weeks 1-4 Curriculum & Modern Frontend Tools
 */

export const skillsData = [
  {
    id: 'html5',
    title: 'HTML5 & Semantic Web',
    category: 'Core Fundamentals',
    description: 'Semantic markup architecture, accessibility (a11y/ARIA), modern form input types, and SEO-optimized document structuring.',
    tags: ['Semantic Tags', 'ARIA', 'DOM Hierarchy', 'Meta Standards'],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h16l-1.5 14L12 21l-6.5-4z"></path></svg>`
  },
  {
    id: 'css3',
    title: 'CSS3 & Responsive Design',
    category: 'Styling & Layouts',
    description: 'CSS Grid & Flexbox layouts, Mobile-First media queries, CSS custom properties, Glassmorphism, and hardware-accelerated animations.',
    tags: ['CSS Grid', 'Flexbox', 'Transitions', 'CSS Variables'],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>`
  },
  {
    id: 'javascript',
    title: 'JavaScript (ES6+)',
    category: 'Core Logic',
    description: 'ES6 Modules (import/export), Closures, Array functional methods, Object destructuring, and event-driven architecture.',
    tags: ['ES6 Modules', 'Arrow Functions', 'Destructuring', 'Closures'],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>`
  },
  {
    id: 'async-fetch',
    title: 'Fetch API & Async/Await',
    category: 'Asynchronous Programming',
    description: 'Promises, Async/Await concurrency, RESTful API data consumption, JSON parsing, debounce algorithms, and resilient error handling.',
    tags: ['Fetch API', 'Promises', 'REST API', 'Error Boundaries'],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>`
  },
  {
    id: 'localstorage',
    title: 'DOM State & LocalStorage',
    category: 'Persistence & UX',
    description: 'Client-side key-value storage serialization, persistent CRUD flows, dynamic DOM hydration, and event delegation patterns.',
    tags: ['LocalStorage', 'JSON Serialization', 'Event Delegation', 'CRUD'],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`
  },
  {
    id: 'git-github',
    title: 'Git & GitHub Workflow',
    category: 'Version Control',
    description: 'Atomic git commits, branching strategies (feature branches), pull requests, merge conflict resolution, and remote synchronization.',
    tags: ['Git CLI', 'GitHub PRs', 'Branching', 'Commit Conventions'],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>`
  },
  {
    id: 'vite-tooling',
    title: 'Vite.js & Modern Tooling',
    category: 'Build Systems',
    description: 'Ultra-fast ESM development server, modern asset bundling, optimized production builds with rollup/esbuild, and zero-overhead setup.',
    tags: ['Vite Build', 'ESM Dev Server', 'Tree Shaking', 'Bundle Optimization'],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
  }
];

export function initSkills() {
  const container = document.getElementById('skills-grid-container');
  if (!container) return;

  container.innerHTML = skillsData.map((skill) => `
    <div class="glass-card skill-card" id="skill-card-${skill.id}">
      <div>
        <div class="skill-card-top">
          <div class="skill-icon-box">
            ${skill.icon}
          </div>
          <div>
            <h3 class="skill-title">${skill.title}</h3>
            <span class="skill-category">${skill.category}</span>
          </div>
        </div>
        <p class="skill-desc">${skill.description}</p>
      </div>

      <div class="skill-tags">
        ${skill.tags.map((tag) => `<span class="skill-subtag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}
