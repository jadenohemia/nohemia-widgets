# Nohemia Widgets

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**Widgets gratuitos e incorporáveis de astrologia e lua para qualquer site.** Dados de efeméride reais, atualizados toda
noite, sem conta, sem rastreamento, sem necessidade de JavaScript. É só colar uma linha de HTML e pronto.

Criado e mantido por [Jade Nohemia](https://nohemia.com/pt/auteur/jade/) em **[nohemia.com](https://nohemia.com/pt/)**.
Galeria e prévias ao vivo: **[nohemia.com/pt/widgets](https://nohemia.com/pt/widgets/)**.

> Des widgets d'astrologie gratuits pour ton site. La lune du jour, le ciel du moment : un petit cadre
> soigné à coller en deux copier-coller, recalculé chaque nuit à partir d'une éphéméride réelle.

---

## Quick start (HTML puro)

Cole isto em qualquer lugar da sua página. Funciona em qualquer site que aceite HTML (WordPress, Wix, Squarespace,
Webflow, Ghost, Shopify, uma página estática...).

```html
<iframe src="https://nohemia.com/pt/widgets/lua/claro-m/"
        width="300" height="210" loading="lazy"
        title="Calendrier lunaire" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/pt/" rel="nofollow">Calendrier lunaire par Nohemia</a>
</p>
```

A pequena linha de crédito é o único agradecimento que pedimos. Ela é opcional: você pode editá-la ou removê-la, que o
widget continua funcionando exatamente igual.

---

## Widgets

| Widget | `type` | Descrição | Tamanhos |
|--------|--------|-------------|-------|
| Lua hoje | `moon` | Fase, signo e próxima lua cheia | `s` (220x140), `m` (300x210) |
| Céu hoje | `sky` | Sol e Lua por signo, fase atual | `s` (230x150), `m` (300x200) |

Cada `type` vem em dois temas (`light` / `dark`) e dois tamanhos (`s` / `m`). O padrão da URL é:

```
https://nohemia.com/pt/widgets/{type}/{theme}-{size}/
```

Mais widgets estão a caminho: contagem regressiva para a lua cheia, horóscopo diário por signo, retrógrados em curso.

---

## Exemplos por framework

### WordPress
Adicione um bloco **HTML personalizado** (ou use a aba *Texto* do editor Clássico) e cole o trecho do Quick start.
Nenhum plugin é necessário.

### React / Next.js
```jsx
export function MoonWidget() {
  return (
    <>
      <iframe
        src="https://nohemia.com/pt/widgets/lua/claro-m/"
        width={300} height={210} loading="lazy"
        title="Calendrier lunaire"
        style={{ border: 0, borderRadius: 12, maxWidth: '100%' }}
      />
      <p style={{ font: '12px/1.4 system-ui, sans-serif', textAlign: 'center', margin: '6px 0 0' }}>
        <a href="https://nohemia.com/pt/" rel="nofollow">Calendrier lunaire par Nohemia</a>
      </p>
    </>
  )
}
```

### Vue
```vue
<template>
  <iframe src="https://nohemia.com/pt/widgets/ceu/escuro-m/"
          width="300" height="200" loading="lazy" title="Le ciel du jour"
          style="border:0;border-radius:12px;max-width:100%" />
</template>
```

### Webflow / Squarespace
Solte um elemento **Embed** (Webflow) ou um bloco **Code** (Squarespace) e cole o trecho do Quick start.

---

## Web component (npm)

Se você prefere uma tag em vez de um iframe, instale o pequeno web component (um wrapper enxuto e sem dependências):

```bash
npm i @nohemia/widgets
```

```html
<script type="module">import '@nohemia/widgets'</script>

<nohemia-widget type="moon" locale="pt" theme="light" size="m"></nohemia-widget>
<nohemia-widget type="sky" locale="pt" theme="dark" size="s"></nohemia-widget>
```

Ou carregue direto de um CDN, sem nenhuma etapa de build:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="moon" locale="pt"></nohemia-widget>
```

Atributos: `type` (`moon` | `sky`), `theme` (`light` | `dark`), `size` (`s` | `m`). O componente
apenas renderiza o iframe oficial, então os dados e o estilo permanecem sincronizados com o nohemia.com.

---

## Dados e atualização

Nada é digitado à mão. Fases, signos e horários vêm de uma efeméride astronômica real
([astronomy-engine](https://github.com/cosinekitty/astronomy), MIT), recalculada toda noite. Os horários são
dados em Europe/Paris, com precisão de minuto. Os mesmos dados alimentam o
[calendário lunar completo no nohemia.com](https://nohemia.com/pt/calendrier-pleines-lunes/).

Você também pode ler o JSON bruto se quiser construir o seu próprio:
`https://nohemia.com/widgets/lune/data.json` (fase de hoje, próxima lua cheia e nova, as dez próximas lunações).

---

## Por que esses widgets

- **Gratuitos, para sempre.** Sem conta, sem chave de API, sem limite de requisições.
- **Leves e seguros.** Um iframe em sandbox: ele nunca lê sua página, não define nenhum cookie e não deixa seu site mais lento.
- **Design editorial.** Acolhedor, sóbrio, no estilo Nohemia. Temas claro e escuro.
- **Dados honestos e reais.** Uma efeméride genuína, não uma tabela fixa no código.
- **Respeito à privacidade.** Zero rastreamento, em conformidade com a LGPD por construção.

---

## Links

- Site: [nohemia.com](https://nohemia.com/pt/) · Galeria de widgets: [nohemia.com/pt/widgets](https://nohemia.com/pt/widgets/)
- Autora: [Jade Nohemia](https://nohemia.com/pt/auteur/jade/)
- Problemas e ideias: [github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## Licença

[MIT](./LICENSE) © Jade Nohemia / Nohemia. Use-os em qualquer lugar, inclusive comercialmente. Um link de volta para
[nohemia.com](https://nohemia.com/pt/) é apreciado, mas nunca obrigatório.
