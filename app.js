(function () {
  const entryListEl = document.getElementById('entry-list');
  const tagFiltersEl = document.getElementById('tag-filters');
  const contentEl = document.getElementById('content');
  const searchEl = document.getElementById('search');

  const modal = document.getElementById('modal-backdrop');
  const newBtn = document.getElementById('new-btn');
  const closeBtn = document.getElementById('close-btn');
  const generateBtn = document.getElementById('generate-btn');
  const copyBtn = document.getElementById('copy-btn');
  const snippetWrap = document.getElementById('snippet-wrap');
  const snippetOut = document.getElementById('snippet-out');

  let activeTag = null;
  let query = '';
  let selectedId = null;

  const posts = (typeof POSTS !== 'undefined' ? POSTS : []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));

  function allTags() {
    const set = new Set();
    posts.forEach(p => (p.tags || []).forEach(t => set.add(t)));
    return Array.from(set).sort();
  }

  function filteredPosts() {
    return posts.filter(p => {
      if (activeTag && !(p.tags || []).includes(activeTag)) return false;
      if (query) {
        const hay = (p.title + ' ' + (p.body || '')).toLowerCase();
        if (!hay.includes(query.toLowerCase())) return false;
      }
      return true;
    });
  }

  function formatDate(d) {
    const dt = new Date(d + 'T00:00:00');
    if (isNaN(dt)) return d;
    return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function renderTagFilters() {
    const tags = allTags();
    tagFiltersEl.innerHTML = '';
    if (tags.length === 0) return;

    const makeChip = (label, value) => {
      const chip = document.createElement('button');
      chip.className = 'tag-chip' + (activeTag === value ? ' active' : '');
      chip.textContent = label;
      chip.addEventListener('click', () => {
        activeTag = activeTag === value ? null : value;
        renderTagFilters();
        renderList();
      });
      return chip;
    };

    tagFiltersEl.appendChild(makeChip('All', null));
    tags.forEach(t => tagFiltersEl.appendChild(makeChip(t, t)));
  }

  function renderList() {
    const items = filteredPosts();
    entryListEl.innerHTML = '';

    if (items.length === 0) {
      const li = document.createElement('li');
      li.className = 'entry-list-empty';
      li.textContent = 'No entries match.';
      entryListEl.appendChild(li);
      return;
    }

    items.forEach(p => {
      const li = document.createElement('li');
      li.className = 'entry-item' + (p.id === selectedId ? ' active' : '');
      li.innerHTML = `
        <div class="e-title">${escapeHtml(p.title)}</div>
        <div class="e-meta">${formatDate(p.date)}</div>
      `;
      li.addEventListener('click', () => {
        selectedId = p.id;
        renderList();
        renderContent();
      });
      entryListEl.appendChild(li);
    });

    if (!selectedId && items.length) {
      selectedId = items[0].id;
      renderContent();
    }
  }

  function renderContent() {
    const post = posts.find(p => p.id === selectedId);
    if (!post) {
      contentEl.innerHTML = `
        <div class="empty-state">
          <h2>Nothing here yet</h2>
          <p>Add an entry with the "New entry" button, or pick one from the list.</p>
        </div>`;
      return;
    }

    const tagsHtml = (post.tags || [])
      .map(t => `<span class="tag">${escapeHtml(t)}</span>`)
      .join('');

    contentEl.innerHTML = `
      <div class="entry-header"><h1>${escapeHtml(post.title)}</h1></div>
      <div class="entry-meta">
        <span>${formatDate(post.date)}</span>
        ${tagsHtml}
      </div>
      <div class="entry-body">${window.marked ? marked.parse(post.body || '') : escapeHtml(post.body || '')}</div>
    `;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  searchEl.addEventListener('input', e => {
    query = e.target.value;
    renderList();
  });

  // Modal
  newBtn.addEventListener('click', () => {
    modal.classList.add('open');
    snippetWrap.classList.add('hidden');
    document.getElementById('f-title').value = '';
    document.getElementById('f-tags').value = '';
    document.getElementById('f-body').value = '';
  });

  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('open');
  });

  function slugify(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'entry';
  }

  generateBtn.addEventListener('click', () => {
    const title = document.getElementById('f-title').value.trim();
    const tagsRaw = document.getElementById('f-tags').value.trim();
    const body = document.getElementById('f-body').value;

    if (!title) {
      document.getElementById('f-title').focus();
      return;
    }

    const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];
    const today = new Date().toISOString().slice(0, 10);
    const id = slugify(title) + '-' + today;

    const tagsStr = tags.length ? `[${tags.map(t => JSON.stringify(t)).join(', ')}]` : '[]';
    const bodyStr = '`' + body.replace(/\\/g, '\\\\').replace(/`/g, '\\`') + '`';

    const snippet = `  {
    id: ${JSON.stringify(id)},
    title: ${JSON.stringify(title)},
    date: ${JSON.stringify(today)},
    tags: ${tagsStr},
    body: ${bodyStr}
  },
`;

    snippetOut.value = snippet;
    snippetWrap.classList.remove('hidden');
  });

  copyBtn.addEventListener('click', () => {
    snippetOut.select();
    document.execCommand('copy');
    copyBtn.textContent = 'Copied';
    setTimeout(() => (copyBtn.textContent = 'Copy to clipboard'), 1500);
  });

  // Init
  renderTagFilters();
  renderList();
  renderContent();
})();
