/**
 * Dynamic Projects & Interactive Category Filtering
 * Includes 3D Card Tilt Physics & Live Demo Previews
 */

export const projectsData = [
  {
    id: 'anime-catalog',
    title: 'Anime Explorer',
    category: 'api',
    categoryLabel: 'API Integrations',
    description: 'Interactive Vanilla JavaScript SPA integrating Kitsu REST API, featuring Separation of Concerns architecture, dynamic sliding window pagination, debounced search, LocalStorage watchlist, embedded trailers, and skeleton loading.',
    tags: ['Vanilla JS', 'REST API', 'Async/Await', 'LocalStorage', 'Glassmorphism'],
    thumbnailBg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    thumbnailImage: './assets/projects/anime-catalog.png',
    demoUrl: 'https://anime-catalog-kitsu-gsv0y735s-rakhaaaes-projects.vercel.app/',
    githubUrl: 'https://github.com/rakhaallea/anime_catalog_kitsu_api',
    features: [
      'REST API integration with Kitsu API (JSON:API format)',
      'Dynamic Sliding Window Pagination with 10-page shifting window',
      'Live search with 500ms debounce optimization',
      'LocalStorage Watchlist/Bookmark system with Tab View Switcher',
      'Detail modal with embedded YouTube trailer & keyboard navigation',
      'Skeleton screen loading and anti-spam toast notification system'
    ],
    codeHighlight: `const response = await fetch('https://kitsu.io/api/edge/anime?q=' + encodeURIComponent(query));
  const { data } = await response.json();`
  },
  {
    id: 'weather-app',
    title: 'Real-Time Weather App',
    category: 'api',
    categoryLabel: 'API Integrations',
    description: 'A responsive weather dashboard fetching real-time meteorological conditions using Open-Meteo API and Open-Meteo Geocoding search.',
    tags: ['Vanilla JS', 'Async/Await', 'Open-Meteo API', 'DOM Manipulation', 'CSS Glassmorphism'],
    thumbnailBg: 'linear-gradient(135deg, #4fa1f7 0%, #2575fc 50%, #6a11cb 100%)',
    thumbnailImage: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://weather-app-three-sigma-z9d9plazqf.vercel.app/',
    githubUrl: 'https://github.com/rakhaallea/weather-pulse-app',
    features: [
      'City search with Open-Meteo Geocoding API',
      'Real-time temperature and wind speed metrics',
      'Dynamic UI state management (Loading & Error Handling)',
      'Glassmorphism modern UI design'
    ],
    codeHighlight: `const geoRes = await fetch(\`https://geocoding-api.open-meteo.com/v1/search?name=\${cityName}&count=1&language=id&format=json\`);
const { latitude, longitude, name, country } = (await geoRes.json()).results[0];
const weatherRes = await fetch(\`https://api.open-meteo.com/v1/forecast?latitude=\${latitude}&longitude=\${longitude}&current_weather=true\`);`
  },
  {
    id: 'notes-app',
    title: 'Notes App (Full CRUD + Realtime Search)',
    category: 'state',
    categoryLabel: 'DOM & State / LocalStorage',
    description: 'Clean, responsive Notes Management Application with persistent LocalStorage state management, full CRUD operations, category tags, and realtime search filtering.',
    tags: ['Vanilla JavaScript', 'LocalStorage', 'Full CRUD', 'Realtime Search', 'Event Delegation'],
    thumbnailBg: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
    thumbnailImage: './assets/projects/notes_app.jpg',
    demoUrl: 'https://notes-app-vanilla-js-nu.vercel.app/',
    githubUrl: 'https://github.com/rakhaallea/notes_app_vanilla_js',
    features: [
      'Full CRUD Operations (Create, Read, Update, Delete) with instant DOM updates',
      'Realtime Search Bar to filter notes by title, category, or content keywords',
      'Persistent client-side storage using Web Storage API (LocalStorage)',
      'Event delegation and dual-purpose form state switching (Create vs. Update)'
    ],
    codeHighlight: `const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
localStorage.setItem('notes', JSON.stringify(updatedNotes));`
  },
  {
    id: 'register-form-validation',
    title: 'Register Form with Validation & a11y',
    category: 'forms',
    categoryLabel: 'Forms',
    description: 'A clean, accessible, and responsive user registration form with real-time field validation and dynamic password strength estimation built using Vanilla JavaScript, HTML5, and CSS3.',
    tags: ['Forms', 'Vanilla JavaScript', 'Regex Validation', 'a11y', 'HTML5/CSS3'],
    thumbnailBg: 'linear-gradient(135deg, #701a75 0%, #86198f 100%)',
    thumbnailImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://register-form-validation-chi.vercel.app/',
    githubUrl: 'https://github.com/rakhaallea/register-form-validation',
    features: [
      'Real-time field validation for username, email, and password as you type',
      'Dynamic password strength meter evaluating complexity and length',
      'Dynamic password confirmation and match checking',
      'Accessibility-first design (a11y) with ARIA live regions and full keyboard navigation',
      'Interactive visual feedback with error highlighting and clear status messages'
    ],
    codeHighlight: `// Real-time validation pattern check
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
const isValid = emailPattern.test(emailInput.value);

// Accessible status announcement
statusRegion.setAttribute('aria-live', 'polite');`
  },
  {
    id: 'todo-app',
    title: 'Productivity Tracker (Todo App with LocalStorage)',
    category: 'state',
    categoryLabel: 'DOM & State / LocalStorage',
    description: 'Clean, modern, and accessible Vanilla JavaScript Todo application featuring persistent storage via LocalStorage, dual-state task organization (Active vs Done), and real-time counter metrics.',
    tags: ['Vanilla JavaScript', 'LocalStorage', 'Event Delegation', 'Accessibility (a11y)', 'Glassmorphism UI'],
    thumbnailBg: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    thumbnailImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://todo-app-vanilla-js.vercel.app/',
    githubUrl: 'https://github.com/rakhaallea/todo_app_vanilla_js',
    features: [
      'Task Management (CRUD): Add, toggle completion status, and remove tasks dynamically',
      'Dual-Block Interface: Automatic visual separation between active and completed tasks',
      'Data Persistence: Integrated with browser localStorage using JSON serialization',
      'Optimized DOM Handling: Event delegation with closest() and dataset.id for dynamic elements',
      'Modern Glassmorphism UI & Accessibility: Screen-reader-friendly semantic structure (a11y)'
    ],
    codeHighlight: `const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
localStorage.setItem('todos', JSON.stringify(updatedTodos));`
  }
];

