# Nohemia Widgets

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**どんなWebサイトにもすぐ埋め込める、無料の占星術＆月のウィジェット。** 実際の天体暦データを使い、毎晩更新。アカウント不要、トラッキングなし、JavaScript不要です。HTMLを1行貼り付けるだけで完了します。

[Jade Nohemia](https://nohemia.com/ja/auteur/jade/) が **[nohemia.com](https://nohemia.com/ja/)** で開発・運用しています。
ギャラリーとライブプレビューはこちら：**[nohemia.com/ja/widgets](https://nohemia.com/ja/widgets/)**。


---

## Quick start (プレーンなHTML)

ページのどこにでも、これを貼り付けてください。HTMLを受け付けるサイトであればどこでも動作します（WordPress、Wix、Squarespace、Webflow、Ghost、Shopify、静的ページなど）。

```html
<iframe src="https://nohemia.com/ja/widgets/tsuki/light-m/"
        width="300" height="210" loading="lazy"
        title="月の暦" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/ja/" rel="nofollow">Nohemia の月の暦</a>
</p>
```

この小さなクレジット行が、私たちがお願いする唯一の「ありがとう」です。任意ですので、編集しても削除してもかまいません。ウィジェットはまったく同じように動作します。

---

## ウィジェット一覧

| ウィジェット | `type` | 説明 | サイズ |
|--------|--------|-------------|-------|
| 今日の月 | `moon` | 月相、星座、次の満月 | `s` (220x140), `m` (300x210) |
| 今日の空 | `sky` | 星座ごとの太陽と月、現在の月相 | `s` (230x150), `m` (300x200) |

それぞれの `type` には2つのテーマ（`light` / `dark`）と2つのサイズ（`s` / `m`）が用意されています。URLのパターンは次のとおりです。

```
https://nohemia.com/ja/widgets/{type}/{theme}-{size}/
```

さらに多くのウィジェットを準備中です。満月までのカウントダウン、星座別の日々の星占い、進行中の逆行など。

---

## フレームワーク別の例

### WordPress
**カスタムHTML** ブロックを追加するか（あるいはクラシックエディターの *テキスト* タブを使い）、Quick start のスニペットを貼り付けてください。プラグインは不要です。

### React / Next.js
```jsx
export function MoonWidget() {
  return (
    <>
      <iframe
        src="https://nohemia.com/ja/widgets/tsuki/light-m/"
        width={300} height={210} loading="lazy"
        title="月の暦"
        style={{ border: 0, borderRadius: 12, maxWidth: '100%' }}
      />
      <p style={{ font: '12px/1.4 system-ui, sans-serif', textAlign: 'center', margin: '6px 0 0' }}>
        <a href="https://nohemia.com/ja/" rel="nofollow">Nohemia の月の暦</a>
      </p>
    </>
  )
}
```

### Vue
```vue
<template>
  <iframe src="https://nohemia.com/ja/widgets/sora/dark-m/"
          width="300" height="200" loading="lazy" title="今日の空"
          style="border:0;border-radius:12px;max-width:100%" />
</template>
```

### Webflow / Squarespace
**Embed** 要素（Webflow）または **Code** ブロック（Squarespace）を配置し、Quick start のスニペットを貼り付けてください。

---

## Webコンポーネント (npm)

iframeよりタグのほうが好みであれば、小さなWebコンポーネント（薄く、依存関係のないラッパー）をインストールしてください。

```bash
npm i @nohemia/widgets
```

```html
<script type="module">import '@nohemia/widgets'</script>

<nohemia-widget type="moon" locale="ja" theme="light" size="m"></nohemia-widget>
<nohemia-widget type="sky" locale="ja" theme="dark" size="s"></nohemia-widget>
<nohemia-widget type="moon" locale="ja" tz="tokyo"></nohemia-widget>
```

あるいは、ビルド手順なしでCDNから直接読み込むこともできます。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="moon" locale="ja"></nohemia-widget>
```

属性：`type`（`moon` | `sky`）、`theme`（`light` | `dark`）、`size`（`s` | `m`）、`tz`（`moon` のみ。下記参照）。このコンポーネントは公式のiframeを描画するだけなので、データとスタイルはnohemia.comと常に同期した状態が保たれます。

### タイムゾーン (`tz`)

`moon` ウィジェットは、次の満月の時刻を表示します。既定では、誰が見ても同じ **Europe/Paris** の時刻で表示されます。`moon` ウィジェットでは、`tz` 属性でこの時計を別の都市に切り替えられます。指定できる値は `london`、`new-york`、`los-angeles`、`sao-paulo`、`istanbul`、`seoul`、`tokyo` です。指定しない場合（またはこれ以外の値を渡した場合）は、既定のパリ時刻になります。時刻を表示しない `sky` ウィジェットには影響しません。

```html
<nohemia-widget type="moon" locale="ja" tz="tokyo"></nohemia-widget>
```

URLを手で組み立てることもできます。`{theme}-{size}` のセグメントにゾーンのスラッグを付け加えてください。例：`https://nohemia.com/ja/widgets/tsuki/light-m-tokyo/`。

---

## データと更新頻度

手入力されたものは一切ありません。月相、星座、時刻は、実際の天文暦（[astronomy-engine](https://github.com/cosinekitty/astronomy)、MIT）から取得され、毎晩再計算されます。時刻は既定で Europe/Paris、分単位まで示されます（`moon` ウィジェットでは、`tz` 属性で次の満月の時計を別のゾーンに切り替えられます）。同じデータが [nohemia.comの月の暦](https://nohemia.com/ja/calendrier-pleines-lunes/) も支えています。

自分で何かを作りたい場合は、生のJSONを読み取ることもできます。
`https://nohemia.com/widgets/lune/data.json`（今日の月相、次の満月と新月、これから訪れる10回の月の周期）。

---

## なぜこれらのウィジェットなのか

- **無料、ずっと。** アカウント不要、APIキー不要、レート制限なし。
- **軽量で安全。** サンドボックス化されたiframe：あなたのページを読み取ることはなく、Cookieを設定せず、サイトを遅くしません。
- **エディトリアルなデザイン。** 温かく、落ち着いた、Nohemiaらしいスタイル。ライトテーマとダークテーマ。
- **誠実で本物のデータ。** ハードコードされた表ではなく、本物の天体暦。
- **プライバシーに配慮。** トラッキングは一切なく、設計段階からGDPRに優しい作りです。

---

## リンク

- サイト：[nohemia.com](https://nohemia.com/ja/) · ウィジェットギャラリー：[nohemia.com/ja/widgets](https://nohemia.com/ja/widgets/)
- 著者：[Jade Nohemia](https://nohemia.com/ja/auteur/jade/)
- 問題報告とアイデア：[github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## ライセンス

[MIT](./LICENSE) © Jade Nohemia / Nohemia。商用利用を含め、どこでも自由にお使いいただけます。[nohemia.com](https://nohemia.com/ja/) へのリンクバックは歓迎しますが、必須ではありません。
