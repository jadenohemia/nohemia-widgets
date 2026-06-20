# Nohemia Widgets

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**Free, embeddable astrology & moon widgets for any website.** Real ephemeris data, refreshed every
night, no account, no tracking, no JavaScript required. Drop one line of HTML and you are done.

Built and maintained by [Jade Nohemia](https://nohemia.com/en/auteur/jade/) at **[nohemia.com](https://nohemia.com/en/)**.
Gallery and live previews: **[nohemia.com/en/widgets](https://nohemia.com/en/widgets/)**.

---

## Quick start (plain HTML)

Paste this anywhere in your page. It works on any site that accepts HTML (WordPress, Wix, Squarespace,
Webflow, Ghost, Shopify, a static page...).

```html
<iframe src="https://nohemia.com/en/widgets/lune/clair-m/"
        width="300" height="210" loading="lazy"
        title="Lunar calendar" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/en/lune/" rel="nofollow">Lunar calendar by Nohemia</a>
</p>
```

The little credit line is the only thank-you we ask. It is optional: you can edit it or remove it, the
widget still works exactly the same.

---

## Widgets

| Widget | `type` | Description | Sizes |
|--------|--------|-------------|-------|
| Moon today | `lune` | Phase, sign and next full moon | `s` (220x140), `m` (300x210) |
| Sky today | `ciel` | Sun and Moon by sign, current phase | `s` (230x150), `m` (300x200) |

Each `type` ships in two themes (`clair` / `sombre`) and two sizes (`s` / `m`). The URL pattern is:

```
https://nohemia.com/en/widgets/{type}/{theme}-{size}/
```

More widgets are on the way: full-moon countdown, daily horoscope by sign, retrogrades in progress.

---

## Framework examples

### WordPress
Add a **Custom HTML** block (or use the Classic editor's *Text* tab) and paste the Quick start snippet.
No plugin needed.

### React / Next.js
```jsx
export function MoonWidget() {
  return (
    <>
      <iframe
        src="https://nohemia.com/en/widgets/lune/clair-m/"
        width={300} height={210} loading="lazy"
        title="Lunar calendar"
        style={{ border: 0, borderRadius: 12, maxWidth: '100%' }}
      />
      <p style={{ font: '12px/1.4 system-ui, sans-serif', textAlign: 'center', margin: '6px 0 0' }}>
        <a href="https://nohemia.com/en/lune/" rel="nofollow">Lunar calendar by Nohemia</a>
      </p>
    </>
  )
}
```

### Vue
```vue
<template>
  <iframe src="https://nohemia.com/en/widgets/ciel/sombre-m/"
          width="300" height="200" loading="lazy" title="Le ciel du jour"
          style="border:0;border-radius:12px;max-width:100%" />
</template>
```

### Webflow / Squarespace
Drop an **Embed** element (Webflow) or a **Code** block (Squarespace) and paste the Quick start snippet.

---

## Web component (npm)

If you prefer a tag over an iframe, install the tiny web component (a thin, dependency-free wrapper):

```bash
npm i @nohemia/widgets
```

```html
<script type="module">import '@nohemia/widgets'</script>

<nohemia-widget type="lune" theme="clair" size="m"></nohemia-widget>
<nohemia-widget type="ciel" theme="sombre" size="s"></nohemia-widget>
```

Or load it straight from a CDN, no build step:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="lune"></nohemia-widget>
```

Attributes: `type` (`lune` | `ciel`), `theme` (`clair` | `sombre`), `size` (`s` | `m`). The component
just renders the official iframe, so the data and styling stay in sync with nohemia.com.

---

## Data & freshness

Nothing is typed by hand. Phases, signs and times come from a real astronomical ephemeris
([astronomy-engine](https://github.com/cosinekitty/astronomy), MIT), recomputed every night. Times are
given in Europe/Paris, to the minute. The same data powers the full
[lunar calendar on nohemia.com](https://nohemia.com/en/lune/calendrier-pleines-lunes/).

You can also read the raw JSON if you want to build your own:
`https://nohemia.com/widgets/lune/data.json` (today's phase, next full and new moon, the ten upcoming lunations).

---

## Why these widgets

- **Free, forever.** No account, no API key, no rate limit.
- **Light and safe.** A sandboxed iframe: it never reads your page, sets no cookie, and does not slow your site.
- **Editorial design.** Warm, sober, in the Nohemia style. Light and dark themes.
- **Honest, real data.** A genuine ephemeris, not a hardcoded table.
- **Privacy-clean.** Zero tracking, GDPR-friendly by construction.

---

## Links

- Site: [nohemia.com](https://nohemia.com/en/) · Widgets gallery: [nohemia.com/en/widgets](https://nohemia.com/en/widgets/)
- Author: [Jade Nohemia](https://nohemia.com/en/auteur/jade/)
- Issues & ideas: [github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## License

[MIT](./LICENSE) © Jade Nohemia / Nohemia. Use them anywhere, including commercially. A link back to
[nohemia.com](https://nohemia.com/en/) is appreciated but never required.
