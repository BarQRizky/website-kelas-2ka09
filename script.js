/* =============================================
   DATA — MEMBERS
   ============================================= */
const members = [
  { id: 1,  name: "ADITYA ANANDA PUTRI",          npm: "11124445", instagram: "anandaptrriii" },
  { id: 2,  name: "AHMAD HANIF FAUZAAN",           npm: "10124064", instagram: "thisnyff" },
  { id: 3,  name: "ANDHITO YUDI PRATAMA",          npm: "10124146", instagram: "andtoprtm" },
  { id: 4,  name: "ARIF PRIAMBODO",                npm: "10124191", instagram: "arifpriam28" },
  { id: 5,  name: "BAYU ARDIAN LISTIANTO",         npm: "10124245", instagram: "baardl_" },
  { id: 6,  name: "DARWIN",                        npm: "10124309", instagram: "darwi_n1969" },
  { id: 7,  name: "EFRON KALEBY KUDAHATI",         npm: "10124382", instagram: "efkalebbb" },
  { id: 8,  name: "EGI PRIANGGARA",                npm: "10124383", instagram: "egigara30" },
  { id: 9,  name: "FAISAL ARIFIN",                 npm: "10124422", instagram: "fsallxxs" },
  { id: 10, name: "FIRA RAIDAH RAIHANA",           npm: "10124495", instagram: "firr.ahh" },
  { id: 11, name: "HAFIZH RIDHA",                    npm: "10124539", instagram: "izhu_toge" },
  { id: 12, name: "ILHAM KHAIRI",                  npm: "10124587", instagram: "ilhmmkhairii" },
  { id: 13, name: "KASA JULYANO CESAREA",          npm: "10124640", instagram: "user776kjc" },
  { id: 14, name: "KENZIE ABISAKHA YUDA",          npm: "10124647", instagram: "ziieeng" },
  { id: 15, name: "KRESNA BAYU KUSNANTO",          npm: "10124666", instagram: "kresnabaayu" },
  { id: 16, name: "LAZZUARD FARREL RAYNDRA",       npm: "10124673", instagram: "farrel_lr" },
  { id: 17, name: "LINGGA SASI RAMADHAN",          npm: "11124452", instagram: "linggaasrmdhn" },
  { id: 18, name: "MEGIE PUTRI NABILAH",           npm: "10124719", instagram: "lacczv_" },
  { id: 19, name: "MUAMMAR KHOIRO MA'MUL LUBIS",  npm: "10124752", instagram: "marr_koiro" },
  { id: 20, name: "MUHAMAD IRFAN DZAKKI",          npm: "10124771", instagram: "bukanirpann_" },
  { id: 21, name: "MUHAMAD RIZKY",                 npm: "10124783", instagram: "muhamad_rizky75" },
  { id: 22, name: "MUHAMMAD AFFAN AL A DZAMI",     npm: "10124792", instagram: "appan.dzami" },
  { id: 23, name: "MUHAMMAD FARRELL AL FATAH",     npm: "10124850", instagram: "farrelalfatah" },
  { id: 24, name: "MUHAMMAD FATHAN MUBINA",        npm: "10124852", instagram: "mhmmdfthnmubina" },
  { id: 25, name: "MUHAMMAD REVA PRAKOSO",         npm: "10124951", instagram: "mrevsps" },
  { id: 26, name: "MUHAMMAD RIDHWAN AR RAYYAN",    npm: "10124954", instagram: "ridhwanrayn" },
  { id: 27, name: "MUHAMMAD WILDAN AN-NAUFAL",     npm: "11124478", instagram: "wildannaufalll" },
  { id: 28, name: "RAFAEL RAMADHAN",               npm: "11124113", instagram: "rsafel_" },
  { id: 29, name: "RASYA ADITYA FADHILAH",         npm: "11124176", instagram: "rasyaadityafadhilah" },
  { id: 30, name: "RIQY ZOEHDAN SHIDDIQY",         npm: "11124236", instagram: "zhoedone" },
  { id: 31, name: "RIZKIYA ANANDA PUTRI",          npm: "11124242", instagram: "kkiyyaae" },
  { id: 32, name: "SAVINA RACHMA PUTRI",           npm: "11124292", instagram: "sravinaaph0_0" },
  { id: 33, name: "YOHANES SEBASTIAN PRASETIYO",   npm: "11124386", instagram: "sebastianprstyo" },
];

/* =============================================
   DATA — GALLERY
   ============================================= */
