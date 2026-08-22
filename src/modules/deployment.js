/**
 * CI/CD & Deployment Showcase Module
 * Interactive pipeline walkthrough & Real-time Build Simulator
 */

export function initDeployment() {
  const triggerBtn = document.getElementById('trigger-build-btn');
  const terminal = document.getElementById('terminal-output');
  const buildStatus = document.getElementById('build-status-indicator');

  if (!triggerBtn || !terminal) return;

  const buildLogs = [
    { text: '$ git push origin main', type: 'command', delay: 300 },
    { text: 'ℹ GitHub Webhook: Push event received from branch "main" (commit 7a3f9e2)', type: 'info', delay: 700 },
    { text: 'ℹ Vercel Pipeline: Initializing build environment...', type: 'info', delay: 1100 },
    { text: '$ vite build --mode production', type: 'command', delay: 1500 },
    { text: '✓ vite v6.2.3 building for production...', type: 'info', delay: 1900 },
    { text: '✓ transformed 18 modules across 6 chunks in 42ms', type: 'success', delay: 2400 },
    { text: 'dist/index.html                   1.42 kB │ gzip: 0.65 kB', type: 'info', delay: 2800 },
    { text: 'dist/assets/style.css            14.28 kB │ gzip: 3.82 kB', type: 'info', delay: 3200 },
    { text: 'dist/assets/main.js              18.64 kB │ gzip: 5.12 kB', type: 'info', delay: 3600 },
    { text: '✓ Build completed in 248ms. Zero warnings.', type: 'success', delay: 4000 },
    { text: '🚀 Deployment Ready: https://portfolio-modern.vercel.app [Status: 200 OK]', type: 'success', delay: 4500 }
  ];

  let isBuilding = false;

  triggerBtn.addEventListener('click', () => {
    if (isBuilding) return;
    isBuilding = true;
    triggerBtn.disabled = true;
    triggerBtn.textContent = 'Running Build Pipeline...';
    triggerBtn.style.opacity = '0.7';

    if (buildStatus) {
      buildStatus.innerHTML = '<span style="color: #fbbf24; display: inline-flex; align-items: center; gap: 6px;"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#fbbf24; animation: blink 1s infinite;"></span> Building...</span>';
    }

    terminal.innerHTML = '';

    buildLogs.forEach((log, index) => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = `terminal-line ${log.type}`;
        line.textContent = log.text;
        terminal.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;

        if (index === buildLogs.length - 1) {
          isBuilding = false;
          triggerBtn.disabled = false;
          triggerBtn.textContent = 'Re-run Build Simulation';
          triggerBtn.style.opacity = '1';
          if (buildStatus) {
            buildStatus.innerHTML = '<span style="color: #34d399; display: inline-flex; align-items: center; gap: 6px;"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#34d399;"></span> Deployed & Live</span>';
          }
        }
      }, log.delay);
    });
  });
}
