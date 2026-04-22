// ═══════════════════════════════════════════════════════════════
// NovaTravel — main.js
// НЕ ТРОГАЙ ЭТОТ ФАЙЛ — данные меняй в data.js
// ═══════════════════════════════════════════════════════════════

let lang = localStorage.getItem('nt_lang') || 'ru';

// ── ЯЗЫК ────────────────────────────────────────────────────────
function t(key) { return I18N[lang][key] || key; }
function setLang(l) {
  lang = l;
  localStorage.setItem('nt_lang', l);
  document.documentElement.lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

// ── SVG ИКОНКИ СОЦСЕТЕЙ ─────────────────────────────────────────
const ICONS = {
  facebook:  `<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  telegram:  `<svg viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>`,
  youtube:   `<svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>`,
  tiktok:    `<svg viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>`,
  pinterest: `<svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.568 0-2.386-1.717-4.054-4.165-4.054-2.837 0-4.499 2.127-4.499 4.326 0 .857.33 1.775.741 2.276a.3.3 0 0 1 .069.288c-.076.31-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>`,
};

function socialIcons(container, size = 18, light = false) {
  return Object.entries(SITE.social).map(([key, url]) => {
    if (!url) return '';
    const svg = ICONS[key] || '';
    return `<a href="${url}" target="_blank" rel="noopener" aria-label="${key}" title="${key}">
      <svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1] || ''}</svg>
    </a>`;
  }).join('');
}

// ── ШАПКА ────────────────────────────────────────────────────────
function renderHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  header.innerHTML = `
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="header-logo">
          <img src="images/logo.png" alt="NovaTravel logo">
          <span class="header-logo-name">${SITE.name}</span>
        </a>
        <nav class="header-nav">
          <a href="tours.html">${t('nav_tours')}</a>
          <a href="index.html#events">${t('nav_events')}</a>
          <a href="blog.html">${t('nav_blog')}</a>
          <a href="index.html#about">${t('nav_about')}</a>
          <a href="index.html#faq">${t('nav_faq')}</a>
          <a href="mailto:${SITE.email}" class="header-email">${SITE.email}</a>
        </nav>
        <div class="header-social">${socialIcons()}</div>
        <div class="header-lang">
          <button class="lang-btn${lang==='ru'?' active':''}" data-lang="ru" onclick="setLang('ru')">RU</button>
          <button class="lang-btn${lang==='en'?' active':''}" data-lang="en" onclick="setLang('en')">EN</button>
        </div>
        <a href="mailto:${SITE.email}" class="btn btn-primary btn-sm header-cta">${t('btn_contact')}</a>
        <div class="burger" id="burger" onclick="toggleMenu()">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
    <nav class="mobile-menu" id="mobileMenu">
      <a href="tours.html">${t('nav_tours')}</a>
      <a href="index.html#events">${t('nav_events')}</a>
      <a href="blog.html">${t('nav_blog')}</a>
      <a href="index.html#about">${t('nav_about')}</a>
      <a href="index.html#faq">${t('nav_faq')}</a>
      <a href="mailto:${SITE.email}">${SITE.email}</a>
      <div class="header-lang">
        <button class="lang-btn${lang==='ru'?' active':''}" data-lang="ru" onclick="setLang('ru')">RU</button>
        <button class="lang-btn${lang==='en'?' active':''}" data-lang="en" onclick="setLang('en')">EN</button>
      </div>
      <div class="mobile-menu-social">${socialIcons(null, 22)}</div>
    </nav>
  `;
  // Sticky shadow
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

function toggleMenu() {
  document.getElementById('burger').classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── HERO ─────────────────────────────────────────────────────────
function renderHero() {
  const el = document.getElementById('hero');
  if (!el) return;
  el.innerHTML = `
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content fade-up">
        <span class="hero-label">NovaTravel · ${lang==='ru'?'Кыргызстан · Казахстан · Узбекистан · Таджикистан · Туркменистан':'Kyrgyzstan · Kazakhstan · Uzbekistan · Tajikistan · Turkmenistan'}</span>
        <h1 class="hero-title">${lang==='ru'?SITE.slogan_ru:SITE.slogan_en}</h1>
        <p class="hero-subtitle">${lang==='ru'?SITE.tagline_ru:SITE.tagline_en}</p>
        <div class="hero-actions">
          <a href="tours.html" class="btn btn-primary">${t('btn_all_tours')}</a>
          <a href="mailto:${SITE.email}" class="btn btn-outline" style="border-color:rgba(249,245,239,.5);color:#F9F5EF">${t('btn_contact')}</a>
        </div>
      </div>
    </div>
    <div class="hero-scroll"></div>
  `;
}

// ── О НАС ────────────────────────────────────────────────────────
function renderAbout() {
  const el = document.getElementById('about');
  if (!el) return;
  const statsHtml = STATS.map(s => `
    <div class="stat-card fade-up">
      <div class="num">${s.number}</div>
      <div class="lbl">${lang==='ru'?s.label_ru:s.label_en}</div>
    </div>`).join('');
  el.innerHTML = `
    <div class="container">
      <div class="about-grid">
        <div class="about-image-wrap fade-up">
          <img src="images/about.jpg" alt="О нас" onerror="this.style.display='none';this.parentElement.querySelector('.about-img-placeholder').style.display='flex'">
          <div class="about-img-placeholder" style="display:none;width:100%;height:480px;background:var(--bg-section);border-radius:var(--radius);align-items:center;justify-content:center;font-size:5rem;">🏛️</div>
          <div class="about-badge-float">
            <div class="num">${STATS[0].number}</div>
            <div class="lbl">${lang==='ru'?STATS[0].label_ru:STATS[0].label_en}</div>
          </div>
        </div>
        <div class="about-text fade-up stagger-2">
          <span class="section-label">${t('section_about')}</span>
          <h2 class="section-title">${lang==='ru'?'Мы открываем <em>настоящую</em> Центральную Азию':'We reveal <em>authentic</em> Central Asia'}</h2>
          <p>${lang==='ru'?ABOUT.text_ru:ABOUT.text_en}</p>
          <div class="stats-grid">${statsHtml}</div>
          <div style="margin-top:32px">
            <a href="mailto:${SITE.email}" class="btn btn-primary">${t('btn_contact')}</a>
          </div>
        </div>
      </div>
    </div>`;
}

// ── ПРЕИМУЩЕСТВА ────────────────────────────────────────────────
function renderAdvantages() {
  const el = document.getElementById('advantages');
  if (!el) return;
  const cards = ADVANTAGES.map((a, i) => `
    <div class="adv-card fade-up stagger-${i+1}">
      <div class="adv-icon">${a.icon}</div>
      <div class="adv-title">${lang==='ru'?a.title_ru:a.title_en}</div>
      <div class="adv-text">${lang==='ru'?a.text_ru:a.text_en}</div>
    </div>`).join('');
  el.innerHTML = `
    <div class="container">
      <div class="section-head center fade-up">
        <span class="section-label">NovaTravel</span>
        <h2 class="section-title">${t('section_advantages')}</h2>
      </div>
      <div class="adv-grid">${cards}</div>
    </div>`;
}

// ── КОМАНДА ─────────────────────────────────────────────────────
function renderTeam() {
  const el = document.getElementById('team');
  if (!el) return;
  const cards = TEAM.map((m, i) => `
    <div class="team-card fade-up stagger-${i+1}">
      <img src="${m.image}" alt="${m.name}" onerror="this.style.display='none'">
      <div class="team-card-body">
        <div class="team-card-name">${m.name}</div>
        <div class="team-card-role">${lang==='ru'?m.role_ru:m.role_en}</div>
        <div class="team-card-bio">${lang==='ru'?m.bio_ru:m.bio_en}</div>
        ${m.instagram?`<a href="${m.instagram}" target="_blank" style="display:inline-block;margin-top:12px;color:var(--accent);font-size:.8rem;">Instagram →</a>`:''}
      </div>
    </div>`).join('');
  el.innerHTML = `
    <div class="container">
      <div class="section-head fade-up">
        <span class="section-label">NovaTravel</span>
        <h2 class="section-title">${t('section_team')}</h2>
      </div>
      <div class="team-grid">${cards}</div>
    </div>`;
}

// ── ТУРЫ (флип-карточки) ────────────────────────────────────────
function badgeHtml(tour) {
  if (!tour.badge) return '';
  const map = { hit:'badge-hit', sale:'badge-sale', new:'badge-new' };
  const label = { hit:t('badge_hit'), sale:t('badge_sale'), new:t('badge_new') };
  return `<span class="badge ${map[tour.badge]}">${label[tour.badge]}</span>`;
}

function renderTours(limit = 3) {
  const el = document.getElementById('tours');
  if (!el) return;
  const visible = TOURS.filter(t => !t.hidden).slice(0, limit);
  const cards = visible.map((tour, i) => `
    <div class="flip-card fade-up stagger-${i+1}" onclick="this.classList.toggle('flipped')">
      <div class="flip-card-inner">
        <div class="flip-front">
          ${tour.image
            ? `<img class="flip-front-img" src="${tour.image}" alt="${lang==='ru'?tour.title_ru:tour.title_en}" onerror="this.parentElement.innerHTML='<div class=\\'flip-front-img-placeholder\\'>🏛️</div>'">`
            : `<div class="flip-front-img-placeholder">🏛️</div>`}
          <div class="flip-front-body">
            <div class="flip-front-badges">
              ${badgeHtml(tour)}
            </div>
            <div class="flip-front-title">${lang==='ru'?tour.title_ru:tour.title_en}</div>
            <div class="flip-front-meta">
              <span>📅 ${tour.days} ${t('tour_days')}</span>
              <span>👥 ${t('tour_group')} ${tour.max_group}</span>
              <span>🗺️ ${lang==='ru'?tour.countries_ru.join(', '):tour.countries_en.join(', ')}</span>
            </div>
            <div class="flip-front-price">${t('tour_from')}${tour.price}</div>
          </div>
        </div>
        <div class="flip-back">
          <div>
            <div class="flip-back-title">${lang==='ru'?tour.title_ru:tour.title_en}</div>
            <div class="flip-back-desc">${lang==='ru'?tour.short_ru:tour.short_en}</div>
            <div style="margin-top:16px;font-size:.82rem;opacity:.6;">
              ${lang==='ru'?tour.cities_ru:tour.cities_en}
            </div>
          </div>
          <div class="flip-back-actions">
            <a href="tour.html?id=${tour.id}" class="btn btn-primary btn-full" onclick="event.stopPropagation()">${t('btn_details')}</a>
          </div>
        </div>
      </div>
    </div>`).join('');
  el.innerHTML = `
    <div class="container">
      <div class="section-head fade-up">
        <span class="section-label">NovaTravel</span>
        <h2 class="section-title">${t('section_tours')}</h2>
      </div>
      <div class="tours-grid">${cards}</div>
      <div class="blog-cta fade-up">
        <a href="tours.html" class="btn btn-outline">${t('btn_all_tours')}</a>
      </div>
    </div>`;
}

// ── МЕРОПРИЯТИЯ (флип-карусель) ──────────────────────────────────
let eventsIdx = 0;
function renderEvents() {
  const el = document.getElementById('events');
  if (!el) return;
  const visible = EVENTS.filter(e => !e.hidden);
  const cards = visible.map((ev, i) => `
    <div class="flip-card" onclick="this.classList.toggle('flipped')">
      <div class="flip-card-inner">
        <div class="flip-front event-flip-front">
          ${ev.image
            ? `<img class="flip-front-img" src="${ev.image}" alt="${lang==='ru'?ev.title_ru:ev.title_en}" onerror="this.parentElement.innerHTML='<div class=\\'flip-front-img-placeholder\\'>🎯</div>'">`
            : `<div class="flip-front-img-placeholder">🎯</div>`}
          <div class="flip-event-body">
            <div class="event-badges">
              <span class="badge ${ev.type==='online'?'badge-online':'badge-offline'}">${t('badge_'+ev.type)}</span>
              <span class="badge ${ev.price===0?'badge-free':'badge-paid'}">${lang==='ru'?ev.price_label_ru:ev.price_label_en}</span>
            </div>
            <div class="event-title">${lang==='ru'?ev.title_ru:ev.title_en}</div>
            <div class="event-date">📅 ${lang==='ru'?ev.date_ru:ev.date_en} · ${ev.time}</div>
            <div class="event-short">${lang==='ru'?ev.short_ru:ev.short_en}</div>
          </div>
        </div>
        <div class="flip-back event-flip-back" style="padding:28px;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div class="event-badges" style="margin-bottom:12px;">
              <span class="badge ${ev.type==='online'?'badge-online':'badge-offline'}">${t('badge_'+ev.type)}</span>
              <span class="badge ${ev.price===0?'badge-free':'badge-paid'}">${lang==='ru'?ev.price_label_ru:ev.price_label_en}</span>
            </div>
            <div style="font-family:var(--font-display);font-size:1.15rem;margin-bottom:8px;">${lang==='ru'?ev.title_ru:ev.title_en}</div>
            <div style="font-size:.82rem;color:var(--accent-light);margin-bottom:12px;">📅 ${lang==='ru'?ev.date_ru:ev.date_en} · ${ev.time}</div>
            <div style="font-size:.88rem;opacity:.8;line-height:1.7;">${lang==='ru'?ev.full_ru:ev.full_en}</div>
          </div>
          <div class="flip-back-actions" style="margin-top:20px;">
            ${ev.form_url?`<a href="${ev.form_url}" target="_blank" class="btn btn-primary btn-full" onclick="event.stopPropagation()">${t('btn_register')}</a>`:'<span style="font-size:.8rem;opacity:.5">'+(lang==='ru'?'Ссылка скоро появится':'Link coming soon')+'</span>'}
          </div>
        </div>
      </div>
    </div>`).join('');

  el.innerHTML = `
    <div class="container">
      <div class="section-head fade-up">
        <span class="section-label">NovaTravel</span>
        <h2 class="section-title">${t('section_events')}</h2>
      </div>
      <div class="events-carousel">
        <div class="events-track" id="eventsTrack">${cards}</div>
      </div>
      <div class="carousel-controls">
        <button class="carousel-btn" onclick="slideEvents(-1)">←</button>
        <button class="carousel-btn" onclick="slideEvents(1)">→</button>
      </div>
      <div class="blog-cta" style="margin-top:24px">
        <a href="index.html#events" class="btn btn-outline">${t('btn_all_events')}</a>
      </div>
    </div>`;
  eventsIdx = 0;
}

function slideEvents(dir) {
  const track = document.getElementById('eventsTrack');
  if (!track) return;
  const cards = track.querySelectorAll('.flip-card');
  const visible = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
  const max = Math.max(0, cards.length - visible);
  eventsIdx = Math.max(0, Math.min(eventsIdx + dir, max));
  const w = cards[0]?.offsetWidth + 24 || 0;
  track.style.transform = `translateX(-${eventsIdx * w}px)`;
}

// ── ВИДЕО ОТЗЫВЫ ─────────────────────────────────────────────────
let videoIdx = 0;
function renderVideoReviews() {
  const el = document.getElementById('video-reviews');
  if (!el) return;
  const cards = VIDEO_REVIEWS.map((v, i) => `
    <div class="video-card fade-up stagger-${i+1}">
      <div class="video-thumb">
        <img src="https://img.youtube.com/vi/${v.youtube_id}/hqdefault.jpg" alt="${lang==='ru'?v.title_ru:v.title_en}" onclick="playVideo(this,'${v.youtube_id}')">
        <div class="video-play-btn">▶</div>
      </div>
      <div class="video-info">
        <div class="video-info-title">${lang==='ru'?v.title_ru:v.title_en}</div>
        <div class="video-info-author">${v.author}</div>
      </div>
    </div>`).join('');
  el.innerHTML = `
    <div class="container">
      <div class="section-head center fade-up">
        <span class="section-label">NovaTravel</span>
        <h2 class="section-title">${t('section_video')}</h2>
      </div>
      <div class="video-carousel">
        <div class="video-track" id="videoTrack">${cards}</div>
      </div>
      <div class="carousel-controls">
        <button class="carousel-btn" onclick="slideVideo(-1)">←</button>
        <button class="carousel-btn" onclick="slideVideo(1)">→</button>
      </div>
      <div class="reviews-cta fade-up" style="margin-top:48px">
        <p>${lang==='ru'?'Были в туре с нами? Поделитесь впечатлениями!':'Travelled with us? Share your experience!'}</p>
        <a href="${SITE.google_reviews}" target="_blank" class="btn btn-primary">${t('btn_review')}</a>
      </div>
    </div>`;
}

function playVideo(img, id) {
  const wrap = img.parentElement;
  wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
}

function slideVideo(dir) {
  const track = document.getElementById('videoTrack');
  if (!track) return;
  const cards = track.querySelectorAll('.video-card');
  const visible = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
  const max = Math.max(0, cards.length - visible);
  videoIdx = Math.max(0, Math.min(videoIdx + dir, max));
  const w = cards[0]?.offsetWidth + 24 || 0;
  track.style.transform = `translateX(-${videoIdx * w}px)`;
}

// ── СООБЩЕСТВО ───────────────────────────────────────────────────
function renderCommunity() {
  const el = document.getElementById('community');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="community-wrap fade-up">
        <span class="section-label">${lang==='ru'?'Присоединяйся':'Join Us'}</span>
        <h2 class="section-title">${t('section_community')}</h2>
        <p class="section-subtitle">${t('community_text')}</p>
        <a href="${SITE.community_email}" class="btn btn-primary btn-lg">${t('btn_join')}</a>
      </div>
    </div>`;
}

