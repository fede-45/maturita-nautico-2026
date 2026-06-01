/* ============================================================
   MATURITÀ NAUTICO 2026 — Global App JS
   ============================================================ */

/* ── Theme ── */
const ThemeManager = {
  init() {
    const saved = localStorage.getItem('theme') || 'dark';
    this.set(saved, false);
  },
  set(theme, save = true) {
    document.documentElement.setAttribute('data-theme', theme);
    if (save) localStorage.setItem('theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  },
  toggle() {
    const cur = document.documentElement.getAttribute('data-theme');
    this.set(cur === 'dark' ? 'light' : 'dark');
  }
};

/* ── Reading progress bar ── */
const ReadingProgress = {
  init() {
    const bar = document.querySelector('.reading-progress-fill');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      bar.style.width = pct + '%';
    });
  }
};

/* ── Accordion ── */
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.classList.contains('open');
      // close siblings in same parent
      const parent = header.closest('.accordion-group');
      if (parent) {
        parent.querySelectorAll('.accordion-body.open').forEach(b => {
          b.classList.remove('open');
          b.previousElementSibling.classList.remove('open');
        });
      }
      body.classList.toggle('open', !isOpen);
      header.classList.toggle('open', !isOpen);
      // save state
      const id = header.dataset.id;
      if (id) {
        const open = JSON.parse(localStorage.getItem('acc_open') || '{}');
        open[id] = !isOpen;
        localStorage.setItem('acc_open', JSON.stringify(open));
      }
    });
    // restore
    const id = header.dataset.id;
    if (id) {
      const open = JSON.parse(localStorage.getItem('acc_open') || '{}');
      if (open[id]) {
        header.classList.add('open');
        header.nextElementSibling.classList.add('open');
      }
    }
  });
}

/* ── Tabs ── */
function initTabs(scope = document) {
  scope.querySelectorAll('.tabs').forEach(tabsEl => {
    tabsEl.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.dataset.group;
        const target = btn.dataset.tab;
        // deactivate all in group
        tabsEl.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const container = tabsEl.closest('.tabs-wrapper') || tabsEl.parentElement;
        container.querySelectorAll(`.tab-content[data-group="${group}"]`).forEach(c => c.classList.remove('active'));
        const tgt = container.querySelector(`.tab-content[data-group="${group}"][data-tab="${target}"]`);
        if (tgt) { tgt.classList.add('active'); tgt.classList.add('anim-fade'); }
      });
    });
  });
}

/* ── Sidebar navigation ── */
function initSidebar() {
  document.querySelectorAll('.sidebar-item[data-target]').forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.dataset.target;
      // update active state
      item.closest('.sidebar').querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      // show content panel
      const section = item.closest('[data-section]');
      if (section) {
        section.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
        const panel = section.querySelector('#' + targetId);
        if (panel) { panel.classList.add('active'); panel.classList.add('anim-fade'); }
      }
      // save
      localStorage.setItem('sidebar_' + (section?.id || 'main'), targetId);
    });
  });
  // restore
  document.querySelectorAll('[data-section]').forEach(section => {
    const saved = localStorage.getItem('sidebar_' + section.id);
    if (saved) {
      const item = section.querySelector(`.sidebar-item[data-target="${saved}"]`);
      if (item) item.click();
    }
  });
}

/* ── Flashcards ── */
function initFlashcards() {
  document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') card.classList.toggle('flipped');
    });
  });

  // Flashcard navigator
  document.querySelectorAll('.flashcard-nav').forEach(nav => {
    const deck = nav.closest('.flashcard-deck');
    if (!deck) return;
    const cards = deck.querySelectorAll('.flashcard');
    let current = 0;
    const counter = deck.querySelector('.fc-counter');
    const show = idx => {
      cards.forEach((c, i) => c.style.display = i === idx ? 'block' : 'none');
      if (counter) counter.textContent = `${idx + 1} / ${cards.length}`;
      deck.querySelector('.fc-prev').disabled = idx === 0;
      deck.querySelector('.fc-next').disabled = idx === cards.length - 1;
    };
    show(0);
    deck.querySelector('.fc-prev')?.addEventListener('click', () => { if (current > 0) show(--current); });
    deck.querySelector('.fc-next')?.addEventListener('click', () => { if (current < cards.length - 1) show(++current); });
    deck.querySelector('.fc-shuffle')?.addEventListener('click', () => {
      current = Math.floor(Math.random() * cards.length);
      show(current);
    });
  });
}

/* ── Quiz ── */
function initQuiz() {
  document.querySelectorAll('.quiz-block').forEach(quiz => {
    const options = quiz.querySelectorAll('.quiz-option');
    const correct = parseInt(quiz.dataset.correct);
    const feedback = quiz.querySelector('.quiz-feedback');
    let answered = false;
    options.forEach((opt, i) => {
      opt.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        options.forEach((o, j) => {
          o.classList.remove('correct', 'wrong');
          if (j === correct) o.classList.add('correct');
          else if (j === i && i !== correct) o.classList.add('wrong');
        });
        if (feedback) {
          feedback.style.display = 'block';
          feedback.classList.add('anim-fade');
        }
      });
    });
    quiz.querySelector('.quiz-reset')?.addEventListener('click', () => {
      answered = false;
      options.forEach(o => o.classList.remove('correct', 'wrong'));
      if (feedback) feedback.style.display = 'none';
    });
  });
}