const galleryItems = [
  { src: "images/gallery/foto1.jpg", caption: "Badminton 📸" },
  { src: "images/gallery/foto2.jpg", caption: "Batik Day" },
  { src: "images/gallery/foto3.jpg", caption: "Lift moment " },
  { src: "images/gallery/foto4.jpg", caption: "Photobox 📸" },
  { src: "images/gallery/foto5.jpg", caption: "Buka Bersama" },
  { src: "images/gallery/foto6.jpg", caption: "Suasana Kelas" },
  { src: "images/gallery/foto7.jpg", caption: "Ber 6" },
  { src: "images/gallery/foto8.jpg", caption: "Turnamen Mobile Legends" },
  { src: "images/gallery/foto9.jpg", caption: "Kelas Online " },
  { src: "images/gallery/foto10.jpg", caption: "Girls " },
];

/* =============================================
   UTILITY FUNCTIONS
   ============================================= */
function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function getAvatarColor(id) {
  const colors = [
    ["#2d1b69", "#7b52d4"],
    ["#1a3a5c", "#3498db"],
    ["#1a4a2e", "#2ecc71"],
    ["#4a1a1a", "#e74c3c"],
    ["#3a2a0a", "#f0b429"],
    ["#2a1a4a", "#9b59b6"],
  ];
  return colors[id % colors.length];
}

function createAvatarSVG(name, id) {
  const initials = getInitials(name);
  const [bg1, bg2] = getAvatarColor(id);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="g${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${bg1}" />
          <stop offset="100%" style="stop-color:${bg2}" />
        </linearGradient>
        <pattern id="p${id}" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
          <rect width="20" height="20" fill="url(#g${id})" />
          <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.08)" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#p${id})" />
      <text x="100" y="118" font-family="Inter,sans-serif" font-size="64"
        font-weight="700" fill="rgba(255,255,255,0.9)"
        text-anchor="middle" dominant-baseline="middle">${initials}</text>
    </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg.trim());
}

/* =============================================
   HERO PARTICLES
   ============================================= */
function initParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  const count = window.innerWidth < 768 ? 15 : 30;

  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");

    const size = Math.random() * 4 + 1;
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 15;
    const isGold = Math.random() > 0.6;

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: -10px;
      background: ${isGold ? "rgba(240,180,41,0.6)" : "rgba(123,82,212,0.6)"};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      box-shadow: 0 0 ${size * 2}px ${isGold ? "rgba(240,180,41,0.4)" : "rgba(123,82,212,0.4)"};
    `;
    container.appendChild(p);
  }
}

/* =============================================
   NAVBAR
   ============================================= */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const links = navLinks.querySelectorAll(".nav-link");

  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    updateActiveLink();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
    document.body.classList.toggle("modal-open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
      document.body.classList.remove("modal-open");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function updateActiveLink() {
  const sections = ["home", "members", "information", "gallery"];
  const links = document.querySelectorAll(".nav-link");
  const scrollPos = window.scrollY + 120;

  let current = "home";
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) current = id;
  });

  links.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === current);
  });
}

/* =============================================
   MEMBERS SLIDER
   ============================================= */
function initSlider() {
  const track = document.getElementById("sliderTrack");
  const dotsWrap = document.getElementById("sliderDots");
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");
  const container = document.getElementById("sliderContainer");

  if (!track) return;

  // Reset
  track.innerHTML = "";

  members.forEach((m, idx) => {
    const card = document.createElement("div");

    card.classList.add("member-card");
    card.dataset.idx = idx;

    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Lihat profil ${m.name}`);

    const imgSrc = `images/members/member-${m.id}.jpg`;
    const avatarSrc = createAvatarSVG(m.name, m.id);

    card.innerHTML = `
      <div class="member-photo">
        <img
          src="${imgSrc}"
          alt="${m.name}"
          loading="lazy"
          onerror="this.src='${avatarSrc}'"
        />
      </div>

      <div class="member-name-wrap">
        <p class="member-name">${m.name}</p>
        <p class="member-number">#${String(m.id).padStart(2, "0")}</p>
      </div>
    `;

    card.addEventListener("click", () => openMemberModal(m, imgSrc, avatarSrc));

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        openMemberModal(m, imgSrc, avatarSrc);
      }
    });

    track.appendChild(card);
  });

  // Spacer agar card terakhir tidak terpotong
  const spacer = document.createElement("div");
  spacer.style.width = "350px";
  spacer.style.flexShrink = "0";
  track.appendChild(spacer);

  let currentPage = 0;
  let cardsVisible = 5;
  let totalPages = 0;

  let isDragging = false;
  let startX = 0;

  function getConfig() {
    const w = window.innerWidth;

    if (w < 480) return 1;
    if (w < 768) return 2;
    if (w < 1024) return 3;

    return 5;
  }

  function buildDots() {
    dotsWrap.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("button");

      dot.classList.add("dot");

      if (i === currentPage) {
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => goTo(i));

      dotsWrap.appendChild(dot);
    }
  }

  function setup() {
    cardsVisible = getConfig();

    totalPages = Math.ceil(members.length / cardsVisible);

    if (currentPage >= totalPages) {
      currentPage = totalPages - 1;
    }

    buildDots();

    goTo(currentPage);
  }

  function goTo(page) {
    currentPage = Math.max(0, Math.min(page, totalPages - 1));

    const firstCard = track.querySelector(".member-card");

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;

    const gap = parseInt(window.getComputedStyle(track).gap) || 0;

    const slideWidth = cardWidth + gap;

    let offset = currentPage * cardsVisible * slideWidth;

    const maxOffset = track.scrollWidth - container.clientWidth;

    offset = Math.min(offset, maxOffset);

    track.style.transform = `translateX(-${offset}px)`;

    document.querySelectorAll("#sliderDots .dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentPage);
    });

    prevBtn.disabled = currentPage === 0;

    nextBtn.disabled = offset >= maxOffset - 5;
  }

  prevBtn.addEventListener("click", () => {
    goTo(currentPage - 1);
  });

  nextBtn.addEventListener("click", () => {
    goTo(currentPage + 1);
  });

  // Drag Desktop
  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
  });

  window.addEventListener("mouseup", (e) => {
    if (!isDragging) return;

    isDragging = false;

    const diff = e.pageX - startX;

    if (Math.abs(diff) > 60) {
      if (diff < 0) {
        goTo(currentPage + 1);
      } else {
        goTo(currentPage - 1);
      }
    }
  });

  // Touch Mobile
  container.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );

  container.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - startX;

    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        goTo(currentPage + 1);
      } else {
        goTo(currentPage - 1);
      }
    }
  });

  container.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      goTo(currentPage - 1);
    }

    if (e.key === "ArrowRight") {
      goTo(currentPage + 1);
    }
  });

  window.addEventListener("resize", () => {
    clearTimeout(window._sliderResizeTimer);

    window._sliderResizeTimer = setTimeout(setup, 200);
  });

  setup();
}