// ── БЛОГ ПРЕВЬЮ ──────────────────────────────────────────────────
function renderBlogPreview() {
  const el = document.getElementById('blog-preview');
  if (!el) return;
  const posts = BLOG_POSTS.filter(p => !p.hidden).slice(0, 3);
  const cards = posts.map((p, i) => `
    <a href="articles/${p.slug}.html" class="blog-card fade-up stagger-${i+1}">
      ${p.image
        ? `<img src="${p.image}" alt="${lang==='ru'?p.title_ru:p.title_en}" onerror="this.parentElement.innerHTML+='<div class=\\'blog-card-img-placeholder\\'>📖</div>';this.remove()">`
        : `<div class="blog-card-img-placeholder">📖</div>`}
      <div class="blog-card-body">
        <div class="blog-card-tag">${lang==='ru'?p.country_ru:p.country_en}</div>
        <div class="blog-card-title">${lang==='ru'?p.title_ru:p.title_en}</div>
        <div class="blog-card-excerpt">${lang==='ru'?p.excerpt_ru:p.excerpt_en}</div>
        <div class="blog-card-date">${new Date(p.date).toLocaleDateString(lang==='ru'?'ru-RU':'en-US',{year:'numeric',month:'long',day:'numeric'})}</div>
      </div>
    </a>`).join('');
  el.innerHTML = `
    <div class="container">
      <div class="section-head fade-up">
        <span class="section-label">NovaTravel</span>
        <h2 class="section-title">${t('section_blog')}</h2>
      </div>
      <div class="blog-grid">${cards}</div>
      <div class="blog-cta fade-up">
        <a href="blog.html" class="btn btn-outline">${t('btn_all_blog')}</a>
      </div>
    </div>`;
}

