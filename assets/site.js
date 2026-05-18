const navItems = [
  ["HOME", "/"],
  ["ねこの間について", "/about/"],
  ["ねこたち", "/cats/"],
  ["卒業ねこたち", "/graduates/"],
  ["料金システム&利用方法", "/price-guide/"],
  ["ルール", "/rules/"],
  ["メニュー", "/menu/"],
  ["アクセス", "/access/"],
  ["保護猫受け入れについて", "/rescue-policy/"],
  ["譲渡について", "/adoption/"],
  ["トピックス", "/topics/"],
  ["お問い合わせ", "/contact/"],
];

const siteRoot = location.pathname.startsWith("/neko/") || location.pathname === "/neko" ? "/neko" : "";
const toUrl = (path) => `${siteRoot}${path}`;
const toAsset = (path) => toUrl(path);

const cats = [
  {
    slug: "mugi",
    name: "むぎ",
    sex: "女の子",
    age: "推定2才",
    color: "麦わら",
    image: "/assets/images/cats/mugi.jpg",
    short: "窓辺とおひざの間でゆっくり心をひらく甘えんぼ。",
    personality: "最初は少し慎重ですが、慣れると小さな声で話しかけてくれます。静かな時間を一緒に過ごすのが好きです。",
    rescue: "地域の見守り活動中に保護されました。人との暮らしに少しずつ慣れ、いまはカフェの穏やかな空気の中で過ごしています。",
    health: "食欲、排泄ともに安定。定期的に健康チェックを行っています。",
    vaccine: "接種済み",
    surgery: "避妊手術済み",
    note: "やさしく声をかけると、ゆっくり近づいてくれる控えめな子です。"
  },
  {
    slug: "suzu",
    name: "すず",
    sex: "女の子",
    age: "推定1才半",
    color: "キジ白",
    image: "/assets/images/cats/suzu.jpg",
    short: "遊びもお昼寝も全力。表情豊かな人気者です。",
    personality: "じゃらしを見ると目がきらっとします。人のそばで眠るのも好きで、距離の縮め方が上手です。",
    rescue: "きょうだい猫と一緒に保護されました。環境の変化にも前向きで、カフェの暮らしにすぐなじみました。",
    health: "良好。体重管理をしながら元気に過ごしています。",
    vaccine: "接種済み",
    surgery: "避妊手術済み",
    note: "遊んだあとは満足そうにころんと眠ります。"
  },
  {
    slug: "yuzu",
    name: "ゆず",
    sex: "男の子",
    age: "推定3才",
    color: "茶白",
    image: "/assets/images/cats/yuzu.jpg",
    short: "大きな体にやさしい心。面倒見のよい兄さんタイプ。",
    personality: "落ち着いた性格で、若い猫たちをそっと見守ります。なでられると目を細めて応えてくれます。",
    rescue: "多頭飼育の相談から保護につながりました。現在は人の手を安心できるものとして受け止めています。",
    health: "良好。歯肉の状態を定期観察中です。",
    vaccine: "接種済み",
    surgery: "去勢手術済み",
    note: "静かなご家族と相性がよさそうな、包容力のある子です。"
  },
  {
    slug: "hana",
    name: "はな",
    sex: "女の子",
    age: "推定4才",
    color: "三毛",
    image: "/assets/images/cats/hana.jpg",
    short: "日だまりが似合う、気品のあるマイペースさん。",
    personality: "自分のペースを大切にします。距離感を尊重してくれる人には、そっと甘える一面を見せます。",
    rescue: "庭先に通っていたところを保護主さんが見守り、医療ケアの後にカフェへ来ました。",
    health: "良好。季節の変わり目は体調を見ながら過ごしています。",
    vaccine: "接種済み",
    surgery: "避妊手術済み",
    note: "猫らしい自由さを愛せる方に出会えたらうれしいです。"
  },
  {
    slug: "kohaku",
    name: "こはく",
    sex: "男の子",
    age: "推定8か月",
    color: "白茶",
    image: "/assets/images/cats/kohaku.jpg",
    short: "好奇心いっぱい。毎日が小さな冒険です。",
    personality: "高い場所、紙袋、窓の外。気になるものを見つけるとすぐ確認に行きます。抱っこは練習中です。",
    rescue: "雨の日に小さく鳴いているところを保護されました。体調が整い、兄弟分の猫たちと元気に遊んでいます。",
    health: "良好。成長期のため食事量を調整しています。",
    vaccine: "接種済み",
    surgery: "去勢手術予定",
    note: "成長を一緒に楽しんでくださる里親さんを待っています。"
  },
  {
    slug: "rin",
    name: "りん",
    sex: "女の子",
    age: "推定5才",
    color: "黒",
    image: "/assets/images/cats/rin.jpg",
    short: "静かな黒猫。夜のように深い瞳が魅力です。",
    personality: "観察上手で、安心できる場所から人の動きを見ています。慣れたスタッフには頭をすり寄せます。",
    rescue: "地域猫として見守られていましたが、怪我の治療をきっかけに保護されました。",
    health: "良好。怪我は治癒し、日常生活に支障はありません。",
    vaccine: "接種済み",
    surgery: "避妊手術済み",
    note: "ゆっくり関係を育てたい方に寄り添ってくれる子です。"
  },
];