/* ── Study progress tracker ── */
const Progress = {
  key: 'study_progress',
  get() { return JSON.parse(localStorage.getItem(this.key) || '{}'); },
  set(id, done) {
    const p = this.get();
    p[id] = done;
    localStorage.setItem(this.key, JSON.stringify(p));
    this.updateUI();
  },
  updateUI() {
    const p = this.get();
    document.querySelectorAll('[data-progress-id]').forEach(el => {
      const id = el.dataset.progressId;
      const cb = el.querySelector('.progress-checkbox');
      if (cb) cb.checked = !!p[id];
    });
    // update rings
    document.querySelectorAll('.progress-ring[data-topic]').forEach(ring => {
      const topic = ring.dataset.topic;
      const items = document.querySelectorAll(`[data-progress-topic="${topic}"]`);
      const done = Array.from(items).filter(i => p[i.dataset.progressId]).length;
      const pct = items.length ? (done / items.length) : 0;
      const fill = ring.querySelector('.ring-fill');
      const label = ring.querySelector('.ring-text');
      if (fill) {
        const r = 20; const circ = 2 * Math.PI * r;
        fill.style.strokeDasharray = circ;
        fill.style.strokeDashoffset = circ * (1 - pct);
      }
      if (label) label.textContent = Math.round(pct * 100) + '%';
    });
  },
  init() {
    document.querySelectorAll('.progress-checkbox').forEach(cb => {
      const item = cb.closest('[data-progress-id]');
      if (!item) return;
      const id = item.dataset.progressId;
      const p = this.get();
      cb.checked = !!p[id];
      cb.addEventListener('change', () => this.set(id, cb.checked));
    });
    this.updateUI();
  }
};

/* ── Pomodoro Timer ── */
const Pomodoro = {
  time: 25 * 60, remaining: 25 * 60, running: false, interval: null,
  init() {
    const el = document.getElementById('pomodoro');
    if (!el) return;
    const display = el.querySelector('.pomodoro-time');
    const label = el.querySelector('.pomodoro-label');
    const startBtn = el.querySelector('.pomo-start');
    const resetBtn = el.querySelector('.pomo-reset');
    const render = () => {
      const m = Math.floor(this.remaining / 60).toString().padStart(2, '0');
      const s = (this.remaining % 60).toString().padStart(2, '0');
      if (display) display.textContent = `${m}:${s}`;
    };
    startBtn?.addEventListener('click', () => {
      if (this.running) {
        clearInterval(this.interval); this.running = false;
        if (startBtn) startBtn.textContent = '▶ Avvia';
      } else {
        this.running = true;
        if (startBtn) startBtn.textContent = '⏸ Pausa';
        this.interval = setInterval(() => {
          if (this.remaining <= 0) {
            clearInterval(this.interval); this.running = false;
            if (startBtn) startBtn.textContent = '▶ Avvia';
            if (label) label.textContent = '✅ Sessione completata!';
            try { new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAA').play(); } catch(e){}
          } else {
            this.remaining--;
            render();
          }
        }, 1000);
      }
    });
    resetBtn?.addEventListener('click', () => {
      clearInterval(this.interval); this.running = false; this.remaining = this.time;
      if (startBtn) startBtn.textContent = '▶ Avvia';
      if (label) label.textContent = '🍅 Pomodoro';
      render();
    });
    el.querySelectorAll('.pomo-preset').forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(this.interval); this.running = false;
        this.time = parseInt(btn.dataset.min) * 60;
        this.remaining = this.time;
        if (startBtn) startBtn.textContent = '▶ Avvia';
        render();
      });
    });
    render();
  }
};

/* ── Inline search ── */
function initSearch(inputId, targetSelector) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll(targetSelector).forEach(el => {
      const text = el.textContent.toLowerCase();
      const visible = !q || text.includes(q);
      el.style.display = visible ? '' : 'none';
      if (q && visible) {
        el.style.border = '1px solid rgba(245,166,35,0.4)';
      } else {
        el.style.border = '';
      }
    });
  });
}

/* ── Smooth scroll to anchor ── */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Countdown ── */
function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const exam = new Date('2026-06-18T08:30:00');
  const update = () => {
    const now = new Date();
    const diff = exam - now;
    if (diff <= 0) { el.textContent = '🎓 Esame in corso!'; return; }
    const days = Math.floor(diff / 86400000);
    const hrs  = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const dEl = el.querySelector('.cd-days');
    const hEl = el.querySelector('.cd-hours');
    const mEl = el.querySelector('.cd-mins');
    if (dEl) dEl.textContent = days;
    if (hEl) hEl.textContent = String(hrs).padStart(2,'0');
    if (mEl) mEl.textContent = String(mins).padStart(2,'0');
  };
  update();
  setInterval(update, 30000);
}

/* ── Navbar scroll effect ── */
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 20 ? 'var(--border-strong)' : 'var(--border)';
  });
}

/* ── Copy formula ── */
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-copy]');
  if (!btn) return;
  navigator.clipboard.writeText(btn.dataset.copy).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓';
    setTimeout(() => btn.textContent = orig, 1500);
  });
});

/* ── Init all ── */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  ReadingProgress.init();
  initAccordions();
  initTabs();
  initSidebar();
  initFlashcards();
  initQuiz();
  Progress.init();
  Pomodoro.init();
  initCountdown();
  initNavbar();
  // theme toggle button
  document.getElementById('theme-toggle')?.addEventListener('click', () => ThemeManager.toggle());
});
