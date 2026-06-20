# Nohemia Widgets

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**Kostenlose, einbettbare Astrologie- und Mond-Widgets für jede Website.** Echte Ephemeriden-Daten, jede Nacht aktualisiert, ohne Konto, ohne Tracking, ohne JavaScript. Eine einzige HTML-Zeile einfügen, fertig.

Erstellt und gepflegt von [Jade Nohemia](https://nohemia.com/fr/auteur/jade/) auf **[nohemia.com](https://nohemia.com/fr/)**.
Galerie und Live-Vorschauen: **[nohemia.com/fr/widgets](https://nohemia.com/fr/widgets/)**.

> Des widgets d'astrologie gratuits pour ton site. La lune du jour, le ciel du moment : un petit cadre
> soigné à coller en deux copier-coller, recalculé chaque nuit à partir d'une éphéméride réelle.

---

## Quick start (plain HTML)

Füge das einfach irgendwo auf deiner Seite ein. Es funktioniert auf jeder Website, die HTML akzeptiert (WordPress, Wix, Squarespace, Webflow, Ghost, Shopify, eine statische Seite ...).

```html
<iframe src="https://nohemia.com/fr/widgets/lune/clair-m/"
        width="300" height="210" loading="lazy"
        title="Calendrier lunaire" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/fr/lune/" rel="nofollow">Calendrier lunaire par Nohemia</a>
</p>
```

Die kleine Credit-Zeile ist das einzige Dankeschön, um das wir bitten. Sie ist optional: Du kannst sie anpassen oder entfernen, das Widget funktioniert trotzdem genauso.

---

## Widgets

| Widget | `type` | Beschreibung | Größen |
|--------|--------|-------------|-------|
| Mond heute | `lune` | Phase, Tierkreiszeichen und nächster Vollmond | `s` (220x140), `m` (300x210) |
| Himmel heute | `ciel` | Sonne und Mond nach Tierkreiszeichen, aktuelle Phase | `s` (230x150), `m` (300x200) |

Jeder `type` kommt in zwei Themes (`clair` / `sombre`) und zwei Größen (`s` / `m`). Das URL-Schema lautet:

```
https://nohemia.com/fr/widgets/{type}/{theme}-{size}/
```

Weitere Widgets sind in Arbeit: Countdown bis zum Vollmond, Tageshoroskop nach Tierkreiszeichen, laufende Rückläufigkeiten.

---

## Framework-Beispiele

### WordPress
Füge einen **Custom-HTML**-Block hinzu (oder nutze im klassischen Editor den Reiter *Text*) und setze das Quick-start-Snippet ein. Kein Plugin nötig.

### React / Next.js
```jsx
export function MoonWidget() {
  return (
    <>
      <iframe
        src="https://nohemia.com/fr/widgets/lune/clair-m/"
        width={300} height={210} loading="lazy"
        title="Calendrier lunaire"
        style={{ border: 0, borderRadius: 12, maxWidth: '100%' }}
      />
      <p style={{ font: '12px/1.4 system-ui, sans-serif', textAlign: 'center', margin: '6px 0 0' }}>
        <a href="https://nohemia.com/fr/lune/" rel="nofollow">Calendrier lunaire par Nohemia</a>
      </p>
    </>
  )
}
```

### Vue
```vue
<template>
  <iframe src="https://nohemia.com/fr/widgets/ciel/sombre-m/"
          width="300" height="200" loading="lazy" title="Le ciel du jour"
          style="border:0;border-radius:12px;max-width:100%" />
</template>
```

### Webflow / Squarespace
Ziehe ein **Embed**-Element (Webflow) oder einen **Code**-Block (Squarespace) auf die Seite und setze das Quick-start-Snippet ein.

---

## Web component (npm)

Wenn du einen Tag statt eines iframes bevorzugst, installiere die winzige Web Component (ein schlanker Wrapper ohne Abhängigkeiten):

```bash
npm i @nohemia/widgets
```

```html
<script type="module">import '@nohemia/widgets'</script>

<nohemia-widget type="lune" theme="clair" size="m"></nohemia-widget>
<nohemia-widget type="ciel" theme="sombre" size="s"></nohemia-widget>
```

Oder lade sie direkt von einem CDN, ganz ohne Build-Schritt:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="lune"></nohemia-widget>
```

Attribute: `type` (`lune` | `ciel`), `theme` (`clair` | `sombre`), `size` (`s` | `m`). Die Komponente rendert lediglich das offizielle iframe, sodass Daten und Gestaltung stets mit nohemia.com synchron bleiben.

---

## Daten & Aktualität

Nichts wird von Hand eingetragen. Phasen, Tierkreiszeichen und Zeiten stammen aus einer echten astronomischen Ephemeride ([astronomy-engine](https://github.com/cosinekitty/astronomy), MIT) und werden jede Nacht neu berechnet. Die Zeiten sind in Europe/Paris angegeben, auf die Minute genau. Dieselben Daten speisen auch den vollständigen [Mondkalender auf nohemia.com](https://nohemia.com/fr/lune/calendrier-pleines-lunes/).

Du kannst auch das rohe JSON auslesen, wenn du dir etwas Eigenes bauen möchtest:
`https://nohemia.com/widgets/lune/data.json` (heutige Phase, nächster Voll- und Neumond, die zehn kommenden Lunationen).

---

## Warum diese Widgets

- **Kostenlos, für immer.** Kein Konto, kein API-Schlüssel, kein Rate-Limit.
- **Leicht und sicher.** Ein abgeschottetes iframe: Es liest niemals deine Seite, setzt keinen Cookie und bremst deine Website nicht aus.
- **Redaktionelles Design.** Warm, schlicht, im Nohemia-Stil. Helle und dunkle Themes.
- **Ehrlich, mit echten Daten.** Eine echte Ephemeride, keine fest verdrahtete Tabelle.
- **Datenschutzfreundlich.** Null Tracking, DSGVO-konform schon im Aufbau.

---

## Links

- Website: [nohemia.com](https://nohemia.com/fr/) · Widget-Galerie: [nohemia.com/fr/widgets](https://nohemia.com/fr/widgets/)
- Autorin: [Jade Nohemia](https://nohemia.com/fr/auteur/jade/)
- Issues & Ideen: [github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## Lizenz

[MIT](./LICENSE) © Jade Nohemia / Nohemia. Überall einsetzbar, auch kommerziell. Ein Backlink zu [nohemia.com](https://nohemia.com/fr/) freut uns, ist aber niemals Pflicht.
