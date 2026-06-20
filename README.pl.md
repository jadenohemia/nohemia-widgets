# Nohemia Widgets

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**Darmowe, gotowe do osadzenia widżety astrologiczne i księżycowe na każdą stronę.** Prawdziwe dane efemeryd, odświeżane co noc, bez konta, bez śledzenia, bez potrzeby JavaScriptu. Wklejasz jedną linijkę HTML i gotowe.

Tworzone i utrzymywane przez [Jade Nohemia](https://nohemia.com/fr/auteur/jade/) w **[nohemia.com](https://nohemia.com/fr/)**.
Galeria i podglądy na żywo: **[nohemia.com/fr/widgets](https://nohemia.com/fr/widgets/)**.

> Des widgets d'astrologie gratuits pour ton site. La lune du jour, le ciel du moment : un petit cadre
> soigné à coller en deux copier-coller, recalculé chaque nuit à partir d'une éphéméride réelle.

---

## Szybki start (czysty HTML)

Wklej to w dowolnym miejscu na stronie. Działa na każdej witrynie obsługującej HTML (WordPress, Wix, Squarespace, Webflow, Ghost, Shopify, strona statyczna...).

```html
<iframe src="https://nohemia.com/fr/widgets/lune/clair-m/"
        width="300" height="210" loading="lazy"
        title="Calendrier lunaire" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/fr/lune/" rel="nofollow">Calendrier lunaire par Nohemia</a>
</p>
```

Ta drobna linijka z podziękowaniem to jedyne, o co prosimy. Jest opcjonalna: możesz ją zmienić lub usunąć, a widżet i tak będzie działać dokładnie tak samo.

---

## Widżety

| Widżet | `type` | Opis | Rozmiary |
|--------|--------|------|----------|
| Księżyc dziś | `lune` | Faza, znak i najbliższa pełnia | `s` (220x140), `m` (300x210) |
| Niebo dziś | `ciel` | Słońce i Księżyc według znaku, aktualna faza | `s` (230x150), `m` (300x200) |

Każdy `type` dostępny jest w dwóch motywach (`clair` / `sombre`) i dwóch rozmiarach (`s` / `m`). Wzorzec adresu URL to:

```
https://nohemia.com/fr/widgets/{type}/{theme}-{size}/
```

Kolejne widżety są w drodze: odliczanie do pełni, dzienny horoskop według znaku, trwające retrogradacje.

---

## Przykłady dla frameworków

### WordPress
Dodaj blok **Custom HTML** (lub użyj zakładki *Tekst* w edytorze klasycznym) i wklej fragment z sekcji Szybki start. Żadna wtyczka nie jest potrzebna.

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
Umieść element **Embed** (Webflow) lub blok **Code** (Squarespace) i wklej fragment z sekcji Szybki start.

---

## Komponent webowy (npm)

Jeśli wolisz znacznik niż iframe, zainstaluj malutki komponent webowy (cienką nakładkę bez zależności):

```bash
npm i @nohemia/widgets
```

```html
<script type="module">import '@nohemia/widgets'</script>

<nohemia-widget type="lune" theme="clair" size="m"></nohemia-widget>
<nohemia-widget type="ciel" theme="sombre" size="s"></nohemia-widget>
```

Albo wczytaj go prosto z CDN, bez etapu budowania:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="lune"></nohemia-widget>
```

Atrybuty: `type` (`lune` | `ciel`), `theme` (`clair` | `sombre`), `size` (`s` | `m`). Komponent po prostu renderuje oficjalny iframe, więc dane i stylizacja pozostają zsynchronizowane z nohemia.com.

---

## Dane i świeżość

Nic nie jest wpisywane ręcznie. Fazy, znaki i godziny pochodzą z prawdziwej efemerydy astronomicznej ([astronomy-engine](https://github.com/cosinekitty/astronomy), MIT), przeliczanej co noc. Godziny podawane są w strefie Europe/Paris, co do minuty. Te same dane zasilają pełny [kalendarz księżycowy na nohemia.com](https://nohemia.com/fr/lune/calendrier-pleines-lunes/).

Możesz też odczytać surowy JSON, jeśli chcesz zbudować coś własnego:
`https://nohemia.com/widgets/lune/data.json` (dzisiejsza faza, najbliższa pełnia i nów, dziesięć nadchodzących lunacji).

---

## Dlaczego te widżety

- **Darmowe, na zawsze.** Bez konta, bez klucza API, bez limitów zapytań.
- **Lekkie i bezpieczne.** Izolowany iframe: nigdy nie czyta twojej strony, nie ustawia żadnych ciasteczek i nie spowalnia witryny.
- **Redakcyjny design.** Ciepły, stonowany, w stylu Nohemia. Motyw jasny i ciemny.
- **Uczciwe, prawdziwe dane.** Autentyczna efemeryda, a nie zaszyta na sztywno tabela.
- **Czyste pod kątem prywatności.** Zero śledzenia, zgodne z RODO z samej swojej natury.

---

## Linki

- Strona: [nohemia.com](https://nohemia.com/fr/) · Galeria widżetów: [nohemia.com/fr/widgets](https://nohemia.com/fr/widgets/)
- Autorka: [Jade Nohemia](https://nohemia.com/fr/auteur/jade/)
- Zgłoszenia i pomysły: [github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## Licencja

[MIT](./LICENSE) © Jade Nohemia / Nohemia. Używaj ich gdziekolwiek, także komercyjnie. Link zwrotny do [nohemia.com](https://nohemia.com/fr/) jest mile widziany, ale nigdy nie jest wymagany.