export function initProjects() {
  const container = document.getElementById('projects-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-content-slot');
  const modalClose = document.getElementById('modal-close-btn');

  if (!container) return;

  let currentCategory = 'all';

  function renderProjects(category = 'all') {
    const filtered = category === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === category);

    container.innerHTML = filtered.map((project) => `
      <article class="glass-card project-card" data-id="${project.id}" id="project-card-${project.id}">
        <div class="project-thumbnail-wrapper" style="background: ${project.thumbnailBg};">
          <img 
            src="${project.thumbnailImage}" 
            alt="${project.title} Banner" 
            class="project-thumbnail" 
            loading="lazy" 
          />
          <div class="project-thumbnail-overlay"></div>
          <div class="project-badge-overlay">${project.categoryLabel}</div>
        </div>

        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>

        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="project-tag">#${tag}</span>`).join('')}
        </div>

        <div class="project-links">
          <button class="project-btn project-btn-primary preview-btn" data-id="${project.id}" id="preview-btn-${project.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </button>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-secondary" id="github-btn-${project.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Source Code
          </a>
        </div>
      </article>
    `).join('');

    attach3DTiltEffect();
    attachPreviewHandlers();
  }

  function attach3DTiltEffect() {
    const cards = container.querySelectorAll('.project-card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      renderProjects(currentCategory);
    });
  });

  function attachPreviewHandlers() {
    const previewButtons = container.querySelectorAll('.preview-btn');
    previewButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-id');
        const project = projectsData.find((p) => p.id === projectId);
        if (!project || !modal || !modalBody) return;

        modalBody.innerHTML = `
          <div class="modal-banner-wrapper" style="position: relative; height: 180px; border-radius: 12px; overflow: hidden; margin-bottom: 20px; background: ${project.thumbnailBg};">
            <img src="${project.thumbnailImage}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10, 14, 23, 0.9), transparent); display: flex; flex-direction: column; justify-content: flex-end; padding: 18px 20px;">
              <span class="badge-pill" style="align-self: flex-start; margin-bottom: 6px;">${project.categoryLabel}</span>
              <h2 style="font-size: 1.4rem; font-weight: 700; color: #fff; margin: 0;">${project.title}</h2>
            </div>
          </div>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px;">
            ${project.description}
          </p>
          
          <h4 style="font-size: 0.88rem; font-weight: 700; color: #fff; margin-bottom: 8px;">Key Architecture Highlights:</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
            ${project.features.map(f => `
              <li style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--text-muted);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ${f}
              </li>
            `).join('')}
          </ul>

          <h4 style="font-size: 0.88rem; font-weight: 700; color: #fff; margin-bottom: 8px;">Modular Implementation Snippet:</h4>
          <div class="pipeline-code-block" style="margin-bottom: 24px;">
            <pre><code>${project.codeHighlight}</code></pre>
          </div>

          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="flex: 1; text-align: center;">
              Launch Live Vercel App ↗
            </a>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="flex: 1; text-align: center;">
              View Repository Code
            </a>
          </div>
        `;

        modal.classList.add('active');
      });
    });
  }

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  renderProjects('all');
}