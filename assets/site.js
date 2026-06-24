const navItems = [
  ["TOP", "/"],
  ["料金システム / メニュー", "/price-menu/"],
  ["ペット保険について", "/pet-insurance/"],
  ["譲渡について", "/adoption/"],
  ["保護猫のお受け入れ", "/rescue-policy/"],
  ["お問い合わせ / アクセス", "/contact-access/"],
];

const siteRoot = location.pathname.startsWith("/neko/") || location.pathname === "/neko" ? "/neko" : "";
const toUrl = (path) => `${siteRoot}${path}`;
const toAsset = (path) => toUrl(path);
const email = "kamakuranekonoma@gmail.com";
const tel = "0467-40-5379";
const instagramUrl = "https://www.instagram.com/kamakuranekonoma/?hl=ja";
const socialLinks = [
  ["Instagram", instagramUrl, "ig"],
  ["YouTube", "https://www.youtube.com/channel/UCP6MHJTVFkZbf1p8spsgJxw", "yt"],
  ["X", "https://x.com/kumikuma0510", "x"],
  ["Facebook", "https://www.facebook.com/kamakuranekonoma", "fb"],
  ["Threads", "https://www.threads.com/@kamakuranekonoma", "th"],
];

const cats = [
  ["トラ店長", "/assets/images/cats/tora.jpg", "みんなを見守るボス。父親役でもあり教育係。2016年2月25日生まれのオス。トラの指導によりみんないい子に育ちます。"],
  ["しま副店長", "/assets/images/cats/shima.jpg", "2015年10月生まれのオス。トラを支え、サポートする優しい母親役のような男の子。"],
];

const catGallery = [
  ["/assets/images/cats/gallery-cat-beer.jpg", "くつろぐ保護猫"],
  ["/assets/images/cats/gallery-black-cat.jpg", "店内で過ごす黒猫"],
  ["/assets/images/cats/kohaku.jpg", "日差しの中の保護猫"],
  ["/assets/images/cats/gallery-feeding-cats.jpg", "ごはんを食べる保護猫たち"],
  ["/assets/images/cats/mugi.jpg", "譲渡対象猫のイメージ"],
  ["/assets/images/cats/suzu.jpg", "眠る保護猫"],
  ["/assets/images/cats/gallery-chair-cats.jpg", "椅子で過ごす保護猫たち"],
  ["/assets/images/cats/gallery-kittens.jpg", "里親募集の子猫たち"],
];

function currentPath() {
  const stripped = siteRoot ? location.pathname.replace(siteRoot, "") || "/" : location.pathname;
  return stripped.endsWith("/") ? stripped : `${stripped}/`;
}

function isActive(href) {
  const path = currentPath();
  return href === "/" ? path === "/" : path.startsWith(href);
}

function initScrollPosition() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  if (location.hash) return;

  const scrollToTop = () => {
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousBehavior;
  };

  window.addEventListener("pageshow", () => {
    requestAnimationFrame(scrollToTop);
  }, { once: true });

  if (document.readyState === "complete") {
    requestAnimationFrame(scrollToTop);
  } else {
    window.addEventListener("load", () => requestAnimationFrame(scrollToTop), { once: true });
  }
}

function initChrome() {
  const header = document.querySelector("[data-header]");
  const footer = document.querySelector("[data-footer]");
  if (header) {
    header.innerHTML = `
      <a class="brand" href="${toUrl("/")}" aria-label="TOPへ">
        <span class="brand-mark">猫</span>
        <span><strong>鎌倉ねこの間</strong><small>譲渡型保護猫カフェ</small></span>
      </a>
      <button class="menu-toggle" type="button" aria-label="メニューを開く" aria-expanded="false">☰</button>
      <nav class="site-nav" aria-label="グローバルナビ">
        ${navItems.map(([label, href]) => `<a class="${isActive(href) ? "active" : ""}" href="${toUrl(href)}">${label}</a>`).join("")}
      </nav>`;
    const toggle = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".site-nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "×" : "☰";
    });
  }
  if (footer) {
    footer.innerHTML = `
      <div class="footer-grid">
        <section>
          <h2>鎌倉ねこの間</h2>
          <p>緑の中の古民家風保護猫カフェ。保護猫たちにストレスのないよう配慮しつつ営業しています。</p>
          <dl class="footer-license" aria-label="動物取扱標識">
            <div><dt>動物取扱標識</dt><dd>名称：鎌倉ねこの間 / 種別：展示</dd></div>
            <div><dt>登録番号</dt><dd>第250372号</dd></div>
            <div><dt>登録年月日</dt><dd>2026年3月27日～2031年4月19日</dd></div>
            <div><dt>動物取扱責任者</dt><dd>永田久美子</dd></div>
          </dl>
        </section>
        <section>
          <h2>お問い合わせ</h2>
          <p><a href="mailto:${email}">${email}</a><br><a href="tel:${tel.replaceAll("-", "")}">${tel}</a></p>
        </section>
        <section>
          <h2>SNS</h2>
          ${renderSocialLinks()}
        </section>
      </div>
      <div class="footer-links">
        ${navItems.map(([label, href]) => `<a href="${toUrl(href)}">${label}</a>`).join("")}
      </div>
      <p class="copyright">Copyright © 鎌倉ねこの間. All Rights Reserved.</p>`;
  }
}

