# 鎌倉ねこの間 6ページ構成サイト

保護猫カフェ向けの静的HTML/CSS/JavaScriptサイトです。GitHub Pagesのプロジェクトサイト配信、Cloudflare Pages配信に対応しています。

## ページ構成

- `/`
- `/price-menu/`
- `/pet-insurance/`
- `/adoption/`
- `/rescue-policy/`
- `/contact-access/`

全ページのヘッダーとフッター導線は上記6ページに統一しています。

## 予約・お問い合わせ

- 予約: Eメールのみ
- その他問い合わせ: 電話またはEメール
- Eメール: `kamakuranekonoma@gmail.com`
- 電話: `0467-40-5379`

## Googleカレンダー

TOPページに以下のGoogleカレンダーiframeを設置しています。

```html
<iframe src="https://calendar.google.com/calendar/embed?src=kamakuranekonoma%40gmail.com&ctz=Asia%2FTokyo" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
```

## 差し替えが必要な箇所

- ペット保険ページのアニコム本文
- ペット保険ページの新バナー画像
- 譲渡についてページの提供本文
- 料金、利用時間、メニューの確定情報

提供原稿がある箇所は、受領後に一字一句削らず掲載してください。

## 画像管理

- `assets/images/site/`: メインビジュアル、店内、SNS、アクセスなど
- `assets/images/cats/`: 猫紹介カード用画像

参考サイトや外部サイトの画像は使用していません。
