# Nohemia Widgets

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**Kostenlose, einbettbare Astrologie- und Mond-Widgets für jede Website.** Echte Ephemeriden-Daten, jede Nacht aktualisiert, ohne Konto, ohne Tracking, ohne JavaScript. Eine einzige HTML-Zeile einfügen, fertig.

Erstellt und gepflegt von [Jade Nohemia](https://nohemia.com/de/auteur/jade/) auf **[nohemia.com](https://nohemia.com/de/)**.
Galerie und Live-Vorschauen: **[nohemia.com/de/widgets](https://nohemia.com/de/widgets/)**.

> Des widgets d'astrologie gratuits pour ton site. La lune du jour, le ciel du moment : un petit cadre
> soigné à coller en deux copier-coller, recalculé chaque nuit à partir d'une éphéméride réelle.

---

## Quick start (plain HTML)

Füge das einfach irgendwo auf deiner Seite ein. Es funktioniert auf jeder Website, die HTML akzeptiert (WordPress, Wix, Squarespace, Webflow, Ghost, Shopify, eine statische Seite ...).

```html
<iframe src="https://nohemia.com/de/widgets/mond/hell-m/"
        width="300" height="210" loading="lazy"
        title="Calendrier lunaire" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/de/" rel="nofollow">Calendrier lunaire par Nohemia</a>
</p>
```

Die kleine Credit-Zeile ist das einzige Dankeschön, um das wir bitten. Sie ist optional: Du kannst sie anpassen oder entfernen, das Widget funktioniert trotzdem genauso.

---

## Widgets

| Widget | `type` | Beschreibung | Größen |
|--------|--------|-------------|-------|
| Mond heute | `moon` | Phase, Tierkreiszeichen und nächster Vollmond | `s` (220x140), `m` (300x210) |
| Himmel heute | `sky` | Sonne und Mond nach Tierkreiszeichen, aktuelle Phase | `s` (230x150), `m` (300x200) |

Jeder `type` kommt in zwei Themes (`light` / `dark`) und zwei Größen (`s` / `m`). Das URL-Schema lautet:

```
https://nohemia.com/de/widgets/{type}/{theme}-{size}/
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
        src="https://nohemia.com/de/widgets/mond/hell-m/"
        width={300} height={210} loading="lazy"
        title="Calendrier lunaire"
        style={{ border: 0, borderRadius: 12, maxWidth: '100%' }}
      />
      <p style={{ font: '12px/1.4 system-ui, sans-serif', textAlign: 'center', margin: '6px 0 0' }}>
        <a href="https://nohemia.com/de/" rel="nofollow">Calendrier lunaire par Nohemia</a>
      </p>
    </>
  )
}
```

### Vue
```vue
<template>
  <iframe src="https://nohemia.com/de/widgets/himmel/dunkel-m/"
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

<nohemia-widget type="moon" locale="de" theme="light" size="m"></nohemia-widget>
<nohemia-widget type="sky" locale="de" theme="dark" size="s"></nohemia-widget>
<nohemia-widget type="moon" locale="de" tz="tokyo"></nohemia-widget>
```

Oder lade sie direkt von einem CDN, ganz ohne Build-Schritt:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="moon" locale="de"></nohemia-widget>
```

Attribute: `type` (`moon` | `sky`), `theme` (`light` | `dark`), `size` (`s` | `m`), `tz` (nur `moon`, siehe unten). Die Komponente rendert lediglich das offizielle iframe, sodass Daten und Gestaltung stets mit nohemia.com synchron bleiben.

### Zeitzone (`tz`)

Das Mond-Widget zeigt den Zeitpunkt des nächsten Vollmonds. Standardmäßig wird er in der Zeitzone **Europe/Paris** angegeben. Beim `moon`-Widget kannst du diese Uhrzeit mit dem Attribut `tz` auf eine andere Stadt umstellen. Erlaubte Werte: `london`, `new-york`, `los-angeles`, `sao-paulo`, `istanbul`, `seoul`, `tokyo`. Lässt du das Attribut weg (oder gibst du einen anderen Wert an), gilt die Pariser Zeit als Standard. Auf das `sky`-Widget hat es keine Auswirkung (dieses zeigt keine Uhrzeit an).

```html
<nohemia-widget type="moon" locale="de" tz="tokyo"></nohemia-widget>
```

Du kannst die URL auch von Hand bauen: Hänge den Zonen-Slug an das Segment `{theme}-{size}` an, z. B. `https://nohemia.com/de/widgets/mond/hell-m-tokyo/`.

---

## Daten & Aktualität

Nichts wird von Hand eingetragen. Phasen, Tierkreiszeichen und Zeiten stammen aus einer echten astronomischen Ephemeride ([astronomy-engine](https://github.com/cosinekitty/astronomy), MIT) und werden jede Nacht neu berechnet. Die Zeiten sind standardmäßig in Europe/Paris angegeben, auf die Minute genau (beim Mond-Widget lässt sich die Uhrzeit des nächsten Vollmonds mit dem Attribut `tz` auf eine andere Zeitzone umstellen). Dieselben Daten speisen auch den vollständigen [Mondkalender auf nohemia.com](https://nohemia.com/de/calendrier-pleines-lunes/).

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

- Website: [nohemia.com](https://nohemia.com/de/) · Widget-Galerie: [nohemia.com/de/widgets](https://nohemia.com/de/widgets/)
- Autorin: [Jade Nohemia](https://nohemia.com/de/auteur/jade/)
- Issues & Ideen: [github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## Lizenz

[MIT](./LICENSE) © Jade Nohemia / Nohemia. Überall einsetzbar, auch kommerziell. Ein Backlink zu [nohemia.com](https://nohemia.com/de/) freut uns, ist aber niemals Pflicht.