/* =============================================
   MEMBER MODAL
   ============================================= */
function openMemberModal(member, imgSrc, avatarSrc) {
  const overlay   = document.getElementById("memberModal");
  const imgEl     = document.getElementById("modalImg");
  const nameEl    = document.getElementById("modalName");
  const npmEl     = document.getElementById("modalNpm");
  const igWrapper = document.getElementById("modalInstagramWrapper");
  const igLink    = document.getElementById("modalInstagramLink");

  imgEl.src = imgSrc;
  imgEl.onerror = () => (imgEl.src = avatarSrc);
  nameEl.textContent = member.name;
  npmEl.textContent  = `NPM: ${member.npm}`;

  // Instagram
  if (igWrapper && igLink) {
    if (member.instagram) {
      igLink.href        = `https://www.instagram.com/${member.instagram}/`;
      igLink.textContent = `@${member.instagram}`;
      igWrapper.style.display = "flex";
    } else {
      igWrapper.style.display = "none";
    }
  }

  document.querySelector(".modal-card").scrollTop = 0;
  overlay.classList.add("active");
  document.body.classList.add("modal-open");
}

function initMemberModal() {
  const overlay = document.getElementById("memberModal");
  const closeBtn = document.getElementById("modalClose");

  const close = () => {
    overlay.classList.remove("active");
    document.body.classList.remove("modal-open");
  };

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) close();
  });
}

/* =============================================
   INFO TABS
   ============================================= */
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(`tab-${target}`).classList.add("active");
    });
  });
}

/* =============================================
   GALLERY — CUSTOM SLIDER
   ============================================= */
let galleryCurrentIdx = 0;
let galleryAutoplay = null;
let gallerySlideEls = [];