// ── РАССЫЛКА ─────────────────────────────────────────────────────
function renderNewsletter() {
  const el = document.getElementById('newsletter');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="newsletter-wrap">
        <div class="newsletter-text fade-up">
          <span class="section-label">${t('section_newsletter')}</span>
          <h2 class="section-title">${lang==='ru'?'Новые туры — <em>первыми</em>':'New tours — <em>first</em>'}</h2>
          <p class="section-subtitle">${t('newsletter_text')}</p>
        </div>
        <div class="newsletter-form fade-up stagger-2">
          <input type="email" id="nlEmail" placeholder="${t('newsletter_placeholder')}" required>
          <button class="btn btn-primary" onclick="submitNewsletter()">${t('btn_subscribe')}</button>
          <span class="newsletter-note" id="nlMsg"></span>
        </div>
      </div>
    </div>`;
}

function submitNewsletter() {
  const email = document.getElementById('nlEmail')?.value;
  const msg = document.getElementById('nlMsg');
  if (!email || !email.includes('@')) {
    if (msg) msg.textContent = lang==='ru' ? 'Введите корректный email' : 'Enter a valid email';
    return;
  }
  // Google Apps Script endpoint — добавь URL после настройки скрипта
  const SCRIPT_URL = '';  // ← вставь URL Google Apps Script
  if (!SCRIPT_URL) {
    if (msg) msg.textContent = lang==='ru' ? 'Спасибо! Скоро свяжемся 📩' : 'Thank you! We\'ll be in touch 📩';
    return;
  }
  fetch(SCRIPT_URL, { method:'POST', body: JSON.stringify({email, lang}), headers:{'Content-Type':'application/json'} })
    .then(() => { if (msg) msg.textContent = lang==='ru' ? 'Вы подписаны! 🎉' : 'Subscribed! 🎉'; })
    .catch(() => { if (msg) msg.textContent = lang==='ru' ? 'Ошибка. Попробуйте ещё раз.' : 'Error. Please try again.'; });
}

// ── FAQ ──────────────────────────────────────────────────────────
function renderFaq() {
  const el = document.getElementById('faq');
  if (!el) return;
  const items = FAQ.map((f, i) => `
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">
        <span>${lang==='ru'?f.q_ru:f.q_en}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-a">
        ${lang==='ru'?f.a_ru:f.a_en}
        ${f.link ? `<br><a href="${f.link}" target="_blank">${lang==='ru'?'Подробнее →':'Learn more →'}</a>` : ''}
      </div>
    </div>`).join('');
  el.innerHTML = `
    <div class="container">
      <div class="section-head center fade-up">
        <span class="section-label">FAQ</span>
        <h2 class="section-title">${t('section_faq')}</h2>
      </div>
      <div class="faq-list">${items}</div>
    </div>`;
}

function toggleFaq(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}

// ── ФУТЕР ────────────────────────────────────────────────────────
function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  const partnersHtml = PARTNERS.length
    ? PARTNERS.map(p => `
        <a href="${p.url||'#'}" class="partner-circle" title="${p.name}">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" onerror="this.parentElement.innerHTML='<span class=\\'partner-circle-placeholder\\'>${p.name}</span>'">` : `<span class="partner-circle-placeholder">${p.name}</span>`}
        </a>`).join('')
    : `<span style="color:rgba(249,245,239,.3);font-size:.85rem">${lang==='ru'?'Сертификаты и партнёры появятся здесь':'Certificates and partners will appear here'}</span>`;

  el.innerHTML = `
    <div class="container">
      <div class="footer-newsletter">
        <p>${t('newsletter_text')}</p>
        <form onsubmit="event.preventDefault();submitFooterNewsletter(this)">
          <input type="email" name="email" placeholder="${t('newsletter_placeholder')}" required>
          <button type="submit">${t('btn_subscribe')}</button>
        </form>
      </div>
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-brand-logo">
            <img src="images/logo.png" alt="NovaTravel">
            <span class="footer-brand-name">${SITE.name}</span>
          </div>
          <p class="footer-brand-desc">${lang==='ru'?SITE.slogan_ru:SITE.slogan_en}</p>
          <a href="mailto:${SITE.email}" class="footer-brand-desc" style="color:var(--accent-light)">${SITE.email}</a>
          <div class="footer-social">${socialIcons(null, 20, true)}</div>
        </div>
        <div class="footer-col">
          <h4>${lang==='ru'?'Маршруты':'Routes'}</h4>
          <ul>
            ${TOURS.filter(t=>!t.hidden).map(tour=>`<li><a href="tour.html?id=${tour.id}">${lang==='ru'?tour.title_ru:tour.title_en}</a></li>`).join('')}
            <li><a href="tours.html">${t('btn_all_tours')}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>${lang==='ru'?'Компания':'Company'}</h4>
          <ul>
            <li><a href="index.html#about">${t('nav_about')}</a></li>
            <li><a href="blog.html">${t('nav_blog')}</a></li>
            <li><a href="index.html#faq">${t('nav_faq')}</a></li>
            <li><a href="${SITE.google_business}" target="_blank">${t('btn_review')}</a></li>
            <li><a href="${SITE.community_email}">${t('btn_join')}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>${lang==='ru'?'Сотрудничество':'Work With Us'}</h4>
          <ul>
            <li><a href="${FORMS.partner||'#'}" target="_blank">${t('footer_partner')}</a></li>
            <li><a href="${FORMS.guide||'#'}" target="_blank">${t('footer_guide')}</a></li>
            <li><a href="${FORMS.driver||'#'}" target="_blank">${t('footer_driver')}</a></li>
            <li><a href="${FORMS.accommodation||'#'}" target="_blank">${t('footer_accommodation')}</a></li>
            <li><a href="${FORMS.masterclass||'#'}" target="_blank">${t('footer_masterclass')}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-partners">
        <h4>${t('section_partners')}</h4>
        <div class="partners-grid">${partnersHtml}</div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${SITE.name}. ${t('footer_rights')}.</span>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
      </div>
    </div>`;
}

function submitFooterNewsletter(form) {
  const btn = form.querySelector('button');
  if (btn) btn.textContent = lang==='ru' ? 'Спасибо! ✓' : 'Thanks! ✓';
}

// ── АНИМАЦИИ при прокрутке ────────────────────────────────────────
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

// ── РЕНДЕР ВСЕГО ─────────────────────────────────────────────────
function renderAll() {
  renderHeader();
  renderHero();
  renderAbout();
  renderAdvantages();
  renderTeam();
  renderTours();
  renderEvents();
  renderVideoReviews();
  renderCommunity();
  renderBlogPreview();
  renderNewsletter();
  renderFaq();
  renderFooter();
  setTimeout(initScrollAnimations, 100);
}

document.addEventListener('DOMContentLoaded', renderAll);
