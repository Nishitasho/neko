# こもれび猫の間 静的サイト

保護猫カフェ向けの静的HTML/CSS/JavaScriptサイトです。Cloudflare Pagesでそのまま配信できます。

## URL

- `/`
- `/about`
- `/cats`
- `/cats/mugi`
- `/cats/suzu`
- `/cats/yuzu`
- `/cats/hana`
- `/cats/kohaku`
- `/cats/rin`
- `/graduates`
- `/price-guide`
- `/rules`
- `/menu`
- `/access`
- `/rescue-policy`
- `/topics`
- `/adoption`
- `/contact`

## Cloudflare Pages

ビルドコマンドは不要です。出力ディレクトリはリポジトリルートを指定してください。

## お問い合わせフォーム

`contact/index.html`のフォーム送信先をFormspreeのエンドポイントに差し替えてください。

```html
<form action="https://formspree.io/f/あなたのフォームID" method="POST" data-contact-form>
```

ローカル確認用に、初期値が`https://formspree.io/f/example`のままの場合は送信せず「お問い合わせありがとうございます。」を表示します。

## 画像差し替え

画像は`assets/images/`配下に整理しています。

- `assets/images/site/hero.jpg`: HOMEメインビジュアル
- `assets/images/site/`: 店内、コンセプト、SNS、アクセス周辺
- `assets/images/cats/`: 猫一覧・詳細ページ

猫プロフィールは`assets/site.js`の`cats`配列で編集できます。