function initGallery() {
  const slidesWrap = document.getElementById("gallerySlides");
  const dotsWrap   = document.getElementById("galleryDots");

  if (!slidesWrap) return;

  slidesWrap.innerHTML = "";

  // Build slides
  galleryItems.forEach((item, i) => {
    const slide = document.createElement("div");
    slide.className = "gallery-slide";

    const img = document.createElement("img");
    img.src     = item.src;
    img.alt     = item.caption;
    img.loading = "lazy";

    slide.appendChild(img);
    slidesWrap.appendChild(slide);
    gallerySlideEls.push(slide);
  });

  updateGalleryDisplay();
  buildGalleryDots();
  startGalleryAutoplay();

  // Click handler
  gallerySlideEls.forEach((slide, i) => {
    slide.addEventListener("click", () => {
      if (!slide.classList.contains("active")) {
        galleryCurrentIdx = i;
        updateGalleryDisplay();
        stopGalleryAutoplay();
        startGalleryAutoplay();
      } else {
        const img = slide.querySelector("img");
        const lb  = document.getElementById("lightbox");
        const lbImg = document.getElementById("lightboxImg");
        lbImg.src = img.src;
        lb.classList.add("active");
        document.body.classList.add("modal-open");
        stopGalleryAutoplay();
      }
    });
  });

  // Swipe / drag
  let startX = 0, isDragging = false;
  slidesWrap.addEventListener("pointerdown", (e) => {
    startX = e.clientX;
    isDragging = true;
    stopGalleryAutoplay();
  });
  window.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 55) {
      galleryCurrentIdx = diff > 0
        ? (galleryCurrentIdx + 1) % gallerySlideEls.length
        : (galleryCurrentIdx - 1 + gallerySlideEls.length) % gallerySlideEls.length;
      updateGalleryDisplay();
      isDragging = false;
      startGalleryAutoplay();
    }
  }, { passive: true });
  window.addEventListener("pointerup", () => { isDragging = false; });

  slidesWrap.addEventListener("mouseleave", startGalleryAutoplay);
  slidesWrap.addEventListener("mouseenter", stopGalleryAutoplay);
}

function updateGalleryDisplay() {
  const total = gallerySlideEls.length;
  gallerySlideEls.forEach((slide, i) => {
    slide.classList.remove("active", "prev-slide", "next-slide");
    if (i === galleryCurrentIdx) {
      slide.classList.add("active");
    } else if (i === (galleryCurrentIdx - 1 + total) % total) {
      slide.classList.add("prev-slide");
    } else if (i === (galleryCurrentIdx + 1) % total) {
      slide.classList.add("next-slide");
    }
  });
  buildGalleryDots();
}

function buildGalleryDots() {
  const dotsWrap = document.getElementById("galleryDots");
  if (!dotsWrap) return;
  dotsWrap.innerHTML = "";
  gallerySlideEls.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "g-dot" + (i === galleryCurrentIdx ? " active" : "");
    dot.addEventListener("click", () => {
      galleryCurrentIdx = i;
      updateGalleryDisplay();
    });
    dotsWrap.appendChild(dot);
  });
}

function startGalleryAutoplay() {
  stopGalleryAutoplay();
  galleryAutoplay = setInterval(() => {
    galleryCurrentIdx = (galleryCurrentIdx + 1) % gallerySlideEls.length;
    updateGalleryDisplay();
  }, 3000);
}

function stopGalleryAutoplay() {
  if (galleryAutoplay) { clearInterval(galleryAutoplay); galleryAutoplay = null; }
}

/* =============================================
   LIGHTBOX
   ============================================= */
function initLightbox() {
  const lb     = document.getElementById("lightbox");
  const lbImg  = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  const close = () => {
    lb.classList.remove("active");
    document.body.classList.remove("modal-open");
    lbImg.src = "";
    startGalleryAutoplay();
  };

  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  if (closeBtn) closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lb.classList.contains("active")) close();
  });
}

