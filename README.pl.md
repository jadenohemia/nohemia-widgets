# Nohemia Widgets

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**Darmowe, gotowe do osadzenia widżety astrologiczne i księżycowe na każdą stronę.** Prawdziwe dane efemeryd, odświeżane co noc, bez konta, bez śledzenia, bez potrzeby JavaScriptu. Wklejasz jedną linijkę HTML i gotowe.

Tworzone i utrzymywane przez [Jade Nohemia](https://nohemia.com/pl/auteur/jade/) w **[nohemia.com](https://nohemia.com/pl/)**.
Galeria i podglądy na żywo: **[nohemia.com/pl/widgets](https://nohemia.com/pl/widgets/)**.

> Des widgets d'astrologie gratuits pour ton site. La lune du jour, le ciel du moment : un petit cadre
> soigné à coller en deux copier-coller, recalculé chaque nuit à partir d'une éphéméride réelle.

---

## Szybki start (czysty HTML)

Wklej to w dowolnym miejscu na stronie. Działa na każdej witrynie obsługującej HTML (WordPress, Wix, Squarespace, Webflow, Ghost, Shopify, strona statyczna...).

```html
<iframe src="https://nohemia.com/pl/widgets/ksiezyc/jasny-m/"
        width="300" height="210" loading="lazy"
        title="Calendrier lunaire" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/pl/" rel="nofollow">Calendrier lunaire par Nohemia</a>
</p>
```

Ta drobna linijka z podziękowaniem to jedyne, o co prosimy. Jest opcjonalna: możesz ją zmienić lub usunąć, a widżet i tak będzie działać dokładnie tak samo.

---

## Widżety

| Widżet | `type` | Opis | Rozmiary |
|--------|--------|------|----------|
| Księżyc dziś | `moon` | Faza, znak i najbliższa pełnia | `s` (220x140), `m` (300x210) |
| Niebo dziś | `sky` | Słońce i Księżyc według znaku, aktualna faza | `s` (230x150), `m` (300x200) |

Każdy `type` dostępny jest w dwóch motywach (`light` / `dark`) i dwóch rozmiarach (`s` / `m`). Wzorzec adresu URL to:

```
https://nohemia.com/pl/widgets/{type}/{theme}-{size}/
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
        src="https://nohemia.com/pl/widgets/ksiezyc/jasny-m/"
        width={300} height={210} loading="lazy"
        title="Calendrier lunaire"
        style={{ border: 0, borderRadius: 12, maxWidth: '100%' }}
      />
      <p style={{ font: '12px/1.4 system-ui, sans-serif', textAlign: 'center', margin: '6px 0 0' }}>
        <a href="https://nohemia.com/pl/" rel="nofollow">Calendrier lunaire par Nohemia</a>
      </p>
    </>
  )
}
```

### Vue
```vue
<template>
  <iframe src="https://nohemia.com/pl/widgets/niebo/ciemny-m/"
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

<nohemia-widget type="moon" locale="pl" theme="light" size="m"></nohemia-widget>
<nohemia-widget type="sky" locale="pl" theme="dark" size="s"></nohemia-widget>
<nohemia-widget type="moon" locale="pl" tz="tokyo"></nohemia-widget>
```

Albo wczytaj go prosto z CDN, bez etapu budowania:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="moon" locale="pl"></nohemia-widget>
```

Atrybuty: `type` (`moon` | `sky`), `theme` (`light` | `dark`), `size` (`s` | `m`), `tz` (tylko `moon`, patrz niżej). Komponent po prostu renderuje oficjalny iframe, więc dane i stylizacja pozostają zsynchronizowane z nohemia.com.

### Strefa czasowa (`tz`)

Widżet księżyca pokazuje godzinę najbliższej pełni. Domyślnie podajemy ją w strefie **Europe/Paris**. W widżecie `moon` możesz przestawić ten zegar na inne miasto za pomocą atrybutu `tz`. Dozwolone wartości: `london`, `new-york`, `los-angeles`, `sao-paulo`, `istanbul`, `seoul`, `tokyo`. Pominięcie atrybutu (lub dowolna inna wartość) zostawia domyślny czas paryski. Atrybut nie ma żadnego wpływu na widżet `sky` (który nie pokazuje godziny).

```html
<nohemia-widget type="moon" locale="pl" tz="tokyo"></nohemia-widget>
```

Działa to też przy ręcznym budowaniu adresu URL: dopisz fragment strefy do segmentu `{theme}-{size}`, na przykład `https://nohemia.com/pl/widgets/ksiezyc/jasny-m-tokyo/`.

---

## Dane i świeżość

Nic nie jest wpisywane ręcznie. Fazy, znaki i godziny pochodzą z prawdziwej efemerydy astronomicznej ([astronomy-engine](https://github.com/cosinekitty/astronomy), MIT), przeliczanej co noc. Godziny podawane są domyślnie w strefie Europe/Paris, co do minuty (w widżecie księżyca zegar najbliższej pełni można przestawić na inną strefę za pomocą atrybutu `tz`). Te same dane zasilają pełny [kalendarz księżycowy na nohemia.com](https://nohemia.com/pl/calendrier-pleines-lunes/).

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

- Strona: [nohemia.com](https://nohemia.com/pl/) · Galeria widżetów: [nohemia.com/pl/widgets](https://nohemia.com/pl/widgets/)
- Autorka: [Jade Nohemia](https://nohemia.com/pl/auteur/jade/)
- Zgłoszenia i pomysły: [github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## Licencja

[MIT](./LICENSE) © Jade Nohemia / Nohemia. Używaj ich gdziekolwiek, także komercyjnie. Link zwrotny do [nohemia.com](https://nohemia.com/pl/) jest mile widziany, ale nigdy nie jest wymagany.