function renderSocialLinks() {
  const icons = {
    ig: "◎",
    yt: "▶",
    x: "𝕏",
    fb: "f",
    th: "@",
  };
  return `
    <div class="social-follow" aria-label="SNSリンク">
      <div class="social-icons">
        ${socialLinks.map(([label, href, key]) => `<a class="social-icon ${key}" href="${href}" target="_blank" rel="noreferrer" aria-label="${label}">${icons[key]}</a>`).join("")}
      </div>
      <p>FOLLOW US</p>
    </div>`;
}

function renderCats() {
  const root = document.querySelector("[data-cat-cards]");
  if (!root) return;
  root.innerHTML = `
    <div class="cat-feature-grid">
      ${cats.map(([name, image, text]) => `
        <article class="cat-card featured-cat">
          <img src="${toAsset(image)}" alt="${name}">
          <div>
            <h3>${name}</h3>
            <p>${text}</p>
            <a class="text-link" href="${instagramUrl}" target="_blank" rel="noreferrer">Instagramを見る</a>
          </div>
        </article>`).join("")}
    </div>
    <section id="adoptable-cats" class="adoptable-gallery" aria-label="譲渡対象猫のイメージギャラリー">
      <div class="gallery-copy">
        <p class="eyebrow">Adoptable Cats</p>
        <h3>譲渡対象の保護猫たちは日々入れ替わります</h3>
        <p>その時々で出会える保護猫たちは変わります。毛色も体格も性格も過ごし方もそれぞれ違う、いろいろな保護猫たちの雰囲気を写真でご覧ください。</p>
      </div>
      <div class="cat-photo-gallery">
        ${catGallery.map(([image, alt]) => {
          const src = toAsset(image);
          return `<figure class="gallery-photo" style="--gallery-image: url('${src}')"><img src="${src}" alt="${alt}"></figure>`;
        }).join("")}
      </div>
    </section>`;
  if (location.hash === "#adoptable-cats") {
    requestAnimationFrame(() => document.getElementById("adoptable-cats")?.scrollIntoView({ block: "start" }));
  }
}

function initMailLinks() {
  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.setAttribute("href", `mailto:${email}`);
    link.textContent = email;
  });
  document.querySelectorAll("[data-tel-link]").forEach((link) => {
    link.setAttribute("href", `tel:${tel.replaceAll("-", "")}`);
    link.textContent = tel;
  });
}

function initAtmosphere() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("motion-ready");

  const selectors = [
    ".page-hero > *",
    ".hero-content > *",
    ".section-head",
    ".split > *",
    ".card-grid > *",
    ".cat-feature-grid > *",
    ".adoptable-gallery > *",
    ".about-story > *",
    ".notice-grid > *",
    ".support-box > *",
    ".instagram-panel > *",
    ".home-banners > *",
    ".price-system-layout > *",
    ".howto-list > *",
    ".drink-layout > *",
    ".dessert-grid > *",
    ".reading-box",
    ".contact-panel",
    ".adoption-flow > *",
    ".adoption-notes > *",
    ".rescue-flow > *",
    ".rescue-checks > *",
    ".access-note",
    ".access-summary > *",
    ".embed-panel",
    ".contact-shop-inner > *",
    ".footer-grid > *",
  ];

  const targets = [...new Set(document.querySelectorAll(selectors.join(",")))];
  targets.forEach((element, index) => {
    element.classList.add("reveal-item");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -6% 0px",
  });

  requestAnimationFrame(() => targets.forEach((element) => observer.observe(element)));
}

initScrollPosition();
initChrome();
renderCats();
initMailLinks();

document.querySelectorAll("[data-social-links]").forEach((root) => {
  root.innerHTML = renderSocialLinks();
});

initAtmosphere();