const pageCards = [
  ["ねこたち", "/cats/", "今日カフェで暮らしている子たちをご紹介します。", "/assets/images/cats/suzu.jpg"],
  ["卒業ねこたち", "/graduates/", "家族に出会い、新しい暮らしへ歩き出した子たち。", "/assets/images/site/graduates.jpg"],
  ["料金と利用方法", "/price-guide/", "ご来店前に知っておきたい料金、予約、過ごし方。", "/assets/images/site/interior.jpg"],
  ["ルール", "/rules/", "猫と人が安心して過ごすための小さな約束。", "/assets/images/cats/hana.jpg"],
  ["譲渡について", "/adoption/", "里親をご検討の方へ、流れとお願いをまとめました。", "/assets/images/cats/yuzu.jpg"],
  ["アクセス", "/access/", "緑の多い静かな通りにある小さな一軒家です。", "/assets/images/site/access-mood.jpg"],
];

function isActive(href) {
  const pathname = siteRoot ? location.pathname.replace(siteRoot, "") || "/" : location.pathname;
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return href === "/" ? path === "/" : path.startsWith(href);
}

function initChrome() {
  const header = document.querySelector("[data-header]");
  const footer = document.querySelector("[data-footer]");
  if (header) {
    header.innerHTML = `
      <a class="brand" href="${toUrl("/")}" aria-label="HOMEへ">
        <span class="brand-mark">猫</span>
        <span><strong>こもれび猫の間</strong><small>保護猫カフェ</small></span>
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
          <h2>こもれび猫の間</h2>
          <p>〒248-0000 神奈川県鎌倉市こもれび町1-2-3</p>
          <p>古民家を改装した、予約優先の保護猫カフェです。</p>
        </section>
        <section>
          <h2>営業時間</h2>
          <p>11:00-17:00 / 最終受付 16:00</p>
          <p>定休日 月・火曜日。臨時休業はSNSでお知らせします。</p>
        </section>
        <section>
          <h2>SNS</h2>
          <div class="sns-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">X</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </section>
      </div>
      <div class="footer-links">
        ${navItems.map(([label, href]) => `<a href="${toUrl(href)}">${label}</a>`).join("")}
        <a href="https://www.google.com/maps/search/?api=1&query=%E9%8E%8C%E5%80%89%20%E7%8C%AB%E3%82%AB%E3%83%95%E3%82%A7" target="_blank" rel="noreferrer">Google Map</a>
      </div>
      <div class="footer-bottom">
        <a class="button small" href="${toUrl("/contact/")}">お問い合わせ・予約相談</a>
        <p>Copyright © 2026 こもれび猫の間. All Rights Reserved.</p>
      </div>`;
  }
}

