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
const instagramUrl = "https://www.instagram.com/kamakuranekonoma/";

const cats = [
  ["トラ店長", "/assets/images/cats/mugi.jpg", "みんなを見守る落ち着いた店長。初めての方にもやさしい存在です。"],
  ["シマ副店長", "/assets/images/cats/suzu.jpg", "遊びの時間を知らせてくれる、明るい副店長です。"],
  ["むぎ", "/assets/images/cats/yuzu.jpg", "窓辺が好きな甘えんぼ。静かな時間にそっと寄り添います。"],
  ["はな", "/assets/images/cats/hana.jpg", "自分のペースを大切にする、日だまりの似合う子です。"],
  ["こはく", "/assets/images/cats/kohaku.jpg", "好奇心いっぱい。毎日いろいろな場所を探検しています。"],
  ["りん", "/assets/images/cats/rin.jpg", "深い瞳が魅力の黒猫。ゆっくり仲良くなれる子です。"],
  ["あん", "/assets/images/site/concept.jpg", "なでられるのが好きな穏やかな子。お昼寝上手です。"],
  ["そら", "/assets/images/site/interior.jpg", "高いところから店内を眺めるのが好きな見守り役です。"],
  ["つき", "/assets/images/site/graduates.jpg", "少し慎重だけれど、慣れると小さく挨拶してくれます。"],
  ["まめ", "/assets/images/site/sns.jpg", "じゃらしを見ると目がきらり。遊び好きな若い子です。"],
];

function currentPath() {
  const stripped = siteRoot ? location.pathname.replace(siteRoot, "") || "/" : location.pathname;
  return stripped.endsWith("/") ? stripped : `${stripped}/`;
}

function isActive(href) {
  const path = currentPath();
  return href === "/" ? path === "/" : path.startsWith(href);
}

function initChrome() {
  const header = document.querySelector("[data-header]");
  const footer = document.querySelector("[data-footer]");
  if (header) {
    header.innerHTML = `
      <a class="brand" href="${toUrl("/")}" aria-label="TOPへ">
        <span class="brand-mark">猫</span>
        <span><strong>鎌倉ねこの間</strong><small>保護猫カフェ</small></span>
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
      <section class="common-cta" aria-label="予約とお問い合わせ">
        <p class="eyebrow">Reservation & Contact</p>
        <h2>ご来店前にご連絡ください</h2>
        <p>ご予約はEメールのみでお願いいたします。<br>その他のお問い合わせは、お電話またはEメールでお願いいたします。</p>
        <div class="button-row center">
          <a class="button" href="mailto:${email}?subject=%E6%9D%A5%E5%BA%97%E4%BA%88%E7%B4%84%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87">Eメールで予約する</a>
          <a class="button secondary" href="tel:${tel.replaceAll("-", "")}">電話で問い合わせる</a>
          <a class="button ghost" href="${toUrl("/contact-access/#access")}">アクセスを見る</a>
        </div>
      </section>
      <div class="footer-grid">
        <section>
          <h2>鎌倉ねこの間</h2>
          <p>緑の中の古民家風保護猫カフェ。猫たちの体調と気持ちを大切にしながら営業しています。</p>
        </section>
        <section>
          <h2>お問い合わせ</h2>
          <p><a href="mailto:${email}">${email}</a><br><a href="tel:${tel.replaceAll("-", "")}">${tel}</a></p>
        </section>
        <section>
          <h2>SNS</h2>
          <p><a href="${instagramUrl}" target="_blank" rel="noreferrer">Instagram</a></p>
        </section>
      </div>
      <div class="footer-links">
        ${navItems.map(([label, href]) => `<a href="${toUrl(href)}">${label}</a>`).join("")}
      </div>
      <p class="copyright">Copyright © 鎌倉ねこの間. All Rights Reserved.</p>`;
  }
}

function renderCats() {
  const root = document.querySelector("[data-cat-cards]");
  if (!root) return;
  root.innerHTML = cats.map(([name, image, text]) => `
    <article class="cat-card">
      <img src="${toAsset(image)}" alt="${name}">
      <div>
        <h3>${name}</h3>
        <p>${text}</p>
        <a class="text-link" href="${instagramUrl}" target="_blank" rel="noreferrer">Instagramを見る</a>
      </div>
    </article>`).join("");
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

initChrome();
renderCats();
initMailLinks();
