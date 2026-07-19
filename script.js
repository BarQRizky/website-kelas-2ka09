/* =============================================
   DATA — MEMBERS
   ============================================= */
const members = [
  { id: 1, name: "ADITYA ANANDA PUTRI", npm: "11124445", instagram: "anandaptrriii" },
  { id: 2, name: "AHMAD HANIF FAUZAAN", npm: "10124064", instagram: "thisnyff" },
  { id: 3, name: "ANDHITO YUDI PRATAMA", npm: "10124146", instagram: "andtoprtm" },
  { id: 4, name: "ARIF PRIAMBODO", npm: "10124191", instagram: "arifpriam28" },
  { id: 5, name: "BAYU ARDIAN LISTIANTO", npm: "10124245", instagram: "baardl_" },
  { id: 6, name: "DARWIN", npm: "10124309", instagram: "darwi_n1969" },
  { id: 7, name: "EFRON KALEBY KUDAHATI", npm: "10124382", instagram: "efkalebbb" },
  { id: 8, name: "EGI PRIANGGARA", npm: "10124383", instagram: "egigara30" },
  { id: 9, name: "FAISAL ARIFIN", npm: "10124422", instagram: "fsallxxs" },
  { id: 10, name: "FIRA RAIDAH RAIHANA", npm: "10124495", instagram: "firr.ahh" },
  { id: 11, name: "HAFIZH RIDHA", npm: "10124539", instagram: "izhu_toge" },
  { id: 12, name: "ILHAM KHAIRI", npm: "10124587", instagram: "ilhmmkhairii" },
  { id: 13, name: "KASA JULYANO CESAREA", npm: "10124640", instagram: "user776kjc" },
  { id: 14, name: "KENZIE ABISAKHA YUDA", npm: "10124647", instagram: "ziieeng" },
  { id: 15, name: "KRESNA BAYU KUSNANTO", npm: "10124666", instagram: "kresnabaayu" },
  { id: 16, name: "LAZZUARD FARREL RAYNDRA", npm: "10124673", instagram: "farrel_lr" },
  { id: 17, name: "LINGGA SASI RAMADHAN", npm: "11124452", instagram: "linggaasrmdhn" },
  { id: 18, name: "MEGIE PUTRI NABILAH", npm: "10124719", instagram: "lacczv_" },
  { id: 19, name: "MUAMMAR KHOIRO MA'MUL LUBIS", npm: "10124752", instagram: "marr_koiro" },
  { id: 20, name: "MUHAMAD IRFAN DZAKKI", npm: "10124771", instagram: "bukanirpann_" },
  { id: 21, name: "MUHAMAD RIZKY", npm: "10124783", instagram: "muhamad_rizky75" },
  { id: 22, name: "MUHAMMAD AFFAN AL A DZAMI", npm: "10124792", instagram: "appan.dzami" },
  { id: 23, name: "MUHAMMAD FARRELL AL FATAH", npm: "10124850", instagram: "farrelalfatah" },
  { id: 24, name: "MUHAMMAD FATHAN MUBINA", npm: "10124852", instagram: "mhmmdfthnmubina" },
  { id: 25, name: "MUHAMMAD REVA PRAKOSO", npm: "10124951", instagram: "mrevsps" },
  { id: 26, name: "MUHAMMAD RIDHWAN AR RAYYAN", npm: "10124954", instagram: "ridhwanrayn" },
  { id: 27, name: "MUHAMMAD WILDAN AN-NAUFAL", npm: "11124478", instagram: "wildannaufalll" },
  { id: 28, name: "RAFAEL RAMADHAN", npm: "11124113", instagram: "rsafel_" },
  { id: 29, name: "RASYA ADITYA FADHILAH", npm: "11124176", instagram: "rasyaadityafadhilah" },
  { id: 30, name: "RIQY ZOEHDAN SHIDDIQY", npm: "11124236", instagram: "zhoedone" },
  { id: 31, name: "RIZKIYA ANANDA PUTRI", npm: "11124242", instagram: "kkiyyaae" },
  { id: 32, name: "SAVINA RACHMA PUTRI", npm: "11124292", instagram: "sravinaaph0_0" },
  { id: 33, name: "YOHANES SEBASTIAN PRASETIYO", npm: "11124386", instagram: "sebastianprstyo" },
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
  { src: "images/gallery/foto11.jpg", caption: "lift nyengir " },
  { src: "images/gallery/foto12.jpg", caption: "lift nyengir 2" },
  { src: "images/gallery/foto13.jpg", caption: "fotbar akutansi " },
  { src: "images/gallery/foto14.jpg", caption: "fotbar akutansi dengan warek 1 " },
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
  const overlay = document.getElementById("memberModal");
  const imgEl = document.getElementById("modalImg");
  const nameEl = document.getElementById("modalName");
  const npmEl = document.getElementById("modalNpm");
  const igWrapper = document.getElementById("modalInstagramWrapper");
  const igLink = document.getElementById("modalInstagramLink");

  imgEl.src = imgSrc;
  imgEl.onerror = () => (imgEl.src = avatarSrc);
  nameEl.textContent = member.name;
  npmEl.textContent = `NPM: ${member.npm}`;

  // Instagram
  if (igWrapper && igLink) {
    if (member.instagram) {
      igLink.href = `https://www.instagram.com/${member.instagram}/`;
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
   GALLERY — MARQUEE
   ============================================= */
function initGallery() {
  const slidesWrap = document.getElementById("gallerySlides");
  const dotsWrap = document.getElementById("galleryDots");
  
  if (!slidesWrap) return;
  
  if (dotsWrap) dotsWrap.style.display = 'none';
  slidesWrap.innerHTML = "";
  
  const marqueeContainer = document.createElement("div");
  marqueeContainer.className = "gallery-marquee-container single-row";
  
  const track1 = document.createElement("div");
  track1.className = "marquee-track track-left";

  function populateTrack(track, items) {
    const displayItems = [...items, ...items, ...items, ...items, ...items, ...items];
    displayItems.forEach((item) => {
      const slide = document.createElement("div");
      slide.className = "gallery-slide";

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.caption;
      img.loading = "lazy";

      slide.appendChild(img);
      
      slide.addEventListener("click", () => {
        const lb = document.getElementById("lightbox");
        const lbImg = document.getElementById("lightboxImg");
        lbImg.src = img.src;
        window.currentLightboxIndex = galleryItems.findIndex(g => g.src === item.src);
        lb.classList.add("active");
        document.body.classList.add("modal-open");
      });

      track.appendChild(slide);
    });
  }

  populateTrack(track1, galleryItems);
  marqueeContainer.appendChild(track1);
  slidesWrap.appendChild(marqueeContainer);
}

/* =============================================
   LIGHTBOX
   ============================================= */
function initLightbox() {
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  const close = () => {
    lb.classList.remove("active");
    document.body.classList.remove("modal-open");
    lbImg.src = "";
  };

  const showImage = (index) => {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    window.currentLightboxIndex = index;
    lbImg.src = galleryItems[window.currentLightboxIndex].src;
  };

  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  if (closeBtn) closeBtn.addEventListener("click", close);
  if (prevBtn) prevBtn.addEventListener("click", () => showImage(window.currentLightboxIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showImage(window.currentLightboxIndex + 1));

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("active")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") showImage(window.currentLightboxIndex - 1);
    if (e.key === "ArrowRight") showImage(window.currentLightboxIndex + 1);
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
  const input = document.getElementById("memberSearchInput");
  const clearBtn = document.getElementById("memberSearchClear");
  const resultsSection = document.getElementById("searchResultsContainer");
  const resultsHeader = document.getElementById("searchResultsHeader");
  const resultsGrid = document.getElementById("searchResultsGrid");
  const inputGroup = document.getElementById("searchInputGroup");

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
      const timeout = setTimeout(() => controller.abort(), 2000);
      const res = await fetch(
        `http://localhost:8080/api/search?q=${encodeURIComponent(q)}`,
        { signal: controller.signal }
      );
      clearTimeout(timeout);
      const data = await res.json();
      results = data.results || [];
    } catch {
      /* Fallback: pencarian sisi-klien */
      const lower = q.toLowerCase();
      results = members
        .filter((m) => m.name.toLowerCase().includes(lower) || m.npm.includes(q))
        .map((m) => ({
          id: m.id,
          name: m.name,
          npm: m.npm,
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
        const member = members.find((m) => m.id === memberId);
        if (!member) return;
        const imgSrc = `images/members/member-${member.id}.jpg`;
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
  initTechBackground();   // ← animated tech background
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


/* =============================================
   TECH ANIMATED BACKGROUND
   ============================================= */
function initTechBackground() {
  const canvas = document.createElement("canvas");
  canvas.id = "techBg";
  Object.assign(canvas.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    pointerEvents: "none",
    opacity: "0.75",
  });
  document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");

  let W, H;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", () => { resize(); buildNodes(); });

  const NODE_COLORS = ["#00e5ff", "#7b52d4", "#00b8d4", "#7fffd4", "#4a2c8f"];
  const PULSE_COLORS = ["#00f5ff", "#ffffff", "#7fffd4", "#b39ee0"];
  const MAX_DIST = 160;

  // ── 3D Floating Laptops (small / medium / large) ────────────────
  const LAPTOPS = [
    { rx: 0.09, ry: 0.28, sz: 95, phase: 0, bobSpd: 0.007, alpha: 0.22 },
    { rx: 0.83, ry: 0.54, sz: 155, phase: Math.PI, bobSpd: 0.005, alpha: 0.19 },
    { rx: 0.16, ry: 0.77, sz: 210, phase: Math.PI / 2, bobSpd: 0.004, alpha: 0.17 },
  ];

  // ── Floating Binary Digits ────────────────────────────────────
  const BINARY_COUNT = 35;
  let binaryDigits = [];
  function buildBinary() {
    binaryDigits = Array.from({ length: BINARY_COUNT }, function () {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        val: Math.random() < 0.5 ? '0' : '1',
        size: Math.floor(Math.random() * 14) + 14,  // 14-27 px
        vy: -(0.30 + Math.random() * 0.50),        // drift upward
        vx: (Math.random() - 0.5) * 0.20,          // slight horizontal
        alpha: 0.55 + Math.random() * 0.35,           // 55-90% opacity
        phase: Math.random() * Math.PI * 2,
        phaseSpd: 0.010 + Math.random() * 0.015,
      };
    });
  }
  buildBinary();

  // ── Floating Tech Icons ──────────────────────────────────
  // type: 'win' | 'linux' | 'db'
  var TECH_ICONS = [
    { type: 'win', rx: 0.10, ry: 0.25, phase: 0, bobSpd: 0.008, alpha: 0.50 },
    { type: 'apple', rx: 0.15, ry: 0.75, phase: Math.PI * 1.5, bobSpd: 0.007, alpha: 0.48 },
    { type: 'linux', rx: 0.85, ry: 0.25, phase: Math.PI, bobSpd: 0.007, alpha: 0.48 },
    { type: 'db', rx: 0.88, ry: 0.75, phase: Math.PI / 2, bobSpd: 0.006, alpha: 0.48 },
  ];

  // ── Draw: Windows logo (proper 4-pane grid) ─────────────
  function drawWin(cx, cy, sz, alpha) {
    var ps = sz * 0.44;  // pane size
    var gap = sz * 0.08;  // gap between panes
    var outline = 'rgba(0,220,255,' + Math.min(1, alpha + 0.15) + ')';
    // positions: TL, TR, BL, BR
    var panes = [
      { x: cx - gap - ps, y: cy - gap - ps },
      { x: cx + gap, y: cy - gap - ps },
      { x: cx - gap - ps, y: cy + gap },
      { x: cx + gap, y: cy + gap },
    ];
    panes.forEach(function (p, i) {
      // rounded rect via arc
      var r = sz * 0.06;
      var x = p.x, y = p.y, w = ps, h = ps;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.arcTo(x + w, y, x + w, y + r, r);
      ctx.lineTo(x + w, y + h - r);
      ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
      ctx.lineTo(x + r, y + h);
      ctx.arcTo(x, y + h, x, y + h - r, r);
      ctx.lineTo(x, y + r);
      ctx.arcTo(x, y, x + r, y, r);
      ctx.closePath();
      // each pane slightly different blue shade
      var shades = [255, 235, 215, 245];
      ctx.fillStyle = 'rgba(0,' + shades[i] + ',255,' + (alpha * 0.45) + ')';
      ctx.fill();
      ctx.strokeStyle = outline;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });
  }


  // ── Draw: Tux Linux penguin (matches reference) ─────────
  function drawLinux(cx, cy, sz, alpha) {
    var dark = 'rgba(25,15,55,' + (alpha * 0.92) + ')';
    var light = 'rgba(225,215,255,' + (alpha * 0.80) + ')';
    var yel = 'rgba(235,165,15,' + alpha + ')';
    var out = 'rgba(170,130,255,' + Math.min(1, alpha + 0.18) + ')';
    var eyeW = 'rgba(235,230,255,' + (alpha * 0.98) + ')';
    var eyeD = 'rgba(10,5,30,' + alpha + ')';
    var beakS = 'rgba(190,120,8,' + alpha + ')';
    ctx.lineWidth = 1.2;

    // ── Flippers (curved, behind body) ───────────────
    // Left flipper
    ctx.beginPath();
    ctx.moveTo(cx - sz * 0.28, cy - sz * 0.08);
    ctx.bezierCurveTo(
      cx - sz * 0.60, cy - sz * 0.02,
      cx - sz * 0.65, cy + sz * 0.28,
      cx - sz * 0.42, cy + sz * 0.46
    );
    ctx.bezierCurveTo(
      cx - sz * 0.30, cy + sz * 0.52,
      cx - sz * 0.20, cy + sz * 0.38,
      cx - sz * 0.22, cy + sz * 0.05
    );
    ctx.closePath();
    ctx.fillStyle = dark; ctx.fill();
    ctx.strokeStyle = out; ctx.stroke();

    // Right flipper
    ctx.beginPath();
    ctx.moveTo(cx + sz * 0.28, cy - sz * 0.08);
    ctx.bezierCurveTo(
      cx + sz * 0.60, cy - sz * 0.02,
      cx + sz * 0.65, cy + sz * 0.28,
      cx + sz * 0.42, cy + sz * 0.46
    );
    ctx.bezierCurveTo(
      cx + sz * 0.30, cy + sz * 0.52,
      cx + sz * 0.20, cy + sz * 0.38,
      cx + sz * 0.22, cy + sz * 0.05
    );
    ctx.closePath();
    ctx.fillStyle = dark; ctx.fill();
    ctx.strokeStyle = out; ctx.stroke();

    // ── Body (round, sitting) ────────────────────────
    ctx.beginPath();
    ctx.ellipse(cx, cy + sz * 0.12, sz * 0.38, sz * 0.50, 0, 0, Math.PI * 2);
    ctx.fillStyle = dark; ctx.fill();
    ctx.strokeStyle = out; ctx.stroke();

    // ── White belly (large prominent oval) ───────────
    ctx.beginPath();
    ctx.ellipse(cx, cy + sz * 0.20, sz * 0.26, sz * 0.36, 0, 0, Math.PI * 2);
    ctx.fillStyle = light; ctx.fill();
    ctx.strokeStyle = 'rgba(200,185,255,' + (alpha * 0.30) + ')';
    ctx.lineWidth = 0.7; ctx.stroke(); ctx.lineWidth = 1.2;

    // ── Head (round, no ear tufts) ───────────────────
    ctx.beginPath();
    ctx.arc(cx, cy - sz * 0.32, sz * 0.30, 0, Math.PI * 2);
    ctx.fillStyle = dark; ctx.fill();
    ctx.strokeStyle = out; ctx.stroke();

    // ── White face patch (large oval, lower half of head) ─
    ctx.beginPath();
    ctx.ellipse(cx, cy - sz * 0.26, sz * 0.23, sz * 0.21, 0, 0, Math.PI * 2);
    ctx.fillStyle = light; ctx.fill();

    // ── Eyes (large white circles) ──────────────────
    ctx.beginPath();
    ctx.arc(cx - sz * 0.13, cy - sz * 0.42, sz * 0.095, 0, Math.PI * 2);
    ctx.fillStyle = eyeW; ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + sz * 0.13, cy - sz * 0.42, sz * 0.095, 0, Math.PI * 2);
    ctx.fillStyle = eyeW; ctx.fill();

    // ── Pupils ────────────────────────────────────────
    ctx.beginPath();
    ctx.arc(cx - sz * 0.11, cy - sz * 0.42, sz * 0.052, 0, Math.PI * 2);
    ctx.fillStyle = eyeD; ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + sz * 0.15, cy - sz * 0.42, sz * 0.052, 0, Math.PI * 2);
    ctx.fillStyle = eyeD; ctx.fill();

    // ── Eye shine ─────────────────────────────────────
    ctx.beginPath();
    ctx.arc(cx - sz * 0.085, cy - sz * 0.445, sz * 0.024, 0, Math.PI * 2);
    ctx.fillStyle = eyeW; ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + sz * 0.165, cy - sz * 0.445, sz * 0.024, 0, Math.PI * 2);
    ctx.fillStyle = eyeW; ctx.fill();

    // ── Beak (wide, smiling — bezier oval) ────────────
    ctx.beginPath();
    ctx.moveTo(cx - sz * 0.16, cy - sz * 0.20);
    ctx.bezierCurveTo(
      cx - sz * 0.14, cy - sz * 0.30,
      cx + sz * 0.14, cy - sz * 0.30,
      cx + sz * 0.16, cy - sz * 0.20
    );
    ctx.bezierCurveTo(
      cx + sz * 0.13, cy - sz * 0.11,
      cx - sz * 0.13, cy - sz * 0.11,
      cx - sz * 0.16, cy - sz * 0.20
    );
    ctx.closePath();
    ctx.fillStyle = yel; ctx.fill();
    ctx.strokeStyle = beakS;
    ctx.lineWidth = 0.8; ctx.stroke(); ctx.lineWidth = 1.2;
    // smile line
    ctx.beginPath();
    ctx.moveTo(cx - sz * 0.12, cy - sz * 0.175);
    ctx.bezierCurveTo(
      cx - sz * 0.05, cy - sz * 0.105,
      cx + sz * 0.05, cy - sz * 0.105,
      cx + sz * 0.12, cy - sz * 0.175
    );
    ctx.strokeStyle = beakS;
    ctx.lineWidth = 1; ctx.stroke(); ctx.lineWidth = 1.2;

    // ── Large yellow feet (spread out, webbed) ───────
    // Left foot
    ctx.beginPath();
    ctx.moveTo(cx - sz * 0.08, cy + sz * 0.60);
    ctx.bezierCurveTo(
      cx - sz * 0.40, cy + sz * 0.56,
      cx - sz * 0.52, cy + sz * 0.68,
      cx - sz * 0.40, cy + sz * 0.80
    );
    ctx.bezierCurveTo(
      cx - sz * 0.28, cy + sz * 0.86,
      cx - sz * 0.06, cy + sz * 0.78,
      cx - sz * 0.04, cy + sz * 0.62
    );
    ctx.closePath();
    ctx.fillStyle = yel; ctx.fill();
    ctx.strokeStyle = beakS; ctx.lineWidth = 0.8; ctx.stroke(); ctx.lineWidth = 1.2;

    // Right foot
    ctx.beginPath();
    ctx.moveTo(cx + sz * 0.08, cy + sz * 0.60);
    ctx.bezierCurveTo(
      cx + sz * 0.40, cy + sz * 0.56,
      cx + sz * 0.52, cy + sz * 0.68,
      cx + sz * 0.40, cy + sz * 0.80
    );
    ctx.bezierCurveTo(
      cx + sz * 0.28, cy + sz * 0.86,
      cx + sz * 0.06, cy + sz * 0.78,
      cx + sz * 0.04, cy + sz * 0.62
    );
    ctx.closePath();
    ctx.fillStyle = yel; ctx.fill();
    ctx.strokeStyle = beakS; ctx.lineWidth = 0.8; ctx.stroke(); ctx.lineWidth = 1.2;
  }


  // ── Draw: Database cylinder ────────────────────────────

  function drawDB(cx, cy, sz, alpha) {
    var rw = sz * 0.50;   // ellipse half-width
    var rh = sz * 0.14;   // ellipse half-height
    var slotH = sz * 0.26; // height between layers
    var layers = 3;
    var totalH = slotH * (layers - 1);
    var top = cy - totalH / 2;
    var col = 'rgba(0,229,255,' + alpha + ')';
    var colFill = 'rgba(0,100,140,' + (alpha * 0.30) + ')';
    ctx.strokeStyle = col;
    ctx.lineWidth = 1.2;
    // draw cylinder sides
    ctx.beginPath();
    ctx.moveTo(cx - rw, top + rh);
    ctx.lineTo(cx - rw, top + totalH + rh);
    ctx.moveTo(cx + rw, top + rh);
    ctx.lineTo(cx + rw, top + totalH + rh);
    ctx.stroke();
    // bottom cap arc
    ctx.beginPath();
    ctx.ellipse(cx, top + totalH, rw, rh, 0, 0, Math.PI);
    ctx.stroke();
    // draw each layer ellipse (top to bottom)
    for (var li = 0; li < layers; li++) {
      var ly = top + li * slotH;
      // fill between layers
      if (li < layers - 1) {
        ctx.beginPath();
        ctx.rect(cx - rw, ly, rw * 2, slotH);
        ctx.fillStyle = colFill;
        ctx.fill();
      }
      // ellipse top rim
      ctx.beginPath();
      ctx.ellipse(cx, ly, rw, rh, 0, 0, Math.PI * 2);
      ctx.fillStyle = li === 0 ? 'rgba(0,180,220,' + (alpha * 0.35) + ')' : colFill;
      ctx.fill();
      ctx.strokeStyle = col; ctx.stroke();
    }
    // glow lines inside (data lines)
    for (var dl = 0; dl < 2; dl++) {
      var dy = top + slotH * (0.4 + dl * 0.5);
      ctx.beginPath();
      ctx.moveTo(cx - rw * 0.6, dy + rh * 0.3);
      ctx.lineTo(cx + rw * 0.6, dy + rh * 0.3);
      ctx.strokeStyle = 'rgba(0,255,200,' + (alpha * 0.55) + ')';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
  }

  // ── Draw: Apple logo ─────────────────────────────────────
  function drawApple(cx, cy, sz, alpha) {
    var cFill = 'rgba(230,230,230,' + (alpha * 0.8) + ')';
    var cLine = 'rgba(255,255,255,' + alpha + ')';
    ctx.fillStyle = cFill;
    ctx.strokeStyle = cLine;
    ctx.lineWidth = 1.2;

    // Body (Continuous path)
    ctx.beginPath();
    // Top center dip
    ctx.moveTo(cx, cy - sz * 0.18);
    // Left shoulder and left side
    ctx.bezierCurveTo(cx - sz * 0.16, cy - sz * 0.18, cx - sz * 0.36, cy - sz * 0.14, cx - sz * 0.36, cy + sz * 0.05);
    // Left bottom bump
    ctx.bezierCurveTo(cx - sz * 0.36, cy + sz * 0.28, cx - sz * 0.20, cy + sz * 0.40, cx - sz * 0.08, cy + sz * 0.40);
    // Bottom center dip
    ctx.bezierCurveTo(cx - sz * 0.02, cy + sz * 0.40, cx, cy + sz * 0.34, cx, cy + sz * 0.34);
    // Right bottom bump
    ctx.bezierCurveTo(cx, cy + sz * 0.34, cx + sz * 0.02, cy + sz * 0.40, cx + sz * 0.08, cy + sz * 0.40);
    // Right side up to bottom of bite
    ctx.bezierCurveTo(cx + sz * 0.22, cy + sz * 0.40, cx + sz * 0.32, cy + sz * 0.28, cx + sz * 0.34, cy + sz * 0.15);
    // The BITE (carving INWARDS to the left)
    ctx.bezierCurveTo(cx + sz * 0.18, cy + sz * 0.15, cx + sz * 0.18, cy - sz * 0.12, cx + sz * 0.33, cy - sz * 0.14);
    // Right shoulder
    ctx.bezierCurveTo(cx + sz * 0.28, cy - sz * 0.22, cx + sz * 0.16, cy - sz * 0.18, cx, cy - sz * 0.18);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Leaf (Almond shape)
    ctx.beginPath();
    // Bottom tip of leaf
    ctx.moveTo(cx + sz * 0.02, cy - sz * 0.22);
    // Left/top curve to top tip
    ctx.bezierCurveTo(cx - sz * 0.02, cy - sz * 0.34, cx + sz * 0.06, cy - sz * 0.44, cx + sz * 0.16, cy - sz * 0.44);
    // Right/bottom curve back to bottom tip
    ctx.bezierCurveTo(cx + sz * 0.20, cy - sz * 0.32, cx + sz * 0.12, cy - sz * 0.22, cx + sz * 0.02, cy - sz * 0.22);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  let nodes = [];


  function buildNodes() {
    const n = Math.min(70, Math.floor((W * H) / 18000));
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2 + 1.5,
      color: NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)],
      phase: Math.random() * Math.PI * 2,
    }));
  }
  buildNodes();

  let pulses = [];
  function spawnPulse(a, b) {
    if (pulses.length > 55) return;
    pulses.push({
      x: a.x, y: a.y, tx: b.x, ty: b.y,
      t: 0,
      speed: 0.004 + Math.random() * 0.006,
      color: PULSE_COLORS[Math.floor(Math.random() * PULSE_COLORS.length)],
      r: Math.random() * 1.5 + 1,
    });
  }

  function drawHexGrid() {
    const size = 48, hx = size * 2, hy = Math.sqrt(3) * size;
    ctx.strokeStyle = "rgba(0,229,255,0.018)";
    ctx.lineWidth = 1;
    for (let row = -1; row * hy < H + hy; row++) {
      for (let col = -1; col * hx * 0.75 < W + hx; col++) {
        const cx = col * hx * 0.75;
        const cy = row * hy + (col % 2 === 0 ? 0 : hy / 2);
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i - Math.PI / 6;
          const px = cx + size * Math.cos(a);
          const py = cy + size * Math.sin(a);
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
  }

  let scanY = 0;
  function drawScanline() {
    scanY = (scanY + 0.45) % H;
    const g = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
    g.addColorStop(0, "transparent");
    g.addColorStop(0.45, "rgba(0,229,255,0.0)");
    g.addColorStop(0.5, "rgba(0,229,255,0.034)");
    g.addColorStop(0.55, "rgba(0,229,255,0.0)");
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.fillRect(0, scanY - 40, W, 80);
  }

  function drawCornerBrackets() {
    const len = 28;
    ctx.strokeStyle = "rgba(0,229,255,0.22)";
    ctx.lineWidth = 1.5;
    [[30, 30, 1, 1], [W - 30, 30, -1, 1], [30, H - 30, 1, -1], [W - 30, H - 30, -1, -1]].forEach(([x, y, dx, dy]) => {
      ctx.beginPath();
      ctx.moveTo(x, y + dy * len);
      ctx.lineTo(x, y);
      ctx.lineTo(x + dx * len, y);
      ctx.stroke();
    });
  }

  // ── drawLaptop3D ─────────────────────────────────────────────────
  function drawLaptop3D(cx, cy, sz, phase, alpha) {
    const W = sz;
    const D = sz * 0.42;
    const TH = sz * 0.07;
    const SH = sz * 0.62;
    const sDY = SH * 0.36;
    const sDZ = SH * 0.93;
    const sk = 0.45;
    const sd = 0.20;
    const bob = Math.sin(phase) * 7;
    const pulse = (Math.sin(phase * 0.8) + 1) / 2;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(cx - W / 2, cy + bob);

    function q(x, y, z) { return [x - y * sk, -z + y * sd]; }

    function poly(pts, fill, stroke, lw) {
      ctx.beginPath(); ctx.moveTo(...pts[0]);
      pts.slice(1).forEach(p => ctx.lineTo(...p));
      ctx.closePath();
      if (fill) { ctx.fillStyle = fill; ctx.fill(); }
      if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw || 1; ctx.stroke(); }
    }

    // Base — front face
    poly([q(0, 0, 0), q(W, 0, 0), q(W, 0, -TH), q(0, 0, -TH)],
      "rgba(10,9,22,0.88)", "rgba(0,229,255,0.30)");
    // Base — right side
    poly([q(W, 0, 0), q(W, D, 0), q(W, D, -TH), q(W, 0, -TH)],
      "rgba(14,12,30,0.88)", "rgba(0,229,255,0.22)");
    // Base — top face (keyboard)
    poly([q(0, D, 0), q(W, D, 0), q(W, 0, 0), q(0, 0, 0)],
      "rgba(18,16,40,0.90)", "rgba(0,229,255,0.50)");

    // Keyboard glow
    const pts4 = [q(0, D, 0), q(W, D, 0), q(W, 0, 0), q(0, 0, 0)];
    const kbCX = pts4.reduce((s, p) => s + p[0], 0) / 4;
    const kbCY = pts4.reduce((s, p) => s + p[1], 0) / 4;
    const kbG = ctx.createRadialGradient(kbCX, kbCY, 0, kbCX, kbCY, sz * 0.38);
    kbG.addColorStop(0, "rgba(0,229,255,0.09)"); kbG.addColorStop(1, "transparent");
    poly(pts4, kbG);

    // Screen bezel
    const [sbl_x, sbl_y] = q(0, D, 0); const [sbr_x, sbr_y] = q(W, D, 0);
    const [str_x, str_y] = q(W, D + sDY, sDZ); const [stl_x, stl_y] = q(0, D + sDY, sDZ);
    poly([[sbl_x, sbl_y], [sbr_x, sbr_y], [str_x, str_y], [stl_x, stl_y]],
      "rgba(12,10,28,0.92)", "rgba(0,229,255,0.55)");

    // Screen display (inset toward center)
    const scrCX = (sbl_x + sbr_x + str_x + stl_x) / 4;
    const scrCY = (sbl_y + sbr_y + str_y + stl_y) / 4;
    const ins = 0.26;
    function inP(x, y) { return [x + (scrCX - x) * ins, y + (scrCY - y) * ins]; }
    const d = [inP(sbl_x, sbl_y), inP(sbr_x, sbr_y), inP(str_x, str_y), inP(stl_x, stl_y)];

    poly(d, "rgba(3,5,15,0.95)");

    // Screen radial glow
    const dCX = (d[0][0] + d[1][0] + d[2][0] + d[3][0]) / 4;
    const dCY = (d[0][1] + d[1][1] + d[2][1] + d[3][1]) / 4;
    const sG = ctx.createRadialGradient(dCX, dCY - sz * 0.06, 0, dCX, dCY, sz * 0.55);
    sG.addColorStop(0, `rgba(0,240,255,${+(0.50 + pulse * 0.30).toFixed(2)})`);
    sG.addColorStop(0.35, `rgba(0,190,220,${+(0.28 + pulse * 0.14).toFixed(2)})`);
    sG.addColorStop(0.70, `rgba(100,50,200,${+(0.15 + pulse * 0.08).toFixed(2)})`);
    sG.addColorStop(1, "transparent");
    poly(d, sG);

    // Fake code lines clipped to display
    ctx.save();
    ctx.beginPath(); ctx.moveTo(...d[0]); ctx.lineTo(...d[1]);
    ctx.lineTo(...d[2]); ctx.lineTo(...d[3]); ctx.closePath(); ctx.clip();
    const la = 0.28 + pulse * 0.18;
    const lLens = [0.65, 0.40, 0.78, 0.30, 0.55, 0.70];
    for (let i = 0; i < 6; i++) {
      const t = (i + 1) / 7;
      const lx = d[3][0] + (d[0][0] - d[3][0]) * t, ly = d[3][1] + (d[0][1] - d[3][1]) * t;
      const rx = d[2][0] + (d[1][0] - d[2][0]) * t, ry = d[2][1] + (d[1][1] - d[2][1]) * t;
      const len = lLens[i];
      ctx.beginPath();
      ctx.moveTo(lx + (rx - lx) * 0.04, ly + (ry - ly) * 0.04);
      ctx.lineTo(lx + (rx - lx) * len, ly + (ry - ly) * len);
      ctx.strokeStyle = i % 2 === 0 ? `rgba(0,229,255,${la})` : `rgba(180,120,255,${+(la * 0.7).toFixed(2)})`;
      ctx.lineWidth = 1.2; ctx.stroke();
    }
    ctx.restore();

    // Screen edge cyan glow
    ctx.save();
    ctx.shadowColor = "rgba(0,229,255,0.75)";
    ctx.shadowBlur = sz * 0.12;
    ctx.beginPath();
    ctx.moveTo(sbl_x, sbl_y); ctx.lineTo(sbr_x, sbr_y);
    ctx.lineTo(str_x, str_y); ctx.lineTo(stl_x, stl_y);
    ctx.closePath();
    ctx.strokeStyle = `rgba(0,229,255,${+(0.38 + pulse * 0.22).toFixed(2)})`;
    ctx.lineWidth = 1.2; ctx.stroke();
    ctx.restore();

    // Ground glow ellipse
    const gcX = (q(0, 0, 0)[0] + q(W, D, 0)[0]) / 2, gcY = (q(0, 0, 0)[1] + q(W, D, 0)[1]) / 2 + sz * 0.10;
    const gG = ctx.createRadialGradient(gcX, gcY, 0, gcX, gcY, sz * 0.45);
    gG.addColorStop(0, `rgba(0,229,255,${+(0.07 + pulse * 0.03).toFixed(2)})`); gG.addColorStop(1, "transparent");
    ctx.beginPath(); ctx.ellipse(gcX, gcY, sz * 0.40, sz * 0.06, 0, 0, Math.PI * 2);
    ctx.fillStyle = gG; ctx.fill();

    ctx.restore();
  }

  let frame = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    drawHexGrid();
    drawScanline();

    // Draw floating 3D laptops
    LAPTOPS.forEach(lap => {
      lap.phase += lap.bobSpd;
      drawLaptop3D(lap.rx * W, lap.ry * H, lap.sz, lap.phase, lap.alpha);
    });

    nodes.forEach(n => {

      n.x += n.vx; n.y += n.vy; n.phase += 0.025;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.42;
          ctx.strokeStyle = (i + j) % 3 === 0
            ? `rgba(123,82,212,${alpha})`
            : `rgba(0,229,255,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          if (frame % 90 === 0 && Math.random() < 0.22) spawnPulse(a, b);
        }
      }
    }

    nodes.forEach(n => {
      const glow = n.r + 2 + Math.sin(n.phase) * 1.5;
      const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glow * 4);
      grd.addColorStop(0, n.color + "55");
      grd.addColorStop(0.4, n.color + "22");
      grd.addColorStop(1, "transparent");
      ctx.beginPath(); ctx.arc(n.x, n.y, glow * 4, 0, Math.PI * 2);
      ctx.fillStyle = grd; ctx.fill();
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r + Math.sin(n.phase) * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = n.color; ctx.fill();
    });

    pulses = pulses.filter(p => {
      p.t += p.speed;
      if (p.t >= 1) return false;
      const px = p.x + (p.tx - p.x) * p.t;
      const py = p.y + (p.ty - p.y) * p.t;
      const tr = ctx.createRadialGradient(px, py, 0, px, py, p.r * 5);
      tr.addColorStop(0, p.color + "cc");
      tr.addColorStop(0.5, p.color + "44");
      tr.addColorStop(1, "transparent");
      ctx.beginPath(); ctx.arc(px, py, p.r * 5, 0, Math.PI * 2);
      ctx.fillStyle = tr; ctx.fill();
      ctx.beginPath(); ctx.arc(px, py, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color; ctx.fill();
      return true;
    });

    drawCornerBrackets();

    // ── Binary digits ────────────────────────────────────────
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (var bi = 0; bi < binaryDigits.length; bi++) {
      var b = binaryDigits[bi];
      b.phase += b.phaseSpd;
      b.y += b.vy;
      b.x += b.vx;
      if (b.y < -30) {
        b.y = H + 15;
        b.x = Math.random() * W;
        b.val = Math.random() < 0.5 ? '0' : '1';
      }
      if (b.x < -15) b.x = W + 15;
      if (b.x > W + 15) b.x = -15;

      var fade = b.alpha * (0.60 + Math.sin(b.phase) * 0.40);
      ctx.globalAlpha = fade;
      ctx.font = b.size + "px 'Courier New', monospace";
      ctx.shadowColor = '#00ff41';
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#00ff41';
      ctx.fillText(b.val, b.x, b.y);
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    ctx.restore();

    // ── Tech Icons ────────────────────────────────────────
    ctx.save();
    for (var ti = 0; ti < TECH_ICONS.length; ti++) {
      var ic = TECH_ICONS[ti];
      ic.phase += ic.bobSpd;
      var bob = Math.sin(ic.phase) * 8;
      var pulse = (Math.sin(ic.phase * 0.7) + 1) / 2;
      var fa = ic.alpha * (0.65 + pulse * 0.35);
      var ix = ic.rx * W;
      var iy = ic.ry * H + bob;
      var isz = 56; // medium icon size
      ctx.shadowBlur = 14;
      if (ic.type === 'win') {
        ctx.shadowColor = '#00e5ff';
        drawWin(ix, iy, isz, fa);
      } else if (ic.type === 'linux') {
        ctx.shadowColor = '#a06fff';
        drawLinux(ix, iy, isz, fa);
      } else if (ic.type === 'apple') {
        ctx.shadowColor = '#e6e6e6';
        drawApple(ix, iy, isz, fa);
      } else {
        ctx.shadowColor = '#00e5ff';
        drawDB(ix, iy, isz, fa);
      }
    }
    ctx.shadowBlur = 0;
    ctx.restore();

    frame++;
    requestAnimationFrame(draw);
  }
  draw();
}

/* =============================================
   DINO RUNNER — Scroll Trigger
   ============================================= */
(function initDinoRunner() {
  const section = document.getElementById('dinoRunnerSection');
  if (!section) return;

  let hasPlayed = false;

  function resetDino() {
    section.classList.remove('dino-visible');
    // Force reflow so CSS animation restarts
    void section.offsetWidth;
  }

  function playDino() {
    resetDino();
    // Small delay so the reset takes effect visually
    setTimeout(function () {
      section.classList.add('dino-visible');
    }, 80);
  }

  // IntersectionObserver: fire every time section enters viewport
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          playDino();
        }
      });
    }, {
      threshold: 0.3   // trigger when 30% of the section is visible
    });

    observer.observe(section);
  } else {
    // Fallback: scroll listener
    window.addEventListener('scroll', function () {
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
      if (inView && !hasPlayed) {
        hasPlayed = true;
        playDino();
      }
    }, { passive: true });
  }
})();

/* =============================================
   INTERACTIVE DRAGON CANVAS
   ============================================= */
(function initInteractiveDragon() {
  const canvas = document.getElementById("anglerfishCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  let width, height;
  
  function resize() {
    width = canvas.width = window.innerWidth;
    const hero = document.querySelector('.hero');
    height = canvas.height = hero ? hero.offsetHeight : window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  const pointer = { x: width / 2, y: height / 2 };
  let lastMouseMove = Date.now();

  window.addEventListener("mousemove", (e) => {
    const hero = document.querySelector('.hero');
    const heroRect = hero ? hero.getBoundingClientRect() : { top: 0, left: 0 };
    pointer.x = e.clientX - heroRect.left;
    pointer.y = e.clientY - heroRect.top;
    lastMouseMove = Date.now();
  });

  let frm = 0;
  let rad = 0;
  let radm = 120;
  const N = 20;
  const elems = [];
  for (let i = 0; i < N; i++) {
    elems.push({ x: width / 2, y: height / 2 });
  }

  function drawSegment(i) {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.fillStyle = "rgba(0, 229, 255, 0.8)";
    ctx.lineWidth = 0.8;
    
    if (i === 1) {
      // Draw Head
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#00e5ff";
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.moveTo(-12, 0);
      ctx.lineTo(-2, 6);
      ctx.lineTo(5, 0);
      ctx.lineTo(-2, -6);
      ctx.closePath();
      ctx.fill();
      
      // Eyes
      ctx.fillStyle = "#000000";
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(-6, -2.5, 1.2, 0, Math.PI * 2);
      ctx.arc(-6, 2.5, 1.2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.shadowBlur = 0;
      // Core diamond
      ctx.beginPath();
      ctx.moveTo(-2, 0);
      ctx.lineTo(0, 1.5);
      ctx.lineTo(2, 0);
      ctx.lineTo(0, -1.5);
      ctx.closePath();
      ctx.fill();
      
      // Wings
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-10, -15, 10, -25, 30, -15);
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-10, 15, 10, 25, 30, 15);
      ctx.stroke();
    }
  }

  function run() {
    requestAnimationFrame(run);
    ctx.clearRect(0, 0, width, height);

    let e = elems[0];
    const ax = (Math.cos(3 * frm) * rad * width) / height;
    const ay = (Math.sin(4 * frm) * rad * height) / width;
    
    e.x += (ax + pointer.x - e.x) / 10;
    e.y += (ay + pointer.y - e.y) / 10;
    
    for (let i = 1; i < N; i++) {
      let e = elems[i];
      let ep = elems[i - 1];
      const a = Math.atan2(e.y - ep.y, e.x - ep.x);
      
      // Scale tapers from ~3.5 at head down to 0.1 at tail
      const s = Math.max(0.1, 3.5 * (1 - i / N));
      
      // Distance is proportional to scale, so smaller tail segments bunch up tighter
      const dist = 5 * s + 2;
      
      e.x += (ep.x - e.x + Math.cos(a) * dist) / 4;
      e.y += (ep.y - e.y + Math.sin(a) * dist) / 4;
      
      ctx.save();
      ctx.translate((ep.x + e.x) / 2, (ep.y + e.y) / 2);
      ctx.rotate(a);
      ctx.scale(s, s);
      
      drawSegment(i);
      
      ctx.restore();
    }
    
    if (rad < radm) rad++;
    frm += 0.003;
    
    if (Date.now() - lastMouseMove > 2000) {
      // Create a smooth wandering target when idle
      const targetX = width / 2 + Math.sin(frm * 2) * (width * 0.3) + Math.cos(frm * 1.5) * (width * 0.1);
      const targetY = height / 2 + Math.cos(frm * 2.5) * (height * 0.3) + Math.sin(frm * 1.2) * (height * 0.1);
      pointer.x += (targetX - pointer.x) * 0.02;
      pointer.y += (targetY - pointer.y) * 0.02;
    }
  }
  
  run();
})();

/* =============================================
   SCHEDULE FILTER (DYNAMIC)
   ============================================= */
function initScheduleFilter() {
  const dayBtns = document.querySelectorAll(".day-btn");
  if (dayBtns.length === 0) return;

  // Get current day name in Indonesian
  const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  
  // Gunakan waktu lokal (WIB) untuk menyesuaikan dengan zona waktu lokal
  const wib = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
  let currentDay = HARI[wib.getDay()];
  
  // Jika hari Sabtu atau Minggu, otomatis tampilkan hari Senin
  if (currentDay === 'Minggu' || currentDay === 'Sabtu') {
    currentDay = 'Senin';
  }
  
  function normalize(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function filterByDay(dayName) {
    const targetDay = normalize(dayName);
    
    // Update state tombol aktif
    dayBtns.forEach(btn => {
      if (normalize(btn.dataset.day) === targetDay) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Proses filter hanya untuk tabel Jadwal Kelas
    const tables = document.querySelectorAll("#tab-kelas .schedule-table");
    
    tables.forEach(table => {
      const tbody = table.querySelector("tbody");
      if (!tbody) return;
      
      const rows = tbody.querySelectorAll("tr:not(.empty-row)");
      let visibleCount = 0;

      rows.forEach(row => {
        const dayBadge = row.querySelector(".day-badge");
        if (dayBadge) {
          const rowDay = normalize(dayBadge.textContent);
          if (targetDay === 'semua' || rowDay === targetDay) {
            row.style.display = "";
            visibleCount++;
          } else {
            row.style.display = "none";
          }
        }
      });

      // Hapus baris kosong (jika ada dari sisa filter sebelumnya)
      const oldEmpty = tbody.querySelector(".empty-row");
      if (oldEmpty) oldEmpty.remove();

      // Jika tidak ada jadwal untuk hari ini, tampilkan pesan kosong
      if (visibleCount === 0) {
        const tr = document.createElement("tr");
        tr.className = "empty-row";
        const td = document.createElement("td");
        td.colSpan = table.querySelectorAll("thead th").length || 6;
        td.innerHTML = `<i class="fas fa-mug-hot" style="margin-right:8px; color: var(--gold)"></i> Tidak ada jadwal di hari ini. Waktunya bersantai!`;
        tr.appendChild(td);
        tbody.appendChild(tr);
      }
    });
  }

  // Tambahkan event listener untuk tombol filter hari
  dayBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterByDay(btn.dataset.day);
    });
  });

  // Saat pertama kali load, filter otomatis sesuai hari ini
  filterByDay(currentDay);
}

document.addEventListener('DOMContentLoaded', initScheduleFilter);
