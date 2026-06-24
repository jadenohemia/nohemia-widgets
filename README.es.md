# Nohemia Widgets

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**Widgets gratuitos e integrables de astrología y luna para cualquier web.** Datos de efemérides reales, actualizados cada
noche, sin cuenta, sin rastreo y sin necesidad de JavaScript. Pega una línea de HTML y listo.

Creado y mantenido por [Jade Nohemia](https://nohemia.com/es/auteur/jade/) en **[nohemia.com](https://nohemia.com/es/)**.
Galería y vistas previas en directo: **[nohemia.com/es/widgets](https://nohemia.com/es/widgets/)**.

> Des widgets d'astrologie gratuits pour ton site. La lune du jour, le ciel du moment : un petit cadre
> soigné à coller en deux copier-coller, recalculé chaque nuit à partir d'une éphéméride réelle.

---

## Inicio rápido (HTML sencillo)

Pega esto en cualquier parte de tu página. Funciona en cualquier sitio que admita HTML (WordPress, Wix, Squarespace,
Webflow, Ghost, Shopify, una página estática...).

```html
<iframe src="https://nohemia.com/es/widgets/luna/claro-m/"
        width="300" height="210" loading="lazy"
        title="Calendrier lunaire" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/es/" rel="nofollow">Calendrier lunaire par Nohemia</a>
</p>
```

Esa pequeña línea de crédito es el único agradecimiento que te pedimos. Es opcional: puedes editarla o quitarla, y el
widget seguirá funcionando exactamente igual.

---

## Widgets

| Widget | `type` | Descripción | Tamaños |
|--------|--------|-------------|-------|
| La luna hoy | `moon` | Fase, signo y próxima luna llena | `s` (220x140), `m` (300x210) |
| El cielo hoy | `sky` | Sol y Luna por signo, fase actual | `s` (230x150), `m` (300x200) |

Cada `type` viene en dos temas (`light` / `dark`) y dos tamaños (`s` / `m`). El patrón de la URL es:

```
https://nohemia.com/es/widgets/{type}/{theme}-{size}/
```

Pronto llegarán más widgets: cuenta atrás para la luna llena, horóscopo diario por signo y retrógrados en curso.

---

## Ejemplos por framework

### WordPress
Añade un bloque **HTML personalizado** (o usa la pestaña *Texto* del editor clásico) y pega el fragmento de Inicio rápido.
No hace falta ningún plugin.

### React / Next.js
```jsx
export function MoonWidget() {
  return (
    <>
      <iframe
        src="https://nohemia.com/es/widgets/luna/claro-m/"
        width={300} height={210} loading="lazy"
        title="Calendrier lunaire"
        style={{ border: 0, borderRadius: 12, maxWidth: '100%' }}
      />
      <p style={{ font: '12px/1.4 system-ui, sans-serif', textAlign: 'center', margin: '6px 0 0' }}>
        <a href="https://nohemia.com/es/" rel="nofollow">Calendrier lunaire par Nohemia</a>
      </p>
    </>
  )
}
```

### Vue
```vue
<template>
  <iframe src="https://nohemia.com/es/widgets/cielo/oscuro-m/"
          width="300" height="200" loading="lazy" title="Le ciel du jour"
          style="border:0;border-radius:12px;max-width:100%" />
</template>
```

### Webflow / Squarespace
Coloca un elemento **Embed** (Webflow) o un bloque **Code** (Squarespace) y pega el fragmento de Inicio rápido.

---

## Web component (npm)

Si prefieres una etiqueta antes que un iframe, instala el pequeño web component (un envoltorio ligero y sin dependencias):

```bash
npm i @nohemia/widgets
```

```html
<script type="module">import '@nohemia/widgets'</script>

<nohemia-widget type="moon" locale="es" theme="light" size="m"></nohemia-widget>
<nohemia-widget type="sky" locale="es" theme="dark" size="s"></nohemia-widget>
<nohemia-widget type="moon" locale="es" tz="tokyo"></nohemia-widget>
```

O cárgalo directamente desde un CDN, sin paso de compilación:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="moon" locale="es"></nohemia-widget>
```

Atributos: `type` (`moon` | `sky`), `theme` (`light` | `dark`), `size` (`s` | `m`), `tz` (solo para
`moon`, ver más abajo). El componente se limita a renderizar el iframe oficial, así que los datos y el
estilo se mantienen sincronizados con nohemia.com.

### Zona horaria (`tz`)

El widget de la luna muestra la hora de la próxima luna llena. De forma predeterminada se indica en la
zona **Europe/Paris**. En el widget `moon` puedes cambiar ese reloj a otra ciudad con el atributo `tz`.
Valores admitidos: `london`, `new-york`, `los-angeles`, `sao-paulo`, `istanbul`, `seoul`, `tokyo`. Si lo
omites (o usas cualquier otro valor), se mantiene la hora de París, que es la predeterminada. No tiene
ningún efecto en el widget `sky` (que no muestra ninguna hora).

```html
<nohemia-widget type="moon" locale="es" tz="tokyo"></nohemia-widget>
```

También puedes construir la URL a mano: añade el slug de la zona al segmento `{theme}-{size}`, por
ejemplo `https://nohemia.com/es/widgets/luna/claro-m-tokyo/`.

---

## Datos y actualización

Nada está escrito a mano. Las fases, los signos y las horas provienen de una efeméride astronómica real
([astronomy-engine](https://github.com/cosinekitty/astronomy), MIT), recalculada cada noche. Las horas se
indican en Europe/Paris de forma predeterminada, al minuto (el widget de la luna puede cambiar el reloj
de la próxima luna llena a otra zona con el atributo `tz`). Los mismos datos alimentan el
[calendario lunar completo en nohemia.com](https://nohemia.com/es/calendrier-pleines-lunes/).

También puedes leer el JSON en bruto si quieres crear el tuyo propio:
`https://nohemia.com/widgets/lune/data.json` (la fase de hoy, la próxima luna llena y luna nueva, y las diez próximas lunaciones).

---

## Por qué estos widgets

- **Gratis, para siempre.** Sin cuenta, sin clave de API, sin límite de uso.
- **Ligeros y seguros.** Un iframe aislado: nunca lee tu página, no instala ninguna cookie y no ralentiza tu sitio.
- **Diseño editorial.** Cálido, sobrio, al estilo Nohemia. Temas claro y oscuro.
- **Datos honestos y reales.** Una efeméride genuina, no una tabla escrita a mano.
- **Respetuosos con la privacidad.** Cero rastreo, conformes con el RGPD por diseño.

---

## Enlaces

- Sitio: [nohemia.com](https://nohemia.com/es/) · Galería de widgets: [nohemia.com/es/widgets](https://nohemia.com/es/widgets/)
- Autora: [Jade Nohemia](https://nohemia.com/es/auteur/jade/)
- Incidencias e ideas: [github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## Licencia

[MIT](./LICENSE) © Jade Nohemia / Nohemia. Úsalos donde quieras, incluso con fines comerciales. Un enlace de vuelta a
[nohemia.com](https://nohemia.com/es/) se agradece, pero nunca es obligatorio.