function renderCatList(limit) {
  const root = document.querySelector("[data-cat-list]");
  if (!root) return;
  root.innerHTML = cats.slice(0, limit || cats.length).map(cat => `
    <article class="cat-card">
      <a href="${toUrl(`/cats/${cat.slug}/`)}" aria-label="${cat.name}の詳細へ">
        <img src="${toAsset(cat.image)}" alt="${cat.name}">
        <div class="cat-card-body">
          <h2>${cat.name}</h2>
          <dl>
            <div><dt>性別</dt><dd>${cat.sex}</dd></div>
            <div><dt>年齢</dt><dd>${cat.age}</dd></div>
            <div><dt>毛色</dt><dd>${cat.color}</dd></div>
          </dl>
          <p>${cat.short}</p>
          <span class="text-link">Read More</span>
        </div>
      </a>
    </article>`).join("");
}

function renderCatDetail() {
  const root = document.querySelector("[data-cat-detail]");
  if (!root) return;
  const slug = location.pathname.split("/").filter(Boolean).pop();
  const index = cats.findIndex(cat => cat.slug === slug);
  const cat = cats[index];
  if (!cat) {
    root.innerHTML = `<section class="section narrow"><h1>猫が見つかりません</h1><p>一覧からもう一度お選びください。</p><a class="button" href="${toUrl("/cats/")}">一覧へ戻る</a></section>`;
    return;
  }
  const prev = cats[(index - 1 + cats.length) % cats.length];
  const next = cats[(index + 1) % cats.length];
  document.title = `${cat.name} | こもれび猫の間`;
  root.innerHTML = `
    <section class="section detail">
      <a class="back-link" href="${toUrl("/cats/")}">← ねこたち一覧へ戻る</a>
      <div class="detail-grid">
        <img class="detail-image" src="${toAsset(cat.image)}" alt="${cat.name}">
        <div>
          <p class="eyebrow">Resident Cat</p>
          <h1>${cat.name}</h1>
          <p class="lead">${cat.short}</p>
          <div class="profile-box">
            <dl class="profile-list">
              <div><dt>性別</dt><dd>${cat.sex}</dd></div>
              <div><dt>年齢</dt><dd>${cat.age}</dd></div>
              <div><dt>毛色</dt><dd>${cat.color}</dd></div>
              <div><dt>健康状態</dt><dd>${cat.health}</dd></div>
              <div><dt>ワクチン</dt><dd>${cat.vaccine}</dd></div>
              <div><dt>去勢避妊</dt><dd>${cat.surgery}</dd></div>
            </dl>
          </div>
        </div>
      </div>
      <div class="story-grid">
        <section><h2>性格</h2><p>${cat.personality}</p></section>
        <section><h2>保護経緯</h2><p>${cat.rescue}</p></section>
        <section><h2>ひとこと紹介</h2><p>${cat.note}</p></section>
      </div>
      <nav class="pager" aria-label="猫詳細ページの移動">
        <a href="${toUrl(`/cats/${prev.slug}/`)}">前の猫<br><strong>${prev.name}</strong></a>
        <a href="${toUrl("/cats/")}">一覧へ戻る</a>
        <a href="${toUrl(`/cats/${next.slug}/`)}">次の猫<br><strong>${next.name}</strong></a>
      </nav>
    </section>`;
}

function renderCards() {
  const root = document.querySelector("[data-page-cards]");
  if (!root) return;
  root.innerHTML = pageCards.map(([title, href, text, image]) => `
    <article class="route-card">
      <a href="${toUrl(href)}">
        <img src="${toAsset(image)}" alt="">
        <div>
          <h3>${title}</h3>
          <p>${text}</p>
        <span class="text-link">詳しく見る</span>
      </div>
    </a>
    </article>`).join("");
}

function enhanceContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.addEventListener("submit", event => {
    const endpoint = form.getAttribute("action");
    if (!endpoint || endpoint.includes("example")) {
      event.preventDefault();
      form.reset();
      document.querySelector("[data-form-result]").textContent = "お問い合わせありがとうございます。";
    }
  });
}

initChrome();
renderCatList();
renderCatDetail();
renderCards();
enhanceContactForm();
