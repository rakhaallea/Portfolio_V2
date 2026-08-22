/**
 * Main Application Entry Point
 * Vanilla JavaScript ES6+ Modules
 */

import { initBackground } from './modules/background.js';
import { initNavigation } from './modules/navigation.js';
import { initTypingEffect } from './modules/typing.js';
import { initSkills } from './modules/skills.js';
import { initProjects } from './modules/projects.js';
import { initDeployment } from './modules/deployment.js';
// import { initContact } from './modules/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Interactive Canvas Background
  initBackground();

  // 2. Initialize Dual-Navigation (Sidebar + Bottom Nav + Scrollspy)
  initNavigation();

  // 3. Initialize Hero Dynamic Typing Loop
  initTypingEffect();

  // 4. Initialize Skills & Tech Stack Grid
  initSkills();

  // 5. Initialize Dynamic Projects with Category Filter & 3D Tilt
  initProjects();

  // 6. Initialize CI/CD & Deployment Simulator
  initDeployment();

  // 7. Initialize Interactive Contact Form & Clipboard
  // initContact();

  console.log('⚡ Modern Vanilla JS Portfolio loaded successfully via Vite.');
});
