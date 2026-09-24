// AutoFill Guardian - Popup Script

// Format relative time
function formatTime(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  
  if (minutes < 1) return 'Agora';
  if (minutes < 60) return `${minutes} min`;
  if (hours < 24) return `${hours}h`;
  return `${Math.floor(hours / 24)}d`;
}

// Get source icon
function getSourceIcon(source) {
  switch (source) {
    case 'email': return '📧';
    case 'notification': return '🔔';
    case 'clipboard': return '📋';
    default: return '📱';
  }
}

// Load captures from background
async function loadCaptures() {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: 'GET_CAPTURES' }, (response) => {
      resolve(response?.captures || []);
    });
  });
}

// Render popup
async function render() {
  const captures = await loadCaptures();
  const root = document.getElementById('root');
  
  // Calculate stats
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayCount = captures.filter(c => c.capturedAt >= today.getTime()).length;
  
  if (captures.length === 0) {
    root.innerHTML = `
      <div class="popup-container">
        <div class="header">
          <div class="header-left">
            <div class="logo">🛡️</div>
            <div class="header-title">AutoFill Guardian</div>
          </div>
          <div class="status">
            <div class="status-dot"></div>
            <span>Monitorando</span>
          </div>
        </div>
        <div class="empty-state">
          <div class="empty-icon">📭</div>
          <div class="empty-title">Nenhum código capturado</div>
          <div class="empty-description">
            A extensão está monitorando suas notificações. Quando um código OTP for detectado, ele aparecerá aqui.
          </div>
        </div>
        <div class="footer">
          <button class="footer-button">⚙️ Settings</button>
          <button class="footer-button primary">Dashboard</button>
        </div>
      </div>
    `;
    return;
  }
  
  // Render captures list
  const capturesHtml = captures.slice(0, 10).map(capture => `
    <div class="capture-item" data-code="${capture.code}">
      <div class="capture-icon">${getSourceIcon(capture.source)}</div>
      <div class="capture-info">
        <div class="capture-source">${capture.sourceDetail}</div>
        <div class="capture-code">••••••</div>
      </div>
      <div class="capture-meta">
        <div class="capture-time">${formatTime(capture.capturedAt)}</div>
        ${capture.usedAt ? '<div class="capture-status">✓</div>' : ''}
      </div>
    </div>
  `).join('');
  
  root.innerHTML = `
    <div class="popup-container">
      <div class="header">
        <div class="header-left">
          <div class="logo">🛡️</div>
          <div class="header-title">AutoFill Guardian</div>
        </div>
        <div class="status">
          <div class="status-dot"></div>
          <span>Monitorando</span>
        </div>
      </div>
      <div class="stats">
        <div class="stat">
          <div class="stat-value indigo">${todayCount}</div>
          <div class="stat-label">Hoje</div>
        </div>
        <div class="stat">
          <div class="stat-value emerald">98%</div>
          <div class="stat-label">Sucesso</div>
        </div>
        <div class="stat">
          <div class="stat-value amber">${captures.length}</div>
          <div class="stat-label">Total</div>
        </div>
      </div>
      <div class="captures">
        <div class="captures-header">
          <div class="captures-title">Últimas Capturas</div>
          <a href="#" class="captures-link">Ver tudo</a>
        </div>
        ${capturesHtml}
      </div>
      <div class="footer">
        <button class="footer-button">⚙️ Settings</button>
        <button class="footer-button primary">Dashboard</button>
      </div>
    </div>
  `;
  
  // Add click handlers to copy code
  document.querySelectorAll('.capture-item').forEach(item => {
    item.addEventListener('click', async () => {
      const code = item.dataset.code;
      await navigator.clipboard.writeText(code);
      
      // Visual feedback
      item.style.borderColor = '#10b981';
      setTimeout(() => {
        item.style.borderColor = '';
      }, 1000);
    });
  });
}

// Initial render
render();

// Refresh every 5 seconds
setInterval(render, 5000);