/* =============================================
   SCROLL REVEAL (SUDAH DIPERBAIKI — BEBAS CLASH)
============================================= */
function initScrollReveal() {
  const targets = [
    ".section-header",
    ".member-card",
    /* ".gallery-item" DIHAPUS DARI SINI SUPAYA TIDAK MERUSAK KARTU TENGAH MENJADI HITAM */
    ".prak-card",
    ".schedule-table",
    ".tab-switcher",
  ];

  targets.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add("reveal");
      if (i > 0 && i <= 3) el.classList.add(`reveal-delay-${i}`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* =============================================
   FOOTER YEAR
============================================= */
function initFooter() {
  const yearEls = document.querySelectorAll(".footer-year");
  yearEls.forEach((el) => (el.textContent = new Date().getFullYear()));
}

/* =============================================
   INIT ALL
============================================= */


/* =============================================
   MEMBER SEARCH (API Java + Fallback Client-Side)
   — diambil dari pbo_final
   ============================================= */
function initMemberSearch() {
  const input          = document.getElementById("memberSearchInput");
  const clearBtn       = document.getElementById("memberSearchClear");
  const resultsSection = document.getElementById("searchResultsContainer");
  const resultsHeader  = document.getElementById("searchResultsHeader");
  const resultsGrid    = document.getElementById("searchResultsGrid");
  const inputGroup     = document.getElementById("searchInputGroup");

  if (!input) return;

  let debounceTimer = null;

  /* Input handler */
  input.addEventListener("input", () => {
    const q = input.value.trim();
    clearBtn.style.display = q ? "flex" : "none";
    clearTimeout(debounceTimer);
    if (!q) { hideResults(); return; }
    debounceTimer = setTimeout(() => performSearch(q), 280);
  });

  /* Clear button */
  clearBtn.addEventListener("click", () => {
    input.value = "";
    clearBtn.style.display = "none";
    hideResults();
    input.focus();
  });

  /* Sembunyikan hasil saat klik di luar */
  document.addEventListener("click", (e) => {
    const section = document.getElementById("memberSearchSection");
    if (section && !section.contains(e.target)) hideResults();
  });

  /* Keyboard: tutup dengan Escape */
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { hideResults(); input.blur(); }
  });

  /* Lakukan pencarian */
  async function performSearch(q) {
    inputGroup.classList.add("searching");

    let results;
    try {
      /* Coba panggil Java MemberSearchServer */
      const controller = new AbortController();
      const timeout    = setTimeout(() => controller.abort(), 2000);
      const res  = await fetch(
        `http://localhost:8080/api/search?q=${encodeURIComponent(q)}`,
        { signal: controller.signal }
      );
      clearTimeout(timeout);
      const data = await res.json();
      results    = data.results || [];
    } catch {
      /* Fallback: pencarian sisi-klien */
      const lower = q.toLowerCase();
      results = members
        .filter((m) => m.name.toLowerCase().includes(lower) || m.npm.includes(q))
        .map((m) => ({
          id:    m.id,
          name:  m.name,
          npm:   m.npm,
          photo: `images/members/member-${m.id}.jpg`,
        }));
    }

    inputGroup.classList.remove("searching");
    renderResults(results, q);
  }

  /* Render kartu hasil */
  function renderResults(results, q) {
    resultsSection.style.display = "block";
    resultsSection.classList.add("visible");

    if (results.length > 0) {
      resultsHeader.innerHTML =
        `<span class="search-count-badge">${results.length} member ditemukan</span>`;
    } else {
      resultsHeader.innerHTML = "";
    }

    if (results.length === 0) {
      resultsGrid.innerHTML = `
        <div class="search-no-result">
          <i class="fas fa-user-slash"></i>
          <p>Tidak ada member bernama atau ber-NPM <strong>"${q}"</strong></p>
        </div>`;
      return;
    }

    resultsGrid.innerHTML = results
      .map((m) => {
        const avatarSrc = createAvatarSVG(m.name, m.id);
        return `
          <div class="search-result-card" data-member-id="${m.id}"
               role="button" tabindex="0"
               aria-label="Lihat profil ${m.name}">
            <div class="search-result-photo">
              <img src="${m.photo}" alt="${m.name}" loading="lazy"
                   onerror="this.src='${avatarSrc}'" />
            </div>
            <div class="search-result-info">
              <span class="search-result-num">#${String(m.id).padStart(2, "0")}</span>
              <p class="search-result-name">${m.name}</p>
              <p class="search-result-npm">NPM&nbsp;${m.npm}</p>
            </div>
            <button class="search-view-btn" aria-label="Lihat profil">
              <i class="fas fa-eye"></i>
            </button>
          </div>`;
      })
      .join("");

    resultsGrid.querySelectorAll(".search-result-card").forEach((card) => {
      const openProfile = () => {
        const memberId = parseInt(card.dataset.memberId, 10);
        const member   = members.find((m) => m.id === memberId);
        if (!member) return;
        const imgSrc    = `images/members/member-${member.id}.jpg`;
        const avatarSrc = createAvatarSVG(member.name, member.id);
        openMemberModal(member, imgSrc, avatarSrc);
      };
      card.addEventListener("click", openProfile);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") openProfile();
      });
    });
  }

  function hideResults() {
    resultsSection.style.display = "none";
    resultsSection.classList.remove("visible");
    resultsGrid.innerHTML = "";
    resultsHeader.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initNavbar();
  initSlider();
  initMemberModal();
  initMemberSearch();   // ← fitur pencarian member
  initTabs();
  initGallery();
  initLightbox();
  initScrollReveal();
  initFooter();

  console.log(
    "%c2KA09 — Sistem Informasi Universitas Gunadarma",
    "background: linear-gradient(135deg,#2d1b69,#f0b429); color:#fff; padding:8px 16px; border-radius:8px; font-weight:bold; font-size:14px;",
  );
  console.log(
    "%cWebsite dibuat oleh Kelompok Dua 💜",
    "color:#7b52d4; font-size:12px;",
  );
});

