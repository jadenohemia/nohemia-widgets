# Nohemia Widgets

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**Des widgets d'astrologie et de lune gratuits, à intégrer sur n'importe quel site.** Données d'éphéméride réelles, recalculées chaque nuit, sans compte, sans pistage, sans JavaScript. Une ligne de HTML à coller, et c'est prêt.

Conçus et entretenus par [Jade Nohemia](https://nohemia.com/fr/auteur/jade/) sur **[nohemia.com](https://nohemia.com/fr/)**.
Galerie et aperçus en direct : **[nohemia.com/fr/widgets](https://nohemia.com/fr/widgets/)**.

> Des widgets d'astrologie gratuits pour ton site. La lune du jour, le ciel du moment : un petit cadre soigné à coller en deux copier-coller, recalculé chaque nuit à partir d'une éphéméride réelle.

---

## Démarrage rapide (HTML simple)

Collez ce code n'importe où dans votre page. Il fonctionne sur tous les sites qui acceptent du HTML (WordPress, Wix, Squarespace, Webflow, Ghost, Shopify, une page statique…).

```html
<iframe src="https://nohemia.com/fr/widgets/lune/clair-m/"
        width="300" height="210" loading="lazy"
        title="Calendrier lunaire" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/fr/" rel="nofollow">Calendrier lunaire par Nohemia</a>
</p>
```

Cette petite ligne de crédit est le seul remerciement que nous demandons. Elle reste facultative : vous pouvez la modifier ou la retirer, le widget fonctionne exactement de la même façon.

---

## Les widgets

| Widget | `type` | Description | Tailles |
|--------|--------|-------------|---------|
| La lune aujourd'hui | `moon` | Phase, signe et prochaine pleine lune | `s` (220x140), `m` (300x210) |
| Le ciel aujourd'hui | `sky` | Soleil et Lune par signe, phase actuelle | `s` (230x150), `m` (300x200) |

Chaque `type` est proposé en deux thèmes (`light` / `dark`) et deux tailles (`s` / `m`). Le motif d'URL est le suivant :

```
https://nohemia.com/fr/widgets/{type}/{theme}-{size}/
```

D'autres widgets arrivent : compte à rebours jusqu'à la pleine lune, horoscope quotidien par signe, rétrogradations en cours.

---

## Exemples par framework

### WordPress
Ajoutez un bloc **HTML personnalisé** (ou passez par l'onglet *Texte* de l'éditeur Classique) et collez l'extrait du Démarrage rapide. Aucune extension requise.

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
        <a href="https://nohemia.com/fr/" rel="nofollow">Calendrier lunaire par Nohemia</a>
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
Déposez un élément **Embed** (Webflow) ou un bloc **Code** (Squarespace), puis collez l'extrait du Démarrage rapide.

---

## Web component (npm)

Si vous préférez une balise à une iframe, installez le petit web component (un wrapper léger, sans dépendance) :

```bash
npm i @nohemia/widgets
```

```html
<script type="module">import '@nohemia/widgets'</script>

<nohemia-widget type="moon" locale="fr" theme="light" size="m"></nohemia-widget>
<nohemia-widget type="sky" locale="fr" theme="dark" size="s"></nohemia-widget>
```

Ou chargez-le directement depuis un CDN, sans étape de build :

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="moon" locale="fr"></nohemia-widget>
```

Attributs : `type` (`moon` | `sky`), `theme` (`light` | `dark`), `size` (`s` | `m`). Le composant se contente d'afficher l'iframe officielle : les données et le style restent donc synchronisés avec nohemia.com.

---

## Données et fraîcheur

Rien n'est saisi à la main. Les phases, les signes et les horaires proviennent d'une véritable éphéméride astronomique ([astronomy-engine](https://github.com/cosinekitty/astronomy), MIT), recalculée chaque nuit. Les horaires sont donnés en Europe/Paris, à la minute près. Ces mêmes données alimentent l'intégralité du [calendrier lunaire sur nohemia.com](https://nohemia.com/fr/calendrier-pleines-lunes/).

Vous pouvez aussi lire le JSON brut si vous voulez construire le vôtre :
`https://nohemia.com/widgets/lune/data.json` (la phase du jour, les prochaines pleine et nouvelle lunes, et les dix prochaines lunaisons).

---

## Pourquoi ces widgets

- **Gratuits, pour toujours.** Sans compte, sans clé d'API, sans limite de requêtes.
- **Légers et sûrs.** Une iframe isolée (sandbox) : elle ne lit jamais votre page, ne pose aucun cookie et ne ralentit pas votre site.
- **Un design éditorial.** Chaleureux, sobre, dans l'esprit Nohemia. Thèmes clair et sombre.
- **Des données réelles et honnêtes.** Une vraie éphéméride, pas une table figée en dur.
- **Respectueux de la vie privée.** Zéro pistage, conforme au RGPD par construction.

---

## Liens

- Site : [nohemia.com](https://nohemia.com/fr/) · Galerie des widgets : [nohemia.com/fr/widgets](https://nohemia.com/fr/widgets/)
- Autrice : [Jade Nohemia](https://nohemia.com/fr/auteur/jade/)
- Bugs et idées : [github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## Licence

[MIT](./LICENSE) © Jade Nohemia / Nohemia. Utilisez-les partout, y compris à des fins commerciales. Un lien de retour vers [nohemia.com](https://nohemia.com/fr/) est apprécié, mais jamais obligatoire.
