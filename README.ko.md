# Nohemia Widgets

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**모든 웹사이트에 임베드할 수 있는 무료 점성술 및 달 위젯.** 실제 천문력 데이터를 매일 밤 갱신하며, 계정도, 추적도, JavaScript도 필요 없습니다. HTML 한 줄만 붙여 넣으면 끝입니다.

[Jade Nohemia](https://nohemia.com/en/auteur/jade/)가 **[nohemia.com](https://nohemia.com/en/)**에서 제작하고 관리합니다.
갤러리와 실시간 미리보기: **[nohemia.com/en/widgets](https://nohemia.com/en/widgets/)**.

> Des widgets d'astrologie gratuits pour ton site. La lune du jour, le ciel du moment : un petit cadre
> soigné à coller en deux copier-coller, recalculé chaque nuit à partir d'une éphéméride réelle.

---

## Quick start (plain HTML)

페이지 어디에든 아래 코드를 붙여 넣으세요. HTML을 허용하는 사이트라면 어디서나 작동합니다 (WordPress, Wix, Squarespace, Webflow, Ghost, Shopify, 정적 페이지 등).

```html
<iframe src="https://nohemia.com/en/widgets/lune/clair-m/"
        width="300" height="210" loading="lazy"
        title="Calendrier lunaire" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/en/lune/" rel="nofollow">Calendrier lunaire par Nohemia</a>
</p>
```

저희가 부탁드리는 유일한 보답은 이 작은 출처 표시 한 줄입니다. 다만 필수는 아닙니다. 직접 수정하거나 삭제하셔도 위젯은 똑같이 잘 작동합니다.

---

## Widgets

| Widget | `type` | 설명 | 크기 |
|--------|--------|------|------|
| 오늘의 달 | `lune` | 위상, 별자리, 다음 보름달 | `s` (220x140), `m` (300x210) |
| 오늘의 하늘 | `ciel` | 별자리별 태양과 달, 현재 위상 | `s` (230x150), `m` (300x200) |

각 `type`은 두 가지 테마(`clair` / `sombre`)와 두 가지 크기(`s` / `m`)로 제공됩니다. URL 형식은 다음과 같습니다.

```
https://nohemia.com/en/widgets/{type}/{theme}-{size}/
```

앞으로 더 많은 위젯이 추가될 예정입니다. 보름달 카운트다운, 별자리별 일일 운세, 진행 중인 역행 등이 준비되어 있습니다.

---

## Framework examples

### WordPress
**사용자 정의 HTML** 블록을 추가하거나 (클래식 편집기의 *텍스트* 탭을 사용해도 됩니다) Quick start 코드를 붙여 넣으세요. 플러그인은 필요 없습니다.

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
**Embed** 요소(Webflow)나 **Code** 블록(Squarespace)을 끌어다 놓고 Quick start 코드를 붙여 넣으세요.

---

## Web component (npm)

iframe보다 태그 방식을 선호한다면, 가벼운 웹 컴포넌트(의존성 없는 얇은 래퍼)를 설치하세요.

```bash
npm i @nohemia/widgets
```

```html
<script type="module">import '@nohemia/widgets'</script>

<nohemia-widget type="lune" theme="clair" size="m"></nohemia-widget>
<nohemia-widget type="ciel" theme="sombre" size="s"></nohemia-widget>
```

또는 빌드 과정 없이 CDN에서 바로 불러올 수도 있습니다.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="lune"></nohemia-widget>
```

속성: `type` (`lune` | `ciel`), `theme` (`clair` | `sombre`), `size` (`s` | `m`). 이 컴포넌트는 공식 iframe을 그대로 렌더링하므로, 데이터와 스타일이 nohemia.com과 항상 일치합니다.

---

## Data & freshness

손으로 입력하는 값은 하나도 없습니다. 위상, 별자리, 시각은 실제 천문력([astronomy-engine](https://github.com/cosinekitty/astronomy), MIT)에서 가져오며, 매일 밤 다시 계산됩니다. 시각은 Europe/Paris 기준으로 분 단위까지 제공됩니다. 동일한 데이터가 [nohemia.com의 음력 달력](https://nohemia.com/en/lune/calendrier-pleines-lunes/) 전체를 구동합니다.

직접 무언가를 만들고 싶다면 원본 JSON도 읽을 수 있습니다.
`https://nohemia.com/widgets/lune/data.json` (오늘의 위상, 다음 보름달과 그믐달, 다가오는 열 번의 삭망월).

---

## Why these widgets

- **영원히 무료.** 계정도, API 키도, 사용량 제한도 없습니다.
- **가볍고 안전합니다.** 샌드박스 처리된 iframe이라 페이지를 읽지 않고, 쿠키를 설정하지 않으며, 사이트 속도를 늦추지 않습니다.
- **에디토리얼한 디자인.** Nohemia 특유의 따뜻하고 절제된 스타일. 밝은 테마와 어두운 테마를 모두 지원합니다.
- **정직한 실제 데이터.** 하드코딩된 표가 아니라 진짜 천문력입니다.
- **프라이버시 친화적.** 추적이 전혀 없으며, 설계 단계부터 GDPR을 준수합니다.

---

## Links

- 사이트: [nohemia.com](https://nohemia.com/en/) · 위젯 갤러리: [nohemia.com/en/widgets](https://nohemia.com/en/widgets/)
- 제작자: [Jade Nohemia](https://nohemia.com/en/auteur/jade/)
- 문의 및 아이디어: [github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## License

[MIT](./LICENSE) © Jade Nohemia / Nohemia. 상업적 용도를 포함해 어디서나 자유롭게 사용하세요. [nohemia.com](https://nohemia.com/en/)으로의 링크는 환영하지만 절대 필수는 아닙니다.
