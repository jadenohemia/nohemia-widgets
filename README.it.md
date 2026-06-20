# Widget Nohemia

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**Widget gratuiti e incorporabili di astrologia e fasi lunari per qualsiasi sito web.** Dati di effemeridi reali, aggiornati ogni notte, senza account, senza tracciamento, senza JavaScript. Incolli una riga di HTML e il gioco è fatto.

Creati e gestiti da [Jade Nohemia](https://nohemia.com/en/auteur/jade/) su **[nohemia.com](https://nohemia.com/en/)**.
Galleria e anteprime dal vivo: **[nohemia.com/en/widgets](https://nohemia.com/en/widgets/)**.

> Des widgets d'astrologie gratuits pour ton site. La lune du jour, le ciel du moment : un petit cadre
> soigné à coller en deux copier-coller, recalculé chaque nuit à partir d'une éphéméride réelle.

---

## Avvio rapido (HTML semplice)

Incolla questo codice ovunque nella tua pagina. Funziona su qualsiasi sito che accetti HTML (WordPress, Wix, Squarespace, Webflow, Ghost, Shopify, una pagina statica...).

```html
<iframe src="https://nohemia.com/en/widgets/lune/clair-m/"
        width="300" height="210" loading="lazy"
        title="Calendrier lunaire" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/en/lune/" rel="nofollow">Calendrier lunaire par Nohemia</a>
</p>
```

La piccola riga di credito è l'unico ringraziamento che ti chiediamo. È facoltativa: puoi modificarla o rimuoverla, il widget continuerà a funzionare esattamente allo stesso modo.

---

## Widget

| Widget | `type` | Descrizione | Dimensioni |
|--------|--------|-------------|-------|
| Luna di oggi | `lune` | Fase, segno e prossima luna piena | `s` (220x140), `m` (300x210) |
| Cielo di oggi | `ciel` | Sole e Luna per segno, fase attuale | `s` (230x150), `m` (300x200) |

Ogni `type` è disponibile in due temi (`clair` / `sombre`) e due dimensioni (`s` / `m`). Lo schema dell'URL è il seguente:

```
https://nohemia.com/en/widgets/{type}/{theme}-{size}/
```

Altri widget sono in arrivo: conto alla rovescia per la luna piena, oroscopo del giorno per segno, retrogradazioni in corso.

---

## Esempi per framework

### WordPress
Aggiungi un blocco **HTML personalizzato** (oppure usa la scheda *Testo* dell'editor classico) e incolla lo snippet dell'avvio rapido. Nessun plugin necessario.

### React / Next.js
```jsx
export function MoonWidget() {
  return (
    <>
      <iframe
        src="https://nohemia.com/en/widgets/lune/clair-m/"
        width={300} height={210} loading="lazy"
        title="Calendrier lunaire"
        style={{ border: 0, borderRadius: 12, maxWidth: '100%' }}
      />
      <p style={{ font: '12px/1.4 system-ui, sans-serif', textAlign: 'center', margin: '6px 0 0' }}>
        <a href="https://nohemia.com/en/lune/" rel="nofollow">Calendrier lunaire par Nohemia</a>
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
Trascina un elemento **Embed** (Webflow) o un blocco **Code** (Squarespace) e incolla lo snippet dell'avvio rapido.

---

## Web component (npm)

Se preferisci un tag a un iframe, installa il piccolo web component (un wrapper leggero e senza dipendenze):

```bash
npm i @nohemia/widgets
```

```html
<script type="module">import '@nohemia/widgets'</script>

<nohemia-widget type="lune" theme="clair" size="m"></nohemia-widget>
<nohemia-widget type="ciel" theme="sombre" size="s"></nohemia-widget>
```

Oppure caricalo direttamente da una CDN, senza alcun passaggio di build:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="lune"></nohemia-widget>
```

Attributi: `type` (`lune` | `ciel`), `theme` (`clair` | `sombre`), `size` (`s` | `m`). Il componente si limita a renderizzare l'iframe ufficiale, così i dati e lo stile restano sempre allineati con nohemia.com.

---

## Dati e freschezza

Niente è scritto a mano. Fasi, segni e orari provengono da un'effemeride astronomica reale ([astronomy-engine](https://github.com/cosinekitty/astronomy), MIT), ricalcolata ogni notte. Gli orari sono indicati in Europe/Paris, al minuto. Gli stessi dati alimentano l'intero [calendario lunare su nohemia.com](https://nohemia.com/en/lune/calendrier-pleines-lunes/).

Puoi anche leggere il JSON grezzo se vuoi costruire la tua versione:
`https://nohemia.com/widgets/lune/data.json` (la fase di oggi, la prossima luna piena e luna nuova, le dieci lunazioni successive).

---

## Perché questi widget

- **Gratuiti, per sempre.** Nessun account, nessuna chiave API, nessun limite di richieste.
- **Leggeri e sicuri.** Un iframe in sandbox: non legge mai la tua pagina, non imposta alcun cookie e non rallenta il tuo sito.
- **Design editoriale.** Caldo, sobrio, nello stile Nohemia. Temi chiaro e scuro.
- **Dati onesti e reali.** Una vera effemeride, non una tabella scritta a mano.
- **Rispettosi della privacy.** Zero tracciamento, conformi al GDPR per costruzione.

---

## Link

- Sito: [nohemia.com](https://nohemia.com/en/) · Galleria dei widget: [nohemia.com/en/widgets](https://nohemia.com/en/widgets/)
- Autrice: [Jade Nohemia](https://nohemia.com/en/auteur/jade/)
- Segnalazioni e idee: [github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## Licenza

[MIT](./LICENSE) © Jade Nohemia / Nohemia. Usali ovunque, anche a scopo commerciale. Un link di ritorno a [nohemia.com](https://nohemia.com/en/) è gradito ma mai obbligatorio.
